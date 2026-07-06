> **Nota sobre el uso de inteligencia artificial:** La inteligencia artificial se utiliza exclusivamente con fines de organización y estructuración de la información. No se emplea para tareas de investigación, composición ni redacción de documentos. Todo el contenido sustantivo, análisis, investigación y redacción es realizado por los miembros del equipo humano del proyecto.

# Sistema de Alerta de Incendios Rurales — ALPA

Proyecto de detección temprana de incendios para productores agropecuarios en zonas rurales sin infraestructura de conectividad. Desarrollado por el equipo N.T. de la UTN Facultad Regional Tucumán.

## Stack tecnológico

- **Firmware**: C/C++ (PlatformIO, ESP32, Arduino)
- **Comunicaciones**: LoRa 915 MHz
- **Backend**: Node.js + Express + Socket.IO + NeDB
- **Dashboard**: React 18 + Vite 5 + Leaflet
- **Hardware**: XIAO ESP32-S3, SX1262, DS18B20, KY-026, sensor de humo, batería 18650 + panel solar
- **Documentación**: Markdown

## Estructura del proyecto

```
/
├── README.md                     # Descripción general del proyecto
├── AGENTS.md                     # Este archivo
│
├── Comunicacion/                 # Branding, pitch, assets de marketing
│   ├── Assets/                   # Imágenes (diagramas, fotos del equipo, prototipos)
│   ├── Branding/                 # Identidad visual, logo, manual
│   │   ├── Identidad_visual/     # Manual de marca, presentación
│   │   ├── Imprimibles/          # Poster AI/PDF para impresión
│   │   └── Logo/                 # logo.svg, logo_rojo.png, etc.
│   └── Presentacion/             # Pitch script, resumen PDF
│
├── Desarrollo_Tecnico/           # Implementación técnica del sistema
│   ├── Hardware/                 # Esquemas, prototipos, BOM
│   │   ├── Esquemas/
│   │   ├── Lista_materiales/
│   │   └── Prototipos/
│   └── Software/                 # Firmware, backend, dashboard
│       ├── Dashboard/            # Frontend React + Vite
│       ├── Firmware/             # Código para ESP32-S3 (nodo + gateway)
│       └── Servidor/             # Backend Express + NeDB + Socket.IO
│
├── Documentacion/                # Documentación del proyecto
│   ├── Anexos/                   # normativas, papers, referencias
│   ├── Investigacion/            # Problema, contexto, validación con usuarios
│   ├── Negocio/                  # Modelo de negocio, finanzas, impacto
│   ├── Resumen/                  # One-pager, resumen ejecutivo
│   └── Solucion_propuesta/       # Arquitectura, componentes, diagramas
│
├── Herramientas/                 # Scripts de utilidad (md_to_docx.py, pitch_to_docx.py)
└── scratch/                      # Borradores, investigación, notas internas
```

## Convenciones

- Los documentos se redactan en español.
- Usar Markdown para documentación textual.
- Paleta ALPA: `#911B1E` (rojo inca), `#D4B896` (lino crudo), `#222222` (pizarra), `#F5F5F5` (hueso).
- Logo con barras rojas + bloque central con texto calado.
- No incluir emojis en commits ni archivos críticos.
- No commitees cambios sin instrucción explícita del usuario.
- Readme y AGENTS.md reflejan la estructura actual del repo.

## Estado del proyecto — Julio 2026

### Goal
Mantener el repositorio como base de conocimiento del proyecto ALPA: código funcional, documentación completa y presentación profesional para portfolio.

### Constraints & Preferences
- Tagline oficial: **"Cuidamos tu campo"** — no usar variantes.
- Identidad ALPA: color `#911B1E` (rojo inca), secundario `#D4B896` (lino crudo), pizarra `#222222`, hueso `#F5F5F5`. Tipografía: Playfair Display (títulos) + Montserrat (cuerpo/UI).
- No usar emojis en commits ni archivos críticos.
- Readme y AGENTS.md reflejan la estructura actual del repo.

### Progress
**Done:**
- Backend (Express + NeDB + Socket.IO) y frontend (React + Vite) funcionales.
- Firmware de nodo sensor y gateway funcional (LoRa 915 MHz, sensores DS18B20 + KY-026 + humo).
- Manual de identidad visual completo (paleta 4 colores, tipografía, tagline, reglas de uso).
- Dashboard rediseñado con paleta ALPA, login, mapa Leaflet, panel de simulación.
- Poster ALPA en AI/PDF generado.
- Landing page en gh-pages rediseñada mobile-first.
- Rama main limpia y estable (sin scratch/).
- Documentación completa: investigación de mercado, modelo de negocio, finanzas, impacto, validación con usuarios.
- `investigacion-competencia.md` completo (10 competidores analizados).
- Pitch final con TAM/SAM/SOM, análisis de competencia y equipo detallado.
- Scripts de utilidad: `md_to_docx.py`, `pitch_to_docx.py`.

**In Progress:**
- *(ninguno)*

### Key Decisions
- GitHub Pages: `https://pinto0528.github.io/alpa/` con landing page standalone.
- Ramas: `main` (estable, sin scratch), `develop` (activo), `gh-pages` (solo landing page).
- Chip LoRa real: SX1262. Comunicación 2-5 km al gateway, detección ~10-50 m por nodo.

### Relevant Files
- `Desarrollo_Tecnico/Software/Firmware/nodo_sensor/src/transmisor.cpp`: firmware del nodo sensor.
- `Desarrollo_Tecnico/Software/Firmware/gateway/src/main.cpp`: firmware del gateway.
- `Documentacion/Solucion_propuesta/descripcion_sistema.md`: arquitectura del sistema.
- `Documentacion/Solucion_propuesta/diagramas.md`: diagramas Mermaid del sistema.
- `Documentacion/Negocio/mercado.md`: market sizing, ventaja competitiva.
- `Documentacion/Investigacion/soluciones_actuales.md`: brechas no cubiertas para productores.
- `Comunicacion/Branding/Identidad_visual/manual_identidad.md`: manual de marca.
- `Comunicacion/Presentacion/pitch.md`: guion de pitch.
- `README.md`: descripción general del proyecto.
- `index.html` (gh-pages): landing page mobile-first.
