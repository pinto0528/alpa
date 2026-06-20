# Estadísticas de Incendios Rurales en Argentina

## Panorama Nacional

### Datos Históricos

| Período | Hectáreas Afectadas | Notas |
|---------|-------------------|-------|
| 2016-2017 | +2.000.000 ha | Una de las temporadas más destructivas |
| 2020 | +1.150.000 ha | Año extremadamente severo a nivel nacional |
| 2021-2022 | ~1.054.000 ha | Corrientes: ~934.000 ha quemadas |
| 2024-2025 | +140.000 ha (solo enero) | La Pampa: 73.000 ha, Chubut: 55.000 ha |

> **Fuente:** Comisión Técnica Forestal del Consejo Profesional de Ingeniería Agronómica (CPIA), 2026

### Incendios Anuales

Argentina sostiene de manera estructural **más de 10.000 focos de incendio por año**. Esta cifra se mantiene sostenida sin tendencia decreciente significativa, lo que indica que el enfoque reactivo actual no está funcionando.

---

## Datos por Provincia

### Córdoba

| Año | Cantidad de Incendios | Hectáreas Afectadas | Fuente |
|-----|----------------------|-------------------|--------|
| 2024 | 586 | 103.327 | IDECOR |
| 2025 | 675 | 21.183 | IDECOR |

**Detalle 2024:**
- El incendio más grande: 42.046 ha (Capilla del Monte y localidades próximas)
- 88% de los incendios afectaron menos de 100 ha, pero representaron solo el 7% de la superficie total
- 13 incendios superaron las 500 ha, acumulando 80.684 ha (el 87% del total)
- Más de 5.800 parcelas inmobiliarias afectadas, 77% con más del 50% de su superficie quemada
- Cobertura más afectada: matorral/arbustal (53%), pastizal natural (19%), monte (12%)

**Detalle 2025:**
- 62% de los incendios fueron menores a 10 hectáreas
- Período más crítico: julio-octubre (512 incendios, 18.176 ha)
- Pico de superficie afectada: octubre-diciembre (11.857 ha)
- Departamentos más afectados: San Justo (4.650 ha), San Alberto (3.202 ha), Punilla (3.013 ha)

---

### Tucumán (NOA)

| Zafra | Hectáreas de Caña Quemadas | % del Área Cañera | Otras Superficies | Total |
|-------|--------------------------|-------------------|-------------------|-------|
| 2024 | 54.000 | 18,3% | ~10.000 ha (Tafí del Valle: pastizales) | ~64.000 |
| 2025 | 49.100 | ~16,7% | 6.770 ha | 55.870 |

**Detalle 2025:**
- 23,7% de la quema fue sobre caña de azúcar **en pie** (el más destructivo)
- 76,3% sobre rastrojo o lotes sin diferenciar
- Departamentos más afectados: Simoca (10.900 ha), Cruz Alta (7.300 ha), Leales (6.900 ha), Burruyacu (6.300 ha)
- Pico mensual: agosto (16.180 ha, 33% del total), septiembre (26%), octubre (23%)

> **Fuente:** EEAOC (Estación Experimental Agroindustrial Obispo Colombres), La Gaceta

---

## Impacto Económico

### Estimación de Pérdidas por Establecimiento (INTA/FAO)

#### Campo Ganadero - Sur de Buenos Aires (650 ha)

| Escenario | Afectación | Pérdida Estimada | Equivalente |
|-----------|-----------|-----------------|-------------|
| Moderado | 30% | USD 310.277 | 240 kg carne/ha |
| Severo | 50% | USD 517.128 | 400 kg carne/ha |
| Total | 100% | USD 1.034.255 | 800 kg carne/ha |

#### Campo Ganadero - Costa de Chubut (10.000 ha)

| Escenario | Afectación | Pérdida Estimada | Equivalente |
|-----------|-----------|-----------------|-------------|
| Moderado | 30% | USD 3.348.202 | 778.651 kg lana/ha |
| Severo | 50% | USD 5.580.337 | 1.297.752 kg lana/ha |
| Total | 100% | USD 11.160.675 | 2.595.505 kg lana/ha |

> **Metodología:** FAO para evaluación de daños y pérdidas por desastres en actividad agropecuaria
> **Fuente:** INTA - Pecile, María Valeria; Torres Carbonell, Carlos

---

## Temporalidad del Riesgo

### Meses Críticos por Región

| Región | Período de Mayor Riesgo | Factores |
|--------|----------------------|----------|
| Córdoba (sierras) | Julio - Octubre | Sequía, vientos, biomasa acumulada |
| Tucumán (zona cañera) | Junio - Octubre | Heladas + sequía + rastrojo |
| NOA general | Mayo - Septiembre | Estación seca, bajas precipitaciones |
| Patagonia | Diciembre - Marzo | Temporada estival, sequía |
| Litoral (Corrientes, Entre Ríos) | Agosto - Noviembre | Pastizales secos, quemas |

---

## Soluciones Existentes en el Mercado

### Sistemas Gubernamentales

| Sistema | Provincia | Tecnología | Cobertura |
|---------|-----------|------------|-----------|
| Faros de Conservación | Córdoba | Cámaras multiespectrales + térmicas | 2,2 millones de ha (8 torres) |
| Alerta Temprana Satelital | Río Negro | Satélites NASA + VHF | Provincial |
| Torres IA + Drones | Misiones | Computer Vision + drones | 849.000 ha (3 torres) |
| Alerta Temprana La Pampa | La Pampa | Google Earth Engine + biomasa | Provincial |

### Soluciones Privadas

| Sistema | Tipo | Tecnología | Público Objetivo |
|---------|------|------------|-----------------|
| Pampa 4 | Red LoRaWAN | IoT + plataforma cloud | Productores en Córdoba |
| Telecom Agro IoT | Conectividad | 4G + sensores IoT | Empresas agropecuarias |

### Gap Identificado

**No existe** una solución accesible, autónoma y descentralizada de detección temprana diseñada específicamente para el **productor individual** en **zonas sin infraestructura de conectividad**.

---

## Visualización de Datos

Para una representación visual interactiva de estas estadísticas, consultar:
- [`dashboard_estadisticas.html`](./dashboard_estadisticas.html) - Panel interactivo con gráficos de incendios por provincia, pérdidas económicas y temporalidad

---

*Documento perteneciente al proyecto Sistema de Alerta de Incendios Rurales*
*Última actualización: Mayo 2026*

**Fuentes consultadas:**
- CPIA (Consejo Profesional de Ingeniería Agronómica) - 2026
- INTA (Instituto Nacional de Tecnología Agropecuaria)
- IDECOR (Instituto de Diversidad y Ecología de Córdoba)
- EEAOC (Estación Experimental Agroindustrial Obispo Colombres)
- La Gaceta - Tucumán
- Revista Chacra
- Argentina.gob.ar (SINAGIR, Ministerio de Ambiente)
- Infocampo, Agroleaks, TN
