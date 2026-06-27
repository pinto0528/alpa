# Auditoría de Cifras y Contenido — ALPA

> Enfocada en consistencia de datos numéricos y características
> técnicas clave en 32 archivos .md.

---

## H1 — Chip LoRa: SX1276 vs SX1262

| Archivo | Texto |
|---|---|
| `Documentacion/Finanzas_y_viabilidad/costos_produccion.md:16` | "Transmisor de largo alcance (**SX1276**) a 915 MHz" |
| `Documentacion/Modelo_de_negocio/operaciones.md:27` | "LoRa **SX1276**" |
| `Desarrollo_Tecnico/Hardware/Prototipos/prototipo_2.md:13` | "**Wio-SX1262** (shield LoRa)" |
| `Documentacion/Solucion_propuesta/descripcion_sistema.md:53` | "**Wio-SX1262** (Semtech SX1262, 915 MHz, +22 dBm)" |
| `Desarrollo_Tecnico/Hardware/Lista_materiales/lista_materiales.md:11` | "**Wio-SX1262** (shield LoRa)" |

**Problema:** SX1276 ≠ SX1262. Son chips LoRa distintos de Semtech. El hardware real usa Wio-SX1262 (chip SX1262). `costos_produccion.md` y `operaciones.md` están desactualizados.

**Fix:** Reemplazar "SX1276" → "SX1262" (Wio-SX1262) en ambos archivos.

---

## H2 — Sensor de humo: MQ-x vs digital 2-canales vs GP2Y1014

**Tres descripciones distintas para el mismo componente:**

| Archivo | Dice |
|---|---|
| `costos_produccion.md:17` | "Módulo integrado de humo (**gases CO/MQ**) + Temperatura y Humedad" (USD 18) |
| `prototipo_2.md:16` | "Sensor de humo (**digital 2-canales**)" |
| `lista_materiales.md:19` | "Alarma humo **Geneve 79.06.01** + **GP2Y1014AU0F** (óptico IR)" |
| `descripcion_sistema.md:56` | "**Canal dual digital** (A != B) + **GP2Y1014AU0F** (óptico IR)" |

**Problema:** `costos_produccion.md` describe un módulo MQ (gas analógico) que NO se usa. El hardware real usa sensor digital de 2 canales + GP2Y1014AU0F. El USD 18 no corresponde a los componentes reales.

**Fix:** Actualizar `costos_produccion.md` con la descripción y costo reales.

---

## H3 — Autonomía de batería: 24 h vs 6 h

| Archivo | Dice |
|---|---|
| `descripcion_sistema.md:21` | "Autonomía energética **>24 horas** sin recarga" |
| `descripcion_sistema.md:166` | "**>24 horas** (batería 3000 mAh + solar)" |
| `Presentacion_general/resumen_ejecutivo.md:44` | "más de **6 horas** de autonomía" |

**Problema:** Factor de 4x de diferencia. El dato técnico correcto (>24 h) está en `descripcion_sistema.md`; el resumen ejecutivo tiene 6 h que es un error.

**Fix:** Cambiar "6 horas" → ">24 horas" en `resumen_ejecutivo.md:44`.

---

## H4 — Precio de suscripción anual: USD 60 vs USD 120

| Archivo | Dice |
|---|---|
| `Modelo_de_negocio/proyecciones.md:8` | "**USD 60/año** por cliente" |
| `Presentacion_general/resumen_ejecutivo.md:32` | "suscripción anual (**$60/año**)" |
| `Impacto_y_sostenibilidad/metricas_impacto.md:104` | "Suscripción anual SaaS | **USD 120**" |

**Problema:** La suscripción SaaS es USD 60 en proyecciones/resumen pero USD 120 en metricas_impacto. Esto afecta el TCO mostrado en metricas_impacto (USD 450 año 1 usa USD 120).

**Fix:** Decidir valor real y unificar. Si es USD 60, corregir `metricas_impacto.md:104`.

---

## H5 — Temporada de alto riesgo: 5 meses vs 8 meses

| Archivo | Período |
|---|---|
| `Documentacion/Problema_y_contexto/impacto_productores.md:43-48` | "Tucumán/NOA: **Junio - Octubre** (~5 meses)" |
| `Documentacion/Problema_y_contexto/estadisticas_incendios.md:95` | "Tucumán: **Junio - Octubre**" |
| `Documentacion/Anexos/Normativas/normativas.md:51` | "Temporada de alto riesgo: **mayo a diciembre**" |

**Problema:** normativas.md dice 8 meses, los otros documentos dicen 5 meses. Si normativas.md cita la ley provincial, debe unificarse.

