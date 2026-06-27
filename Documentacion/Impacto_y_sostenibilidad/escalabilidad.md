# Escalabilidad

## Escalabilidad técnica

### Cobertura LoRa por gateway

| Condición | Alcance típico |
|---|---|
| Campo abierto, línea de vista | 2-5 km |
| Con obstáculos (árboles, lomadas) | 500 m - 1,5 km |
| Zona urbana / construcciones | 200-500 m |

El sistema opera a 915 MHz con SF7 y BW 125 kHz. En campo abierto (cañaverales, limoneros), el alcance efectivo es de ~2 km por nodo. Más allá de eso se requieren repetidores o gateways adicionales.

### Nodos por gateway

Cada nodo transmite un paquete de 11 bytes cada 5 segundos. Con SF7, el tiempo al aire por paquete es de ~41 ms. El límite práctico antes de colisiones significativas (sin backoff) es:

> **Nota:** El firmware actual del gateway tiene 4 IDs de nodo hardcodeados. Esto es un límite de implementación actual (MVP), no un límite del hardware ni del protocolo LoRa. Escalar a 30-50 nodos solo requiere actualizar el mapeo en firmware y agregar backoff aleatorio en transmisiones.

| Nodos | Colisión estimada | Adecuado para |
|---|---|---|
| Hasta 10 | <1% | Pilotos y productores chicos |
| 10-30 | 1-5% | Productores medianos |
| 30-50 | 5-15% | Máximo recomendado por gateway |
| 50+ | >15% | Requiere gateway adicional |

Para un productor típico de 500 ha (2-3 nodos) el riesgo de colisión es despreciable. Para una aseguradora con 500 clientes se necesitan múltiples gateways.

### Escalado horizontal con múltiples gateways

Cada gateway opera de forma independiente y se conecta al mismo servidor por WiFi. El servidor centraliza todos los eventos. No hay coordinación entre gateways, por lo que escalar es agregar más gateways en campo sin modificar el servidor.

### Almacenamiento

| Componente | Capacidad estimada | Límite práctico |
|---|---|---|
| NeDB (archivo plano) | Ilimitado en disco | ~100.000 registros antes de lentitud en consultas |
| Un nodo genera | ~17.280 eventos/día (1 cada 5s) | ~630.000 eventos/año |

Con NeDB, un gateway con 10 nodos genera ~172.800 eventos/día. A los 6-7 meses se recomienda migrar a SQLite o PostgreSQL. La migración no requiere cambios en la API, solo en la capa de persistencia.

---

## Escalabilidad geográfica

### Bandas de frecuencia por región

| Región | Frecuencia LoRa | Estatus legal |
|---|---|---|
| Argentina (ENACOM) | 915-928 MHz | ISM sin licencia (cumple) |
| Resto de América (FCC) | 902-928 MHz | ISM sin licencia |
| Europa (ETSI) | 863-870 MHz | Requiere cambio de frecuencia en firmware |
| Brasil (ANATEL) | 915-928 MHz | ISM sin licencia |

Para expandirse a Europa, el firmware debe recompilarse con `LORA_FREQ` en 868 MHz y cambiar la antena. El chip SX1262 soporta ambas bandas.

### Regulaciones locales relevantes

- **Argentina**: Resolución ENACOM 2654/2019 — equipos de baja potencia en 915 MHz no requieren licencia individual.
- **Ley 19.587 (HyS)**: aplicable a la instalación de los equipos en campo (riesgo eléctrico, trabajo rural).
- Para operación en áreas protegidas o reservas, puede requerirse autorización adicional del organismo ambiental provincial.

### Adaptación del firmware

Para una nueva región se requieren cambios mínimos en `main.cpp` y `transmisor.cpp`:

```cpp
#define LORA_FREQ    868.0   // Europa
#define LORA_POWER   14       // Europa: límite <14 dBm
```

Sin cambios en hardware (el SX1262 es multibanda).

---

## Escalabilidad productiva

### Etapas de producción

