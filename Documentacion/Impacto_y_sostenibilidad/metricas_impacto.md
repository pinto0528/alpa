# Métricas de Impacto

## Impacto Social

| Métrica | Target Año 3 | Target SOM (5-7 años) |
|---|---|---|
| Productores alcanzados | 190 | 1.750 |
| Hectáreas monitoreadas | 95.000 | 875.000 |
| Empleos directos generados | 8 | 25 |
| Empleos indirectos generados | 12 | 40 |
| Comunidades rurales con cobertura | 10 | 90 |

## Impacto Ambiental

| Métrica | Estimación |
|---|---|
| Reducción estimada de tiempo de detección | De 30-40 min a <5 min |
| Hectáreas protegidas por año (por productor medio) | 500 ha |
| Incendios detectados en etapa incipiente | +90% |
| Contribución a ODS | ODS 13 (Acción Climática), ODS 15 (Ecosistemas Terrestres), ODS 9 (Industria e Innovación) |

## Impacto Económico

| Métrica | Valor |
|---|---|
| Pérdidas evitadas por evento grave en campo de 650 ha | USD 310.000+ |
| Reducción de siniestralidad para aseguradoras | 60-80% |
| Ahorro en costos de extinción para el Estado | Significativo (cada incendio detectado temprano requiere menos recursos) |
| Retorno de inversión para el productor (ROI) | 5x-10x en primera temporada |

---

## Marco metodológico

### Fuentes de datos

Los valores de las tablas anteriores se estimaron a partir de:

- **Estadísticas de incendios rurales en Argentina**: reportes del Servicio Nacional de Manejo del Fuego (SNMF), periodos 2015-2025.
- **Entrevistas de validación**: 12 entrevistas semiestructuradas con productores de Simoca y Monteros (Tucumán), personal de aseguradoras y bomberos voluntarios.
- **Costos de producción**: cotizaciones de proveedores de componentes electrónicos (MercadoLibre, AliExpress, tiendas locales de electrónica de Tucumán).
- **Datos catastrales**: extensiones típicas de explotaciones agropecuarias en la provincia de Tucumán (500-700 ha promedio por productor).

### Supuestos

- Cada productor medio maneja 500 ha (promedio regional).
- Para el cálculo de pérdidas se utiliza el campo de referencia de 650 ha del INTA/FAO, que representa un productor tipo de la zona núcleo. La diferencia (500 vs 650 ha) se debe a que el promedio incluye productores más pequeños; el campo de referencia refleja un establecimiento con densidad de activos suficiente para que un incendio represente pérdida significativa.
- La tasa de incidencia de incendios en la región es de al menos 1 evento grave cada 2 temporadas.
- El sistema reduce el tiempo de detección de ~35 min (promedio actual según entrevistados) a <5 min, permitiendo actuar en la etapa incipiente.
- Se considera productor alcanzado aquel que tiene al menos un nodo sensor instalado y activo.
- El SOM (Segmento Obtenible) se limita a productores de caña de azúcar, limón y granos del sur de Tucumán y este de Catamarca (~3.500 productores).

### Limitaciones

- No hay datos públicos desagregados a nivel departamento sobre siniestralidad de incendios rurales.
- Las proyecciones a 5-7 años asumen un contexto macroeconómico y regulatorio estable.
- El ROI depende fuertemente de la adopción de seguros indexados al monitoreo.

---

## Alcance geográfico

### Cobertura estimada por departamento (Tucumán)

| Departamento | Productores estimados | Hectáreas cultivadas | Prioridad |
|---|---|---|---|
| Simoca | 280 | 168.000 | Alta |
| Monteros | 310 | 186.000 | Alta |
| Leales | 245 | 147.000 | Alta |
| Cruz Alta | 420 | 252.000 | Alta |
| Famaillá | 230 | 138.000 | Alta |
| Graneros | 180 | 108.000 | Media |
| Río Chico | 160 | 96.000 | Media |
| La Cocha | 140 | 84.000 | Media |
| Chicligasta | 120 | 72.000 | Media |
| Trancas | 95 | 57.000 | Baja |

Los departamentos de prioridad alta concentran el 74% de la superficie cañera y la mayor frecuencia histórica de incendios.

### Expansión a otras provincias

| Provincia | Núcleo productivo | Potencial de nodos |
|---|---|---|
| Catamarca | Este (zona limonera) | 400-600 |
| Salta | Sur (caña y tabaco) | 300-500 |
| Jujuy | Ramal (caña) | 200-350 |
| Santiago del Estero | Sudeste (caña, arroz) | 250-400 |

