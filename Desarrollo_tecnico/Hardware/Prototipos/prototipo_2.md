# Prototipo 2 — XIAO ESP32-S3 + Wio-SX1262

> **Placa:**  XIAO ESP32-S3 + Wio-SX1262 (shield LoRa)
> **Estado:** funcional

## Componentes

### Nodo sensor

| Componente | Cantidad |
|---|---|
| XIAO ESP32-S3 | 1 |
| Wio-SX1262 (shield LoRa) | 1 |
| DS18B20 — sensor de temperatura | 1 |
| KY-026 — sensor de llama | 1 |
| Sensor de humo (digital 2-canales) | 1 |
| Resistencia 4.7kΩ (pull-up) | 1 |
| Protoboard chica | 1 |
| Cables dupont M-M | ~15 |
| Antena LoRa (u.FL) | 1 |
| Portapilas 18650 + pila + TP4056 | 1 c/u |
| Cable USB-C | 1 |

### Receptor

| Componente | Cantidad |
|---|---|
| XIAO ESP32-S3 | 1 |
| Wio-SX1262 (shield LoRa) | 1 |
| Antena LoRa (u.FL) | 1 |
| Cable USB-C | 1 |

## Cableado / Pinout

### Stack físico

El Wio-SX1262 se acopla como shield apilado sobre el XIAO ESP32-S3:

```
XIAO ESP32-S3
┌──────────┐
│  pines   ├─────┐
│  macho   │     │
└──────────┘     │
            ┌────┴──────────┐
            │ Wio-SX1262    │
            │ (shield LoRa) │
            └───────────────┘
```

### Mapa de pines del XIAO ESP32-S3

| Pin | Label | GPIO | Uso |
|---|---|---|---|
| 1 | D0 | GPIO1 | — |
| 2 | D1 | GPIO2 | Humo — canal B (digital) |
| 3 | D2 | GPIO3 | DS18B20 DATA |
| 4 | D3 | GPIO4 | KY-026 D0 (digital) |
| 5 | D4 | GPIO5 | LoRa PWR_EN |
| 6 | D5 | GPIO6 | Humo — canal A (digital) |
| 7 | D6 | GPIO43 | TX (Serial debug) |
| 8 | D7 | GPIO44 | RX (Serial debug) |
| 9 | D8 | GPIO7 | SPI SCK → Wio-SX1262 |
| 10 | D9 | GPIO8 | SPI MISO → Wio-SX1262 |
| 11 | D10 | GPIO9 | SPI MOSI → Wio-SX1262 |
| 12 | 3.3V | — | Alimentación sensores |
| 13 | GND | — | GND común |
| 14 | 5V | — | Entrada USB o BAT |

### Pines del Wio-SX1262 (a través del shield)

| Señal SX1262 | GPIO XIAO |
|---|---|
| SCK | GPIO7 (D8) |
| MISO | GPIO8 (D9) |
| MOSI | GPIO9 (D10) |
| NSS (CS) | GPIO41 (B2B) |
| DIO1 | GPIO39 (B2B) |
| BUSY | GPIO40 (B2B) |
| RESET | GPIO42 (B2B) |
| ANT_SW | GPIO38 (B2B) |
| PWR_EN | GPIO5 (D4) |

### Nodo sensor — Conexiones

#### DS18B20 — Temperatura

| DS18B20 | XIAO |
|---|---|
| VCC (rojo) | 3.3V |
| GND (negro) | GND |
| DATA (amarillo) | GPIO3 (D2) — con pull-up 4.7kΩ a 3.3V |

#### KY-026 — Llama (solo salida digital)

| KY-026 | XIAO |
|---|---|
| VCC | 3.3V |
| GND | GND |
| D0 (digital) | GPIO4 (D3) |

El firmware lee la patita D0 del KY-026 con entrada digital pull-up. La salida analógica A0 no se utiliza.

#### Sensor de humo (2 canales digitales)

| Sensor | XIAO |
|---|---|
| VCC | 3.3V |
| GND | GND |
| Canal A | GPIO6 (D5) |
| Canal B | GPIO2 (D1) |

El firmware lee ambos canales como digitales con pull-up. Si `canalA != canalB` activa la bandera de humo.

### Diagrama del nodo sensor

