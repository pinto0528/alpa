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

## Estado del proyecto — Julio 2026

### Goal
Completar el pitch y landing page de ALPA para las semifinales de EmprendeU 2026, manteniendo el repo organizado entre main y develop.

### Constraints & Preferences
- Tagline oficial: **"Cuidamos tu campo"** — no usar variantes.
- Identidad ALPA: color `#911B1E` (rojo inca), secundario `#D4B896` (lino crudo), pizarra `#222222`, hueso `#F5F5F5`. Tipografía: Playfair Display (títulos) + Montserrat (cuerpo/UI).
- Logo con barras rojas + bloque central con texto calado.
- No incluir emojis en commits ni archivos críticos.
- Readme y AGENTS.md reflejan la estructura actual del repo.

### Progress
**Done:**
- Backend (Express + NeDB + Socket.IO) y frontend (React + Vite) funcionales.
- Manual de identidad visual actualizado: paleta 4 colores, tipografía, tagline, reglas de uso.
- Dashboard rediseñado con paleta ALPA.
- 8 slides PNG generados para la presentación semifinal (`assets/imagenes_slides/`).
- Poster ALPA en AI/PDF generado (`Comunicacion/Branding/Imprimibles/`).
- Landing page en gh-pages rediseñada mobile-first.
- Rama main: merge de develop (excluyendo scratch/), limpia y estable.
- `Investigacion-competencia.md` completo (10 competidores analizados).
- `scratch/pitch-v2.md`: borrador final del pitch de 3 min con TAM/SAM/SOM, análisis de competencia (satelital, drones, torres IA), y sección de equipo detallada.
- `Herramientas/pitch_to_docx.py`: script para convertir pitch markdown a docx.

**In Progress:**
- *(ninguno)*

### Key Decisions
- GitHub Pages: `https://pinto0528.github.io/alpa/` con landing page standalone.
- Ramas: `main` (estable, sin scratch), `develop` (activo), `gh-pages` (solo landing page).
- Pitch: estructura temporal con timestamps, 3 min, enfoque en problema → solución → competencia → negocio → equipo → cierre emocional.
- Competencia mencionada sin nombres de startups (satelital + drones), destacando que ninguna resuelve el caso sin conectividad.
- Equipo: Gonzalo da el pitch (Higiene y Seguridad), perfiles: electrónica, firmware, desarrollo web, seguridad laboral.

### Next Steps
1. Practicar el pitch midiendo tiempo real (estimado ~3:11, ajustar si es necesario).
2. Si todo está ok, commitear cambios en develop y mergear a main.

### Critical Context
- Chip LoRa real: SX1262. Comunicación 2-5 km al gateway, detección ~10-50 m por nodo.
- No hay competidor directo: startups globales ignoran al productor sin conectividad en el lote.
- Git branch actual: `develop`.
- Repo en Seadrive: `C:\Users\nclpn\seadrive_root\Pintonube\My Libraries\pintonube\Documentos\Proyectos\alpa\`.
- Equipo: Mario Quiroga (desarrollo web), Jeremias Mastafa (firmware), Nicolas Pinto (electrónica), Gonzalo Lescano (Higiene y Seguridad, orador).
- Gonzalo da el pitch en primera persona ("yo en Higiene y Seguridad").

### Relevant Files
- `Comunicacion/Presentacion_semifinal/pitch.md`: pitch original (96 líneas, timestamps 0:00-3:00).
- `scratch/pitch-v2.md`: versión final con TAM/SAM/SOM, competencia sin nombres, equipo detallado.
- `scratch/pitch-v2.docx`: mismo contenido en formato Word.
- `scratch/investigacion-competencia.md`: análisis de 10 competidores globales.
- `Herramientas/pitch_to_docx.py`: conversor markdown → docx para el pitch.
- `Documentacion/Modelo_de_negocio/mercado.md`: market sizing, ventaja competitiva.
- `Documentacion/Validacion/soluciones_actuales.md`: brechas no cubiertas para productores.
- `README.md`: descripción general del proyecto.
- `index.html` (gh-pages): landing page mobile-first.
