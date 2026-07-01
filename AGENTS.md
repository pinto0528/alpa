> **Nota sobre el uso de inteligencia artificial:** La inteligencia artificial se utiliza exclusivamente con fines de organización y estructuración de la información. No se emplea para tareas de investigación, composición ni redacción de documentos. Todo el contenido sustantivo, análisis, investigación y redacción es realizado por los miembros del equipo humano del proyecto.

# Sistema de Alerta de Incendios Rurales

Proyecto de detección temprana de incendios para productores agropecuarios en zonas rurales sin infraestructura de conectividad. Desarrollado para el concurso EmprendeU por el equipo N.T. de la UTN Facultad Regional Tucumán.

## Stack tecnológico

- **Firmware**: C/C++ (PlatformIO, ESP32, Arduino)
- **Comunicaciones**: LoRa/LoRaWAN, RF
- **Backend**: Node.js / Python
- **Dashboard**: HTML, JavaScript, visualización de datos en tiempo real
- **Hardware**: Sensores de temperatura, humo, llama; módulos LoRa; paneles solares
- **Documentación**: Markdown, PDF, Excel

## Estructura del proyecto

```
/
├── README.md                     # Descripción general del proyecto
├── AGENTS.md                     # Este archivo
│
├── Comunicacion/                 # Branding, pitch, assets de marketing
│   ├── Assets/                   # Imágenes públicas (diagramas, fotos)
│   ├── Branding/                 # Identidad visual, logo, manual
│   │   ├── Identidad_visual/     # Manual, brand-presentation
│   │   ├── Imprimibles/          # Poster AI/PDF para impresión
│   │   └── Logo/                 # logo.svg, logo_rojo.png, etc.
│   └── Presentacion_semifinal/   # Slides PNG, guión, capturas
│
├── Desarrollo_Tecnico/           # Implementación técnica del sistema
│   ├── Hardware/                 # Esquemas, prototipos, BOM
│   │   ├── Esquemas/
│   │   ├── Lista_materiales/
│   │   └── Prototipos/
│   └── Software/                 # Firmware, backend, dashboard
│       ├── Dashboard/            # Frontend React + Vite
│       ├── Firmware_sensores/    # Código para ESP32-S3 (nodo + gateway)
│       └── Servidor/             # Backend Express + NeDB + Socket.IO
│
├── Documentacion/                # Documentación del proyecto
│   ├── Anexos/                   # Papers, normativas, referencias
│   ├── Entregables_concurso/     # Entregables E1–E4 para EmprendeU
│   ├── Finanzas_y_viabilidad/    # Costos, proyecciones
│   ├── Impacto_y_sostenibilidad/ # ODS, impacto social/ambiental
│   ├── Modelo_de_negocio/        # Canvas, mercado, competencia
│   ├── Presentacion_general/     # One-pager, introducción
│   ├── Problema_y_contexto/      # Estadísticas, impacto del problema
│   ├── Solucion_propuesta/       # Arquitectura, componentes, flujo
│   └── Validacion/               # Entrevistas, mapas de empatía
│
├── Herramientas/                 # Scripts de utilidad (md_to_docx.py)
└── scratch/                      # Borradores, investigación, notas internas
```

## Convenciones

- Los documentos se redactan en español.
- Usar Markdown para documentación textual.
- Los entregables del concurso se versionan en `Documentacion/Entregables_concurso/`.
- Paleta ALPA: `#911B1E` (rojo inca), `#D4B896` (lino crudo), `#222222` (pizarra), `#F5F5F5` (hueso).
- No commitees cambios sin instrucción explícita del usuario.
