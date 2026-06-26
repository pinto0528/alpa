# Auditoría — ALPA · Rama `documentacion`
**Fecha:** 2026-06-26 | **Nivel de severidad general:** Alto

## Resumen Ejecutivo

La rama `documentacion` contiene la documentación de negocio, validación, entregables y finanzas del proyecto. El contenido sustantivo (entrevistas, propuesta de valor, análisis de costos) es de alta calidad. Sin embargo, `AGENTS.md` describe una estructura de proyecto que ya no existe, el Entregable 4 está incompleto (solo plantillas, no el entregable real), y el README referencia carpetas ausentes. El roadmap contiene tareas marcadas como pendientes que ya fueron completadas.

## Hallazgos por Impacto

### 🔴 Críticos

- **Hallazgo:** `AGENTS.md` describe una estructura de proyecto obsoleta e inexistente
  - **Evidencia:** `Documentacion/AGENTS.md:28-46`
  - **Razón:** Enumera carpetas como `Prototipado_y_validacion/`, `Desarrollo_tecnico/`, `Comunicacion/` que no existen en esta rama. La estructura real es muy distinta. Además, incluye una instrucción contradictoria: "No commitees cambios sin instrucción explícita del usuario" que debería estar en la raíz, no en documentación.
  - **Consecuencia:** Cualquiera que lea AGENTS.md para entender la estructura recibe información falsa.
  - **Recomendación:** Reemplazar AGENTS.md con un índice de contenido real de Documentacion/ o eliminar el archivo.

- **Hallazgo:** Entregable 4 incompleto — faltan los archivos del entregable real
  - **Evidencia:** `Documentacion/Entregables_concurso/Entregable_4/` contiene solo `entregable_4_plantilla.pdf`, `pautas.pdf`, y `Qué es un One Pager...pdf`
  - **Razón:** No están presentes `entregable_4.md`, `entregable_4.docx`, `entregable_4.pdf`, `one_pager_guia.md`, etc. que sí existen en la rama `develop`. Esta rama está desactualizada respecto al entregable final.
  - **Consecuencia:** El entregable más importante del concurso está ausente en la rama de documentación.
  - **Recomendación:** Sincronizar con develop para incluir los archivos faltantes del Entregable 4.

- **Hallazgo:** README describe estructura que no corresponde a esta rama
  - **Evidencia:** `README.md:28-39`
  - **Razón:** Referencia `Desarrollo_tecnico/` (con minúscula) y herramientas que no existen en esta rama.
  - **Consecuencia:** Desorienta a quien navegue la rama.
  - **Recomendación:** Adaptar README al contenido real de la rama.

### 🟠 Altos

- **Hallazgo:** Datos de costos desactualizados respecto al hardware real
  - **Evidencia:** `Documentacion/Finanzas_y_viabilidad/costos_produccion.md:15-16`
  - **Razón:** Menciona "Módulo LoRa SX1276" y "sensor de humo MQ" como componentes del nodo. El hardware real usa SX1262 y un sensor de humo digital de 2 canales (no MQ-x). El microcontrolador dice "ESP32 + PCB diseño propio" cuando la realidad es XIAO ESP32-S3 + Wio-SX1262 shield.
  - **Consecuencia:** Los costos y especificaciones del documento no reflejan el producto real. Inconsistencia entre documentación y desarrollo técnico.
  - **Recomendación:** Actualizar costos_produccion.md con los componentes reales del prototipo 2 (XIAO + SX1262 + DS18B20 + KY-026 + sensor humo digital).

- **Hallazgo:** Entregables 1, 2, 3 tienen triplicación de formatos sin canonical claro
  - **Evidencia:** `Documentacion/Entregables_concurso/Entregable_1/` contiene `entregable_1.docx`, `.md`, `.pdf`, `_plantilla.pdf`. Lo mismo en Entregable_2 y Entregable_3.
  - **Razón:** Múltiples formatos del mismo contenido sin indicar cuál es la versión canónica ni cómo se generan.
  - **Consecuencia:** Dificulta saber qué archivo es la versión final entregada.
  - **Recomendación:** Designar un formato como canonical (ej: .md) y documentar que .docx/.pdf se generan a partir de este.

