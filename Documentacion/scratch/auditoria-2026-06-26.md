# Auditoría - Documentación ALPA
**Fecha:** 2026-06-26 | **Nivel de severidad general:** Alto

## Resumen Ejecutivo

Se auditaron 63 archivos en `Documentacion/`. El hallazgo más grave es que `Presentacion_general/one_pager.pdf` es un archivo vacío de 0 bytes que el proyecto referencia como entregable oficial. Adicionalmente, la carpeta `scratch/` acumula 10+ archivos obsoletos (templates migrados e inventarios desactualizados) que deben purgarse. Hay un archivo intruso con nombre inválido (`QuÃ© es un One Pager...`) en `Entregable_4/`. En la rama `documentacion` no existe `entregable_4.md` (solo existe en `develop`).

## Hallazgos por Impacto

### 🔴 Críticos

- **Hallazgo:** `one_pager.pdf` es un archivo vacío de 0 bytes.
  - **Evidencia:** `Documentacion/Presentacion_general/one_pager.pdf` — tamaño 0 bytes.
  - **Razón:** El proyecto referencia este PDF desde `entregable_4.md` (sección 3: "El one pager se encuentra en `Documentacion/Presentacion_general/one_pager.pdf`"). Un archivo vacío no cumple con el propósito documentado.
  - **Recomendación:** Generar el one pager con el contenido planeado en `scratch/pendientes_carpetas/one_pager.md` o eliminarlo y referenciar el que existe en `Documentacion/Entregables_concurso/Entregable_4/one_pager.pdf`.

### 🟠 Altos

- **Hallazgo:** Archivo intruso con nombre inválido en `Entregable_4/`.
  - **Evidencia:** `Documentacion/Entregables_concurso/Entregable_4/QuÃ© es un One Pager y cuÃ¡l es su propÃ³sito.docx.pdf` (763 KB).
  - **Razón:** El nombre contiene espacios, caracteres especiales, doble extensión (.docx.pdf) y una frase en español. Viola todas las convenciones de nomenclatura del proyecto. No es un entregable del equipo, es un recurso de terceros.
  - **Recomendación:** Mover a `Anexos/Recursos_extra/` con nombre normalizado (`one_pager_guia_referencia.pdf`), o eliminar.

- **Hallazgo:** 8 templates obsoletos en `scratch/pendientes_carpetas/` cuyos destinos ya están poblados.
  - **Evidencia:** `scratch/pendientes_carpetas/normativas.md`, `papers.md`, `referencias.md`, `introduccion_proyecto.md`, `resumen_ejecutivo.md`, `descripcion_sistema.md`, `diagramas.md`, `one_pager.md`.
  - **Razón:** Los 7 primeros tienen sus archivos destino en `Anexos/`, `Presentacion_general/` y `Solucion_propuesta/` completamente poblados con contenido real. Estos templates son redundantes y generan confusión sobre cuÃ¡l es la versión vigente. El octavo (`one_pager.md`) aún no fue migrado porque el destino es 0 bytes.
  - **Recomendación:** Eliminar los 7 templates migrados. Conservar `one_pager.md` como referencia hasta que se genere el PDF real, o migrarlo también.

- **Hallazgo:** `entregable_4.md` no existe en la rama `documentacion`.
  - **Evidencia:** Confirmado por `find` en la rama actual. Entregables 1-3 tienen sus `.md`; Entregable 4 no.
  - **Razón:** Rompe la consistencia del proyecto. Cada entregable debería tener su documento markdown descriptivo.
  - **Recomendación:** Traer `entregable_4.md` desde `develop` o crearlo en la rama `documentacion`.

### 🟡 Medios

- **Hallazgo:** `Version_final/` vacío.
  - **Evidencia:** `Documentacion/Entregables_concurso/Version_final/` — 0 archivos.
  - **Razón:** Planeado como directorio de versiones corregidas post-entrega, pero nunca poblado. Si no va a usarse, debería eliminarse.
  - **Recomendación:** Poblarlo con las versiones finales de los entregables o eliminarlo.

- **Hallazgo:** `scratch/pendientes_carpetas.md` desactualizado.
  - **Evidencia:** Reporta como pendientes items que ya están completados.
  - **Razón:** Documento de planificación que ya no refleja el estado actual. Puede inducir a error.
  - **Recomendación:** Actualizar el checklist o archivarlo como histórico.

- **Hallazgo:** `scratch/inventario_md.md` con mÃºltiples imprecisiones.
  - **Evidencia:** Reporta archivos como vacÃos que ya tienen contenido, y directorios que ya no existen.
  - **Razón:** Es una foto histÃ³rica desactualizada.
  - **Recomendación:** Regenerar el inventario o eliminarlo.

### 🔵 Bajos

- **Hallazgo:** Inconsistencia de naming: `Mapa_empatia.html` usa Title_Case vs snake_case del resto de archivos en `Validacion/`.
  - **Evidencia:** `Validacion/Mapa_empatia.html` vs `Validacion/entrevistas.md`, `Validacion/perfil_usuario.md`, etc.
  - **Recomendación:** Renombrar a `mapa_empatia.html` para consistencia.

- **Hallazgo:** `pautas.pdf` en `Entregable_4/` no es un entregable del equipo.
  - **Evidencia:** `Entregables_concurso/Entregable_4/pautas.pdf` (699 KB) — son las pautas del concurso, no la entrega del equipo.
  - **Recomendación:** Mover a directorio de referencia externa o eliminar.

- **Hallazgo:** `scratch/` es el Ãºnico directorio en minÃºsculas en `Documentacion/`.
  - **Evidencia:** Todos los demÃ¡s directorios usan PascalCase.
  - **Recomendación:** Renombrar a `Scratch/` para consistencia (bajo impacto, depende de convención decidida).

## Aspectos Positivos

- La integración de los documentos de Mario en `Anexos/`, `Solucion_propuesta/` y `Presentacion_general/` fue correcta y los archivos tienen contenido sustancial.
- La estructura general de `Documentacion/` es lógica y bien organizada por tema (Modelo de negocio, Problema, Solución, Validación, Finanzas, etc.).
- Los entregables 1-3 están completos con `.md` + `.docx` + `.pdf` y documentación consistente.

## Checklist de Cumplimiento

| Aspecto | Estado | Observación |
|---------|--------|-------------|
| Estructura | ✅ | Bien organizada por tema |
| Código | N/A | No aplica a Documentacion/ |
| Documentación | ⚠️ | one_pager.pdf vacío, falta entregable_4.md en esta rama |
| Config/Stack | ✅ | Archivos de stack coherentes |
| Contenido | ⚠️ | Archivos huérfanos en scratch/, intruso en Entregable_4/ |
| Naming | ⚠️ | Un archivo con nombre inválido, algunas inconsistencias menores |