```
┌────────────────────────────────────────────┐
│           XIAO ESP32-S3 + Wio-SX1262       │
│                                            │
│  GPIO2 (D1)  ←── Humo canal B (digital)   │
│  GPIO3 (D2)  ←── DS18B20 DATA + 4.7kΩ→3V3 │
│  GPIO4 (D3)  ←── KY-026 D0 (digital)      │
│  GPIO5 (D4)  ── LoRa PWR_EN               │
│  GPIO6 (D5)  ←── Humo canal A (digital)    │
│  GPIO43(D6)  ── TX (Serial a PC)          │
│  GPIO44(D7)  ── RX (Serial a PC)          │
│                                            │
│  GPIO7 (D8)  ── SCK ─┐                    │
│  GPIO8 (D9)  ── MISO │ Wio-SX1262         │
│  GPIO9 (D10) ── MOSI │ (shield apilado)   │
│  GPIO41      ── NSS  ┘                    │
│  GPIO39      ── DIO1                      │
│  GPIO40      ── BUSY                      │
│  GPIO42      ── RESET                     │
│  GPIO38      ── ANT_SW                    │
│                                            │
│  3.3V ── a VCC sensores                    │
│  GND  ── común                             │
└────────────────────────────────────────────┘
```

### Resumen de pines (nodo sensor)

| GPIO | Componente |
|---|---|
| 2 (D1) | Humo — canal B digital |
| 3 (D2) | DS18B20 DATA |
| 4 (D3) | KY-026 D0 digital |
| 5 (D4) | LoRa PWR_EN |
| 6 (D5) | Humo — canal A digital |
| 43 (D6) | TX debug |
| 44 (D7) | RX debug |

### Receptor

El receptor no requiere sensores ni periféricos. Solo el stack XIAO + Wio-SX1262 con antena. Se conecta al servidor por WiFi mediante HTTP POST (firmware `gateway/main.cpp`).

## Ensamblaje

### 1. Armado del stack (XIAO + Wio-SX1262)

1. Agarrá el Wio-SX1262 (plaqueta con chip LoRa y conector u.FL para antena)
2. Alinealo con el XIAO: los pines del XIAO entran en los headers hembra del Wio
3. Presioná suavemente hasta que calce parejo
4. Conectá la antena LoRa al conector u.FL del Wio
5. Conectá USB-C al XIAO — debería prenderse el LED de carga

### 2. Conexión del DS18B20 (temperatura)

1. Conectá VCC (rojo) a 3.3V del XIAO
2. Conectá GND (negro) a GND
3. Conectá DATA (amarillo) a GPIO3 (D2)
4. Colocá la resistencia 4.7kΩ entre DATA y 3.3V (pull-up obligatorio)

### 3. Conexión del KY-026 (llama)

1. Conectá VCC a 3.3V
2. Conectá GND a GND
3. Conectá D0 (digital) a GPIO4 (D3)

La salida analógica A0 queda sin conectar — el firmware solo usa la entrada digital.

### 4. Conexión del sensor de humo

1. Conectá VCC a 3.3V
2. Conectá GND a GND
3. Conectá canal A a GPIO6 (D5)
4. Conectá canal B a GPIO2 (D1)

### 5. Alimentación autónoma

```
18650 (+) ── TP4056 B+ ── TP4056 OUT+ ── XIAO 5V
18650 (-)  ── TP4056 B- ── TP4056 OUT- ── XIAO GND
```

Para desarrollo, usar USB-C directo.

### Checklist antes de energizar

- [ ] 3.3V y GND no están en corto en la protoboard
- [ ] Pull-up 4.7kΩ del DS18B20 está conectado
- [ ] Antena LoRa conectada al Wio-SX1262 (u.FL)
- [ ] Wio-SX1262 bien apilado sobre el XIAO

### Configuración en firmware (transmisor)

```cpp
#define PIN_DS18B20  3    // GPIO3 (D2)
#define PIN_KY026    4    // GPIO4 (D3)
#define PIN_HUMO_A   6    // GPIO6 (D5)
#define PIN_HUMO_B   2    // GPIO2 (D1)

#define LORA_CS     41
#define LORA_DIO1   39
#define LORA_RST    42
#define LORA_BUSY   40
#define LORA_ANT_SW 38
#define LORA_PWR_EN 5

#define LORA_SCK    7
#define LORA_MISO   8
#define LORA_MOSI   9

#define LORA_FREQ   915.0
#define LORA_SF     7
#define LORA_BW     125.0
#define LORA_CR     5
#define LORA_SYNC   0x12
#define LORA_POWER  22

#define POLL_MS     20
#define REPORTE_MS  5000

SX1262 radio = new Module(LORA_CS, LORA_DIO1, LORA_RST, LORA_BUSY);
```
