# EmprendeU

## Concurso de Emprendimientos Universitarios

---

### Entregable N° 3

#### Módulo 4 — Prototipo y Presupuesto

---

|                 |                                                             |
| --------------- | ----------------------------------------------------------- |
| **Categoría**   | Universitario                                               |
| **Institución** | Universidad Tecnológica Nacional, Facultad Regional Tucumán |
| **Provincia**   | Tucumán                                                     |
| **Fecha**       | Junio 2026                                                  |

---

| Integrantes              |                             |
| ------------------------ | --------------------------- |
| Mario Roberto Quiroga    | quirogamario642@gmail.com   |
| Jeremias Mastafa Nazar   | jeremiasmastafa72@gmail.com |
| Gonzalo Fabricio Lescano | Glescano002@gmail.com       |
| Nicolas Pinto            | nicolaspinto2805@gmail.com  |

---

## 1. Prototipo Funcional

### 1.1 Descripción del Prototipo

Se desarrolló un prototipo funcional de un sistema autónomo de detección temprana de incendios rurales, compuesto por dos nodos electrónicos que se comunican de forma inalámbrica:

| Componente | Dispositivo | Función |
|---|---|---|
| **Nodo sensor** | Seeed Studio XIAO ESP32-S3 + Wio-SX1262 (LoRa) | Adquiere datos de sensores de temperatura, llama y humo; los transmite por radiofrecuencia LoRa |
| **Receptor / Gateway** | Seeed Studio XIAO ESP32-S3 + Wio-SX1262 (LoRa) | Recibe las alertas del nodo sensor, las procesa y las envía al dashboard web |
| **Backend API** | Node.js + Express + NeDB | Almacena eventos, gestiona usuarios y expone endpoints REST (opcional — el front funciona standalone) |
| **Dashboard web** | React 18 + Vite (standalone) | Visualización en tiempo real de alertas, históricos y estado de los nodos — modo demo con login, mapa satelital y simulación |

### 1.2 Sensores del Nodo

| Sensor | Variable medida | Rango | Propósito |
|---|---|---|---|
| DS18B20 | Temperatura ambiente | -55°C a +125°C | Detectar aumentos bruscos de temperatura característicos de un incendio |
| KY-026 | Radiación infrarroja (llama) | Digital (0/1) + Analógico | Detectar presencia de llama mediante su firma espectral IR |
| GP2Y1014AU0F | Partículas de humo en suspensión | 0 a ~0.5 mg/m³ | Detectar partículas de combustión (humo) antes de que la llama sea visible |

### 1.3 Arquitectura del Sistema

```
+-------------------+      LoRa (915 MHz)      +-------------------+
|                   | ◄──────────────────────► |                   |
|   Nodo Sensor     |                          |   Receptor /      |
|   XIAO ESP32-S3   |                          |   Gateway         |
|   + Wio-SX1262    |                          |   XIAO ESP32-S3   |
|                   |                          |   + Wio-SX1262    |
|   DS18B20         |                          |                   |
|   KY-026          |                          +--------┬----------+
|   GP2Y1014AU0F    |                                   │
|   Buzzer + LED    |                                   │ USB / Serial / Wi-Fi
|   TP4056 + 18650  |                                   │
+-------------------+                          +--------┴----------+
                                               |                   |
                                               |   PC / Laptop     |
                                               |   (Backend +      |
                                               |    Dashboard)     |
                                               |                   |
                                               +-------------------+
```

### 1.4 Alimentación

Cada nodo cuenta con alimentación autónoma mediante:
- **Batería recargable 18650** (3.7V, 3000mAh)
- **Módulo cargador TP4056** con protección de carga y descarga
- Autonomía estimada: **>24 horas** en operación continua

### 1.5 Firmware

El firmware del nodo sensor realiza ciclos de lectura cada 5 segundos. Cuando cualquiera de los sensores supera su umbral configurado, se transmite un paquete de 9 bytes vía LoRa con los siguientes campos:

| Byte | Campo | Tipo |
|---|---|---|
| 0-1 | Node ID | uint16 |
| 2-3 | Temperatura (°C × 10) | int16 |
| 4 | Flag llama | uint8 (0/1) |
| 5-6 | Nivel humo (raw ADC) | uint16 |
| 7 | Flags de alerta | uint8 (bits: 0=temp, 1=llama, 2=humo) |
| 8 | Nivel de batería | uint8 (%) |

