# Segmentos de Clientes

**ALPA — Sistema de Alerta de Incendios Rurales**

**Fecha:** Junio 2026
**Versión:** 1.0

## Estructura de Clientes del Sistema

El sistema de alerta temprana de incendios rurales opera con una **estructura de segmentos múltiples**, donde **quien paga** no siempre es **quien se beneficia directamente** del sistema. Esta distinción es clave para entender el modelo de negocio.

| Segmento | Rol | ¿Paga? | ¿Se beneficia? |
|----------|-----|--------|----------------|
| Productores agropecuarios | Cliente principal / usuario final | Sí (compra del kit + suscripción) | Sí — detección temprana en su campo |
| Aseguradoras agrícolas | Cliente B2B / canal | Sí (licencias por cliente asegurado) | Sí — reducción de siniestralidad |
| Bomberos voluntarios y brigadas | Beneficiario indirecto | No | Sí — alertas con geolocalización precisa |
| Responsables de higiene y seguridad | Beneficiario / prescriptor | Potencialmente (versión industrial) | Sí — evacuación temprana de personal |
| Gobiernos y municipios | Cliente institucional | Sí (licencias por territorio) | Sí — prevención de incendios forestales |

---

## 1. Productores Agropecuarios (Segmento Principal)

### Perfil

| Dimensión | Descripción |
|-----------|-------------|
| **Demografía** | Hombres y mujeres de 30 a 65 años. Propietarios o administradores de establecimientos agrícolas en Tucumán, NOA y otras regiones del país. |
| **Tamaño de explotación** | Medianos y grandes: 200 ha a 5.000+ ha. Microproductores (< 50 ha) no son mercado objetivo inicial. |
| **Tipo de producción** | Caña de azúcar, limón, soja, maíz, ganadería, frutales, forestación. Cultivos extensivos con alta exposición a incendios. |
| **Ubicación geográfica** | Zonas rurales del NOA (Tucumán, Salta, Jujuy, Catamarca), Córdoba, Litoral, Patagonia. Áreas con conectividad celular limitada o nula. |
| **Capacidad de pago** | Media-alta. Manejan inversiones en maquinaria e insumos. Un kit de detección representa una fracción mínima frente a pérdidas potenciales de USD 310.000 a USD 11.000.000. |
| **Ciclo de decisión de compra** | Estacional. La compra se concentra entre marzo y junio (previa a la temporada crítica). Decisión influenciada por experiencia previa con incendios. |

### Subsegmentos por Escala

| Subsegmento | Hectáreas | Pérdida Potencial | Capacidad de Pago | Estrategia |
|-------------|-----------|-------------------|-------------------|------------|
| **Pequeño-mediano** | 200 - 1.000 ha | USD 310.000 - USD 500.000 | Media. Un incendio puede significar la quiebra. | Kit básico (2-3 nodos + gateway compartido). Pago financiado. |
| **Mediano-grande** | 1.000 - 5.000 ha | USD 500.000 - USD 3.000.000 | Alta. Tienen espalda financiera pero el impacto es severo. | Kit estándar (4-8 nodos + gateway propio). Pago de contado o suscripción anual. |
| **Grandes productores y agroindustrias** | 5.000+ ha | USD 3.000.000 - USD 11.000.000+ | Muy alta. El incendio afecta su cadena productiva completa. | Kit premium (10+ nodos + múltiples gateways + dashboard avanzado). Suscripción corporativa. |

### Dolor que Resuelve

> *"Nos enteramos siempre tarde. O te avisa un vecino que pasó por la ruta, o nos damos cuenta cuando ya tenemos el fuego encima. Fácil pasan 30 o 40 minutos."*
> — Productor agrícola, Tucumán

El sistema reduce el tiempo de detección de **30-40 minutos a menos de 5 minutos**, y lo hace sin depender de conectividad celular, electricidad de red ni vigilancia humana.

### Criterios de Segmentación Prioritarios

