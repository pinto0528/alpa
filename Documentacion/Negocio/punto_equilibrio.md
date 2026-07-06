# Punto de Equilibrio

**ALPA — Sistema de Alerta de Incendios Rurales**

**Fecha:** Junio 2026
**Versión:** 1.0

## Introducción

El punto de equilibrio permite determinar la cantidad mínima de clientes que el proyecto debe tener para cubrir todos sus costos, tanto fijos como variables. A partir de este punto, las suscripciones e ingresos comienzan a generar ganancia neta.

Dado que el modelo de negocio combina venta de hardware one-time con suscripción mensual recurrente, el punto de equilibrio se analiza en dos dimensiones: (a) cuántos kits de hardware vender para cubrir costos fijos, y (b) cuántos clientes activos se necesitan para que las suscripciones sostengan la operación.

---

## Datos Utilizados

### Precios

| Concepto | Valor |
|---|---|
| Gateway (venta) | USD 200 |
| Nodo sensor (venta) | USD 150 |
| Cliente promedio (6 nodos + 1 gateway) | USD 1.100 HW + USD 200/mes suscripción |
| Suscripción mensual | USD 200 |

### Costos Fijos Mensuales

| Concepto | USD/mes |
|---|---|
| Hosting y servidores | ~USD 150 |
| Dominio y herramientas | ~USD 50 |
| Mantenimiento plataforma | ~USD 50 |
| Gastos administrativos | ~USD 50 |
| **Total** | **USD 300** |

### Costos Variables por Cliente Nuevo

| Concepto | Valor |
|---|---|
| Costo gateway | USD 130 |
| Costo por nodo | USD 110 |
| Costo cliente promedio (6 nodos + gateway) | ~USD 790 |
| Costo operación suscripción (mensual) | ~USD 10 |

---

## Punto de Equilibrio — Hardware

Margen bruto por cliente promedio nuevo:

| Concepto | Valor |
|---|---|
| Ingreso HW cliente promedio | USD 1.100 |
| Costo HW cliente promedio | USD 790 |
| **Margen HW** | **USD 310** |

Con costos fijos de USD 300/mes:

> Punto de Equilibrio (hardware) = 300 / 310 = **~1 cliente nuevo por mes**

Teóricamente, **1 cliente nuevo por mes** cubre los costos fijos. En la práctica, la estacionalidad (ventas concentradas en Q2-Q3) hace que algunos meses no haya ingresos por hardware.

---

## Punto de Equilibrio — Suscripciones

Margen mensual por cliente suscripto:

| Concepto | Valor |
|---|---|
| Ingreso suscripción | USD 200/mes |
| Costo operación | USD 10/mes |
| **Margen suscripción** | **USD 190/mes** |

Clientes necesarios para cubrir costos fijos solo con suscripciones:

> Punto de Equilibrio (suscripciones) = 300 / 190 = **~2 clientes activos**

Con solo **2 clientes activos** en suscripción, los costos fijos mensuales están cubiertos. A partir del tercer cliente, la operación es rentable solo con ingresos recurrentes.

---

## Punto de Equilibrio Real (Estacional)

Las ventas de hardware son estacionales: se concentran en Q2 (previa a la zafra) y Q3 (pico de sequía), mientras que en Q1 no se proyectan ventas. El siguiente cuadro muestra el flujo del Año 1:

| Trimestre | Clientes nuevos | Ingreso HW | Ingreso suscripciones | Costo variable | Costo fijo | Resultado |
|-----------|:--------------:|:----------:|:---------------------:|:--------------:|:----------:|:---------:|
| **Q1** | 0 | USD 0 | USD 0 | USD 0 | USD 900 | **-USD 900** |
| **Q2** | 3 | USD 3.300 | USD 1.800 | USD 2.370 | USD 900 | **+USD 1.830** |
| **Q3** | 4 | USD 4.400 | USD 3.600 | USD 3.160 | USD 900 | **+USD 3.940** |
| **Q4** | 1 | USD 1.100 | USD 4.800 | USD 790 | USD 900 | **+USD 4.210** |
| **Anual** | **8** | **USD 8.800** | | **USD 6.320** | **USD 3.600** | **+USD 9.080** |

*Ingreso por suscripciones calculado como acumulado de clientes activos × USD 200/mes.*

El proyecto opera en pérdida durante Q1 (-USD 900), pero se recupera en Q2 con la primera tanda de ventas. **El punto de equilibrio real se alcanza en Q2 del Año 1**, y el resultado anual es positivo desde el primer año.

---

## Análisis de Sensibilidad

| Escenario | Precio kit prom. | Costo kit prom. | Margen HW | Clientes/mes para equilibrio |
|-----------|:---------------:|:---------------:|:---------:|:---------------------------:|
| **Optimista** | USD 1.200 | USD 750 | USD 450 | < 1 |
| **Esperado** | USD 1.100 | USD 790 | USD 310 | 1 |
| **Pesimista** | USD 900 | USD 800 | USD 100 | 3 |

---

## Conclusión

El proyecto presenta un punto de equilibrio bajo:

- **1 cliente nuevo por mes** cubre los costos fijos vía margen de hardware.
- **2 clientes activos en suscripción** cubren los costos fijos solo con ingresos recurrentes.

Esto demuestra que el modelo de negocio puede sostenerse desde el primer año, incluso con adopción inicial lenta. La combinación de venta de hardware + suscripción mensual genera un flujo de caja robusto: el hardware financia la adquisición, y la suscripción consolida la rentabilidad a largo plazo.

---

*ALPA - 2026*