---

## Indicadores compuestos

### ROI del productor (retorno sobre inversión)

```
ROI = (Pérdidas evitadas - Costo total del sistema) / Costo total del sistema
```

**Costo del sistema por temporada** (por nodo, amortizado a 3 años):

| Concepto | Monto USD |
|---|---|
| Hardware (nodo sensor + gateway) | 250 |
| Instalación y configuración (único) | 50 |
| Suscripción anual SaaS | 60 |
| Reposición y mantenimiento anual | 30 |
| **Total por temporada (año 1)** | **390** |
| **Total por temporada (año 2-3, sin hardware)** | **90** |

**Pérdidas evitadas por evento grave**:

- Promedio de pérdida directa en incendio grave en campo de 650 ha: USD 310.000 (incluye destrucción de cultivo listo para cosecha, maquinaria, infraestructura).
- Con detección temprana (<5 min), se estima que el daño se limita al 5-15% de la superficie, reduciendo la pérdida a USD 15.000-46.000.
- **Ahorro promedio por evento: USD 264.000-295.000.**

A un evento cada 2 temporadas, el ROI estimado es de 5x a 10x en la primera temporada.

### Tasa de detección temprana

```
TDT = (Eventos detectados en <5 min) / (Total de eventos) x 100
```

El objetivo del sistema es superar el 90%, frente a una línea de base actual del 5-10% (detección visual o por terceros).

### Hectáreas protegidas por nodo

Cada nodo sensor monitorea un radio de ~2 km (cobertura LoRa en campo abierto), que en terreno de cultivo continuo representa un área de cobertura de 400-600 ha por nodo, dependiendo de la topografía.

---

## Plan de monitoreo

### Indicadores a medir post-implementación

| Indicador | Frecuencia | Instrumento |
|---|---|---|
| Tiempo real de detección por evento | Cada evento | Timestamp del sistema (backend) |
| Hectáreas efectivamente afectadas por incendio | Por temporada | Informe del productor + imágenes satelitales |
| Tasa de falsos positivos | Mensual | Eventos marcados como alerta sin incendio real confirmado |
| Tasa de falsos negativos | Por temporada | Incendios ocurridos sin alerta del sistema |
| Uptime del sistema por nodo | Semanal | Heartbeat del firmware (uptime en paquete LoRa) |
| Satisfacción del productor | Anual | Encuesta estructurada |
| Alertas confirmadas vs no confirmadas | Mensual | Seguimiento telefónico post-alerta |
| Tiempo de respuesta del productor | Por evento | Encuesta post-temporada |
| Costo real de operación y mantenimiento | Trimestral | Registro contable del proyecto |

### Ciclo de retroalimentación

1. Los datos de monitoreo se recolectan del backend (eventos, alertas, timestamps).
2. Al final de cada temporada, se cruzan con datos de incendios reales del SNMF y reportes de los productores.
3. Se recalcula el ROI real y se ajustan los supuestos del modelo.
4. Las métricas informan decisiones de producto (umbrales de alerta, cobertura, duración de batería).

---

## Cronograma de impacto

| Periodo | Hito | Indicador clave |
|---|---|---|
| Año 1 (piloto) | 10 productores, 20 nodos | Validación TDT >80%, uptime >95% |
| Año 2 (early adopter) | 60 productores, 120 nodos | Primer ROI real documentado |
| Año 3 (crecimiento) | 190 productores, 380 nodos | TDT >90%, uptime >98% |
| Año 4 (consolidación) | 350 productores, 700 nodos | Integración con 2 aseguradoras |
| Año 5 (escala) | 600 productores, 1.200 nodos | Expansión a Catamarca y Salta |
| Año 6-7 (madurez) | 1.750 productores, 3.500 nodos | Cobertura regional completa, programa de gobierno |

### Decisiones críticas por etapa

- **Año 1-2**: definir umbrales de alerta óptimos, reducir falsos positivos.
- **Año 3**: decidir si se fabrica PCB personalizada o se continúa con prototipos.
- **Año 4**: evaluar migración de NeDB a base de datos relacional para multi-cliente.
- **Año 5**: decidir esquema de distribución (directa, B2B aseguradoras, o B2G).

---

*Documento perteneciente al proyecto Sistema de Alerta de Incendios Rurales.*