1. **Riesgo de incendio comprobado:** establecimientos en zonas con historial de incendios recurrentes
2. **Falta de conectividad:** campos sin señal celular o con cobertura intermitente
3. **Valor de producción en riesgo:** cultivos de alto valor (cítricos, frutales) o infraestructura costosa (riego por goteo)
4. **Extensión territorial:** campos grandes donde la vigilancia manual es insuficiente
5. **Actitud hacia la tecnología:** productores que ya usan herramientas digitales básicas y están abiertos a soluciones concretas

### Estimación del Segmento

| Indicador | Valor Estimado | Fuente |
|-----------|---------------|--------|
| Establecimientos agropecuarios en Argentina | ~250.000 | CNA 2018 |
| Establecimientos en NOA con >200 ha | ~15.000 | Estimación propia sobre CNA |
| Establecimientos con conectividad limitada o nula | ~60-70% en zonas rurales profundas | INDEC |
| Mercado objetivo inicial (Tucumán + NOA, >200 ha, sin conectividad) | ~8.000 - 10.000 establecimientos | Estimación propia |

---

## 2. Aseguradoras Agrícolas (Cliente B2B / Canal)

### Perfil

| Dimensión | Descripción |
|-----------|-------------|
| **Tipo** | Compañías de seguros con líneas de pólizas agropecuarias y multirriesgo agrícola |
| **Cobertura geográfica** | Nacional con foco en provincias de alta siniestralidad (Tucumán, Córdoba, Santa Fe, Buenos Aires) |
| **Problema** | Alta siniestralidad por incendios en primavera. Pólizas millonarias pagadas por lotes quemados. |
| **Necesidad** | Reducir el riesgo de siniestros mediante herramientas de prevención verificables |

### Relación con el Sistema

- **No compran kits de detección** directamente (no son usuarios del hardware)
- **Compran licencias** para monitorear a sus asegurados que instalan el sistema
- **Ofrecen bonificaciones en pólizas** a productores que demuestren tener el sistema instalado y operativo
- **Reciben reportes digitales inalterables** como evidencia de que el equipo estaba activo al momento del siniestro

### Valor para la Aseguradora

| Indicador | Sin Sistema | Con Sistema | Impacto |
|-----------|-------------|-------------|---------|
| Tiempo de respuesta del asegurado | 30-40 min | <5 min | Reducción del 85-90% |
| Probabilidad de pérdida total | Alta | Baja | Desplome del riesgo |
| Reporte post-siniestro | Testimonial, sin respaldo | Digital, inalterable, auditable | Evidencia sólida |
| Prima justificable | Estándar | Bonificable (10-20% descuento) | Ventaja competitiva |

### Cómo Llegan al Sistema

1. **Derivación directa:** la aseguradora recomienda el sistema a sus asegurados como requisito o beneficio
2. **Co-branding:** el sistema se ofrece como "Servicio de Prevención incluido" en la póliza
3. **Descuentos condicionados:** el productor obtiene mejor prima si acredita instalación del sistema

> *"Si un cliente me demuestra que con tu sensor bajó su tiempo de respuesta de una hora a diez minutos, su riesgo de pérdida total se desploma. Yo le puedo justificar a la casa central una baja en el costo de su póliza sin problema."*
> — Ejecutivo de seguros agrícolas, Tucumán

---

## 3. Bomberos Voluntarios y Brigadas Forestales (Beneficiario Indirecto)

### Perfil

| Dimensión | Descripción |
|-----------|-------------|
| **Tipo** | Cuarteles de bomberos voluntarios en zonas de interfase urbano-rural. Brigadas forestales provinciales. |
| **Problema** | Llegan a los incendios sin información precisa: ubicación exacta del foco, accesos, condiciones del terreno. |
| **Necesidad** | Recibir alertas tempranas con coordenadas GPS y datos de acceso para intervenir en minutos. |

### Valor del Sistema para el Segmento

- **Recepción de alertas** con coordenadas GPS exactas del foco ígneo detectado
- **Información de acceso:** tranqueras, caminos internos, puntos de riesgo (tanques de combustible, agroquímicos)
- **Intervención temprana:** posibilidad de extinguir el foco con recursos ligeros (camioneta + mochilas de agua) en lugar de autobombas
- **Reducción del riesgo operativo:** los brigadistas no combaten llamas descontroladas

