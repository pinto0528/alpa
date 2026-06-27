# Auditoría General ALPA — Segunda Ronda (Rama `auditoria`)

> Asumiendo que los hallazgos de las auditorías específicas de rama
> (`auditoria-comunicacion.md`, `auditoria-desarrollo-tecnico.md`,
> `auditoria-documentacion.md`) ya fueron corregidos o ignorados.
> Esta auditoría busca **nuevos errores** no detectados anteriormente.

---

## FIX APLICADOS (desde `fixes-pendientes.md`)

| Hallazgo original | Fix aplicado | Estado |
|---|---|---|
| Assets PNG sobredimensionados (7 × >1.5 MB) | Redimensionados + cuantizados a <500 KB | ✅ |
| Logo duplicado (logo.html, boceto-logo.ai) | Eliminados, solo logo.svg como canónico | ✅ |
| `render_mermaid.py` depende de servicio externo | Eliminado (no se usará Mermaid) | ✅ |

---

## NUEVOS HALLAZGOS

### H1 — `presentacion_marca.pdf` duplicado (4.7 MB × 2)

- **Archivos**: `Comunicacion/Branding/Identidad_visual/presentacion_marca.pdf` y `Documentacion/Entregables_concurso/Entregable_4/presentacion_marca.pdf`
- **Problema**: Archivo idéntico de 4.7 MB en dos ubicaciones. El canónico es el de Branding; la copia en Entregable_4 duplica innecesariamente el peso del repo.
- **Impacto**: +4.7 MB de basura en el repositorio.
- **Fix**: Eliminar la copia en `Documentacion/Entregables_concurso/Entregable_4/`.

### H2 — `mapa_empatia.png` sobredimensionado (7 MB)

- **Archivo**: `Documentacion/Anexos/Recursos_extra/mapa_empatia.png` (7266 KB)
- **Problema**: Es el archivo individual más pesado del repositorio. Un PNG de 7 MB es excesivo para un mapa de empatía. Los assets de Comunicacion/Assets ya fueron optimizados, pero este se pasó por alto.
- **Impacto**: +7 MB en el repo. Operaciones de clone/pull más lentas.
- **Fix**: Redimensionar (max 1200 px) y cuantizar a 256 colores con Pillow.

### H3 — AGENTS.md no refleja la estructura real del proyecto

- **Archivo**: `Documentacion/AGENTS.md:18-34`
- **Problema**: La estructura listada combina directorios de la raíz con directorios dentro de `Documentacion/`, dando una visión incorrecta:
  - Lista `Presentacion_general/`, `Problema_y_contexto/`, `Solucion_propuesta/` como si estuvieran en la raíz, pero en realidad están dentro de `Documentacion/`.
  - Omite directorios reales de la raíz: `Comunicacion/Assets/`, `Comunicacion/Branding/`, `Desarrollo_Tecnico/Hardware/`, `Desarrollo_Tecnico/Software/`, `scratch/`.
  - Referencia `roadmap.md` que no existe en el repositorio.
- **Impacto**: Dificulta la navegación de IA y humanos que confían en AGENTS.md como mapa del proyecto.
- **Fix**: Reescribir la sección de estructura para reflejar el árbol real.

### H4 — `Mapa_empatia.html` y `dashboard_estadisticas.html` sin paleta ALPA

- **Archivos**: `Documentacion/Validacion/Mapa_empatia.html` y `Documentacion/Problema_y_contexto/dashboard_estadisticas.html`
- **Problema**: Usan colores naranja/coral (`#c2410c`, `#ffedd5`) en vez del rojo institucional ALPA `#911B1E`. No incluyen el logo ALPA, la tagline ni la identidad visual del proyecto. Parecen templates genéricos sin relación con la marca.
- **Impacto**: Inconsistencia de marca en documentos públicos del proyecto.
- **Fix**: Reemplazar paleta naranja por `#911B1E` + `#F5F5F5` + `#222222`. Agregar logo ALPA y tagline en headers.

---

## ESTADÍSTICAS DEL REPOSITORIO

| Métrica | Valor |
|---|---|
| Peso total del repo (sin .git) | ~85 MB |
| Peso de .git | ~48 MB |
| Assets gráficos >500 KB tras fix | 0 (de 7 originales) |
| Archivos duplicados grandes | 1 (`presentacion_marca.pdf`) |
| Archivos sin branding ALPA | 2 HTML |
| Documentación desactualizada | `AGENTS.md` |

---

## ACCIONES RECOMENDADAS (prioridad)

1. **Alta**: Eliminar `presentacion_marca.pdf` duplicado en Entregable_4.
2. **Alta**: Optimizar `mapa_empatia.png` (7 MB → <500 KB).
3. **Media**: Reescribir `AGENTS.md` con estructura real.
4. **Media**: Aplicar paleta ALPA a `Mapa_empatia.html` y `dashboard_estadisticas.html`.

---

*Auditoría ejecutada el 2026-06-27 en rama `auditoria`.*
