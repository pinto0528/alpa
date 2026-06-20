# Prototipo semifinal — Plan de acción

> Documento creado el 2026-06-08. Última actualización: miércoles 10 de junio.
> **Corrección:** la visita a la facultad es el jueves 11, no el miércoles.

---

## Contexto

Pasamos a semifinales de EmprendeU. Hay que presentar un video con prototipo funcional
**antes del martes 16 de junio**.

Mañana jueves 11 tenemos oportunidad de llevar un prototipo a la facultad
para que un profesor de electrónica nos ayude.

---

## Stock de componentes

### Ya tenemos en mano

| Componente | Qty | Notas |
|---|---|---|
| ESP32 WROOM 32 WeMos LOLIN32 | 1 | Ideal para arrancar HOY |
| DS18B20 | 1 | Sensor temperatura (OneWire) |
| KY-026 | 1 | Sensor de llama (digital + analógico) |
| Protoboard | 1 | |
| Cables dupont | varios | |
| Portapilas 18650 | 2 | Para alimentación autónoma |
| Pilas 18650 | 2 | |
| TP4056 | 2 | Cargador/protector de LiPo — regula 3.7V a 5V |
| LEDs + resistencias | ? | No confirmado |

### Llegan hoy (miércoles 10)

| Componente | Qty | Notas |
|---|---|---|
| Seeed XIAO ESP32-S3 | 2 | |
| Wio-SX1262 (LoRa) | 2 | |
| Buzzer activo 5V | 2 | |
| Alarma humo Geneve 79.06.01 | 1 | Sensor de humo + buzzer 85dB. Aún no llegó |

### Llegan jueves 11 (>17hs)

| Componente | Qty | Notas |
|---|---|---|
| GP2Y1014AU0F | 1 | Sensor óptico de polvo/humo por IR. Reemplaza al MQ-2 |

---

---
## Dos prototipos: BOM completa

### Prototipo 1 — Básico (WeMos LOLIN32 como nodo sensor)

> Para probar sensores HOY y llevar mañana a la facultad. Comunicación por Serial/USB.
> Sin LoRa. Sin GP2Y1014 ni Geneve (a menos que lleguen a tiempo).

| Componente | Cant | ¿Lo tenés? | Notas |
|---|---|---|---|
| WeMos LOLIN32 | 1 | ✅ | |
| DS18B20 | 1 | ✅ | |
| KY-026 | 1 | ✅ | |
| LED 5mm (color indistinto) | 1 | ❓ Sin confirmar | |
| Resistencia 220 Ω | 1 | ⬆️ **A comprar** | Para el LED |
| Resistencia 4.7 kΩ | 1 | ⬆️ **A comprar** | Pull-up DS18B20 |
| Protoboard | 1 | ✅ | |
| Cables dupont M-M | ~15 | ✅ | |
| Cable USB micro | 1 | ❓ | Para alimentar y programar |
| **Puente opcional para TP4056:** | | | |
| TP4056 | 1 | ✅ | Solo para mostrar concepto |
| Portapilas 18650 | 1 | ✅ | |
| Pila 18650 | 1 | ✅ | |

#### Cableado Prototipo 1 — WeMos LOLIN32

```
WeMos LOLIN32         DS18B20
┌─────────────┐      ┌──────┐
│ 3.3V        ├──────┤ VCC  │
│ GND         ├──────┤ GND  │
│ GPIO22      ├──────┤ DATA │
└─────────────┘      └──┬───┘
                        │
                     ┌──┴──┐
                     │4.7kΩ│
                     └──┬──┘
                        │
                      3.3V

WeMos                 KY-026
┌─────────────┐      ┌──────┐
│ 3.3V        ├──────┤ VCC  │
│ GND         ├──────┤ GND  │
│ GPIO34      ├──────┤ A0   │
│ GPIO35      ├──────┤ D0   │ (opcional)
└─────────────┘      └──────┘

WeMos                 LED
┌─────────────┐      ┌──────┐
│ GPIO25      ├──┤220Ω├──▶├── GND
└─────────────┘

Alimentación: USB desde PC.
```

---

### Prototipo 2 — Avanzado (2 XIAO ESP32-S3 + LoRa)

