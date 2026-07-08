# ALPA — Rediseño Nodo Sensor v2

## Problema

El sensor actual usa KY-026 (fotorresistor IR) con alcance de ~1 metro. Para un sistema de detección temprana de incendios rurales, esto es insuficiente. Se necesita detectar fuego/humo a distancias de **1 km o más**.

## Solución propuesta

Nodo sensor con **3 cámaras Arducam Mini SPI** cubriendo 360° del horizonte, con detección local por visión computacional en el ESP32-S3. Sin partes móviles.

---

## Arquitectura del nodo v2

### Componentes

| Componente | Cantidad | Función |
|---|---|---|
| XIAO ESP32-S3 | 1 | Procesador principal |
| Arducam Mini SPI (OV2640) | 3 | Captura de imágenes, 120° cada una |
| Wio-SX1262 (shield LoRa) | 1 | Comunicación 915 MHz |
| microSD | 1 | Almacenamiento local de imágenes de alerta |
| Panel solar + 18650 + TP4056 | 1 c/u | Alimentación autónoma |
| Antena LoRa (u.FL) | 1 | |

### Conexiones

Las 3 Arducam comparten el bus SPI del ESP32-S3 con Chip Selects independientes:

| Señal | GPIO |
|---|---|
| SPI SCK | GPIO7 |
| SPI MISO | GPIO8 |
| SPI MOSI | GPIO9 |
| CS cámara 1 | GPIO10 |
| CS cámara 2 | GPIO11 |
| CS cámara 3 | GPIO12 |
| microSD CS | GPIO13 |

Solo una cámara se activa por vez, compartiendo el bus sin conflictos.

---

## Flujo de detección

Ciclo de **1 minuto**:

```
t=0s    → Capturar cámara 1
t=0.3s  → Capturar cámara 2
t=0.6s  → Capturar cámara 3
t=0.9s  → Frame diff cámara 1 vs referencia
t=1.0s  → Frame diff cámara 2 vs referencia
t=1.1s  → Frame diff cámara 3 vs referencia
t=1.2s  → ¿Algún diff superó umbral?
          ├─ No → deep sleep hasta próximo ciclo (~58s)
          └─ Sí → Ejecutar TinyML en la(s) imagen(es) sospechosas
               ├─ ¿Es humo/fuego?
               │  ├─ No → deep sleep
               │  └─ Sí → Alerta → guardar foto en SD → TX LoRa → deep sleep
               └─
```

### Frame differencing

- Cada cámara mantiene una **imagen de referencia** actualizada del mismo ángulo
- La referencia se actualiza lentamente (promedio móvil) cuando no hay alertas activas
- Se compara pixel a pixel con umbral adaptativo
- Cambios globales (>70% de la imagen alterada) se filtran (nube/sol)
- Si el cambio está concentrado en una zona → pasa a ML

### TinyML (Edge Impulse)

- Modelo liviano para clasificación binaria: `fuego/humo` vs `no fuego`
- Entrenado con imágenes de campo: amanecer, mediodía, atardecer, noche, nubes, animales, vehículos, fuego real, humo
- Corre en el ESP32-S3 con TFLite Micro (~200-300 KB de RAM, ~50ms por inferencia)
- Se activa **solo cuando el frame diff detectó algo anormal**

### Paquete de alerta (LoRa)

Cuando se detecta fuego, se envía por LoRa un JSON pequeño (~50 bytes):

```json
{
  "nodo": 1,
  "tipo": "fuego" | "humo",
  "dir": 45,
  "conf": 0.92,
  "ts": 1783612345
}
```

- `dir`: dirección aproximada en grados (0-360) según qué cámara y qué zona de la imagen detectó el evento
- `conf`: confianza del modelo (0.0 - 1.0)
- La imagen se guarda en microSD para su recuperación posterior por WiFi si el gateway tiene conexión
- Las imágenes nunca viajan por LoRa

### Consumo energético estimado

| Estado | Tiempo | Consumo |
|---|---|---|
| Deep sleep | ~58s | ~10-20 µA |
| Captura (3 cámaras) | ~1s | ~150 mA |
| Processamiento (diff + ML) | ~1s | ~100 mA |
| TX LoRa | ~0.2s | ~120 mA |

**Estimación de autonomía:** con una 18650 de 3000 mAh + panel solar, el nodo puede operar de forma indefinida en condiciones normales de luz solar.

---

## Backend y Dashboard

Se mantiene la arquitectura existente de Node.js + React, actualizando para datos reales con PostgreSQL, autenticación JWT, y conexión WebSocket en lugar de datos mockeados.

### Backend

| Aspecto | Actual | Nuevo |
|---|---|---|
| Framework | Express | Fastify |
| Base de datos | NeDB | PostgreSQL + PostGIS |
| ORM | — | Drizzle |
| Auth | ninguna | JWT + bcrypt |
| Tiempo real | Socket.IO | Socket.IO |
| API endpoints | 4 | 8+ (CRUD nodos, usuarios, alertas, eventos) |
| Docker | no | Docker Compose |

### Dashboard

| Aspecto | Actual | Nuevo |
|---|---|---|
| Framework | React 18 | React 18 |
| Build | Vite | Vite |
| Estilos | ninguno | Tailwind |
| Mapas | Leaflet | Leaflet |
| Datos | mockeados | WebSocket real desde servidor |
| Login | hardcodeado | JWT real |

### Dashboard — pantallas

1. **Login** — autenticación JWT
2. **Mapa en tiempo real** — nodos con ubicación, estado, última alerta. Cobertura de 360° por nodo (corona de 3 sectores de cámara)
3. **Panel de nodos** — lista de nodos con estado (online/offline), batería, temperatura, última foto
4. **Timeline de alertas** — histórico con nivel de confianza, dirección, nodo, y foto asociada (cuando esté disponible)
5. **Detalle de alerta** — foto de la alerta + datos del nodo + ubicación en mapa

### API endpoints propuestos

| Método | Ruta | Descripción |
|---|---|---|
| POST | `/api/auth/login` | Login JWT |
| POST | `/api/auth/register` | Registrar usuario |
| GET | `/api/nodos` | Listar nodos |
| GET | `/api/nodos/:id` | Detalle nodo |
| POST | `/api/eventos` | Recibir evento de sensor |
| GET | `/api/eventos` | Listar eventos |
| GET | `/api/alertas` | Listar alertas |
| GET | `/api/alertas/:id/foto` | Obtener foto de alerta |
| WebSocket | `nuevo-evento` | Evento en tiempo real |
| WebSocket | `nueva-alerta` | Alerta en tiempo real |

---

## Infraestructura

```
docker-compose.yml
├── postgres (con PostGIS)
├── servidor (Fastify + Node.js)
└── dashboard (Nginx sirviendo build Vite)
```

Despliegue inicial: servidor VPS simple con Docker Compose.

---

## Próximos pasos

1. Validar Arducam Mini SPI en ESP32-S3 (3 cámaras mismo bus)
2. Entrenar modelo TinyML con dataset de incendios/humo
3. Prototipo del nodo v2 con 3 cámaras
4. Implementar frame differencing en firmware
5. Integrar TinyML en firmware
6. Probar ciclo completo en campo
7. Rediseñar backend (Fastify + PostgreSQL + Drizzle)
8. Rediseñar dashboard (React + Tailwind + WebSocket real)
9. Dockerizar todo
10. Prueba de campo con productor real
