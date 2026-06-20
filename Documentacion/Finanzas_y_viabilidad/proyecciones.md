# Proyecciones Financieras

## Premisas del Modelo

- **Capacidad Operativa:** Durante el Año 1, el equipo dividirá su tiempo entre la cursada en la UTN y el emprendimiento. No se proyectan sueldos gerenciales, sino reinversión total de las utilidades (bootstrapping).
- **Estacionalidad:** Las mayores ventas ocurren en el Q2 (preventa por inicio de zafra) y Q3 (pico de sequía e incendios).
- **Costos Unitarios por Escala:** El costo de fabricación varía según el volumen de producción: USD 250/kit en fase piloto (Año 1) y USD 210/kit al alcanzar escala local (Año 2 en adelante). El precio de venta se mantiene en **USD 500**.
- **Suscripción (Software):** Durante el Año 1, el uso de la plataforma está bonificado con la compra del hardware para ganar adopción. A partir del Año 2, se cobra un mantenimiento de software anual mínimo (aprox. USD 60/año por cliente) para sostener servidores.
  - *Cálculo de suscripciones: los clientes del año corriente no pagan hasta el año siguiente. Por eso en Año 2 solo pagan los 35 clientes del Año 1 (35 × USD 60 = USD 2.100), y en Año 3 pagan los 120 clientes acumulados a fin de Año 2 (120 × USD 60 = USD 7.200).*

---

## Proyección de Ventas a 3 Años (Unidades por Trimestre)

*Nota: Unidades expresadas en "Kits" (1 Nodo + 1 Gateway).*

| Trimestre / Época | Año 1 (Validación) | Año 2 (Crecimiento Local) | Año 3 (Expansión Regional) | Justificación de la Demanda |
| --- | --- | --- | --- | --- |
| **Q1 (Ene-Mar)** | 0 | 5 | 15 | Época de lluvias. Ventas bajas; enfoque en desarrollo, mejoras del equipo y cursado. |
| **Q2 (Abr-Jun)** | 10 *(Piloto)* | 30 | 60 | Inicio de zafra. Los productores planifican la prevención. |
| **Q3 (Jul-Sep)** | 20 | 40 | 90 | **Pico crítico de sequía e incendios.** Mayor necesidad en el campo. |
| **Q4 (Oct-Dic)** | 5 | 10 | 25 | Fin de la temporada crítica. Compras rezagadas o de reposición. |
| **TOTAL UNIDADES** | **35 Kits** | **85 Kits** | **190 Kits** | Escala realista para ensamblaje semi-manual y tercerizado inicial. |

---

## Proyección de Ingresos vs. Costos (Anual)

| Concepto (Expresado en USD) | Año 1 | Año 2 | Año 3 |
| --- | --- | --- | --- |
| **Ingresos por Hardware** | $17.500 | $ 42.500 | $ 95.000 |
| **Ingresos por Suscripción** | $0 | $ 2.100 | $ 7.200 |
| **TOTAL INGRESOS** | **$ 17.500** | **$ 44.600** | **$ 102.200** |
| Costo Mercadería (Hardware) | $8.750 | $ 17.850 | $ 39.900 |
| Costos Fijos (Servidores, viáticos, marketing, certificaciones) | $3.600 | $ 7.500 | $ 15.000 |
| **TOTAL COSTOS** | **$ 12.350** | **$ 25.350** | **$ 54.900** |
| **UTILIDAD BRUTA (Antes de impuestos)** | **$ 5.150** | **$ 19.250** | **$ 47.300** |
| *Margen de Utilidad Bruta* | *29%* | *43%* | *46%* |

---

## Flujo de Caja Proyectado (Cash Flow Simplificado)

*Asume una inyección de capital inicial (subsidio SECyT o ahorros propios) de USD 3.000 para arrancar el Año 1 sin saldo negativo.*

| Concepto (Expresado en USD) | Año 1 | Año 2 | Año 3 |
| --- | --- | --- | --- |
| **Saldo Inicial (Caja)** | $3.000 | $ 8.150 | $ 27.400 |
| (+) Entradas (Ventas) | $17.500 | $ 44.600 | $ 102.200 |
| (-) Salidas (Costos variables + fijos) | $-12.350 | $ -25.350 | $ -54.900 |
| **FLUJO NETO DEL AÑO** | **$ 5.150** | **$ 19.250** | **$ 47.300** |
| **SALDO FINAL (Caja Acumulada)** | **$ 8.150** | **$ 27.400** | **$ 74.700** |

> **Nota:** El flujo de caja es positivo desde el primer año porque el equipo no retira dividendos ni sueldos gerenciales al inicio. El excedente de USD 8.150 al finalizar el Año 1 se utiliza como capital de trabajo para financiar la producción del Año 2, evitando depender de créditos con altas tasas de interés.

---

## Escenarios de Riesgo y Proyección

Para demostrar madurez comercial, se contemplan tres escenarios según el comportamiento del mercado rural y el acceso a financiamiento:

### A. Escenario Esperado (Base de la proyección actual)

- **Contexto:** El piloto en el Año 1 demuestra éxito. Se logra el boca a boca entre productores de limón y caña (ej. en Lules y el pedemonte). En el Año 2, el IDEP Tucumán otorga un Aporte No Reembolsable (ANR) que permite importar componentes al por mayor.
- **Hito clave:** Cierre de ventas con al menos un ingenio azucarero mediano.

### B. Escenario Pesimista

- **Contexto:** Alta resistencia al cambio tecnológico por parte de los agricultores tradicionales. Problemas graves con las importaciones limitan la entrada de componentes electrónicos, elevando los costos un 30%.
- **Impacto:** Las ventas se estancan en unas 20-30 unidades anuales, sostenidas solo por productores jóvenes ("early adopters") y barrios privados en zonas de interfase.
- **Plan de contingencia:** El equipo reduce los costos fijos a cero (manteniendo solo servidores básicos) y retrasa el egreso comercial masivo hasta finalizar sus estudios, sosteniendo el proyecto como un servicio de nicho.

### C. Escenario Optimista

- **Contexto:** Las validaciones del primer año son presentadas a una compañía de seguros agrícolas que decide homologar el sistema.
- **Impacto:** La aseguradora comienza a exigir el equipo o a dar grandes bonificaciones a los clientes que lo instalen. Las ventas superan los 400 equipos para el Año 3.
- **Plan de contingencia:** Ante la incapacidad operativa de tres estudiantes para ensamblar 400 equipos en pocos meses, se utiliza el flujo de caja positivo para subcontratar el ensamblaje básico de placas (PCBA) a empresas tecnológicas nacionales, dedicándose el equipo fundador exclusivamente a ventas, soporte y desarrollo de software.

---

*Documento perteneciente al proyecto Sistema de Alerta de Incendios Rurales*
