# Descripción del Sistema

**Sistema de Alerta de Incendios Rurales**

**Fecha:** Junio 2026
**Versión:** 1.0
**Autor/es:** Equipo EmprendeU — UTN Facultad Regional Tucumán

## 1. Visión general

Sistema autónomo de detección temprana de incendios rurales compuesto por nodos sensores inalámbricos, un gateway de comunicación, un servidor backend y un dashboard web en tiempo real.

**Principios de diseño:**
- Bajo costo y accesible para el productor individual
- Funcionamiento autónomo sin red eléctrica ni conectividad celular
- Detección en etapa incipiente (<5 minutos)
- Comunicación robusta en entornos rurales (LoRa 915 MHz)
- Energía renovable (solar + batería)

**Requerimientos no funcionales clave:**
- Autonomía energética >24 horas sin recarga
- Alcance LoRa 2-5 km en campo abierto
- Latencia de alerta <1 minuto desde la detección
- Tasa de colisión <1% con hasta 10 nodos por gateway

## 2. Arquitectura del sistema

```
┌─────────────┐    LoRa 915 MHz    ┌──────────┐    WiFi    ┌──────────┐   WebSocket   ┌───────────┐
│ Nodo Sensor  │ ──────────────────> │ Gateway   │ ──────────> │ Servidor  │ ─────────────> │ Dashboard │
│ (XIAO + LoRa)│   11-byte packet   │ (XIAo +   │  HTTP POST │ (Node.js │               │ (React +  │
│              │                    │  LoRa)   │            │  + NeDB) │               │  Vite)    │
└─────────────┘                    └──────────┘            └──────────┘               └───────────┘
```

### Capas del sistema:

1. **Capa de sensores (nodos en campo):** Uno o más nodos sensores distribuidos en el terreno. Cada nodo mide temperatura, detecta flama y humo, y transmite por radio LoRa cada 5 segundos.

2. **Capa de comunicación (LoRa + gateway):** El gateway recibe las transmisiones LoRa de todos los nodos en su alcance, clasifica si es una alerta o un reporte de estado, y reenvía los datos al servidor vía WiFi mediante HTTP POST.

3. **Capa de servidor (backend):** Servidor Node.js con Express que expone una API REST para recibir y consultar eventos. Almacena los datos en NeDB (base de datos embebida basada en archivos). Broadcast en tiempo real vía Socket.IO.

4. **Capa de presentación (dashboard):** Aplicación React con Vite que se conecta al servidor vía WebSocket y muestra el estado de los nodos, las alertas en tiempo real y el historial de eventos.

## 3. Componentes

### 3.1 Nodo sensor

| Elemento | Especificación |
|---|---|
| Microcontrolador | XIAO ESP32-S3 (240 MHz, 512 KB SRAM, 8 MB Flash) |
| Módulo LoRa | Wio-SX1262 (Semtech SX1262, 915 MHz, +22 dBm) |
| Sensor temperatura | DS18B20 (OneWire, -55°C a +125°C, ±0.5°C) |
| Sensor flama | KY-026 (detección IR, digital, alcance ~50 cm) |
| Sensor humo | Canal dual digital (detección cuando A != B) + GP2Y1014AU0F (óptico IR) |
| Alimentación | Panel solar + batería 18650 (3000 mAh) + TP4056 |
| Firmware | PlatformIO / Arduino, ciclo de lectura cada 5 segundos |

**Ciclo de operación:**
1. Cada 5 segundos, leer temperatura (DS18B20), flama (KY-026), humo (canales A/B)
2. Empaquetar en estructura de 11 bytes: nodeId, uptime, temperatura, flama, humo
3. Transmitir vía LoRa (915 MHz, SF7, BW 125 kHz, CR 5, +22 dBm)
4. Esperar 5 segundos y repetir

### 3.2 Gateway

| Elemento | Especificación |
|---|---|
| Microcontrolador | XIAO ESP32-S3 |
| Módulo LoRa | Wio-SX1262 (receptor) |
| Conexión | WiFi 2.4 GHz |
| Firmware | PlatformIO / Arduino |

