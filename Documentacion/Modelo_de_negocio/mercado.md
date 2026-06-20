# Análisis de Mercado y Competencia

---

## 1. Tamaño del Mercado

### 1.1 Mercado Total Direccionable (TAM)

**Universo:** Establecimientos agropecuarios en Argentina expuestos a incendios rurales.

| Indicador | Valor | Fuente |
|-----------|-------|--------|
| Establecimientos agropecuarios totales en Argentina | ~250.000 | Censo Nacional Agropecuario 2018 |
| Superficie agropecuaria total | ~160 millones de ha | CNA 2018 |
| Provincias con mayor riesgo de incendios | Tucumán, Córdoba, La Pampa, Chubut, Corrientes, Salta, Jujuy, Catamarca | CPIA, INTA |
| Incendios rurales por año en Argentina | +10.000 focos | CPIA 2026 |

### 1.2 Mercado Disponible (SAM)

**Filtro:** Establecimientos que cumplen con las condiciones mínimas para ser clientes potenciales.

| Criterio | Estimación |
|----------|-----------|
| Establecimientos con más de 200 ha (NOA) | ~15.000 |
| Establecimientos con más de 200 ha (Córdoba) | ~12.000 |
| Establecimientos con más de 200 ha (resto del país, zonas de riesgo) | ~30.000 |
| **Subtotal SAM nacional** | **~57.000 establecimientos** |
| Porcentaje en zonas sin conectividad | ~60-70% |
| **SAM ajustado por conectividad** | **~35.000 - 40.000 establecimientos** |

### 1.3 Mercado Objetivo (SOM) — Primeros 3 Años

| Año | Región | Establecimientos Objetivo | Penetración Estimada | Unidades Vendidas |
|-----|--------|--------------------------|---------------------|-------------------|
| Año 1 | Tucumán (foco inicial) | ~5.000 | 2% | ~100 |
| Año 2 | Tucumán + NOA (Salta, Jujuy, Catamarca) | ~10.000 | 5% | ~500 |
| Año 3 | NOA + Córdoba + Litoral | ~20.000 | 5% | ~1.000 |

**Restricciones del crecimiento:** capacidad de producción, logística de instalación, capital de trabajo, desarrollo de canales de venta.

### Reconciliación: Mercado Capturable vs. Capacidad Real

Las cifras del SOM representan el mercado total capturable sin restricciones de oferta. Sin embargo, la capacidad operativa del equipo (3 estudiantes, bootstrapping, ensamblaje semi-manual) impone un límite inferior. La siguiente tabla muestra la brecha y su justificación:

| Año | SOM (mercado disponible) | Unidades proyectadas (capacidad real) | Brecha | Causa de la brecha |
|-----|:------------------------:|:-------------------------------------:|:------:|--------------------|
| 1 | ~100 | 35 | 65% | Equipo en cursada, desarrollo técnico, sin producción en serie, un solo canal de venta |
| 2 | ~500 | 85 | 83% | Escalamiento gradual, capital de trabajo limitado, ensamblaje semi-manual |
| 3 | ~1.000 | 190 | 81% | Dependencia de financiamiento externo para automatizar, logística regional en construcción |

La brecha se reducirá al: (a) incorporar financiamiento (ANR, Fondo Semilla) para producción tercerizada, (b) sumar canales de venta (aseguradoras, cooperativas), y (c) agregar roles al equipo (técnico de campo, desarrollador). Ver proyecciones detalladas en `Finanzas_y_viabilidad/proyecciones.md`.

---

## 2. Tendencias del Mercado

### 2.1 Aumento de Incendios Rurales

| Período | Hectáreas Afectadas | Tendencia |
|---------|-------------------|-----------|
| 2016-2017 | 2.000.000+ ha | Pico histórico |
| 2020 | 1.150.000 ha | Año extremo |
| 2021-2022 | 1.054.000 ha | Corrientes: récord provincial |
| 2024-2025 | 140.000+ ha solo en enero (La Pampa + Chubut) | Sin mejora sostenida |

La tendencia es **estable o creciente**. No hay evidencia de que el enfoque reactivo actual esté reduciendo la cantidad ni la severidad de los incendios.

### 2.2 Presión Regulatoria Creciente

- **Ley 6.253 (Tucumán):** multas y sanciones a productores por quemas no controladas
- **Superintendencia de Riesgos del Trabajo (SRT):** exigencias crecientes sobre protocolos de seguridad para personal rural
- **Ley de Presupuestos Mínimos de Incendios Forestales:** marco nacional que impulsa sistemas de alerta temprana
- **Compromisos internacionales (Acuerdo de París, ODS):** presión para reducir emisiones de GEI por incendios

