# Sistema de Alerta de Incendios Rurales

Sistema autónomo de detección temprana de incendios rurales para productores agrícolas en zonas sin conectividad.

## Problema

Los incendios rurales en Argentina afectan a miles de productores cada año. Las soluciones existentes son reactivas, dependen de satélites (con demoras de horas) o son demasiado costosas para el productor individual.

## Solución

Sistema IoT de bajo costo que detecta incendios en etapa incipiente (<5 minutos) y alerta al productor en tiempo real, funcionando sin señal celular ni red eléctrica.

### Arquitectura

```
Nodo sensor (LoRa 915 MHz) → Gateway (LoRa → WiFi) → [Opcional: Servidor] → Dashboard (React + Vite)
```

El Dashboard funciona en **modo demo** autónomo sin necesidad de backend ni hardware.

### Componentes

| Componente | Tecnología |
|---|---|
| **Nodo sensor** | XIAO ESP32-S3 + SX1262 + DS18B20 + KY-026 + sensor de humo |
| **Gateway** | XIAO ESP32-S3 + SX1262 (receptor LoRa + WiFi) |
| **Servidor** | Node.js + Express + Socket.IO + NeDB (opcional) |
| **Dashboard** | React + Vite + datos simulados en modo demo |

## Estructura del repositorio

```
├── Desarrollo_tecnico/
│   ├── Hardware/                  # Esquemas, BOM, prototipos
│   ├── Software/
│   │   ├── Servidor/              # Backend (opcional)
│   │   ├── Dashboard/             # Frontend (React + Vite)
│   │   └── Firmware_sensores/     # Firmware para nodo sensor y gateway (PlatformIO)
├── Documentacion/                  # Documentación del proyecto
└── Herramientas/                   # Scripts de utilidad
```

## Uso local

### Dashboard (modo demo — sin backend)

```bash
cd Desarrollo_tecnico/Software/Dashboard
npm install
npm run dev
```

Abrir `http://localhost:5173` y loguear con:
- **Usuario:** `alpa`
- **Contraseña:** `alpa2025`

El dashboard incluye:
- Login con marca ALPA
- Tab Dashboard con estadísticas y mapa de nodos
- Tab Nodos con detalle de cada sensor
- Tab Alertas con timeline
- Panel de simulación (⚡) para disparar eventos críticos, moderados o normales manualmente

### Servidor (solo si se conecta hardware real)

```bash
cd Desarrollo_tecnico/Software/Servidor
npm install
npm start
```

## Estado del proyecto

Prototipo funcional / MVP temprano. Desarrollado en el marco del programa EmprendeU.
