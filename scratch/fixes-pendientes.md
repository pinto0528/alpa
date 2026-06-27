- **Hallazgo:** Assets PNG con tamaño excesivo
  - **Evidencia:** `Comunicacion/Assets/antena.png` (7.2 MB), `sensor-llama.png` (6.7 MB), `sensor-temp.png` (6.8 MB), `sensor-humo.png` (5.7 MB), `sketch.png` (2.2 MB), `poncho.png` (1.6 MB), `poste.png` (2.1 MB)
  - **Razón:** Siete imágenes superan 1.5 MB. Una imagen de antena de 7.2 MB en PNG es irracional — debería pesar menos de 200 KB con optimización básica.
  - **Consecuencia:** El repositorio pesa ~33 MB solo en Assets/. Operaiones de clone, pull y fetch son más lentas sin beneficio alguno.
  - Fix: Optimizar todas las imágenes con `oxipng`, `pngquant` o similar. Apuntar a <500 KB por imagen.

  - **Hallazgo:** Logo duplicado en 3 formatos sin un canonical
  - **Evidencia:** `Comunicacion/Branding/Logo/boceto-logo.ai`, `logo.html`, `logo.svg`
  - **Razón:** Tres archivos representan el mismo logo. `boceto-logo.ai` es un binario propietario de Illustrator. `logo.html` envuelve el SVG en HTML. Solo `logo.svg` es el formato canónico.
  - **Consecuencia:** Dificulta saber cuál es la fuente de verdad del logo.
  - **Recomendación:** Mantener solo `logo.svg` como canonical.Fix: Eliminar `logo.html` y `boceto-logo.ai`

  - **Hallazgo:** `render_mermaid.py` depende de servicio externo sin fallback
  - **Evidencia:** `Herramientas/render_mermaid.py:7`
  - **Razón:** Usa `mermaid.ink` como único backend. Sin conexión o caída del servicio, el script no funciona.
  - **Consecuencia:** Fragilidad en la generación de diagramas.
  - **Recomendación:** Agregar fallback local con `mermaid-cli` (MMDC) o documentar la dependencia.
  - fix: desechar todo lo relacionado con mermaid, no lo usaremos