### 2.3 Conciencia Ambiental y Social

- Mayor exposición mediática de incendios (Cerro San Javier, Corrientes 2022, Córdoba 2024-2025)
- Comunidades rurales más organizadas para exigir prevención
- Productores buscan certificaciones "libres de fuego" para acceso a mercados diferenciados

### 2.4 Penetración Tecnológica en el Agro

- Crecimiento sostenido de AgTech en Argentina (sensores IoT, monitoreo satelital, agricultura de precisión)
- Mayor aceptación de herramientas digitales por parte de productores (teléfonos inteligentes, apps de gestión)
- Sin embargo: la mayoría de las soluciones AgTech requieren conectividad, dejando fuera a zonas rurales profundas

---

## 3. Benchmarking de Soluciones Existentes

### 3.1 Sistemas Gubernamentales

#### Faros de Conservación (Córdoba)

| Dimensión | Descripción |
|-----------|-------------|
| **Tecnología** | Cámaras multiespectrales + térmicas + IA en torres (InfoMerlo, 2026) |
| **Cobertura** | 2.2 millones de ha, 8 torres, radio 30 km c/u (InfoMerlo / Prensa CBA, 2026) |
| **Costo** | ~USD 500.000 por faro (La Estafeta, 2026) |
| **Público objetivo** | Gobierno provincial |
| **Alcance al productor** | No llega al productor individual. La alerta va a una central de monitoreo. |
| **Limitación clave** | Diseñado para detección regional, no para protección de un establecimiento particular. No da alerta directa al dueño del campo. |

#### Alerta Temprana Satelital (Río Negro)

| Dimensión | Descripción |
|-----------|-------------|
| **Tecnología** | Satélites NASA + VHF |
| **Cobertura** | Provincial |
| **Público objetivo** | Gobierno provincial |
| **Alcance al productor** | Alerta a defensa civil, no al productor. |
| **Limitación clave** | Detección cuando el fuego ya tiene magnitud (resolución satelital). No funciona en zona sin VHF. |

#### Torres IA + Drones (Misiones)

| Dimensión | Descripción |
|-----------|-------------|
| **Tecnología** | Computer Vision + drones (El Destape / Perfil, 2026) |
| **Cobertura** | 849.000 ha (3 torres), detección de humo hasta 2 h antes que satélite (El Destape, 2026) |
| **Público objetivo** | Gobierno provincial |
| **Alcance al productor** | No. |
| **Limitación clave** | Altísimo costo de inversión y operación. No escalable a nivel de productor individual. |

### 3.2 Soluciones Privadas

#### Pampa 4 (Córdoba)

| Dimensión | Descripción |
|-----------|-------------|
| **Tecnología** | Red LoRaWAN pública + sensores IoT + plataforma cloud (pampa4.ar) |
| **Cobertura** | Áreas con gateway LoRaWAN desplegado (provincia de Córdoba) |
| **Modelo** | Suscripción mensual por sensor — no publica precios (pampa4.ar) |
| **Precio estimado** | No publica precios en su sitio web |
| **Público objetivo** | Productores en zona con cobertura de red Pampa 4 |
| **Limitación clave** | Requiere que el campo esté dentro del área de cobertura de su red LoRaWAN. No es autónomo: depende de backhaul (conexión a internet del gateway). No diseñado para detección de incendios (sensor general IoT). |

#### Telecom Agro IoT

| Dimensión | Descripción |
|-----------|-------------|
| **Tecnología** | 4G/LTE-M/NB-IoT + sensores IoT (Telecom / AgroNOA, 2025) |
| **Cobertura** | Zonas con cobertura 4G. Clúster Pergamino-Rojas: 500.000 ha con 8 sitios (Telecom, 2024) |
| **Modelo** | Suscripción (conectividad + plataforma) |
| **Público objetivo** | Empresas agropecuarias grandes |
| **Limitación clave** | Depende 100% de cobertura 4G. No funciona en las zonas donde más se necesita (sin conectividad). Costo elevado para productores medianos. |

#### Sistemas Satelitales (NASA FIRMS, GMIS)

| Dimensión | Descripción |
|-----------|-------------|
| **Tecnología** | Sensores satelitales: MODIS (1 km), VIIRS (375 m), GOES ABI (2 km) (NASA ARSET / FIRMS) |
| **Cobertura** | Global. MODIS: 2 pass/día. VIIRS: 2 pass/día. GOES: disco completo cada 10 min (NASA ARSET) |
| **Modelo** | Gratuito / público |
| **Público objetivo** | Organismos gubernamentales, investigadores |
| **Limitación clave** | Resolución espacial: 1 km (MODIS), 375 m (VIIRS). Detecta cuando el fuego ya es grande. Pasada satelital cada 6-12 h para polares. Latencia 3 h para datos globales. No da alerta en tiempo real. No llega al productor. |