> Nodo sensor + Receptor con comunicación inalámbrica LoRa. Incluye todos los sensores.
> Es el prototipo para el video de la semifinal.

#### Nodo sensor

| Componente | Cant | ¿Lo tenés? | Notas |
|---|---|---|---|
| XIAO ESP32-S3 | 1 | ⏳ Llega hoy | |
| Wio-SX1262 shield | 1 | ⏳ Llega hoy | LoRa |
| DS18B20 | 1 | ✅ | Temperatura |
| KY-026 | 1 | ✅ | Llama |
| GP2Y1014AU0F | 1 | ⏳ Jueves >17hs | Humo/partículas |
| Buzzer activo 5V | 1 | ⏳ Llega hoy | Alerta local |
| LED 5mm | 1 | ❓ Sin confirmar | Indicador |
| Resistencia 4.7 kΩ | 1 | ⬆️ **A comprar** | Pull-up DS18B20 |
| Resistencia 220 Ω | 1 | ⬆️ **A comprar** | LED |
| Resistencia 150 Ω | 1 | ⬆️ **A comprar** | GP2Y1014 LED control |
| Resistencia 10 kΩ | 1 | ⬆️ **A comprar** | GP2Y1014 pull-up Vo |
| Capacitor 220 µF 16V | 1 | ⬆️ **A comprar** | GP2Y1014 entre Vcc y GND |
| TP4056 | 1 | ✅ | Carga/protección batería |
| Portapilas 18650 | 1 | ✅ | |
| Pila 18650 | 1 | ✅ | |
| Protoboard | 1 | ✅ | (o 2 si hace falta) |
| Cables dupont | ~20 | ✅ | |

#### Receptor

| Componente | Cant | ¿Lo tenés? | Notas |
|---|---|---|---|
| XIAO ESP32-S3 | 1 | ⏳ Llega hoy | |
| Wio-SX1262 shield | 1 | ⏳ Llega hoy | LoRa |
| Buzzer activo 5V | 1 | ⏳ Llega hoy | Alarma de alerta |
| LED 5mm (rojo) | 1 | ❓ Sin confirmar | |
| Resistencia 220 Ω | 1 | ⬆️ **A comprar** | LED |
| Geneve 79.06.01 | 1 | ⏳ Llega hoy | Alarma sonora 85dB (opcional) |
| TP4056 | 1 | ✅ | |
| Portapilas 18650 | 1 | ✅ | |
| Pila 18650 | 1 | ✅ | |
| Cable USB | 1 | ❓ | Programación |

#### Cableado Prototipo 2 — XIAO ESP32-S3

Los pines **dependen del shield Wio-SX1262 acoplado**. Hay que confirmarlos mañana con el
profesor. Estimación tentativa:

```
XIAO ESP32-S3        DS18B20
┌──────────────┐    ┌──────┐
│ 3V3          ├────┤ VCC  │
│ GND          ├────┤ GND  │
│ D6 (GPIO6)   ├────┤ DATA │ (pin tentativo)
└──────────────┘    └──┬───┘
                       │
                    ┌──┴──┐
                    │4.7kΩ│
                    └──┬──┘
                       │
                     3V3

XIAO                 KY-026
┌──────────────┐    ┌──────┐
│ 3V3          ├────┤ VCC  │
│ GND          ├────┤ GND  │
│ D7 (GPIO7)   ├────┤ A0   │ (tentativo)
│ D8 (GPIO8)   ├────┤ D0   │ (tentativo, opcional)
└──────────────┘    └──────┘

XIAO                 GP2Y1014AU0F
┌──────────────┐    ┌──────────┐
│ 3V3          ├────┤ Vcc      │
│ GND          ├────┤ GND      │
│             │    │          │
│ Vcc ──┤220µF├── GND         │ (capacitor entre Vcc y GND)
│             │    │          │
│ D3 (GPIO3)  ├────┤ LED (pin)│ (tentativo, con 150Ω en medio)
│ D4 (GPIO4)  ├────┤ Vo       │ (tentativo, con 10kΩ a 3V3)
└──────────────┘    └──────────┘

XIAO                 LED + Buzzer
┌──────────────┐
│ D9 (GPIO9)   ├──┤220Ω├──▶ LED ── GND    (tentativo)
│ D10 (GPIO10) ├── Buzzer ── GND           (tentativo)
└──────────────┘

Alimentación autónoma:
18650 (+) ── TP4056 (B+) ── TP4056 (OUT+) ── XIAO (BAT)
18650 (-)  ── TP4056 (B-) ── TP4056 (OUT-) ── XIAO (GND)
```