| Etapa | Volumen | Tipo de ensamblaje | Costo por nodo |
|---|---|---|---|
| Prototipo (actual) | 1-10 | Manual, protoboard, cables dupont | ~USD 250 |
| Pilotaje | 10-100 | Manual, PCB perforada, conectores | ~USD 180 |
| Producción baja | 100-500 | PCB personalizada, ensamblaje semi-automático | ~USD 120 |
| Producción media | 500-5.000 | PCB + stencil, ensamblaje SMT tercerizado | ~USD 75-90 |

### Proveedores identificados

| Componente | Proveedor actual | Alternativa para volumen |
|---|---|---|
| XIAO ESP32-S3 | Seeed Studio / AliExpress | Distribuidor oficial Seeed |
| Wio-SX1262 | Seeed Studio / AliExpress | Ibidem |
| Sensores (DS18B20, KY-026, humo) | MercadoLibre, tienda local | DigiKey, Mouser (por lote) |
| PCB | No aplica (protoboard) | JLCPCB, PCBWay |
| Batería 18650 + TP4056 | Tienda local | BatterySpace, Alibaba |
| Caja / gabinete | No aplica | Caja estanca ABS impresa en 3D o inyectada |

### Tiempo de producción estimado

| Volumen | Tiempo estimado (desde pedido a entregado) |
|---|---|
| 10 unidades (manual) | 2-3 días hábiles |
| 100 unidades (PCB + manual) | 2-3 semanas |
| 1.000 unidades (SMT tercerizado) | 4-6 semanas |

---

## Escalabilidad de software

### De servidor único a múltiples instancias

| Etapa | Arquitectura | Capacidad |
|---|---|---|
| 1-50 nodos | Servidor único (Node.js + NeDB) | Hasta ~500.000 eventos/día |
| 50-500 nodos | Servidor único con PostgreSQL | ~5M eventos/día |
| 500-5.000 nodos | Servidor + caché (Redis) + cola (Bull/RabbitMQ) | ~50M eventos/día |
| 5.000+ nodos | Microservicios (API + ingest + ws separados) | Escalamiento horizontal |

### Dashboard multi-cliente

| Perfil | Requisitos |
|---|---|
| Productor individual | Dashboard simple: sus nodos, sus alertas |
| Aseguradora | Dashboard agrupado por cliente, reportes consolidados, API de integración |
| Gobierno / bomberos | Mapa regional con todos los nodos, acceso de solo lectura |

La migración a multi-cliente requiere agregar autenticación (JWT) y aislamiento de datos por tenant. La API actual usa rutas públicas; eso debe cambiar antes de tener más de un productor.

### API versionada

Para integraciones con terceros (aseguradoras, sistemas de monitoreo provincial), la API debe versionarse:

```
/api/v1/eventos
/api/v2/eventos
```

Esto permite evolucionar el backend sin romper integraciones existentes.

---

## Hoja de ruta de escalado

| Fase | Producto | Técnica | Producción | Negocio |
|---|---|---|---|---|
| 1 (ahora) | Prototipo funcional | 1 servidor, 1 gateway, 2 nodos | Manual | Piloto ABC |
| 2 (año 1) | Kit early adopter | Gateway con WiFi, dashboard básico | 10 unidades manuales | 10 productores locales |
| 3 (año 2) | Kit estándar | PCB personalizada, dashboard completo | 50-100 unidades, PCB JLCPCB | 60 productores + 1 aseguradora |
| 4 (año 3) | Sistema escalado | PostgreSQL, autenticación JWT | 350 unidades, ensamblaje tercerizado | 190 productores, distribución B2B |
| 5 (año 5+) | Plataforma regional | Multi-gateway, API versionada | >1.000 unidades/año | Múltiples aseguradoras + gobierno |

### Decisión crítica: cuándo diseñar PCB propia

El punto de inflexión es ~50 unidades. Por debajo de eso, el costo de diseño y fabricación de una PCB personalizada no se amortiza. Por encima, el ahorro por unidad (de USD 250 a USD 120) justifica la inversión de ~USD 1.500-3.000 en diseño y tooling.
