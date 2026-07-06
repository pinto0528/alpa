# ALPA — Sistema de Alerta de Incendios Rurales

**Cuidamos tu campo**

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
├── AGENTS.md              # Instrucciones para asistentes IA
├── Comunicacion/          # Branding, identidad visual, assets
├── Desarrollo_Tecnico/    # Hardware, firmware, servidor y dashboard
├── Documentacion/         # Investigación, negocio, solución, resumen y anexos
├── Herramientas/          # Scripts de utilidad
└── scratch/               # Borradores, investigación, notas internas
```

## Estado del proyecto

MVP funcional: firmware para nodo sensor y gateway funcional, backend y dashboard desarrollados (código en git history), documentación completa.

## Marca

- **Color principal:** `#911B1E` (rojo inca)
- **Secundario:** `#D4B896` (lino crudo)
- **Tipografía:** Playfair Display (títulos) + Montserrat (cuerpo/UI)
- **Identidad visual completa:** `Comunicacion/Branding/Identidad_visual/manual_identidad.md`

## Equipo

| Rol | Miembro |
|---|---|
| Full-Stack | Mario Roberto Quiroga |
| Firmware | Jeremias Mastafa Nazar |
| Negocio | Gonzalo Fabricio Lescano |
| Hardware | Nicolas Pinto |
