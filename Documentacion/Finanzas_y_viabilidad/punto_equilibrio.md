# Punto de Equilibrio

## Introducción

El punto de equilibrio es una herramienta financiera que permite determinar la cantidad mínima de unidades que una empresa debe vender para cubrir todos sus costos, tanto fijos como variables. A partir de este punto, las ventas comienzan a generar ganancias y el proyecto se vuelve rentable.

En el caso de nuestro sistema de alerta temprana de incendios rurales, conocer el punto de equilibrio es importante para evaluar la viabilidad económica del proyecto y estimar cuánto tiempo sería necesario para recuperar la inversión inicial.

---

## Datos Utilizados

Para realizar este análisis se tomaron valores estimados correspondientes a la etapa inicial del proyecto.

### Costos Fijos Mensuales

Los costos fijos son aquellos que deben afrontarse independientemente de la cantidad de equipos vendidos. Incluyen:

| Concepto | Descripción |
|----------|-------------|
| Hosting y servidores | Plataforma web y almacenamiento |
| Almacenamiento y respaldo de datos | Base de datos y backups |
| Dominio y mantenimiento del sistema | Registro de dominio y actualizaciones |
| Herramientas de desarrollo | Licencias de software y repositorios |
| Gastos administrativos y operativos | Gestión general del proyecto |

**Costo fijo mensual estimado: USD 300**

### Costos Variables

Los costos variables dependen directamente de la cantidad de kits fabricados e instalados. Cada kit incluye:

- ESP32
- Sensores de temperatura y humo
- Módulo LoRa
- Panel solar
- Batería recargable
- Carcasa resistente
- Ensamblaje y pruebas
- Instalación y logística

**Costo variable estimado por kit: USD 250**

### Precio de Venta

Se estima un precio promedio de venta de **USD 500 por kit**.

### Margen de Contribución

| Concepto | Valor |
|----------|-------|
| Precio de venta | USD 500 |
| Costo variable por kit | USD 250 |
| **Margen de contribución por kit** | **USD 250** |

Este valor representa la ganancia generada por cada kit para cubrir los costos fijos del proyecto.

---

## Cálculo del Punto de Equilibrio

Para calcular el punto de equilibrio se utiliza la siguiente fórmula:

> Punto de Equilibrio = Costos Fijos / Margen de Contribución

Reemplazando los valores obtenidos:

> 300 / 250 = 1.2

Como no es posible vender una fracción de un producto, el resultado se redondea al número entero superior.

### Resultado

| Indicador | Valor |
|-----------|-------|
| Unidades necesarias por mes | **2 kits** |
| Ingreso mensual mínimo | **USD 1.000** |

El proyecto necesita vender aproximadamente **2 kits por mes** para cubrir completamente sus costos operativos. A partir de la tercera venta mensual, el sistema comenzaría a generar beneficios económicos.

---

## Tiempo Estimado para Alcanzar el Punto de Equilibrio

Considerando que durante los primeros meses se espera comercializar entre dos y cinco kits mensuales, el proyecto podría alcanzar el punto de equilibrio desde el inicio de sus operaciones comerciales.

Además, el modelo incorpora ingresos recurrentes provenientes de las suscripciones mensuales de monitoreo, lo que permite acelerar la recuperación de la inversión inicial y mejorar la estabilidad financiera a largo plazo.

Por esta razón, se estima que el proyecto podría consolidar su rentabilidad durante los primeros meses de funcionamiento, siempre que se mantenga un flujo constante de clientes.

### Estacionalidad y Punto de Equilibrio Real

Las ventas del sistema son **altamente estacionales**: se concentran en Q2 (previa a la zafra) y Q3 (pico de sequía e incendios), mientras que en Q1 (enero-marzo) no se proyectan ventas. Esto implica que el punto de equilibrio mensual de 2 kits no se alcanza en todos los trimestres.

| Trimestre | Unidades | Ingreso | Costo Variable | Costo Fijo | Resultado |
|-----------|:-------:|:-------:|:--------------:|:----------:|:---------:|
| **Q1 (Ene-Mar)** | 0 | USD 0 | USD 0 | USD 900 | **-USD 900** |
| **Q2 (Abr-Jun)** | 10 | USD 5.000 | USD 2.500 | USD 900 | **+USD 1.600** |
| **Q3 (Jul-Sep)** | 20 | USD 10.000 | USD 5.000 | USD 900 | **+USD 4.100** |
| **Q4 (Oct-Dic)** | 5 | USD 2.500 | USD 1.250 | USD 900 | **+USD 350** |
| **Anual** | **35** | **USD 17.500** | **USD 8.750** | **USD 3.600** | **+USD 5.150** |

El proyecto opera en pérdida durante el Q1 (-USD 900), pero ese déficit se recupera en Q2 con la primera tanda de ventas de la temporada. **El punto de equilibrio real se alcanza en Q2 del Año 1**, y el resultado anual es positivo desde el primer año.

> *Fuente: proyecciones.md — distribución trimestral de ventas y estructura de costos.*

---

## Análisis de Sensibilidad

Debido a que los costos de componentes electrónicos pueden variar y el precio de venta puede modificarse según las condiciones del mercado, resulta importante analizar distintos escenarios.

### Escenario Optimista

| Concepto | Valor |
|----------|-------|
| Precio de venta | USD 550 |
| Costo variable | USD 240 |
| Margen por kit | USD 310 |
| Punto de equilibrio | 300 / 310 = 0.97 → **1 kit por mes** |

### Escenario Esperado

| Concepto | Valor |
|----------|-------|
| Precio de venta | USD 500 |
| Costo variable | USD 250 |
| Margen por kit | USD 250 |
| Punto de equilibrio | 300 / 250 = 1.2 → **2 kits por mes** |

### Escenario Pesimista

| Concepto | Valor |
|----------|-------|
| Precio de venta | USD 450 |
| Costo variable | USD 300 |
| Margen por kit | USD 150 |
| Punto de equilibrio | 300 / 150 = 2 → **2-3 kits por mes** |

---

## Conclusión

El análisis realizado muestra que el proyecto presenta un punto de equilibrio relativamente bajo, lo cual representa una ventaja importante para su viabilidad económica. La necesidad de vender solamente dos kits mensuales para cubrir los costos operativos demuestra que el modelo de negocio puede sostenerse incluso en una etapa inicial de adopción.

Además, la combinación de venta de hardware, suscripciones de monitoreo y acuerdos con aseguradoras genera múltiples fuentes de ingresos, reduciendo el riesgo financiero y aumentando las posibilidades de crecimiento del emprendimiento.

Por lo tanto, desde el punto de vista económico, el sistema de alerta temprana de incendios rurales se presenta como una propuesta sostenible y con potencial de expansión dentro del sector agropecuario de Tucumán y del NOA.

---

*Documento perteneciente al proyecto Sistema de Alerta de Incendios Rurales*
