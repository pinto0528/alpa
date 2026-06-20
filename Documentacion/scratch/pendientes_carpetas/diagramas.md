# Estructura: Diagramas

> Archivo destino: `Documentacion/Solucion_propuesta/Diagramas/`

## Título
- Nombre del documento
- Fecha
- Versión
- Herramientas utilizadas

## 1. Introducción
- Propósito de los diagramas
- Convenciones de notación usadas
- Herramientas de creación (Mermaid, draw.io, etc.)

## 2. Lista de diagramas

### 2.1 Diagrama de despliegue
- Descripción: nodos físicos, software y conexiones de red
- Archivo: `diagrama_despliegue.png` / `.md`
- Notación: UML / C4
- Elementos a incluir:
  - Nodo sensor (múltiples instancias)
  - Gateway
  - Servidor
  - Dashboard
  - Conexiones: LoRa, WiFi, HTTP, WebSocket

### 2.2 Diagrama de secuencia
- Descripción: flujo temporal de mensajes entre componentes
- Archivo: `diagrama_secuencia.png` / `.md`
- Notación: UML
- Escenario: detección de incendio típica
  - Sensor → Gateway → Servidor → Dashboard
  - Tiempos y eventos

### 2.3 Diagrama de componentes
- Descripción: estructura interna del servidor
- Archivo: `diagrama_componentes.png` / `.md`
- Elementos a incluir:
  - API REST
  - WebSocket handler
  - Base de datos
  - Módulo de alertas

### 2.4 Diagrama de casos de uso
- Descripción: actores y funcionalidades del sistema
- Archivo: `diagrama_casos_uso.png` / `.md`
- Actores: productor, administrador, gateway, sistema
- Funcionalidades principales

### 2.5 Diagrama de red
- Descripción: topología de red
- Archivo: `diagrama_red.png` / `.md`
- Elementos: nodos LoRa, gateway, router, servidor, clientes

## 3. Archivos fuente
- Lista de archivos editables (Mermaid `.mmd`, draw.io `.drawio`)
- Instrucciones para regenerar los diagramas
- Referencia a script `Herramientas/render_mermaid.py`

## 4. Historial de versiones
- Fecha, descripción del cambio, versión, archivo afectado
