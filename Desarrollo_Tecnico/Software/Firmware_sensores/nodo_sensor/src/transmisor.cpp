#include <Arduino.h>
#include <OneWire.h>
#include <DallasTemperature.h>
#include <RadioLib.h>

#define PIN_DS18B20  3
#define PIN_KY026    4
#define PIN_HUMO_A   6
#define PIN_HUMO_B   2
#define NODE_ID      "nodo_xiao_01_fixed"
#define NODE_ID_NUM  0

#define LORA_CS     41
#define LORA_DIO1   39
#define LORA_RST    42
#define LORA_BUSY   40
#define LORA_ANT_SW 38
#define LORA_PWR_EN 5

#define LORA_SCK    7
#define LORA_MISO   8
#define LORA_MOSI   9

#define LORA_FREQ    915.0
#define LORA_SF      7
#define LORA_BW      125.0
#define LORA_CR      5
#define LORA_SYNC    0x12
#define LORA_POWER   22

#define POLL_MS      20
#define REPORTE_MS   5000
#define TIEMPO_CONV  750

struct __attribute__((packed)) Packet {
    uint8_t  nodeId;
    uint32_t uptime;
    float    temperatura;
    uint8_t  flama;
    uint8_t  humo;
};

OneWire oneWire(PIN_DS18B20);
DallasTemperature sensors(&oneWire);
SX1262 radio = new Module(LORA_CS, LORA_DIO1, LORA_RST, LORA_BUSY);

bool flamaFlag = false;
bool humoFlag = false;
float temperatura = DEVICE_DISCONNECTED_C;
unsigned long ultimoRequest = 0;

void initRadio() {
    pinMode(LORA_PWR_EN, OUTPUT);
    digitalWrite(LORA_PWR_EN, HIGH);
    delay(100);

    SPI.begin(LORA_SCK, LORA_MISO, LORA_MOSI, LORA_CS);

    pinMode(LORA_RST, OUTPUT);
    digitalWrite(LORA_RST, LOW);
    delay(10);
    digitalWrite(LORA_RST, HIGH);
    delay(100);

    pinMode(LORA_ANT_SW, OUTPUT);
    digitalWrite(LORA_ANT_SW, LOW);

    int state = radio.begin(LORA_FREQ, LORA_BW, LORA_SF, LORA_CR,
                            LORA_SYNC, LORA_POWER, 8, 1.6, false);

    Serial.print("{\"nodo\":\"" NODE_ID "\",\"lora_err\":");
    Serial.print(state);
    if (state == RADIOLIB_ERR_NONE) {
        radio.setDio2AsRfSwitch();
        Serial.println(",\"lora\":\"ok\"}");
    } else {
        Serial.println("}");
    }
}

void setup() {
    Serial.begin(115200);
    pinMode(PIN_KY026, INPUT_PULLUP);
    pinMode(PIN_HUMO_A, INPUT_PULLUP);
    pinMode(PIN_HUMO_B, INPUT_PULLUP);
    sensors.begin();
    sensors.setWaitForConversion(false);
    delay(100);
    if (sensors.getDeviceCount() == 0)
        Serial.println("{\"nodo\":\"" NODE_ID "\",\"error\":\"DS18B20 no detectado\"}");

    sensors.requestTemperatures();
    ultimoRequest = millis();

    initRadio();
}

void loop() {
    static unsigned long tPoll = 0, tReporte = 0;

    unsigned long now = millis();

    if (now - tPoll >= POLL_MS) {
        tPoll = now;
        int flame = digitalRead(PIN_KY026);
        int humoA = digitalRead(PIN_HUMO_A);
        int humoB = digitalRead(PIN_HUMO_B);
        if (flame == HIGH) flamaFlag = true;
        if (humoA != humoB) humoFlag = true;
    }

    if (now - ultimoRequest >= TIEMPO_CONV) {
        float raw = sensors.getTempCByIndex(0);
        if (raw > -55.0 && raw < 125.0)
            temperatura = raw;
        sensors.requestTemperatures();
        ultimoRequest = now;
    }

    if (now - tReporte >= REPORTE_MS) {
        tReporte = now;

        int hA = digitalRead(PIN_HUMO_A);
        int hB = digitalRead(PIN_HUMO_B);

        Serial.print("{\"nodo\":\"");
        Serial.print(NODE_ID);
        Serial.print("\",\"uptime\":");
        Serial.print(now / 1000);
        Serial.print(",\"temperatura\":");
        Serial.print(temperatura, 2);
        Serial.print(",\"flama\":");
        Serial.print(flamaFlag ? 1 : 0);
        Serial.print(",\"humo\":");
        Serial.print(humoFlag ? 1 : 0);
        Serial.print(",\"hA\":");
        Serial.print(hA);
        Serial.print(",\"hB\":");
        Serial.print(hB);

        Packet pkt;
        pkt.nodeId = NODE_ID_NUM;
        pkt.uptime = now / 1000;
        pkt.temperatura = temperatura;
        pkt.flama = flamaFlag ? 1 : 0;
        pkt.humo = humoFlag ? 1 : 0;

        int loraState = radio.transmit((uint8_t*)&pkt, sizeof(pkt));
        Serial.print(",\"lora_tx\":");
        Serial.print(loraState);
        Serial.println("}");

        flamaFlag = false;
        humoFlag = false;
    }
}
