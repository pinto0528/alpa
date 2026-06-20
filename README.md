# Sistema de Alerta de Incendios Rurales

Sistema autónomo de detección temprana de incendios rurales para productores agrícolas en zonas sin conectividad.

## Problema

Los incendios rurales en Argentina afectan a miles de productores cada año. Las soluciones existentes son reactivas, dependen de satélites (con demoras de horas) o son demasiado costosas para el productor individual.

## Solución

Sistema IoT de bajo costo que detecta incendios en etapa incipiente (<5 minutos) y alerta al productor en tiempo real, funcionando sin señal celular ni red eléctrica.

### Arquitectura

```
Nodo sensor (LoRa 915 MHz) → Gateway (LoRa → WiFi) → Servidor (Express + NeDB) → Dashboard (React + Vite)
```

### Componentes

| Componente | Tecnología |
|---|---|
| **Nodo sensor** | XIAO ESP32-S3 + SX1262 + DS18B20 + KY-026 + sensor de humo |
| **Gateway** | XIAO ESP32-S3 + SX1262 (receptor LoRa + WiFi) |
| **Servidor** | Node.js + Express + Socket.IO + NeDB |
| **Dashboard** | React + Vite + Socket.IO Client |

## Estructura del repositorio

```
├── Desarrollo_tecnico/
│   ├── Hardware/                  # Esquemas, BOM, prototipos
│   ├── Software/
│   │   ├── Servidor/              # Backend activo
│   │   ├── Dashboard/             # Frontend activo (React + Vite)
│   │   └── Firmware_sensores/     # Firmware para nodo sensor y gateway (PlatformIO)
├── Documentacion/                  # Documentación del proyecto
└── Herramientas/                   # Scripts de utilidad
```

## Uso local

### Servidor

```bash
cd Desarrollo_tecnico/Software/Servidor
npm install
npm start
```

### Dashboard

```bash
cd Desarrollo_tecnico/Software/Dashboard
npm install
npm run dev
```

## Estado del proyecto

Prototipo funcional / MVP temprano. Desarrollado en el marco del programa EmprendeU.