> *"Si tu sistema nos manda las coordenadas GPS exactas al celular cuando recién es una chispa, nosotros mandamos rápido una camioneta liviana con cuatro chicos y mochilas de agua, y lo apagamos en diez minutos."*
> — Bombero voluntario, Yerba Buena / San Javier

### Modelo de Relación

Los bomberos no pagan por el sistema. Son un **beneficiario estratégico** que:
- Valida la utilidad del sistema en terreno
- Genera confianza en los productores (prescripción)
- Puede recibir donaciones de nodos para zonas críticas vía programas gubernamentales

---

## 4. Responsables de Higiene y Seguridad Industrial (Prescriptor)

### Perfil

| Dimensión | Descripción |
|-----------|-------------|
| **Tipo** | Profesionales de HyS en ingenios azucareros, agroindustrias, plantas de acopio. |
| **Problema** | Incendios en campos aledaños ponen en riesgo la vida de operarios, maquinistas y personal en zona rural. |
| **Marco normativo** | Ley de Higiene y Seguridad (19.587), SRT, Ley 6.253 de Tucumán (multas ambientales). |
| **Necesidad** | Activar protocolos de evacuación en menos de 5 minutos. Contar con alertas automáticas con ubicación exacta. |

### Valor del Sistema

- **Alertas directas a panel de control** sin depender de la cadena operario → radio → base → responsable
- **Geolocalización del foco** para decidir evacuación de sectores específicos
- **Cumplimiento normativo** documentado (registro de alertas, tiempos de respuesta)

> *"Si yo tuviera un detector que me dé 5 minutos de ventaja ni bien arranca el foco, puedo activar los protocolos de evacuación al instante. Esos minutos valen oro."*
> — Responsable de Higiene y Seguridad, ingenio azucarero

---

## 5. Gobiernos y Municipios (Cliente Institucional)

### Perfil

| Dimensión | Descripción |
|-----------|-------------|
| **Tipo** | Municipalidades, defensas civiles, ministerios de ambiente provinciales. |
| **Interés** | Prevención de incendios forestales y de interfase. Reducción de costos de extinción. |
| **Presupuesto** | Partidas para prevención de desastres, emergencias agropecuarias, cambio climático. |

### Valor del Sistema

- **Monitoreo territorial** de zonas de alto riesgo (reservas naturales, interfase urbano-rural)
- **Reducción de costos de extinción:** cada incendio detectado temprano cuesta menos en recursos públicos
- **Datos para políticas públicas:** estadísticas de focos por zona, temporada, frecuencia
- **Alineación con ODS:** contribución a metas de acción climática, vida de ecosistemas terrestres

### Modelo de Relación

Escalamiento futuro. En una etapa inicial el foco está en productores individuales. Los gobiernos locales pueden ser clientes en una segunda fase, adquiriendo licencias para cubrir zonas de alto valor ecológico o de interfase.

---

## Matriz de Segmentos: Dolor, Solución y Disposición a Pagar

| Segmento | Dolor Principal | Lo que el Sistema Resuelve | ¿Paga? | Disposición |
|----------|----------------|---------------------------|--------|-------------|
| **Productor agropecuario** | Se entera tarde, pierde cultivos | Detección en <5 min sin conectividad | Sí (kit + suscripción) | Alta — pérdida potencial >> costo del sistema |
| **Aseguradora agrícola** | Paga siniestros millonarios | Reduce siniestralidad, genera reportes auditables | Sí (licencia B2B) | Alta — descuento en pólizas > costo de licencia |
| **Bomberos / brigadas** | Llega a ciegas, sin GPS | Alerta con coordenadas exactas del foco | No (beneficiario) | N/A — Validación y prescripción |
| **HyS industrial** | Riesgo de vida de operarios | Evacuación temprana, cumplimiento SRT | Potencialmente | Media-alta — si hay presupuesto de seguridad |
| **Gobierno / municipio** | Incendios forestales | Monitoreo territorial, datos estadísticos | Sí (licencia institucional) | Media — depende de prioridad política |

---

*ALPA - 2026*
*Fuentes: CNA 2018, INDEC, entrevistas a productores, bomberos, aseguradores y responsables de seguridad (Tucumán, 2026)*
