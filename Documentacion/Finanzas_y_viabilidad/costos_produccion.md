# Costos de Producción

Para garantizar la viabilidad económica del proyecto y sostener el margen bruto objetivo del 50% (precio de venta: USD 500 / costo de fabricación objetivo: USD 250), se ha realizado un análisis exhaustivo de los costos de hardware y operativos.

Como equipo de estudiantes de la UTN, la principal estrategia en la fase inicial consiste en **absorber los costos de desarrollo de software y el ensamblaje básico**, permitiéndonos destinar el capital semilla exclusivamente a la adquisición de componentes de calidad industrial (carcasas IP65 y sensores calibrados) capaces de soportar el entorno crítico de la zafra tucumana.

## Costo Unitario del Nodo Sensor

El nodo sensor es la unidad autónoma que se despliega directamente en el terreno (lotes de caña o cítricos). Su diseño prioriza la eficiencia energética y la robustez climática.

### Cuadro 1: Desglose de Componentes del Nodo Sensor

| Componente | Especificación Técnica Seleccionada | Costo Unitario (USD) |
| --- | --- | --- |
| **Microcontrolador + PCB** | ESP32 + Placa de circuito impreso de diseño propio | USD 15.00 |
| **Módulo LoRa** | Transmisor de largo alcance (SX1262) a 915 MHz | USD 12.00 |
| **Sensores** | Sensor digital 2-canales + GP2Y1014AU0F (óptico IR) + DS18B20 + KY-026 | USD 18.00 |
| **Sistema Fotovoltaico** | Panel solar de silicio monocristalino (5W / 5V) | USD 15.00 |
| **Almacenamiento de Energía** | Pack de baterías LiPo (18650) con circuito de protección | USD 10.00 |
| **Gabinete Estanco** | Carcasa con certificación de estanqueidad IP65 y filtro UV | USD 20.00 |
| **Protección e Insumos** | Cableado con prensaestopas impermeables y conectores | USD 5.00 |
| **TOTAL HARDWARE NODO** | **Costo de materiales por unidad de detección** | **USD 95.00** |

## Costo Unitario del Gateway (Receptor Central)

El gateway actúa como puente de comunicación: recibe los datos de múltiples nodos mediante radiofrecuencia (LoRa) y los transmite a la nube a través de redes celulares (4G) o WiFi según la disponibilidad de la finca.

### Cuadro 2: Desglose de Componentes del Gateway

| Componente | Especificación Técnica Seleccionada | Costo Unitario (USD) |
| --- | --- | --- |
| **Procesador Base** | ESP32 con memoria extendida o microordenador embebido | USD 40.00 |
| **Módulo de Comunicación** | Concentrador LoRaWAN + Antena de alta ganancia (antivandálica) | USD 45.00 |
| **Estructura y Alimentación** | Caja estanca IP65 + Fuente de alimentación/Regulador | USD 20.00 |
| **TOTAL HARDWARE GATEWAY** | **Costo de materiales de la estación central** | **USD 105.00** |

## Costos Operativos Unitarios (Ensamblaje, Testing y Logística)

Dado que nos encontramos en una etapa universitaria, el proceso de fabricación inicial será semi-manual. Sin embargo, no se omiten los costos lógicos de logística e insumos de prueba para asegurar que ningún equipo falle en el campo, lo cual es vital para un sistema de gestión de emergencias.

### Cuadro 3: Costos Operativos por Kit Inicial

| Concepto | Justificación y Proceso Operativo | Costo Unitario (USD) |
| --- | --- | --- |
| **Ensamblaje** | Horas de taller dedicadas a la soldadura de componentes en PCB, montaje en gabinete y sellado estanco de conectores. | USD 15.00 |
| **Testing y Calibración** | Pruebas de estrés térmico en laboratorio y calibración fina de los umbrales de los sensores de gas para evitar falsos positivos. | USD 15.00 |
| **Logística y Embalaje** | Cajas de protección para traslado, manual de instalación rápida para el productor y flete de componentes. | USD 20.00 |
| **TOTAL OPERATIVO** | **Costo de puesta a punto por kit fabricado** | **USD 50.00** |

---

**Resumen del Costo de Fabricación Inicial por Kit (1 Nodo + 1 Gateway + Operativa):** USD 95.00 + USD 105.00 + USD 50.00 = **USD 250.00**

---

## Proyección de Costos según Volumen de Producción

Uno de los puntos fuertes del proyecto es su escalabilidad económica. A medida que incrementamos el volumen de producción, los costos fijos operativos se diluyen y se accede a mejores tarifas con proveedores internacionales de electrónica al comprar componentes al por mayor.

### Cuadro 4: Matriz de Proyección de Costos por Escalas de Volumen

| Concepto de Costo (USD) | 10 Unidades *(Fase Piloto / MVP)* | 100 Unidades *(Escala Inicial Local)* | 500 Unidades *(Producción Masiva)* |
| --- | --- | --- | --- |
| **Costo de Hardware (Nodo)** | USD 95.00 | USD 80.00 | USD 65.00 |
| **Costo de Hardware (Gateway)** | USD 105.00 | USD 90.00 | USD 75.00 |
| **Ensamblaje, Testing y Logística** | USD 50.00 | USD 40.00 | USD 30.00 |
| **COSTO UNITARIO TOTAL POR KIT** | **USD 250.00** | **USD 210.00** | **USD 170.00** |
| **Precio de Venta Sugerido** | USD 500.00 | USD 500.00 | USD 500.00 |
| **MARGEN BRUTO (%)** | **50.00%** | **58.00%** | **66.00%** |
| **Inversión de Producción Requerida** | **USD 2,500.00** | **USD 21,000.00** | **USD 85,000.00** |

> **Nota sobre inversión inicial:** La inversión de USD 2.500 para 10 unidades corresponde exclusivamente a hardware y operativa de fabricación. La inversión total para arrancar la Fase Piloto asciende a USD 2.950 al incluir herramientas de taller (USD 300) e insumos de matricería e impresión 3D (USD 150). Ver detalle completo en `Finanzas_y_viabilidad/necesidades_inversion.md`.

### Análisis de Eficiencia en Escala

- **De 10 a 100 unidades:** Se logra un ahorro del **16%** en el costo de fabricación por kit. Esto se debe principalmente al descuento por lote en la compra de módulos LoRa y microcontroladores ESP32, sumado a la optimización del tiempo de ensamblaje al estandarizar los procesos en el taller.
- **De 100 a 500 unidades:** El costo unitario disminuye un **32%** respecto a la fase piloto, situándose en USD 170. En este punto, el ensamblaje de las placas de circuito impreso (PCB) se puede tercerizar mediante tecnología de montaje superficial automatizada (SMT/PCBA), reduciendo los tiempos de fabricación a minutos y elevando el margen de ganancia del proyecto hasta un **66%**, lo cual dota al modelo de negocio de una alta salud financiera para su expansión en el NOA.

---

*Documento perteneciente al proyecto Sistema de Alerta de Incendios Rurales*