**Función:** Bridge LoRa → HTTP. Recibe paquetes LoRa de los nodos sensores, clasifica si la lectura es una alerta (flama detectada, temperatura >50°C o humo detectado) y envía los datos al servidor mediante HTTP POST.

**Mapeo de nodos:** Hasta 4 nodos configurados (`nodo-xiao_01` a `nodo-xiao_04`).

### 3.3 Servidor

| Elemento | Especificación |
|---|---|
| Runtime | Node.js + Express 4.21 |
| Base de datos | NeDB (archivos en `data/`) |
| Tiempo real | Socket.IO 4.7 |
| Puerto | 3001 |

**API REST:**

| Método | Ruta | Descripción | Parámetros |
|---|---|---|---|
| POST | `/api/eventos` | Recibir evento de sensor | `{ nodo, temperatura, flama, humo, tipo }` |
| GET | `/api/eventos` | Obtener eventos recientes | `?limite=N` |
| GET | `/api/nodos` | Último estado por nodo | — |
| GET | `/api/alertas` | Obtener alertas recientes | `?limite=N` |

**Base de datos:**
- `data/eventos.db`: Todos los eventos recibidos
- `data/alertas.db`: Solo eventos clasificados como alerta

**Alertas en tiempo real:** Cuando un evento es de tipo `alerta`, se almacena en ambas bases y se emite por WebSocket a todos los clientes conectados.

### 3.4 Dashboard

| Elemento | Especificación |
|---|---|
| Framework | React 18 + Vite 5 |
| Conexión | Modo demo autónomo (useMockData) — Socket.IO queda disponible para backend real |
| Proxy | `/api` → servidor :3001 (solo si se conecta backend) |

**Autenticación:**
- Pantalla de login con marca ALPA y tagline "Cuidamos tu campo"
- Credenciales demo: `alpa` / `alpa2025`
- Enrutamiento interno con `useRouter.js` (sin dependencias externas)

**Componentes principales:**
- **Login:** Pantalla de ingreso con logo ALPA y validación de credenciales
- **DashboardStats:** Tarjetas de resumen (nodos activos, alertas activas, temperatura promedio, riesgo general)
- **MapaNodos:** Mapa satelital interactivo (Leaflet + ESRI World Imagery) con posición de cada nodo, color según estado (rojo=crítico, ámbar=moderado, verde=normal), líneas punteadas de distancia al gateway y popups con datos del nodo
- **DetalleNodo:** Modal con información completa del nodo al hacer clic
- **PanelResumen:** Grilla de nodos con datos de temperatura, flama y humo
- **TimelineAlertas:** Lista cronológica de alertas con motivo
- **PanelSimulacion:** Botón flotante ⚡ que permite inyectar eventos manuales (normal/moderado/crítico)

**Lógica de riesgo:**
- Flama detectada → nivel **crítico**
- Humo detectado o temperatura ≥70°C → nivel **moderado**
- Ninguna condición → nivel **mínimo**

**Datos simulados:**
- 4 nodos simulados (Norte, Este, Oeste, Sur) con ciclo de actualización cada 3 segundos
- Función `simular()` para inyección manual de eventos desde el panel ⚡
- Sin dependencia de backend — el frontend funciona standalone

**Coordenadas y ubicación:**
- Gateway en casa del productor: `-26.912265, -65.230117` (campo agrícola en Leales, Tucumán)
- 4 nodos en los linderos (Norte, Este, Oeste, Sur) a ~250 m del gateway
- Distancia calculada con fórmula Haversine, visible en popups del mapa y en DetalleNodo
- Mapa satelital con ESRI World Imagery y marcadores con color según estado

**Librerías externas:** React 18 + Leaflet para mapas satelitales interactivos. Socket.IO Client se eliminó del proyecto.

**Tema visual:** Dark mode (fondo `#0f172a`), tarjetas en `#1e293b`, alertas con borde rojo y animación pulsante.

