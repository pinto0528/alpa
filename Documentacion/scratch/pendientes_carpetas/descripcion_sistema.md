# Estructura: Descripción del Sistema

> Archivo destino: `Documentacion/Solucion_propuesta/descripcion_sistema.md`

## Título
- Nombre del documento
- Fecha
- Versión
- Autor/es

## 1. Visión general
- Resumen del sistema
- Principios de diseño
- Requerimientos no funcionales clave

## 2. Arquitectura del sistema
- Diagrama de arquitectura (referencia)
- Descripción de capas:
  - Capa de sensores (nodos en campo)
  - Capa de comunicación (LoRa + gateway)
  - Capa de servidor (backend)
  - Capa de presentación (dashboard)

## 3. Componentes

### 3.1 Nodo sensor
- Microcontrolador (XIAO ESP32-S3)
- Sensores (DS18B20, KY-026, humo)
- Módulo LoRa (Wio-SX1262)
- Alimentación (batería + solar)
- Firmware: ciclo de lectura y transmisión

### 3.2 Gateway
- Microcontrolador (XIAO ESP32-S3)
- Módulo LoRa (receptor)
- Conexión WiFi
- Función: bridge LoRa → HTTP

### 3.3 Servidor
- Runtime (Node.js + Express)
- Base de datos (NeDB)
- API REST
- WebSocket (Socket.IO)
- Archivo de configuración (.env)

### 3.4 Dashboard
- Framework (React + Vite)
- Componentes principales
- Conexión en tiempo real

## 4. Flujo de datos
- Paso a paso: del sensor al dashboard
- Formatos de datos (paquete LoRa, JSON API)
- Tiempos y frecuencias

## 5. Especificaciones técnicas
- Frecuencia LoRa (915 MHz)
- Parámetros LoRa (SF, BW, CR, potencia)
- Protocolo de comunicación
- Estructura del paquete de datos

## 6. Seguridad
- Consideraciones de seguridad
- Medidas implementadas
- Medidas planificadas

## 7. Limitaciones y supuestos
- Condiciones de funcionamiento
- Limitaciones conocidas
- Supuestos de diseño