### 3.3 Comparativa Consolidada

| Solución | Detección Incipiente | Sin Conectividad | Autonomía Energética | Alerta Directa al Productor | Costo Accesible | Cobertura 24/7 |
|----------|:---:|:---:|:---:|:---:|:---:|:---:|
| Faros de Conservación | No | No | No | No | No | Sí |
| Satélites (NASA) | No | N/A | N/A | No | Sí (público) | No (pasada) |
| Pampa 4 | Depende del sensor | No | No | Sí | Medio | Sí |
| Telecom Agro IoT | Depende del sensor | No | No | Sí | Alto | Sí |
| Vigilancia visual humana | No | Sí | N/A | Sí (tardía) | Bajo aparente / Alto real | No |
| **Nuestro Sistema** | **Sí** | **Sí** | **Sí** | **Sí** | **Sí** | **Sí** |

---

## 4. Gap de Mercado Identificado

**No existe actualmente** una solución que cumpla simultáneamente con estas cinco condiciones:

1. Detección automática en etapa incipiente (no cuando el fuego ya es visible o detectable por satélite)
2. Funcionamiento autónomo sin conectividad celular, internet ni electricidad de red
3. Alerta directa al productor (no a una central gubernamental)
4. Costo accesible para el productor mediano (no millones de dólares como los sistemas provinciales)
5. Cobertura 24/7 con geolocalización GPS precisa

Este gap es el **espacio de mercado que el sistema viene a ocupar**.

### ¿Por qué no lo cubren las soluciones existentes?

| Razón | Explicación |
|-------|-------------|
| **Orientación institucional** | Faros, satélites y sistemas provinciales están diseñados para gobiernos, no para el productor individual. Su métrica de éxito son las hectáreas monitoreadas, no los campos protegidos. |
| **Dependencia de infraestructura** | Pampa 4, Telecom Agro IoT y la mayoría de soluciones AgTech requieren conectividad a internet. En las zonas rurales profundas del NOA, esto no existe. |
| **Costo** | Los sistemas de detección con cámaras multiespectrales requieren inversiones millonarias. Las suscripciones IoT con conectividad 4G tienen costos recurrentes altos. |
| **Enfoque reactivo** | La cadena de alerta actual (productor → radio → base → responsable → bomberos) está diseñada para coordinar respuesta, no para detectar temprano. |

---

## 5. Ventaja Competitiva del Sistema

### 5.1 Factores Diferenciales

| Factor | Ventaja | Sostenibilidad |
|--------|---------|----------------|
| **Autonomía total** | Funciona sin celular, sin internet, sin electricidad de red | Alta — arquitectura LoRa/paneles solares difícil de replicar por competidores tradicionales |
| **Bajo costo** | Kit accesible para productor mediano. Fracción del costo de una póliza anual | Media — depende de escala de producción y optimización de BOM |
| **Detección multi-parámetro** | Temperatura + humo + llama en un solo nodo | Media-alta — integración de sensores en firmware propio |
| **Reportes auditables** | Registro inalterable de eventos para seguros | Alta — combinación de hardware sellado + backend con hash de eventos |
| **Alerta directa y multicanal** | SMS, radio LoRa, dashboard, sirena local | Alta — redundancia de canales de alerta |

### 5.2 Barreras de Entrada para Competidores

| Barrera | Descripción |
|---------|-------------|
| **Conocimiento del problema** | Validación en terreno con 4 stakeholders reales (productores, bomberos, aseguradoras, HyS). No es una solución de escritorio. |
| **Integración HW + FW + Cloud** | La cadena completa (sensor → LoRa → gateway → backend → alerta) requiere desarrollo en múltiples capas. |
| **Adaptación a condiciones locales** | Diseñado para campos argentinos: polvo, calor extremo (>45°C), lluvia, vibración de maquinaria. |
| **Relaciones con aseguradoras** | El modelo B2B con aseguradoras requiere acuerdos comerciales y validación técnica que toma tiempo construir. |
| **Costo vs. prestaciones** | Competir en precio requeriría que un competidor iguale las prestaciones con un BOM similar, lo que implica ingeniería inversa o desarrollo propio. |

### 5.3 Estrategia de Posicionamiento

**Mensaje clave:** "El primer sistema de detección temprana de incendios diseñado específicamente para el productor argentino que no tiene conectividad en su campo."

