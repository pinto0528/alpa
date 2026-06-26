# Auditoría — ALPA · Rama `comunicacion`
**Fecha:** 2026-06-26 | **Nivel de severidad general:** Alto

## Resumen Ejecutivo

La rama `comunicacion` contiene el branding, assets visuales y materiales de comunicación del proyecto. El manual de identidad es sólido y completo, pero los archivos de assets son excesivamente pesados (7 MB por imagen PNG), el tracking del logo en scratch y el manual sigue desactualizado respecto a los valores corregidos en brand-presentation.pdf, y el README describe una estructura que no coincide con esta rama. Los scratch HTMLs usan Inter en vez de Montserrat, contradiciendo el propio manual de identidad.

## Hallazgos por Impacto

### 🔴 Críticos

- **Hallazgo:** Tracking del logo desactualizado en 3 archivos
  - **Evidencia:** `Comunicacion/scratch/intro_slide.html:85-87`, `Comunicacion/scratch/outro_slide.html:85-87`, `Comunicacion/Branding/Logo/logo.svg:9-11`, `Comunicacion/Branding/Identidad_visual/manual_identidad.md:7`
  - **Razón:** Usan valores `dx: -11, -12, -20` en vez de los valores corregidos `+6, 0, -2` que están en `presentacion_marca.pdf`. El logo renderizado desde estos archivos se verá incorrecto.
  - **Consecuencia:** Cualquiera que genere el logo desde el SVG, los HTML de scratch, o siga el manual obtendrá un tracking visualmente distinto al aprobado en la presentación de marca.
  - **Recomendación:** Actualizar los 4 archivos con los valores correctos (`A→L: dx=6`, `L→P: dx=0`, `P→A: dx=-2`).

- **Hallazgo:** README describe estructura que no existe en esta rama
  - **Evidencia:** `README.md:30-39`
  - **Razón:** El README heredado de develop referencia `Desarrollo_tecnico/` y `Documentacion/`, carpetas que no existen en `comunicacion`.
  - **Consecuencia:** Cualquiera que clone esta rama y lea el README recibirá información falsa sobre la estructura del proyecto.
  - **Recomendación:** Adaptar el README a esta rama o eliminarlo y dejar solo el de develop.

- **Hallazgo:** Assets PNG con tamaño excesivo
  - **Evidencia:** `Comunicacion/Assets/antena.png` (7.2 MB), `sensor-llama.png` (6.7 MB), `sensor-temp.png` (6.8 MB), `sensor-humo.png` (5.7 MB), `sketch.png` (2.2 MB), `poncho.png` (1.6 MB), `poste.png` (2.1 MB)
  - **Razón:** Siete imágenes superan 1.5 MB. Una imagen de antena de 7.2 MB en PNG es irracional — debería pesar menos de 200 KB con optimización básica.
  - **Consecuencia:** El repositorio pesa ~33 MB solo en Assets/. Operaiones de clone, pull y fetch son más lentas sin beneficio alguno.
  - **Recomendación:** Optimizar todas las imágenes con `oxipng`, `pngquant` o similar. Apuntar a <500 KB por imagen.

### 🟠 Altos

- **Hallazgo:** Scratch HTMLs usan Inter en vez de Montserrat
  - **Evidencia:** `Comunicacion/scratch/intro_slide.html:9,13`, `outro_slide.html:9,13`
  - **Razón:** El manual de identidad (`manual_identidad.md:55`) especifica Montserrat para cuerpo/UI. Los slides de scratch cargan Inter de Google Fonts y lo usan como `font-family` principal.
  - **Consecuencia:** Inconsistencia tipográfica: los slides scratch no reflejan la identidad visual definida.
  - **Recomendación:** Reemplazar Inter por Montserrat en ambos HTMLs.

- **Hallazgo:** `notas.md` es una nota informal suelta en scratch
  - **Evidencia:** `Comunicacion/scratch/notas.md:1`
  - **Razón:** Contiene "cambiar el color de outro y de intro y de dashboard y del cuadro al color lino crudo que usamos" — una tarea pendiente sin contexto ni destinatario.
  - **Consecuencia:** Tareas pendientes mezcladas con archivos de trabajo generan ruido y desactualización.
  - **Recomendación:** Trasladar a un issue del repo o eliminar si ya se resolvió.

