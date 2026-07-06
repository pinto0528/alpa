# Diagramas del Sistema

**ALPA — Sistema de Alerta de Incendios Rurales**

**Fecha:** Junio 2026
**Versión:** 1.0

## 1. Introducción

Este documento recopila los diagramas de arquitectura y diseño del sistema. Los diagramas están escritos en sintaxis Mermaid para facilitar su edición y versionado. Para generar imágenes PNG/ SVG, puede utilizarse el script `Herramientas/render_mermaid.py`.

**Convenciones de notación:**
- Diagramas de despliegue: C4 / UML Deployment
- Diagramas de secuencia: UML
- Diagramas de componentes: UML Component
- Diagramas de casos de uso: UML Use Case

## 2. Lista de diagramas

### 2.1 Diagrama de despliegue

**Descripción:** Nodos físicos, software y conexiones de red del sistema.

**Código Mermaid:**

```mermaid
graph TD
    subgraph "Campo"
        NS1["Nodo Sensor 1<br/>(XIAO ESP32-S3 + SX1262)"]
        NS2["Nodo Sensor 2<br/>(XIAO ESP32-S3 + SX1262)"]
        NS3["Nodo Sensor N<br/>(XIAO ESP32-S3 + SX1262)"]
    end

    subgraph "Establecimiento"
        GW["Gateway<br/>(XIAO ESP32-S3 + SX1262 + WiFi)"]
    end

    subgraph "Servidor Cloud"
        S["Servidor Node.js<br/>(Express + NeDB + Socket.IO)"]
    end

    subgraph "Cliente"
        D["Dashboard React<br/>(WebSocket)"]
    end

    NS1 -->|"LoRa 915 MHz"| GW
    NS2 -->|"LoRa 915 MHz"| GW
    NS3 -->|"LoRa 915 MHz"| GW
    GW -->|"WiFi / HTTP POST"| S
    S -->|"WebSocket"| D

    classDef sensor fill:#e1f5fe,stroke:#01579b
    classDef gateway fill:#fff3e0,stroke:#e65100
    classDef server fill:#e8f5e9,stroke:#1b5e20
    classDef client fill:#f3e5f5,stroke:#4a148c
    class NS1,NS2,NS3 sensor
    class GW gateway
    class S server
    class D client
```

### 2.2 Diagrama de secuencia

**Descripción:** Flujo temporal de mensajes entre componentes durante la detección de un incendio.

**Código Mermaid:**

```mermaid
sequenceDiagram
    participant NS as Nodo Sensor
    participant GW as Gateway
    participant S as Servidor
    participant D as Dashboard

    loop Cada 5 segundos
        NS->>NS: Leer sensores<br/>(temp, flama, humo)
        NS->>GW: Transmitir LoRa (11 bytes)
        GW->>GW: Clasificar alerta
        alt Es alerta
            GW->>S: HTTP POST /api/eventos<br/>{ tipo: "alerta" }
            S->>S: Guardar en eventos.db + alertas.db
            S-->>D: WebSocket: nuevo-evento
            D->>D: Mostrar alerta en timeline
        else Es status
            GW->>S: HTTP POST /api/eventos<br/>{ tipo: "status" }
            S->>S: Guardar en eventos.db
            S-->>D: WebSocket: nuevo-evento
            D->>D: Actualizar estado del nodo
        end
    end
```

### 2.3 Diagrama de componentes

**Descripción:** Estructura interna del servidor y sus módulos.

**Código Mermaid:**

```mermaid
graph TD
    subgraph "Servidor Node.js"
        API["API REST<br/>(Express)"]
        WS["WebSocket<br/>(Socket.IO)"]
        EV["Módulo de Eventos"]
        AL["Módulo de Alertas"]
        DB_E["Base de Datos<br/>eventos.db (NeDB)"]
        DB_A["Base de Datos<br/>alertas.db (NeDB)"]
    end

    subgraph "Gateway"
        GW["HTTP POST"]
    end

    subgraph "Dashboard"
        CL["Socket.IO Client"]
    end

    GW -->|"/api/eventos"| API
    API --> EV
    EV --> DB_E
    EV --> AL
    AL --> DB_A
    EV --> WS
    WS --> CL

    classDef server fill:#e8f5e9,stroke:#1b5e20
    classDef db fill:#fff9c4,stroke:#f57f17
    classDef ext fill:#f5f5f5,stroke:#616161
    class API,WS,EV,AL server
    class DB_E,DB_A db
    class GW,CL ext
```

