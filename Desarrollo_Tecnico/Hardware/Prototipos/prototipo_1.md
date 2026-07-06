# Prototipo 1 — WeMos LOLIN32

**ALPA — Sistema de Alerta de Incendios Rurales**

**Fecha:** Junio 2026
**Versión:** 1.0

> **Placa:**  WeMos LOLIN32 (ESP32)
> **Estado:** funcional

## Componentes

| Componente | Cantidad |
|---|---|
| WeMos LOLIN32 (ESP32) | 1 |
| DS18B20 — sensor de temperatura | 1 |
| KY-026 — sensor de llama | 1 |
| LED 5mm + resistencia 220Ω | 1 |
| Resistencia 4.7kΩ (pull-up) | 1 |
| Protoboard | 1 |
| Cables dupont M-M | ~15 |
| Portapilas 18650 + pila + TP4056 | 1 c/u |

## Cableado / Pinout

### DS18B20 — Temperatura (OneWire)

| DS18B20 | WeMos LOLIN32 |
|---|---|
| VCC (rojo) | 3.3V |
| GND (negro) | GND |
| DATA (amarillo) | GPIO22 — con pull-up 4.7kΩ a 3.3V |

### KY-026 — Llama

| KY-026 | WeMos LOLIN32 |
|---|---|
| VCC | 3.3V |
| GND | GND |
| A0 (analógico) | GPIO34 |
| D0 (digital) | GPIO35 |

### LED indicador

| LED | WeMos LOLIN32 |
|---|---|
| Ánodo (+) | GPIO25 → resistencia 220Ω |
| Cátodo (-) | GND |

### Diagrama

```
          ┌─────────────────────────────┐
          │        WeMos LOLIN32        │
          │                             │
          │  3.3V ────┬──── DS18B20 VCC │
          │           │                 │
          │           └──[4.7kΩ]──┐     │
          │                      │     │
          │  GPIO22 ─────────────┘     │
          │              DS18B20 DATA  │
          │  GND ──────── DS18B20 GND  │
          │                             │
          │  3.3V ──────── KY-026 VCC  │
          │  GND ──────── KY-026 GND   │
          │  GPIO34 ───── KY-026 A0    │
          │  GPIO35 ───── KY-026 D0    │
          │                             │
          │  GPIO25 ──[220Ω]──▶── GND  │
          │                   LED      │
          └─────────────────────────────┘
```

### Resumen de pines

| GPIO | Conexión |
|---|---|
| 22 | DS18B20 DATA (OneWire) |
| 34 | KY-026 A0 (analógico) |
| 35 | KY-026 D0 (digital) |
| 25 | LED indicador |

Pines libres: GPIO2, 4, 5, 12, 13, 14, 15, 18, 19, 21, 23, 26, 27, 32, 33.

## Ensamblaje

### 1. Conexión del DS18B20

1. Conectá VCC (rojo) del DS18B20 a 3.3V del WeMos
2. Conectá GND (negro) a GND
3. Conectá DATA (amarillo) a GPIO22
4. Colocá la resistencia de 4.7kΩ entre DATA y 3.3V (pull-up obligatorio)

### 2. Conexión del KY-026

1. Conectá VCC a 3.3V
2. Conectá GND a GND
3. Conectá A0 a GPIO34 (lectura analógica de intensidad de llama)
4. Conectá D0 a GPIO35 (salida digital umbral)

### 3. Conexión del LED

1. Conectá el ánodo (+) del LED a GPIO25 a través de la resistencia 220Ω
2. Conectá el cátodo (-) a GND

### 4. Alimentación

**Opción A — USB (desarrollo):** Cable microUSB de la PC al WeMos.

**Opción B — Autónoma (TP4056 + 18650):**
```
18650 (+) ── TP4056 (B+) ── TP4056 (OUT+) ── WeMos (5V/VIN)
18650 (-)  ── TP4056 (B-) ── TP4056 (OUT-) ── WeMos (GND)
```

### Checklist antes de energizar

- [ ] 3.3V y GND no están en corto en la protoboard
- [ ] Pull-up 4.7kΩ del DS18B20 está conectado
- [ ] LED tiene resistencia 220Ω en serie