- **Hallazgo:** `roadmap.md` tiene tareas completadas marcadas como pendientes
  - **Evidencia:** `Documentacion/roadmap.md:5-44`
  - **Razón:** Tareas como "Desarrollar prototipo_v1", "Crear dashboard básico", "Completar propuesta_valor.md" están marcadas como `[ ]` (pendiente) pero ya fueron realizadas.
  - **Consecuencia:** El roadmap no refleja el progreso real del proyecto.
  - **Recomendación:** Actualizar checklist: marcar como completado lo que ya está hecho, revisar lo pendiente.

### 🟡 Medios

- **Hallazgo:** Documentación rica en contenido pero sin referencias cruzadas
  - **Evidencia:** Ningún archivo referencia a otros dentro de Documentacion/. Por ejemplo, `propuesta_valor.md` menciona costos pero no enlaza a `costos_produccion.md`.
  - **Razón:** Los documentos son islas sin conexión entre sí.
  - **Consecuencia:** Dificulta la navegación y comprensión holística del proyecto.
  - **Recomendación:** Agregar referencias cruzadas al inicio o final de cada documento.

- **Hallazgo:** `Mapa_empatia.html` con nombre mixto español/inglés
  - **Evidencia:** `Documentacion/Validacion/Mapa_empatia.html`
  - **Razón:** Usa "Mapa" (español) + "empatia" (sin tilde, debería ser "empatía") + extensión .html. Inconsistencia con el resto de archivos que son .md.
  - **Consecuencia:** Pequeña inconsistencia de naming que dificulta encontrar archivos relacionados.
  - **Recomendación:** Renombrar a `mapa_empatia.md` si es contenido markdown, o eliminar si es un HTML redundante.

### 🔵 Bajos

- **Hallazgo:** Referencias en `propuesta_valor.md` sin formato canónico
  - **Evidencia:** `Documentacion/Modelo_de_negocio/propuesta_valor.md:128`
  - **Razón:** Lista fuentes sin año de acceso ni URL completa para algunas.
  - **Recomendación:** Estandarizar formato de citas.

- **Hallazgo:** `Qué es un One Pager y cuál es su propósito.docx.pdf` — nombre con extensión doble
  - **Evidencia:** `Documentacion/Entregables_concurso/Entregable_4/Qué es un One Pager y cuál es su propósito.docx.pdf`
  - **Razón:** El nombre del archivo incluye `.docx` y `.pdf`, probablemente renombrado manualmente. También contiene espacios y caracteres especiales.
  - **Recomendación:** Renombrar a `guia-one-pager.pdf`.

## Aspectos Positivos

- **Entrevistas de validación** (`entrevistas.md`): excelente calidad. 4 stakeholders reales (productor, HyS, seguro, bomberos) con citas textuales, insights clave y tabla resumen. Esto es material de oro para el proyecto.
- **Propuesta de valor** (`propuesta_valor.md`): completa, con mapa de valor por segmento, tabla de diferenciación frente a 4 alternativas, y matriz de impacto. Bien investigada y referenciada.
- **Descripción del problema** (`descripcion_problema.md`): respaldada con datos cuantitativos (INTA, FAO, EEAOC) y cualitativos vinculados a las entrevistas.
- **Costos de producción** (`costos_produccion.md`): desglose detallado por componente con justificación de selección técnica. Modelo de negocio claro con margen bruto objetivo del 50%.
- **Documentación completa del negocio**: 8 áreas cubiertas (problema, solución, validación, modelo de negocio, finanzas, impacto, presentación, entregables).
- Referencias a normativas y papers en Anexos.
- `md_to_docx.py` y `render_mermaid.py` presentes como herramientas de utilidad.

## Checklist de Cumplimiento

| Aspecto | Estado | Observación |
|---------|--------|-------------|
| Estructura | ⚠️ | AGENTS.md describe estructura inexistente |
| Contenido | ✅ | Alto calidad en entrevistas, propuesta de valor, problema |
| Entregables | ⚠️ | E4 incompleto; E1-E3 con formatos triplicados |
| Actualización | ❌ | Costos desactualizados vs hardware real; roadmap desfasado |
| Consistencia | ⚠️ | Sin referencias cruzadas entre documentos |