**Fix:** Revisar fuente oficial y unificar.

---

## H6 — Año 1: kits vendidos (25 / 35 / ~100)

| Archivo | Kits año 1 |
|---|---|
| `Modelo_de_negocio/proyecciones.md:23` | **35** |
| `Modelo_de_negocio/canales_relacion.md:87` | **25** (target lanzamiento) |
| `Modelo_de_negocio/mercado.md:35` | **~100** (SOM teórico) |

**Problema:** Tres cifras para el mismo indicador. Proyecciones (35) versus canales (25) versus SOM teórico (~100).

**Fix:** Unificar en proyecciones.md como referencia canónica (35).

---

## H7 — Gateway requiere WiFi pero se promociona "sin conectividad"

`descripcion_sistema.md:40` y `:202` dicen que el gateway usa WiFi.
`propuesta_valor.md:102` dice "Sí — LoRa/LoRaWAN" como respuesta a "Funciona sin conectividad?"

**Problema:** Si el campo no tiene WiFi en la vivienda, el gateway no funciona. La propuesta de valor es contradictoria.

**Fix:** Documentar que el gateway requiere WiFi o 4G opcional en la vivienda del productor, no en el lote.

---

## H8 — Supuesto de productor medio: 500 ha vs 650 ha

`metricas_impacto.md:46`: "Cada productor medio maneja **500 ha**"
`metricas_impacto.md:111` y `estadisticas_incendios.md:69`: cálculos usan campo de **650 ha** (INTA/FAO)

**Problema:** Diferencia entre el supuesto declarado y el usado en cálculos.

---

## H9 — PCB: diseñada (costos) vs protoboard (real)

`costos_produccion.md` asume "PCB de diseño propio" (USD 15 en "ESP32 + PCB").
`prototipo_2.md:18` y `escalabilidad.md:81-84` usan protoboard con cables dupont.

**Problema:** Los costos reflejan un producto futuro, no el prototipo actual. Si se presentan como costos actuales, son incorrectos.

---

## H10 — Nodos por gateway: 4 (firmware) vs 10 (teórico)

`descripcion_sistema.md:77`: "Hasta **4** nodos configurados" (mapping real)
`descripcion_sistema.md:164` y `escalabilidad.md:21`: "Hasta **10** (<1% colisión)"

**Problema:** El límite real del firmware es 4, pero los documentos mencionan 10 como máximo teórico. Deberían diferenciar.

---

## H11 — Caracteres chinos en escalabilidad.md

`escalabilidad.md:95`: "Caja estanca ABS **3D打印** o inyectada" — "3D打印" es "impresión 3D" en chino.

---

## H12 — Dashboard: tema claro vs dark mode

`descripcion_sistema.md:116`: Dashboard en "Dark mode (fondo #0f172a)"
`manual_identidad.md:64`: "Dashboard: Tema claro. Fondo #F5F5F5 (hueso)"

**Problema:** El sistema describe dark mode, el manual de identidad especifica tema claro.

---

## Resumen

| # | Prioridad | Archivos | Fix |
|---|---|---|---|
| H1 | 🔴 Alta | `costos_produccion.md:16`, `operaciones.md:27` | SX1276 → SX1262 |
| H2 | 🔴 Alta | `costos_produccion.md:17` | MQ → digital 2-canales + GP2Y1014, ajustar USD |
| H3 | 🔴 Alta | `resumen_ejecutivo.md:44` | 6 h → >24 h |
| H4 | 🔴 Alta | `metricas_impacto.md:104` | USD 120 → USD 60 |
| H5 | 🟡 Media | `normativas.md:51` | Unificar período riesgo |
| H6 | 🟡 Media | `canales_relacion.md:87`, `mercado.md:35` | Alinear con proyecciones (35) |
| H7 | 🟡 Media | `descripcion_sistema.md`, `propuesta_valor.md:102` | Documentar dependencia WiFi |
| H8 | 🟡 Media | `metricas_impacto.md:46` | Explicar 500 vs 650 ha |
| H9 | 🟡 Media | `costos_produccion.md` | Diferenciar prototipo vs producción |
| H10 | 🟡 Media | `descripcion_sistema.md:77,164` | Diferenciar 4 (real) vs 10 (teórico) |
| H11 | 🟢 Baja | `escalabilidad.md:95` | 3D打印 → impresión 3D |
| H12 | 🟢 Baja | `descripcion_sistema.md:116` | Alinear tema con manual_identidad |

---

*32 archivos .md auditados. Ejecutado el 2026-06-27 en rama `auditoria`.*