**Nota sobre pines:** Los números concretos se definen mañana con el profesor cuando vean
el shield Wio-SX1262 acoplado al XIAO y vean qué pines quedan libres.

---

## Resumen de compras

Pasando por la casa de electrónica llevá:

| Componente | Cant | Para |
|---|---|---|
| Resistencia 220 Ω (¼W) | 4 | LED prototipo 1 + LED nodo + LED receptor + respaldo |
| Resistencia 4.7 kΩ (¼W) | 2 | Pull-up DS18B20 (1 por prototipo) |
| Resistencia 150 Ω (¼W) | 2 | GP2Y1014 LED control + respaldo |
| Resistencia 10 kΩ (¼W) | 2 | GP2Y1014 pull-up Vo + respaldo |
| Capacitor electrolítico 220 µF 16V | 2 | GP2Y1014 estabilización + respaldo |
| LED 5mm (rojo + verde o cualquier color) | 4 | Indicadores |
| Cable USB micro | 1 | WeMos |

---

## Stack definitivo para semifinal

### Nodo sensor

- ESP32 WeMos LOLIN32 (o XIAO cuando lleguen)
- DS18B20 — temperatura
- KY-026 — llama
- GP2Y1014AU0F — humo/partículas (cuando llegue)
- Buzzer activo 5V
- LED indicador

### Receptor / Gateway

- 2do ESP32 (WeMos o XIAO)
- Buzzer + LEDs
- Opcional: Serial a PC para debug

### Comunicación

- **Principal:** LoRa (SX1262) vía Wio-SX1262 shield en los XIAO
- **Plan B:** ESP-NOW entre cualquier par de ESP32 (WeMos ↔ XIAO o WeMos ↔ WeMos)

---

## Arquitectura del firmware

### Nodo sensor

Cada 5 segundos:
1. Leer DS18B20 (OneWire)
2. Leer KY-026 (digital + analógico)
3. Leer GP2Y1014AU0F (analógico — control pin LED interno)
4. Si algún valor supera umbral → enviar paquete (LoRa o ESP-NOW)
5. LED indicador de estado
6. Serial debug

**Payload** (mismo esquema, 9 bytes):
| Byte | Campo |
|------|-------|
| 0-1 | Node ID (uint16) |
| 2-3 | Temperatura (int16, °C × 10) |
| 4 | Flag llama (uint8, 0/1) |
| 5-6 | Nivel humo/partículas (uint16, raw ADC) |
| 7 | Flags alerta (bits: 0=temp, 1=llama, 2=humo) |
| 8 | Batería (uint8, %) |

### Receptor

Loop continuo:
1. Inicializar radio/ESP-NOW + esperar paquetes
2. Al recibir: parsear payload, evaluar flags de alerta
3. Si alerta: buzzer ON + LED rojo + Serial
4. Sin alerta: LED verde

### Librerías

- **OneWire** + **DallasTemperature** — DS18B20
- **RadioLib** — SX1262 (cuando lleguen los XIAO)
- **esp_now.h** — ESP-NOW (Plan B, nativo del ESP32)
- Arduino framework (PlatformIO)

---

## Cableado Prototipo 1 — WeMos LOLIN32

(Ya detallado arriba en la BOM del Prototipo 1)

### Nota sobre la alarma Geneve 79.06.01

Tiene un sensor de humo y un buzzer 85dB integrados. Para el demo:
- **Opción A (fácil):** Dejarla funcionando sola. Cuando le soples humo, suena. Muestra detección de humo real.
- **Opción B (hack):** Abrirla y conectar la salida de su sensor a un pin GPIO del ESP32 para que el ESP32 detecte cuándo la alarma se dispara y envíe la alerta vía LoRa/ESP-NOW. El buzzer de 85dB ya está incluido, no necesitás el buzzer externo para sonido fuerte.

