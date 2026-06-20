/*
 * ESP32 Gateway — XIAO S3 + WIO-SX1262 (LoRa + WiFi)
 *
 * Placa: Seeed Studio XIAO ESP32S3 + Wio-SX1262 (conector B2B)
 * Pines SX1262 via B2B: NSS=41, DIO1=39, RST=42, BUSY=40, ANT_SW=38
 * SPI: SCK=7, MISO=8, MOSI=9
 *
 * Recibe un struct binario de 11 bytes del Nodo por LoRa
 * y lo envía como JSON al servidor por HTTP (WiFi).
 *
 * HTTP POST a http://<API_HOST>:<API_PORT>/api/eventos
 * Body: {"nodo":"nodo-xiao_01","temperatura":25.31,"flama":0,"humo":0,"tipo":"status"}
 */

#include <Arduino.h>
#include <WiFi.h>
#include <HTTPClient.h>
#include <RadioLib.h>
#include <ArduinoJson.h>

// --- WiFi ---
#define WIFI_SSID     "NODO"
#define WIFI_PASS     "12345678"

// --- Servidor API ---
#define API_HOST      "172.28.56.101"
#define API_PORT      3001
#define API_ENDPOINT  "/api/eventos"

// --- Configuración LoRa (B2B connector - XIAO ESP32S3 + Wio-SX1262 Kit) ---
#define LORA_CS     41    // NSS
#define LORA_DIO1   39    // IRQ
#define LORA_RST    42    // Reset
#define LORA_BUSY   40    // Busy
#define LORA_ANT_SW 38    // Antenna switch (DIO2)
#define LORA_PWR_EN 5     // Power enable para SX1262

#define LORA_SCK    7
#define LORA_MISO   8
#define LORA_MOSI   9

#define LORA_FREQ    915.0
#define LORA_SF      7
#define LORA_BW      125.0
#define LORA_CR      5
#define LORA_SYNC    0x12
#define LORA_POWER   22

// --- Mapeo nodeId uint8_t → string ---
const char* MAPA_NODOS[] = {
  "nodo-xiao_01", "nodo-xiao_02", "nodo-xiao_03", "nodo-xiao_04"
};
const int CANT_NODOS = 4;

// --- Struct del paquete LoRa (11 bytes) ---
struct __attribute__((packed)) Packet {
  uint8_t  nodeId;
  uint32_t uptime;
  float    temperatura;
  uint8_t  flama;
  uint8_t  humo;
};

// --- Modo simulación ---
#define MODO_SIMULACION  false

// --- Variables ISR-safe para recepción LoRa ---
volatile bool loraReceived = false;

// --- Forward declarations ---
void procesarPaquete(uint8_t* buf, size_t len, float rssi, float snr);
bool clasificarAlerta(float temp, bool humo, bool flama);
void enviarAlServidor(const char* nodoId, float temp, bool flama, bool humo, const char* tipo);
void onLoRaReceive();
void initRadio();
#if MODO_SIMULACION
  void generarSimulacion();
#endif

SX1262 radio = new Module(LORA_CS, LORA_DIO1, LORA_RST, LORA_BUSY);

#if MODO_SIMULACION
  unsigned long ultimoSimul = 0;
  int cicloSimul = 0;
#endif

// ============================================================

void setup() {
  Serial.begin(115200);
  delay(1000);

  Serial.println(F("[GW] Iniciando Gateway XIAO S3 + SX1262 (B2B)..."));

  // Power enable para SX1262
  pinMode(LORA_PWR_EN, OUTPUT);
  digitalWrite(LORA_PWR_EN, HIGH);
  delay(100);

  // SPI explícito con pines correctos
  SPI.begin(LORA_SCK, LORA_MISO, LORA_MOSI, LORA_CS);

  // Reset manual del SX1262
  pinMode(LORA_RST, OUTPUT);
  digitalWrite(LORA_RST, LOW);
  delay(10);
  digitalWrite(LORA_RST, HIGH);
  delay(100);

  // Antenna switch (DIO2 como RF switch)
  pinMode(LORA_ANT_SW, OUTPUT);
  digitalWrite(LORA_ANT_SW, LOW);

  // WiFi
  Serial.print(F("[GW] Conectando a WiFi "));
  Serial.print(WIFI_SSID);
  WiFi.begin(WIFI_SSID, WIFI_PASS);
  int intentos = 0;
  while (WiFi.status() != WL_CONNECTED && intentos < 40) {
    delay(500);
    Serial.print(F("."));
    intentos++;
  }
  if (WiFi.status() == WL_CONNECTED) {
    Serial.println();
    Serial.print(F("[GW] WiFi conectado. IP: "));
    Serial.println(WiFi.localIP());
  } else {
    Serial.println();
    Serial.println(F("[GW] ERROR: no se pudo conectar WiFi"));
  }

  // LoRa
  initRadio();
}

// ============================================================

void initRadio() {
  Serial.println(F("[GW] Inicializando SX1262..."));

  int state = radio.begin(
    LORA_FREQ, LORA_BW, LORA_SF, LORA_CR,
    LORA_SYNC, LORA_POWER, 8, 1.6, false
  );

  if (state != RADIOLIB_ERR_NONE) {
    Serial.print(F("[GW] Error LoRa: "));
    Serial.println(state);
    if (state == RADIOLIB_ERR_CHIP_NOT_FOUND) {
      Serial.println(F("[GW] SX1262 no responde - revisar conexion B2B y alimentacion"));
    }
    return;
  }

  // Configurar antenna switch via DIO2
  radio.setDio2AsRfSwitch();

  Serial.println(F("[GW] SX1262 listo!"));
  radio.setDio1Action(onLoRaReceive);
  radio.startReceive();

#if MODO_SIMULACION
  Serial.println(F("[GW] MODO SIMULACION"));
#else
  Serial.println(F("[GW] Esperando paquetes LoRa..."));
#endif
}

