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
├── AGENTS.md              # Este archivo
├── roadmap.md             # Roadmap del proyecto
├── Presentacion_general/  # Introducción, resumen ejecutivo, one-pager
├── Problema_y_contexto/   # Descripción, estadísticas, impacto
├── Solucion_propuesta/    # Arquitectura, componentes, flujo de datos
├── Prototipado_y_validacion/ # Entrevistas, mapas de empatía, perfiles
├── Desarrollo_tecnico/    # Hardware, software, firmware, comunicaciones
├── Modelo_de_negocio/     # Canvas, mercado, competencia, ingresos
├── Finanzas_y_viabilidad/ # Costos, proyecciones, inversión
├── Impacto_y_sostenibilidad/ # ODS, impacto social/ambiental
├── Comunicacion/          # Pitch, branding, demo
├── Documentacion/         # Manuales técnico y de usuario, FAQ
├── Entregables_concurso/  # Entregables para EmprendeU
└── Anexos/                # Referencias, papers, normativas
```

## Convenciones

- Los documentos se redactan en español (argentino).
- Usar Markdown para documentación textual.
- Los entregables del concurso se versionan en `Entregables_concurso/`.
- El roadmap en `roadmap.md` es la referencia principal de planificación.
- No commitees cambios sin instrucción explícita del usuario.
