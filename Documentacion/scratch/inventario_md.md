# Inventario de archivos .md

Total: 50 archivos (excluye node_modules/ y Archivo/).

---

## Raíz del proyecto (5) — artefactos de la fusión

| Archivo | Contenido | ¿Ubicación coherente? |
|---------|-----------|----------------------|
| `00_RESUMEN_EJECUTIVO.md` | Resumen del proceso de fusión Drive + SeaDrive | Sí (raíz), pero son temporales — podrían ir a `_audit/` |
| `01_INVENTARIO_ORIGEN1_DRIVE.md` | Árbol completo del origen Google Drive | ídem |
| `02_INVENTARIO_ORIGEN2_SEADRIVE.md` | Árbol completo del origen SeaDrive | ídem |
| `03_DIFERENCIAS.md` | Comparación estructural entre ambos orígenes | ídem |
| `04_RECOMENDACIONES.md` | Estructura recomendada post-fusión | ídem |

---

## Documentacion/ — Índices del proyecto (2)

| Archivo | Contenido | ¿Ubicación coherente? |
|---------|-----------|----------------------|
| `AGENTS.md` | Overview del proyecto: stack, estructura, convenciones | Sí |
| `roadmap.md` | Roadmap por fases (Investigación → Entregables) | Sí |

---

## Documentacion/Documentacion/ — **ANIDADO REDUNDANTE** ⚠️

| Archivo | Contenido | ¿Ubicación coherente? |
|---------|-----------|----------------------|
| `faq.md` | **Vacío** — FAQ planeado | **No** → debería ir a `Documentacion/faq.md` |
| `manual_tecnico.md` | **Vacío** — Manual técnico planeado | **No** → debería ir a `Documentacion/manual_tecnico.md` |
| `manual_usuario.md` | **Vacío** — Manual de usuario planeado | **No** → debería ir a `Documentacion/manual_usuario.md` |

---

## Documentacion/ — Contenido real por área

### Presentacion_general/ (2)

| Archivo | Contenido | ¿Ubicación coherente? |
|---------|-----------|----------------------|
| `introduccion_proyecto.md` | **Vacío** | Sí (placeholder) |
| `resumen_ejecutivo.md` | **Vacío** (distinto del `00_` que es el audit de fusión) | Sí (placeholder) |

### Problema_y_contexto/ (4)

| Archivo | Contenido | ¿Ubicación coherente? |
|---------|-----------|----------------------|
| `causas_consecuencias.md` | Causas raíz y consecuencias de incendios rurales en Argentina | Sí |
| `descripcion_problema.md` | Statement del problema: falta de detección temprana accesible | Sí |
| `estadisticas_incendios.md` | Estadísticas históricas, hectáreas afectadas, desglose provincial | Sí |
| `impacto_productores.md` | Impacto emocional, operativo y económico en productores | Sí |

### Solucion_propuesta/ (2)

| Archivo | Contenido | ¿Ubicación coherente? |
|---------|-----------|----------------------|
| `descripcion_sistema.md` | **Vacío** | Sí (placeholder) |
| `Arquitectura_general/flujo_datos.md` | **Vacío** | Sí (placeholder) |

### Prototipado_y_validacion/ (5)

| Archivo | Contenido | ¿Ubicación coherente? |
|---------|-----------|----------------------|
| `dolores_frustraciones.md` | Dolencias de usuarios con testimonios directos | Sí |
| `entrevistas.md` | Entrevistas de validación con productores, aseguradoras, bomberos | Sí |
| `perfil_usuario.md` | Persona de usuario: demografía, actitudes | Sí |
| `segmentos_afectados.md` | Segmentos primario, secundario y terciario | Sí |
| `soluciones_actuales.md` | Soluciones existentes (patrullajes, torres) y sus limitaciones | Sí |

### Modelo_de_negocio/ (7)

| Archivo | Contenido | ¿Ubicación coherente? |
|---------|-----------|----------------------|
| `canales_relacion.md` | Canales de distribución y relación con clientes | Sí |
| `ingresos_costos.md` | Revenue streams (kits + SaaS) y estructura de costos | Sí |
| `mercado.md` | TAM, SAM, SOM y panorama competitivo | Sí |
| `operaciones.md` | Plan operativo: equipo, recursos, actividades clave | Sí |
| `proposito.md` | Misión del proyecto | Sí |
| `propuesta_valor.md` | Propuesta de valor: detección autónoma en <5 min | Sí |
| `segmentos_clientes.md` | Segmentos: B2C (productores), B2B (seguros), B2G (gobierno) | Sí |

