# Necesidades de Inversión

**ALPA — Sistema de Alerta de Incendios Rurales**

**Fecha:** Junio 2026
**Versión:** 1.0

## Contexto y Visión desde el Ámbito Académico

Como equipo de estudiantes de la Universidad Tecnológica Nacional (UTN) de Tucumán, abordamos este proyecto buscando trascender el ejercicio teórico para resolver una problemática crítica de nuestra región: los incendios rurales durante la época de zafra y sequía. Al combinar herramientas de programación con los lineamientos de la Higiene y Seguridad en el Trabajo, hemos diseñado una solución tecnológica cuyo valor principal reside en la salvaguarda de la vida humana y la continuidad operativa del sector agroindustrial.

Para fundamentar la relación entre los riesgos identificados en el terreno y el impacto de nuestra solución bajo el marco de la **Ley 19.587**, se presenta la siguiente matriz:

### Cuadro 1: Matriz de Riesgos Laborales en Campo y Mitigación Tecnológica

| Riesgo Identificado | Impacto Operativo / Legal (Ley 19.587) | Mecanismo de Mitigación |
| --- | --- | --- |
| **Atrapamiento de operarios** | Riesgo crítico de muerte por cercamiento del fuego a maquinistas en lotes aislados. | Alerta temprana automatizada (< 5 min) con geolocalización para evacuación inmediata. |
| **Asfixia e intoxicación** | Exposición de trabajadores a densas columnas de humo antes de detectar el foco visualmente. | Sensores de gases y humo que activan alarmas silenciosas antes de que el humo sea denso en el ambiente. |
| **Sanciones por quema** | Multas provinciales (Ley 6.253) por incendios que ingresan desde propiedades vecinas. | Registro digital inalterable (*log* en la nube) con hora y coordenadas exactas del inicio del foco para deslinde legal. |

---

## Optimización de la Estructura de Costos

El modelo financiero establece un costo de fabricación estimado de **USD 250 por kit** y un precio de venta de **USD 500**, proyectando un margen bruto del 50%. La viabilidad de sostener estos costos en la fase de lanzamiento radica en que el equipo emprendedor absorbe la totalidad de las horas de desarrollo técnico (programación de microcontroladores ESP32, configuración de la red LoRa y diseño del *dashboard* web), eliminando el gasto de consultoría externa.

A continuación, se detalla el presupuesto requerido para la construcción de los primeros prototipos funcionales:

### Cuadro 2: Desglose de Inversión Inicial para Prototipado (Fase Piloto - 10 Unidades)

| Categoría | Descripción Técnica | Costo Estimado (USD) |
| --- | --- | --- |
| **Hardware Nodos (x10)** | ESP32, módulos LoRa, sensores de gas/temperatura, paneles solares 5W, baterías LiPo y gabinetes IP65. | $ 2,500.00 |
| **Herramientas de Taller** | Estación de soldadura, multímetro digital, herramientas de precisión y consumibles (estaño, fundas térmicas). | $ 300.00 |
| **Matricería y Modelado** | Filamento PETG/ABS e insumos de impresión 3D para soportes internos del hardware. | $ 150.00 |
| **TOTAL INVERSIÓN INICIAL** | **Capital requerido para el Producto Mínimo Viable (MVP)** | **$ 2,950.00** |

---

## Estrategia de Validación y Certificación Académica

Para garantizar que el hardware responda con fiabilidad en el entorno hostil de la zafra tucumana, se ha diseñado un plan de ensayos que aprovecha la infraestructura tecnológica de nuestra casa de estudios, minimizando costos externos de laboratorio.

### Cuadro 3: Plan de Ensayos y Validación en Laboratorios UTN FRT

| Ensayo Requerido | Objetivo del Test | Infraestructura / Laboratorio UTN | Costo Estimado |
| --- | --- | --- | --- |
| **Estanqueidad (Norma IP65)** | Validar que el gabinete soporte el polvo de la zafra y lluvias intensas sin dañar el circuito. | Laboratorio de Ensayos Mecánicos / Gestión con INTI Tucumán. | USD 0.00 (Vía convenio alumno) |
| **Estrés Térmico y Calibración** | Asegurar que los sensores no emitan falsos positivos ante las altas temperaturas ambientales del NOA. | Laboratorio de Electrónica (Uso de cámaras climáticas/hornos de prueba). | USD 0.00 (Recursos de la facultad) |
| **Validación de Radiofrecuencia** | Comprobar el alcance de la antena LoRa en la banda libre de 915 MHz simulando topografía del pedemonte. | Laboratorio de Telecomunicaciones (Analizadores de espectro). | USD 0.00 (Recursos de la facultad) |

---

## Plan de Financiamiento y Escalabilidad Financiera

Para evitar el endeudamiento bancario tradicional en etapas tempranas, el proyecto adoptará una estrategia de fondeo escalonada basada en hitos técnicos y programas de fomento al emprendimiento tecnológico universitario.

### Cuadro 4: Cronograma de Fondeo y Viabilidad Económica por Fases

| Fase de Proyecto | Meta Operativa | Fuente de Financiamiento | Impacto en el Proyecto |
| --- | --- | --- | --- |
| **Fase 0: Bootstrapping** | Desarrollo del prototipo de escritorio y software base. | Aportes propios de los integrantes del equipo. | Flexibilidad total y validación rápida del algoritmo de detección. |
| **Fase 1: Piloto Académico** | Fabricación de 10 kits e instalación en campos de prueba de Lules/Tafí Viejo. | Secretaría de Ciencia y Tecnología (SECyT - UTN) / Proyectos PID. | Validación del hardware en condiciones reales y obtención de métricas de campo. |
| **Fase 2: Escalamiento** | Producción en serie de los primeros lotes comerciales (100+ unidades). | Aportes No Reembolsables (ANR) del IDEP Tucumán / Fondo Semilla Nacional. | Reducción de costos por compra de componentes al por mayor y salida oficial al mercado. |

---

*ALPA - 2026*