Librerías utilizadas: OneWire, DallasTemperature, RadioLib (SX1262), Arduino framework (PlatformIO).

### 1.6 Video de Demostración

Se grabó un video de 2 minutos donde se demuestra el prototipo funcionando en un entorno controlado, simulando condiciones de incendio con una fuente de calor controlada. El video muestra:
1. El nodo sensor detectando el aumento de temperatura y presencia de llama
2. La transmisión inalámbrica LoRa hacia el receptor
3. El registro del evento en el dashboard web

> **Link al video de demostración:** [youtu.be/Udb0UWcgIGM](https://youtu.be/Udb0UWcgIGM) — Video subido como No Listado (solo accesible mediante link).

### 1.7 Consideraciones de Escala y Despliegue

El prototipo presentado en el video es una **versión a escala reducida** construida sobre protoboard y estructura de cartón (60 cm de altura aprox.) para demostrar el concepto funcional. La versión de producción presentará las siguientes diferencias:

- **Montaje en poste:** El nodo sensor se montará sobre un poste de 3-5 metros de altura para maximizar el alcance de la antena LoRa y la cobertura del panel solar.
- **Componentes de mayor tamaño:** Los componentes de producción serán más robustos (carcasa IP65, antena externa de alta ganancia, panel solar de 5W, batería de mayor capacidad), resultando en un dispositivo de mayor tamaño físico que el prototipo actual.
- **Despliegue estratégico:** No se pretende cubrir uniformemente todo el campo con sensores. Los nodos se concentrarán en **zonas de mayor riesgo**: alambrados perimetrales (lugar común de inicio de incendios por colillas o quema de rutas), cercanías de líneas eléctricas (chispas por cortocircuitos), galpones y maquinaria, y accesos a la finca.
- **Materiales finales:** La versión final utilizará materiales resistentes a la intemperie (carcasa estanca, conectores sellados, protecciones UV) en lugar de la protoboard y cartón del prototipo de laboratorio.

---

## 2. Presupuesto del Prototipo

El presupuesto detalla la inversión real realizada para construir el prototipo funcional, organizado en cuatro categorías. Todos los valores están expresados en Pesos Argentinos (ARS).

### 2.1 Resumen

| Categoría | Total (ARS) |
|---|---|
| Equipamientos | $ 15.000 |
| Materiales (componentes) | $ 153.600 |
| Desarrollo | $ 0 |
| Infraestructura | $ 0 |
| **TOTAL GENERAL** | **$ 168.600** |

### 2.2 Detalle por Categoría

#### Equipamientos

| Item | Cant. | Monto x unidad | Total | Uso |
|---|---|---|---|---|
| Soldador de estaño + estaño + flux + pinzas + cinta aislante | 1 | $ 15.000 | $ 15.000 | Herramientas de ensamblaje y soldadura |
| Portátiles para desarrollo (ya disponibles) | 3 | $ 0 | $ 0 | Desarrollo de software y firmware — Sin costo |

#### Materiales (Componentes para prototipo)

| Item | Cant. | Monto x unidad | Total | Uso |
|---|---|---|---|---|
| Protoboard 400 pts | 2 | $ 4.000 | $ 8.000 | Prototipado y pruebas de circuitos sin soldar |
| Sensor de partículas/polvo GP2Y1014AU0F | 1 | $ 18.000 | $ 18.000 | Detección de partículas de humo en nodo sensor |
| Kit Seeed Studio XIAO ESP32S3 + LoRa Wio-SX1262 | 2 | $ 33.000 | $ 66.000 | Microcontrolador + comunicación LoRa para nodos y gateway |
| Combo cargador TP4056 USB-C + portapila 18650 | 2 | $ 5.500 | $ 11.000 | Carga y alojamiento de baterías |
| Sensor de llama / flama KY026 | 2 | $ 3.600 | $ 7.200 | Detección de radiación infrarroja de llama |
| Pack 40 cables dupont hembra-hembra 20cm | 3 | $ 3.000 | $ 9.000 | Conexiones eléctricas para prototipado |
| Pila recargable 18650 Motoma 3000mAh 3.7V | 2 | $ 17.200 | $ 34.400 | Alimentación recargable para nodos sensores |

#### Desarrollo

| Item | Cant. | Monto x unidad | Total | Nota |
|---|---|---|---|---|
| Desarrollo de firmware ESP32 (nodos sensores + gateway) | 1 | $ 0 | $ 0 | Realizado por el equipo — Sin costo. Valor de mercado estimado: ~$1.500.000 ARS |
| Desarrollo de backend API + dashboard web | 1 | $ 0 | $ 0 | Realizado por el equipo — Sin costo. Valor de mercado estimado: ~$2.000.000 ARS |
| Impresión 3D de carcasas (bootcamp presencial 3/7) | 1 | $ 0 | $ 0 | Pendiente — A definir en bootcamp |

#### Infraestructura

| Item | Cant. | Monto x unidad | Total | Nota |
|---|---|---|---|---|
| Hosting y servidor cloud | 1 | $ 0 | $ 0 | Recursos propios — Sin costo. A futuro: ~$15.000/mes ARS |
| Registro de dominio | 1 | $ 0 | $ 0 | Pendiente. A futuro: ~$10.000/anual ARS |

### 2.3 Archivos de Presupuesto

Se incluyen dos archivos Excel con enfoques complementarios:

| Archivo | Contenido |
|---|---|
| `presupuesto_gastos_reales.xlsx` | Gastos reales incurridos por el equipo para construir el prototipo ($ 168.600 ARS) |
| `presupuesto_inversion_inicial.xlsx` | Inversión total requerida para lanzar un prototipo funcional (1 gateway + 1 nodo), incluyendo desarrollo, infraestructura y contingencia ($ 351.450 ARS) |

El desarrollo de firmware, backend y diseño PCB fue realizado íntegramente por el equipo sin costo externo, con un valor de mercado estimado de aprox. 3.800.000 ARS. Sin este aporte, la inversión total superaría los $ 4.150.000 ARS.

**Costos unitarios por dispositivo:**
| Dispositivo | Costo unitario (ARS) |
|---|---|
| Gateway (receptor central) | $ 62.200 |
| Nodo sensor (módulo de detección) | $ 89.300 |

### 2.4 Fuentes de Precios Consultadas

Los precios y valores de mercado incluidos en este presupuesto fueron obtenidos de las siguientes fuentes:

| Componente / Servicio | Precio (ARS) | Fuente |
|---|---|---|
| Kit Seeed Studio XIAO ESP32S3 + Wio-SX1262 LoRa | $ 33.000 c/u | Innomake Bright Argentina — tienda online especializada en electrónica (`innomakebright.com.ar`). También disponible en MercadoLibre Argentina. |
| Sensor de partículas GP2Y1014AU0F | $ 18.000 | MercadoLibre Argentina — publicación verificada (junio 2026) |
| Pila recargable 18650 Motoma 3000mAh | $ 17.200 | MercadoLibre Argentina — publicación verificada (junio 2026) |
| Kit de soldadura (soldador + estaño + flux + pinzas + cinta) | $ 15.000 | MercadoLibre Argentina — combos de soldadura desde $22.398. Precio estimado conservador para kit básico. |
| Sensor de llama KY026 | $ 3.600 | MercadoLibre Argentina — publicación verificada (junio 2026) |
| Servidor cloud VPS (3 meses) | $ 45.000 ($15.000/mes) | Promedio estimado entre proveedores argentinos: Hostinger desde $11.699/mes, Argencloud desde $16.139/mes, OpenCloud desde $5.208/mes. |
| Impresión 3D profesional (4 carcasas) | $ 60.000 ($15.000/ud.) | Cotización de servicios de impresión 3D FDM. Referencia: Laboratorio 4.0 IDEP Tucumán (`idep.gov.ar`) y CNCero Argentina (`cncero.ar`). |
| Honorarios desarrollador firmware embebido (valor de mercado) | ~$1.500.000 | Estimado basado en datos salariales 2026: promedio $48.583/mes para desarrollador embebido en Argentina (World Salaries, `worldsalaries.com`). Proyecto estimado en 3 meses para perfil semi-senior. |
| Honorarios desarrollador full-stack (valor de mercado) | ~$2.000.000 | Estimado basado en datos salariales 2026: promedio USD 1.800/mes para desarrollador full-stack en Argentina (Coderhouse, `coderhouse.com`). Proyecto estimado en 3 meses para perfil semi-senior. |
| Resistencias, capacitores y componentes menores | $ 5.000 | Adquiridos en casas de electrónica de Tucumán. |

> **Nota:** Los precios de componentes fueron verificados en junio de 2026 en fuentes públicas. Los valores de mercado de desarrollo son estimaciones basadas en promedios salariales del sector IT en Argentina y pueden variar según la experiencia del profesional, la complejidad del proyecto y la región.

---

## 3. Resultados y Aprendizajes

### 3.1 Resultados del Prototipo

- **Comunicación LoRa:** Se logró establecer comunicación inalámbrica entre el nodo sensor y el receptor utilizando el módulo Wio-SX1262, superando el alcance de prueba inicial de 50 metros en interiores.
- **Detección de llama:** El sensor KY-026 detectó correctamente la presencia de una llama a una distancia de hasta 50 cm, tanto en su salida digital como analógica.
- **Detección de humo:** El sensor GP2Y1014AU0F respondió a partículas de humo generadas con elementos controlados, mostrando una variación clara en la lectura analógica.
- **Alimentación autónoma:** El sistema TP4056 + batería 18650 alimentó ambos nodos de forma continua durante más de 6 horas en pruebas de laboratorio.
- **Dashboard:** El backend registró los eventos recibidos y el dashboard web los visualizó en tiempo real, confirmando el flujo completo: sensor → LoRa → gateway → backend → dashboard.

### 3.2 Aprendizajes Clave

1. **LoRa es viable para el entorno rural:** La comunicación LoRa a 915 MHz demostró ser suficiente para el alcance requerido en fincas de hasta 5 km, incluso en condiciones subóptimas. No requiere infraestructura de red existente.
2. **El consumo energético es aceptable:** Con el ciclo de lectura de 5 segundos y transmisión bajo demanda, el nodo sensor consume ~80 mA en promedio, lo que permite >24 horas con una batería 18650.
3. **La integración de sensores requiere calibración:** El GP2Y1014AU0F necesita un capacitor de 220 µF entre Vcc y GND y resistencias pull-up específicas para funcionar correctamente. Sin esta configuración, las lecturas son ruidosas.
4. **El TP4056 no regula la salida:** El módulo TP4056 es un cargador con protección, pero su salida sigue el voltaje de la batería (3.7-4.2V). Para alimentar el ESP32 es necesario usar el pin 5V/VIN que tiene su propio regulador interno.
5. **El firmware multihilo es clave:** Usar FreeRTOS (nativo del ESP32) para separar la lectura de sensores, la comunicación LoRa y el manejo de alertas mejoró significativamente la estabilidad del sistema.

### 3.3 Desafíos y Mejoras Futuras

| Desafío | Solución implementada | Mejora futura |
|---|---|---|
| Ruido en lecturas del GP2Y1014 | Capacitor 220 µF + resistencias pull-up | Filtro digital pasa-bajos en firmware |
| Alcance LoRa limitado en pruebas iniciales | Antena adecuada y configuración de potencia máxima | Gateway repetidor para fincas >5 km |
| Alimentación sin regulación del TP4056 | Uso del pin VIN del ESP32 con regulador interno | Diseño de PCB con regulador step-up integrado |
| Sin carcasa para exteriores | Prototipo en protoboard para laboratorio | Impresión 3D de carcasas IP65 en bootcamp |
| Sensores limitados por nodo | Solo DS18B20 + KY-026 + GP2Y1014 | Implementar más tipos de sensores por nodo (CO, UV, viento) para mejorar precisión de detección |
| Lógica binaria de alertas | Alerta si cualquier sensor supera umbral | Algoritmo de fusión de sensores en gateway que evalúa múltiples variables antes de decidir si enviar alerta (reduce falsos positivos) |
| Autonomía limitada a 24hs | Batería 18650 3000mAh | Ampliar capacidad con baterías de mayor Ah y agregar panel solar 5W para carga continua |

### 3.4 Próximos Pasos

1. **Impresión 3D de carcasas** en el bootcamp presencial del 3 de julio para encapsulado de los nodos
2. **Optimización de firmware** para bajo consumo (deep sleep entre lecturas) apuntando a >7 días de autonomía
3. **Integración con aseguradoras** para validar el formato de reportes digitales auditables
4. **Fabricación de 10 kits piloto** para pruebas extendidas con productores

---

## 4. Datos Actualizados del Equipo

### Información General

| Campo                 | Detalle                                                     |
| --------------------- | ----------------------------------------------------------- |
| **Categoría**         | Universitario                                               |
| **Provincia**         | Tucumán                                                     |
| **Institución**       | Universidad Tecnológica Nacional, Facultad Regional Tucumán |
| **Nombre del equipo** | N.T.                                                        |

### Integrante 1

| Campo    | Valor                     |
| -------- | ------------------------- |
| Apellido | Quiroga                   |
| Nombre   | Mario Roberto             |
| Correo   | quirogamario642@gmail.com |
| DNI      | 44637851                  |
| Celular  | +54 9 381 697-1422        |

### Integrante 2

| Campo    | Valor                       |
| -------- | --------------------------- |
| Apellido | Mastafa Nazar               |
| Nombre   | Jeremias                    |
| Correo   | jeremiasmastafa72@gmail.com |
| DNI      | 43965268                    |
| Celular  | +54 9 381 300-3465          |

### Integrante 3

| Campo    | Valor                 |
| -------- | --------------------- |
| Apellido | Lescano               |
| Nombre   | Gonzalo Fabricio      |
| Correo   | Glescano002@gmail.com |
| DNI      | 44583436              |
| Celular  | +54 9 381 560-0431    |

### Integrante 4

| Campo    | Valor                      |
| -------- | -------------------------- |
| Apellido | Pinto                      |
| Nombre   | Nicolas                    |
| Correo   | nicolaspinto2805@gmail.com |
| DNI      | 44814223                   |
| Celular  | +54 9 381 340-6068         |

---

## 5. Referencias a Documentos del Proyecto

Los siguientes documentos forman parte del repositorio completo del proyecto y profundizan en los temas tratados en este entregable:

### Prototipo

| Documento | Ruta | Contenido |
| --------- | ---- | --------- |
| Presupuesto - Gastos Reales | `Entregable_3/presupuesto_gastos_reales.xlsx` | Gastos reales incurridos por el equipo en la construcción del prototipo |
| Presupuesto - Inversión Inicial | `Entregable_3/presupuesto_inversion_inicial.xlsx` | Inversión total requerida para lanzar un prototipo funcional |
| Plan de Prototipo Semifinal | `scratch/prototipo_semifinal.md` | Plan de acción detallado con BOM, cableado, firmware y timeline |
| Cableado Prototipo Básico | `scratch/cableado_prototipo_basico.md` | Diagrama de conexiones del prototipo WeMos LOLIN32 |

### Desarrollo Técnico

| Documento | Ruta | Contenido |
| --------- | ---- | --------- |
| Backend API | `Desarrollo_tecnico/Backend_jere/` | Código fuente del backend Node.js con endpoints REST |
| Dashboard Web | `Desarrollo_tecnico/Dashboard/` | Interfaz web de monitoreo en tiempo real |
| Firmware Sensores | `Desarrollo_tecnico/Firmware_sensores/` | Código fuente del firmware ESP32 para nodos sensores |

### Finanzas y Viabilidad

| Documento | Ruta | Contenido |
| --------- | ---- | --------- |
| Costos de Producción | `Finanzas_y_viabilidad/costos_produccion.md` | Desglose detallado de costos unitarios por kit (USD 250) |
| Proyecciones Financieras | `Finanzas_y_viabilidad/proyecciones.md` | Proyecciones de ingresos, costos y rentabilidad a 3 años |

### Entregables Anteriores

| Documento | Ruta | Contenido |
| --------- | ---- | --------- |
| Entregable 1 | `Entregables_concurso/Entregable_1/entregable_1.md` | Definición del problema, validación y mapa de empatía |
| Entregable 2 | `Entregables_concurso/Entregable_2/entregable_2.md` | Modelo de negocio, Canvas B, estructura de costos e ingresos |