## 4. Flujo de datos

1. **Adquisición:** El nodo sensor lee los sensores cada 5 segundos
2. **Transmisión:** Construye un paquete de 11 bytes y lo transmite por LoRa
3. **Recepción:** El gateway recibe el paquete LoRa y lo procesa
4. **Clasificación:** El gateway evalúa si es alerta (flama, temperatura >50°C, humo)
5. **Envío HTTP:** POST JSON al servidor con los datos y el tipo (`status` o `alerta`)
6. **Almacenamiento:** El servidor guarda en NeDB (eventos y alertas)
7. **Broadcast:** El servidor emite el evento por WebSocket a todos los clientes
8. **Visualización:** El dashboard actualiza las tarjetas y la timeline de alertas

**Formatos de datos:**

Paquete LoRa (11 bytes):
```
| nodeId (1B) | uptime (4B) | temperatura (4B float) | flama (1B) | humo (1B) |
```

JSON HTTP (POST /api/eventos):
```json
{
  "nodo": "nodo-xiao_01",
  "temperatura": 28.5,
  "flama": 0,
  "humo": 0,
  "tipo": "status"
}
```

**Tiempos y frecuencias:**
- Transmisión de nodo: cada 5 segundos
- Conversión DS18B20: 750 ms
- Ciclo de pooling de sensores: 20 ms
- Latencia LoRa (SF7, BW 125 kHz): ~100 ms por paquete

## 5. Especificaciones técnicas

| Parámetro | Valor |
|---|---|
| Frecuencia LoRa | 915 MHz (banda ISM) |
| Spreading Factor | 7 |
| Bandwidth | 125.0 kHz |
| Coding Rate | 5 (4/5) |
| Sync Word | 0x12 |
| Potencia de transmisión | +22 dBm |
| Alcance estimado | 2-5 km campo abierto |
| Nodos por gateway | Hasta 10 (<1% colisión) |
| Frecuencia de reporte | Cada 5 segundos |
| Autonomía | >24 horas (batería 3000 mAh + solar) |

**Protocolo de comunicación:**
- Capa física: LoRa (Semtech SX1262)
- Formato de paquete: 11 bytes fijos, sin encabezado ni CRC adicional (manejado por el módulo LoRa)
- Confirmación: Sin ACK (simplex, nodo → gateway)

## 6. Seguridad

### Consideraciones
- Comunicación LoRa sin cifrado en el prototipo (alcance limitado reduce riesgo de intercepción)
- La red WiFi del gateway es una red local (SSID: "NODO")
- El servidor expone API sin autenticación (entorno controlado, MVP)

### Medidas implementadas
- Sync Word LoRa personalizado (0x12) para evitar interferencia con otras redes LoRa
- Base de datos NeDB en archivos locales sin exposición directa
- Proxy inverso en Vite para evitar CORS en desarrollo

### Medidas planificadas
- Cifrado AES en paquetes LoRa
- Autenticación JWT en API REST
- HTTPS con certificado Let's Encrypt
- Autenticación de usuarios en dashboard

## 7. Limitaciones y supuestos

### Condiciones de funcionamiento
- Temperatura ambiente: -10°C a 50°C
- Exterior, con protección IP65 para nodo sensor
- Línea de visión parcial entre nodo y gateway (obstáculos reducen alcance)

### Limitaciones conocidas
- El sensor de flama KY-026 tiene alcance efectivo limitado (~50 cm en pruebas)
- NeDB no está diseñado para alta concurrencia (>100 nodos simultáneos)
- Sin soporte para múltiples gateways (escalabilidad horizontal no implementada)
- El gateway requiere WiFi (no funciona en zonas sin cobertura WiFi)

### Supuestos de diseño
- El productor tiene conectividad WiFi en su vivienda o galpón cercano
- Los nodos se instalan en puntos estratégicos del campo (perímetros, zonas de riesgo)
- El productor tiene acceso a un dispositivo con navegador web para ver el dashboard
- Batería recargable con panel solar suficiente para operación continua (>24h)