---

## Plan para hoy miércoles 10 y mañana jueves 11

### Hoy miércoles 10 — Preparación

Con lo que ya tenés (WeMos + DS18B20 + KY-026 + LED + protoboard):
1. Escribir firmware básico en PlatformIO: DS18B20 + KY-026 + LED + Serial
2. Probar que compile y cargarlo al WeMos
3. Probar lectura de sensores por Serial
4. Si llegan los XIAO + Wio-SX1262 + buzzers + Geneve: flashear un XIAO y probar LoRa básico

### Mañana jueves 11 — Facultad + GP2Y1014

**Llevar a la facultad:**
- WeMos LOLIN32 con firmware funcionando
- Protoboard + cables + resistencias compradas
- DS18B20 + KY-026
- XIAO ESP32-S3 + Wio-SX1262 (si llegaron)
- Portapilas + 18650 + TP4056 (para mostrar concepto de autonomía)
- Lápiz y papel para anotar

**Consultar al profesor:**
- Verificar cableado del WeMos
- Ayuda con TP4056 + 18650 para alimentación (especialmente pin BAT del XIAO)
- Pines libres del XIAO con el shield Wio-SX1262 acoplado
- Consejos para integrar la Geneve al sistema
- Cómo cablear el GP2Y1014AU0F (cuando llegue >17hs)

**A la vuelta (>17hs):** llega el GP2Y1014AU0F → agregar al firmware → probar comunicación LoRa o ESP-NOW entre WeMos ↔ XIAO

---

## Timeline estimado

| Día | Actividad |
|-----|-----------|
| ~~Mar 9~~ | ~~Tienda local~~ ✅ |
| **Mié 10 (hoy)** | Firmware básico (DS18B20 + KY-026 + LED) en WeMos. Llegan XIAO + Wio-SX1262 + buzzers + Geneve. Probar LoRa si llegan |
| **Jue 11** | Llevar prototipo a la facultad. Llega GP2Y1014AU0F (>17hs). Integrar al firmware. Probar LoRa/ESP-NOW entre WeMos ↔ XIAO |
| Vie 12 | Pruebas de integración completas + demo real con encendedor/humo |
| Sáb 13 | Grabar video (escenografía rural) |
| Dom 14 | Editar video |
| Lun 15 | Retoques finales, entrega |
| Mar 16 | **Deadline semifinal** |

---

## Plan B (si LoRa no funciona a tiempo)

Si el SX1262 da problemas:
- Usar **ESP-NOW** (comunicación directa entre ESP32 sin WiFi)
- Mismo código, cambia solo la capa de comunicación
- **Ventaja:** ya tenemos 2 ESP32 (WeMos + 1 XIAO o hasta 2 WeMos/LOLIN32 si consiguen otro)
- No muestra la ventaja de distancia LoRa, pero demuestra detección + alerta inalámbrica

---

## Pendientes

### Hoy miércoles 10
- [ ] Comprar resistencias (4.7kΩ, 220Ω, 150Ω, 10kΩ) + capacitor 220µF
- [ ] Escribir firmware básico en WeMos: DS18B20 + KY-026 + LED + Serial
- [ ] Probar que compile y cargar al WeMos
- [ ] Si llegan los XIAO: flashear y probar LoRa básico

### Jueves 11
- [ ] Llevar prototipo WeMos a la facultad
- [ ] Ver cableado y alimentación con el profesor
- [ ] Confirmar pines XIAO + Wio-SX1262
- [ ] Cuando llegue GP2Y1014AU0F (>17hs): cablear e integrar al firmware
- [ ] Probar comunicación LoRa o ESP-NOW entre WeMos ↔ XIAO
- [ ] Decidir si integrar la Geneve por hack (Opción B) o standalone (Opción A)

### Viernes 12 en adelante
- [ ] Pruebas de integración completas + demo con encendedor/humo
- [ ] Grabar video (sáb 13)
- [ ] Editar video (dom 14)
- [ ] Retoques finales y entrega (lun 15)
- [ ] **Deadline: martes 16**