### 2.4 Diagrama de casos de uso

**Descripción:** Actores y funcionalidades del sistema.

**Código Mermaid:**

```mermaid
graph TD
    P["Productor"]
    A["Administrador"]
    GW_ACT["Gateway"]
    S_ACT["Sistema"]

    UC1["Monitorear estado de nodos"]
    UC2["Recibir alertas en tiempo real"]
    UC3["Consultar historial de eventos"]
    UC4["Configurar umbrales de alerta"]
    UC5["Registrar nuevo nodo sensor"]
    UC6["Transmitir datos de sensores"]
    UC7["Clasificar y enviar alertas"]
    UC8["Almacenar eventos"]

    P --> UC1
    P --> UC2
    P --> UC3
    A --> UC4
    A --> UC5
    A --> UC1
    A --> UC3
    GW_ACT --> UC6
    S_ACT --> UC7
    S_ACT --> UC8

    classDef actor fill:#e1f5fe,stroke:#01579b
    classDef uc fill:#f5f5f5,stroke:#616161,stroke-dasharray: 5 5
    class P,A,GW_ACT,S_ACT actor
    class UC1,UC2,UC3,UC4,UC5,UC6,UC7,UC8 uc
```

### 2.5 Diagrama de red

**Descripción:** Topología de red del sistema completo.

**Código Mermaid:**

```mermaid
graph TD
    subgraph "Red LoRa (915 MHz)"
        NS1["Nodo 1"]
        NS2["Nodo 2"]
        NS3["Nodo 3"]
        NS4["Nodo 4"]
    end

    subgraph "Red WiFi Local"
        GW["Gateway<br/>SSID: NODO"]
    end

    subgraph "Internet"
        S["Servidor<br/>:3001"]
    end

    subgraph "Red Cliente"
        D["Dashboard Browser"]
        M["Móvil Productor"]
    end

    NS1 --> GW
    NS2 --> GW
    NS3 --> GW
    NS4 --> GW
    GW --> S
    S -->|WebSocket| D
    S -->|WebSocket| M

    classDef lora fill:#e1f5fe,stroke:#01579b
    classDef wifi fill:#fff3e0,stroke:#e65100
    classDef internet fill:#e8f5e9,stroke:#1b5e20
    classDef client fill:#f3e5f5,stroke:#4a148c
    class NS1,NS2,NS3,NS4 lora
    class GW wifi
    class S internet
    class D,M client
```

## 3. Archivos fuente

Los diagramas están definidos en este mismo archivo en formato Mermaid. Para generar imágenes:

| Diagrama | Archivo editable | Archivo imagen |
|---|---|---|
| Diagrama de despliegue | `diagramas.md` (sección 2.1) | `diagrama_despliegue.png` |
| Diagrama de secuencia | `diagramas.md` (sección 2.2) | `diagrama_secuencia.png` |
| Diagrama de componentes | `diagramas.md` (sección 2.3) | `diagrama_componentes.png` |
| Diagrama de casos de uso | `diagramas.md` (sección 2.4) | `diagrama_casos_uso.png` |
| Diagrama de red | `diagramas.md` (sección 2.5) | `diagrama_red.png` |

**Instrucciones para regenerar los diagramas:**

```bash
# Usar el script de renderizado
python Herramientas/render_mermaid.py < diagrama_secuencia.mmd > diagrama_secuencia.png

# Alternativa: copiar el código Mermaid a https://mermaid.live
# y exportar como PNG
```

## 4. Historial de versiones

| Fecha | Descripción | Versión |
|---|---|---|
| Junio 2026 | Versión inicial de diagramas | 1.0 |
