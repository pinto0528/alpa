# Ingresos y Costos

## Fuentes de Ingresos

### 1. Venta de Kits de Detección (One-Time)

El producto principal es un kit de detección temprana de incendios rurales compuesto por:

- Nodo sensor inteligente
- Módulo de comunicación LoRa
- Panel solar
- Batería recargable
- Carcasa resistente para exteriores
- Gateway de comunicación

El cliente realiza un único pago por la compra e instalación inicial del sistema.

### 2. Suscripción Anual de Monitoreo

Los productores acceden a una plataforma de monitoreo mediante una suscripción anual que incluye:

- Dashboard en tiempo real
- Historial de eventos
- Alertas automáticas
- Geolocalización de incidentes
- Actualizaciones de software
- Reportes descargables

Este modelo genera ingresos recurrentes y asegura el mantenimiento de la plataforma.

### 3. Licenciamiento para Aseguradoras

Las aseguradoras agrícolas contratan acceso a información auditada del sistema. Beneficios:

- Validación de medidas preventivas
- Historial de funcionamiento del sistema
- Reportes de eventos
- Reducción de siniestralidad

El licenciamiento se cobra de forma anual o por cantidad de establecimientos monitoreados.

### 4. Bonificaciones de Póliza

El sistema permite que las aseguradoras otorguen descuentos en pólizas a productores que instalen la tecnología. Esto funciona como incentivo para aumentar la adopción del producto y generar acuerdos comerciales entre la empresa y las aseguradoras.

> **Nota:** Las licencias B2B con aseguradoras se encuentran en etapa de validación comercial. No se incluyen en las proyecciones financieras hasta contar con al menos un acuerdo firmado.

---

## Estructura de Costos

### Costos Fijos

Son costos que existen independientemente de la cantidad de equipos vendidos:

| Concepto | Descripción |
|----------|-------------|
| Hosting y servidores cloud | Infraestructura para plataforma de monitoreo |
| Dominio web | Registro y renovación anual |
| Herramientas de desarrollo | Licencias de software, IDE, repositorios |
| Almacenamiento de datos | Base de datos y respaldos |
| Mantenimiento de la plataforma | Actualizaciones, parches de seguridad |
| Espacio de trabajo y administración | Gastos operativos generales |

### Costos Variables

Dependen directamente de la cantidad de kits fabricados e instalados. Por cada kit:

| Componente | Descripción |
|------------|-------------|
| ESP32 | Microcontrolador principal |
| Sensores de humo y temperatura | Módulo de detección multi-parámetro |
| Módulo LoRa | Comunicación de largo alcance |
| Panel solar | Sistema fotovoltaico 5W |
| Batería | Almacenamiento de energía LiPo |
| PCB | Placa de circuito impreso de diseño propio |
| Carcasa IP65 | Gabinete estanco para exteriores |
| Antenas | Comunicación LoRa y GPS |
| Cableado | Conectores y prensaestopas impermeables |
| Ensamblaje | Mano de obra de taller |
| Testing | Pruebas y calibración |
| Logística | Embalaje y flete |
| Instalación | Configuración en campo |

---

## Márgenes Estimados

| Concepto | Valor |
|----------|-------|
| Precio estimado de venta por kit | USD 500 |
| Costo estimado de fabricación por kit | USD 250 |
| Margen bruto por kit | USD 250 |
| Margen bruto porcentual | 50% |

> Estos valores deberán validarse con el análisis detallado de costos de producción en `Finanzas_y_viabilidad/costos_produccion.md`.

---

*Documento perteneciente al proyecto Sistema de Alerta de Incendios Rurales*