### Impacto_y_sostenibilidad/ (2)

| Archivo | Contenido | ¿Ubicación coherente? |
|---------|-----------|----------------------|
| `escalabilidad.md` | **Vacío** | Sí (placeholder) |
| `metricas_impacto.md` | Métricas: productores alcanzados, hectáreas monitoreadas, empleos | Sí |

### Finanzas_y_viabilidad/ (4)

| Archivo | Contenido | ¿Ubicación coherente? |
|---------|-----------|----------------------|
| `costos_produccion.md` | Costos de producción por nodo sensor (~USD 250) | Sí |
| `necesidades_inversion.md` | Necesidades de inversión con matriz de riesgo | Sí |
| `proyecciones.md` | Proyecciones financieras a 3 años | Sí |
| `punto_equilibrio.md` | Análisis de punto de equilibrio | Sí |

### Comunicacion/ (1)

| Archivo | Contenido | ¿Ubicación coherente? |
|---------|-----------|----------------------|
| `Pitch/guion.md` | **Vacío** — Guion de pitch planeado | Sí |

### Entregables_concurso/ (3)

| Archivo | Contenido | ¿Ubicación coherente? |
|---------|-----------|----------------------|
| `Entregable_1/entregable_1.md` | Deliverable 1: definición del problema + validación | Sí |
| `Entregable_2/entregable_2.md` | Deliverable 2: modelo de negocio | Sí |
| `Entregable_3/entregable_3.md` | Deliverable 3: prototipo y presupuesto | Sí |

---

## Documentacion/scratch/ — Notas y borradores (6)

| Archivo | Contenido | ¿Ubicación coherente? |
|---------|-----------|----------------------|
| `cableado_prototipo2.md` | Pinout y cableado del Prototipo 2 (XIAO + LoRa) | Sí (scratch), pero también calza en `Firmware_sensores/` |
| `cableado_prototipo_basico.md` | Cableado del prototipo básico (WeMos) | ídem |
| `dashboard-backend-design.md` | Documento de diseño del Dashboard + Backend (587 líneas) | Sí (scratch), pero calza en `Software/` como design doc |
| `inventario_componentes.md` | Inventario de componentes hardware disponibles y pedidos | Sí (scratch), pero calza en `Desarrollo_tecnico/` |
| `paso_a_paso_prototipo2.md` | Instructivo paso a paso del Prototipo 2 | Sí (scratch), pero calza en `Firmware_sensores/` |
| `prototipo_semifinal.md` | Plan de acción para el prototipo semifinal (tareas, fechas) | Sí, coherente como sprint plan en scratch |

---

## Desarrollo_tecnico/ (4)

| Archivo | Contenido | ¿Ubicación coherente? |
|---------|-----------|----------------------|
| `Comunicaciones/envio_nube.md` | **Vacío** — Documentación de envío a la nube planeada | Sí |
| `Software/AGENTS.md` | Runbook técnico: cómo correr backend, frontend, seed data | Sí (README del subproyecto Software) |
| `Software/Firmware_sensores/nodo_sensor/receptor_firmware.md` | Documentación del firmware receptor LoRa (XIAO + SX1262) | Sí |
| `Software/Firmware_sensores/nodo_sensor/sesion_2026-06-12b.md` | Notas de sesión sobre pinout del transmisor | Sí, pero también calza en `Documentacion/scratch/` |

---

## Resumen de problemas encontrados

1. **`Documentacion/Documentacion/`** — 3 archivos anidados en una carpeta redundante. Deberían subir un nivel.
2. **10 archivos vacíos** (0 bytes) — Placeholders que están bien si se van a completar, sino sobrarían.
3. **scratch/ vs Desarrollo_tecnico/** — 5 archivos en scratch/ son técnicos y calzan mejor en `Desarrollo_tecnico/`, pero al estar scratch/ definido como "borradores", no está mal que estén ahí.
4. **5 archivos raíz `00_` a `04_`** — Son temporales del merge; se pueden archivar cuando ya no hagan falta.