**Posicionamiento frente a competidores:**

| Contra | Posicionamiento |
|--------|-----------------|
| **Faros de Conservación** | "No necesita una torre de millones de dólares para proteger su campo. Un nodo por cada 50 ha le da la misma tranquilidad." |
| **Pampa 4 / Telecom Agro** | "Funciona donde no llega la señal. No necesita pagar una suscripción de datos ni esperar a que alguien instale un gateway en su zona." |
| **Satélites** | "No espere 6 horas a que pase un satélite. Sepa en 5 minutos si hay fuego en su campo." |
| **Vigilancia visual** | "Por el costo de tener un empleado en moto durante una temporada, tiene monitoreo 24/7 durante 5 años." |

---

## 6. Análisis FODA del Mercado

| Fortalezas | Debilidades |
|------------|-------------|
| • Único sistema con autonomía total de conectividad | • Marca desconocida (startup universitaria) |
| • Validación con usuarios reales (entrevistas con representantes de los 4 stakeholders clave) | • Capacidad de producción inicial limitada |
| • Costo accesible vs. pérdidas potenciales | • Dependencia de proveedores de componentes |
| • Stack tecnológico modular y escalable | • Equipo chico, multiplicidad de roles |
| • Alineación con tendencias regulatorias y ambientales | • Sin casos de éxito publicables aún |

| Oportunidades | Amenazas |
|---------------|----------|
| • 35.000-40.000 establecimientos sin conectividad | • Grandes players (Telecom, Pampa 4) podrían expandirse a este nicho |
| • Alianzas con aseguradoras como canal de venta | • Cambios regulatorios que afecten importación de componentes |
| • Crecimiento del mercado AgTech en Argentina | • Incendios masivos podrían saturar la capacidad de respuesta |
| • Programas gubernamentales de prevención de incendios | • Crisis económica que afecte el poder adquisitivo del productor |
| • Expansión a otros países de Latam con problemas similares (Chile, Brasil, Colombia) | |

---

## 7. Estimación de Ingresos Potenciales (Mercado Objetivo)

| Escenario | Penetración Año 3 | Unidades | Ingreso Anual Estimado (Año 3) |
|-----------|:---:|:--------:|:------------------------------:|
| **Pesimista** | 2% del SOM (20.000 estab.) | ~400 | USD 200.000 - 280.000 |
| **Esperado** | 5% del SOM (20.000 estab.) | ~1.000 | USD 500.000 - 700.000 |
| **Optimista** | 10% del SOM (20.000 estab.) | ~2.000 | USD 1.000.000 - 1.400.000 |

*Ingreso estimado considerando un precio de kit entre USD 500 y USD 700.*
*No incluye ingresos recurrentes por suscripción de monitoreo ni licencias B2B con aseguradoras.*

> **Nota:** Esta estimación representa el **mercado total capturable (SOM)** asumiendo que no existieran restricciones de oferta. Las proyecciones reales de ventas del equipo, limitadas por capacidad operativa y escalamiento progresivo, se detallan en `Finanzas_y_viabilidad/proyecciones.md`. Para el Año 3 se proyectan 190 unidades (escenario esperado), equivalentes al ~0.5% del SAM.

---

## 8. Conclusiones del Análisis de Mercado

1. **Existe un gap real y validado:** ninguna solución existente cubre al productor individual sin conectividad. Las entrevistas con stakeholders lo confirman.

2. **El mercado es significativo:** 35.000 a 40.000 establecimientos en Argentina reúnen las condiciones para ser clientes potenciales. Solo con una penetración del 5% en 3 años se alcanzan ~1.750 unidades.

3. **Las tendencias son favorables:** aumento de incendios, presión regulatoria, conciencia ambiental y adopción tecnológica en el agro crean el contexto ideal para la solución.

4. **La ventaja competitiva es defendible:** la autonomía total de conectividad y el modelo B2B con aseguradoras son difíciles de replicar por los competidores existentes.

5. **El momento es oportuno:** la visibilidad mediática de los incendios, las pérdidas récord y la falta de alternativas viables generan una ventana de oportunidad para el ingreso al mercado.

---

*Documento perteneciente al proyecto Sistema de Alerta de Incendios Rurales*
*Fuentes: CNA 2018, CPIA 2026, INTA, INDEC, IDECOR, entrevistas a productores, bomberos, aseguradores (Tucumán, 2026); InfoMerlo (2026); Prensa CBA (2026); La Estafeta (2026); El Destape / Perfil (2026); sitio web Pampa 4 (pampa4.ar); Valor Agregado Agro (2025); Telecom / AgroNOA (2025); NASA ARSET / FIRMS*