- **Hallazgo:** Logo duplicado en 3 formatos sin un canonical
  - **Evidencia:** `Comunicacion/Branding/Logo/boceto-logo.ai`, `logo.html`, `logo.svg`
  - **Razón:** Tres archivos representan el mismo logo. `boceto-logo.ai` es un binario propietario de Illustrator. `logo.html` envuelve el SVG en HTML. Solo `logo.svg` es el formato canónico.
  - **Consecuencia:** Dificulta saber cuál es la fuente de verdad del logo.
  - **Recomendación:** Mantener solo `logo.svg` como canonical. Eliminar `logo.html` (redundante). Evaluar si `boceto-logo.ai` es necesario o solo heredado.

- **Hallazgo:** No hay script para regenerar presentacion_marca.pdf desde los HTML
  - **Evidencia:** `Comunicacion/Branding/Identidad_visual/presentacion_marca.pdf` existe pero no hay Makefile, script ni instrucciones para regenerarlo.
  - **Razón:** Si alguien modifica los HTML de scratch, no puede regenerar el PDF sin adivinar el proceso (¿imprimir a PDF? ¿puppeteer? ¿wkhtmltopdf?).
  - **Consecuencia:** El PDF se fosiliza; el scratch evoluciona independientemente y el PDF queda desactualizado.
  - **Recomendación:** Agregar un script de build (`Herramientas/build_presentacion.sh` o similar) que convierta HTML→PDF.

### 🟡 Medios

- **Hallazgo:** `render_mermaid.py` depende de servicio externo sin fallback
  - **Evidencia:** `Herramientas/render_mermaid.py:7`
  - **Razón:** Usa `mermaid.ink` como único backend. Sin conexión o caída del servicio, el script no funciona.
  - **Consecuencia:** Fragilidad en la generación de diagramas.
  - **Recomendación:** Agregar fallback local con `mermaid-cli` (MMDC) o documentar la dependencia.

- **Hallazgo:** `brand-presentation-vertical.html` es un experimento sin etiquetar
  - **Evidencia:** `Comunicacion/scratch/brand-presentation-vertical.html` (925 líneas)
  - **Razón:** No está claro si es un entregable, un experimento descartado, o un work-in-progress. No se referencia desde ningún lado.
  - **Consecuencia:** Archivos huérfanos aumentan el ruido en el repo.
  - **Recomendación:** Agregar un comentario al inicio indicando su estado, o mover a una rama de experimentos.

### 🔵 Bajos

- **Hallazgo:** `render_mermaid.py` no valida argumentos de línea de comandos
  - **Evidencia:** `Herramientas/render_mermaid.py:2-9`
  - **Razón:** Asume `sys.argv[1]` sin verificar. Si se invoca sin argumento, lanza IndexError.
  - **Recomendación:** Agregar validación: `if len(sys.argv) < 2: print("Uso: ..."); sys.exit(1)`.

## Aspectos Positivos

- Manual de identidad visual completo, coherente y bien estructurado con paleta, tipografía, usos del logo y tono de voz.
- `md_to_docx.py` es un script robusto con buen parsing de markdown, manejo de tablas, listas, blockquotes e imágenes.
- Assets visuales abundantes y de calidad temática (moods, sensores, diagramas).
- Logo disponible en SVG, PNG (rojo y hueso), y AI — múltiples formatos para distintos usos.
- Outro slide incluye correctamente los nombres y roles del equipo.
- Paleta de colores bien definida y aplicada consistentemente en los archivos revisados (rojo inca, lino crudo, pizarra, hueso).

## Checklist de Cumplimiento

| Aspecto | Estado | Observación |
|---------|--------|-------------|
| Estructura | ✅ | Limpia y organizada: Assets/, Branding/, scratch/ |
| Código | ⚠️ | Scripts funcionales pero frágiles (render_mermaid) |
| Documentación | ⚠️ | README desactualizado; manual de identidad completo |
| Marca | ⚠️ | Tracking desactualizado en 4 archivos; tipografía Inter vs Montserrat |
| Contenido | ⚠️ | Assets sobredimensionados; scratch con archivos huérfanos |
