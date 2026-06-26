# ALPA — Sistema de Alerta de Incendios Rurales

**Cuidamos tu campo**

Sistema autónomo de detección temprana de incendios rurales para productores agrícolas en zonas sin conectividad. Desarrollado en el marco del programa **EmprendeU 2026**.

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
├── Comunicacion/          # Branding, identidad visual, assets, scratch de comunicación
├── Desarrollo_Tecnico/    # Hardware, firmware, servidor y dashboard
├── Documentacion/         # Modelo de negocio, entregables, finanzas, validación, impacto
└── Herramientas/          # Scripts de utilidad (md_to_docx, render_mermaid)
```

### Ramas

| Rama | Contenido |
|---|---|
| `develop` | Todas las carpetas integradas |
| `comunicacion` | Solo `Comunicacion/` + `Herramientas/` |
| `desarrollo-tecnico` | Solo `Desarrollo_Tecnico/` + `Herramientas/` |
| `documentacion` | Solo `Documentacion/` + `Herramientas/` |

## Uso local

### Servidor

```bash
cd Desarrollo_Tecnico/Software/Servidor
npm install
npm start
```

### Dashboard

```bash
cd Desarrollo_Tecnico/Software/Dashboard
npm install
npm run dev
```

## Estado del proyecto

MVP funcional con entregable final (Entregable 4) completado y presentado.

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