// ============================================================

void loop() {
  if (loraReceived) {
    loraReceived = false;

    uint8_t buf[64];
    size_t len = sizeof(buf);
    int state = radio.readData(buf, len);

    if (state == RADIOLIB_ERR_NONE) {
      float rssi = radio.getRSSI();
      float snr = radio.getSNR();
      procesarPaquete(buf, len, rssi, snr);
    } else {
      Serial.print(F("[GW] Error lectura LoRa: "));
      Serial.println(state);
    }

    radio.startReceive();
  }

#if MODO_SIMULACION
  if (millis() - ultimoSimul > 4000) {
    ultimoSimul = millis();
    generarSimulacion();
  }
#endif
}

// ============================================================

void IRAM_ATTR onLoRaReceive() {
  loraReceived = true;
}

// ============================================================

void procesarPaquete(uint8_t* buf, size_t len, float rssi, float snr) {
  if (len < sizeof(Packet)) {
    Serial.print(F("[GW] Paquete demasiado corto: "));
    Serial.println(len);
    return;
  }

  Packet pkt;
  memcpy(&pkt, buf, sizeof(Packet));

  if (pkt.nodeId >= CANT_NODOS) {
    Serial.print(F("[GW] nodeId desconocido: "));
    Serial.println(pkt.nodeId);
    return;
  }

  const char* nodoId = MAPA_NODOS[pkt.nodeId];
  float temp = pkt.temperatura;
  bool flama = pkt.flama > 0;
  bool humo = pkt.humo > 0;
  unsigned long uptimeNodo = pkt.uptime;

  const char* tipo = clasificarAlerta(temp, humo, flama) ? "alerta" : "status";

  enviarAlServidor(nodoId, temp, flama, humo, tipo);

  Serial.print(F("[GW] LoRa <- "));
  Serial.print(nodoId);
  Serial.print(F(" | "));
  Serial.print(temp);
  Serial.print(F("C | flama="));
  Serial.print(flama);
  Serial.print(F(" humo="));
  Serial.print(humo);
  Serial.print(F(" | uptime_nodo="));
  Serial.print(uptimeNodo);
  Serial.print(F("s | "));
  Serial.print(tipo);
  Serial.print(F(" | RSSI: "));
  Serial.print(rssi);
  Serial.print(F(" dBm | SNR: "));
  Serial.print(snr);
  Serial.println(F(" dB"));
}

// ============================================================

bool clasificarAlerta(float temp, bool humo, bool flama) {
  if (flama) return true;
  if (temp > 50.0) return true;
  if (humo) return true;
  return false;
}

// ============================================================

void enviarAlServidor(const char* nodoId, float temp, bool flama, bool humo, const char* tipo) {
  if (WiFi.status() != WL_CONNECTED) {
    Serial.println(F("[GW] Sin WiFi, no se puede enviar"));
    return;
  }

  HTTPClient http;
  char url[64];
  snprintf(url, sizeof(url), "http://%s:%d%s", API_HOST, API_PORT, API_ENDPOINT);

  http.begin(url);
  http.addHeader("Content-Type", "application/json");

  JsonDocument doc;
  doc["nodo"] = nodoId;
  doc["temperatura"] = temp;
  doc["flama"] = flama ? 1 : 0;
  doc["humo"] = humo ? 1 : 0;
  doc["tipo"] = tipo;

  String body;
  serializeJson(doc, body);

  int codigo = http.POST(body);

  if (codigo > 0) {
    Serial.print(F("[GW] HTTP POST "));
    Serial.print(url);
    Serial.print(F(" -> "));
    Serial.println(codigo);
  } else {
    Serial.print(F("[GW] Error HTTP POST: "));
    Serial.println(http.errorToString(codigo));
  }

  http.end();
}

// ============================================================

void enviarSerial(const char* nodoId, float temp, bool flama, bool humo, const char* tipo) {
  JsonDocument doc;
  doc["nodo"] = nodoId;
  doc["temperatura"] = temp;
  doc["flama"] = flama ? 1 : 0;
  doc["humo"] = humo ? 1 : 0;
  doc["tipo"] = tipo;

  serializeJson(doc, Serial);
  Serial.println();
}

// ============================================================

#if MODO_SIMULACION
void generarSimulacion() {
  Packet pkt;
  pkt.nodeId = cicloSimul % CANT_NODOS;
  pkt.uptime = millis() / 1000;
  pkt.temperatura = 28.0 + random(0, 100) / 10.0;
  pkt.flama = random(0, 100) < 4;
  pkt.humo = random(0, 100) < 10;

  bool esAlerta = random(0, 100) < 8;
  if (esAlerta) {
    pkt.temperatura = 48.0 + random(0, 80) / 10.0;
    pkt.flama = 1;
    pkt.humo = 1;
  }

  const char* nodoId = MAPA_NODOS[pkt.nodeId];
  float temp = pkt.temperatura;
  bool flama = pkt.flama > 0;
  bool humo = pkt.humo > 0;
  const char* tipo = esAlerta ? "alerta" : "status";

  enviarAlServidor(nodoId, temp, flama, humo, tipo);

  Serial.print(F("[GW] Simul <- "));
  Serial.print(nodoId);
  Serial.print(F(" | "));
  Serial.print(temp);
  Serial.print(F("C | flama="));
  Serial.print(flama);
  Serial.print(F(" humo="));
  Serial.print(humo);
  Serial.print(F(" | uptime="));
  Serial.print(pkt.uptime);
  Serial.print(F("s | "));
  Serial.println(tipo);

  cicloSimul++;
}
#endif
