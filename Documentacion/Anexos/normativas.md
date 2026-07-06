# Normativas

**ALPA — Sistema de Alerta de Incendios Rurales**

**Fecha:** Junio 2026
**Versión:** 1.0

## 1. Introducción

Este documento recopila el marco legal y regulatorio aplicable al proyecto Sistema de Alerta de Incendios Rurales. El ámbito geográfico de aplicación es la República Argentina, con foco en la provincia de Tucumán, donde se realiza el piloto inicial.

El cumplimiento normativo es fundamental para garantizar que el sistema cumpla con los estándares legales, de seguridad y de telecomunicaciones, así como para mitigar riesgos de responsabilidad civil para los productores y el equipo desarrollador.

## 2. Marco legal nacional

### Ley 19.587 — Higiene y Seguridad en el Trabajo

Establece las condiciones de higiene y seguridad en el trabajo. Artículos relevantes:

- **Art. 4:** El empleador debe adoptar medidas de prevención necesarias para proteger la vida y salud del trabajador.
- **Art. 5:** Establece la obligación de implementar sistemas de protección contra incendios en establecimientos laborales.
- **Art. 6:** Define las condiciones de seguridad en maquinarias, herramientas y lugares de trabajo.

**Implicancias para el sistema:** El sistema puede utilizarse como parte del cumplimiento de las obligaciones del empleador en cuanto a detección temprana de incendios en establecimientos agropecuarios con personal en campo.

### Ley 25.675 — Ley General del Ambiente

Establece los presupuestos mínimos para el logro de una gestión sustentable del ambiente.

- **Art. 4:** Principio de prevención — toda actividad que pueda afectar el ambiente debe implementar medidas preventivas.
- **Art. 5:** Principio de responsabilidad — el daño ambiental genera la obligación de recomposición.
- **Art. 27:** Obligación de realizar evaluaciones de impacto ambiental.

**Implicancias para el sistema:** El proyecto contribuye a la prevención de incendios forestales y rurales, alineándose con el principio de prevención. La reducción de incendios no intencionales disminuye el daño ambiental.

### Otras leyes nacionales aplicables

- **Ley 26.815 — Sistema Federal de Manejo del Fuego:** Crea el Sistema Federal de Manejo del Fuego, define competencias nacionales y provinciales en prevención y combate de incendios forestales y rurales.
- **Ley 25.246 — Encubrimiento y Lavado de Activos:** Aplicable en caso de que el sistema se integre con plataformas de seguros y transacciones financieras.
- **Código Civil y Comercial de la Nación:** Responsabilidad civil por daños derivados de incendios (artículos 1757-1768).

## 3. Marco legal provincial (Tucumán)

### Leyes provinciales de prevención de incendios

- **Ley Provincial 6.251 — Prevención y Lucha contra Incendios Forestales y Rurales:** Establece la autoridad de aplicación (Dirección de Recursos Naturales y Desarrollo Sustentable), define zonas de riesgo y obligaciones de los propietarios.
- **Ley Provincial 8.834 — Régimen de Faltas Ambientales:** Establece sanciones por infracciones ambientales, incluyendo incendios no autorizados.

### Regulaciones específicas para el sector agrícola

- Temporada de alto riesgo: mayo a diciembre (pico junio-octubre, coincidiendo con la zafra y cosecha de caña de azúcar)
- Prohibición de quema no controlada de rastrojos
- Obligación de mantener cortafuegos en propiedades rurales

### Organismos de control

- Dirección de Recursos Naturales y Desarrollo Sustentable (Tucumán)
- Defensa Civil de Tucumán
- Bomberos Voluntarios de Tucumán
- Secretaría de Ambiente de Tucumán

## 4. Regulaciones técnicas

### Normas IRAM aplicables

- **IRAM 3520:** Extintores portátiles
- **IRAM 3589:** Sistemas de detección de incendios
- **IRAM 3602:** Alarmas de incendio
- **IRAM 3620:** Dispositivos IoT — Especificaciones generales
- **IRAM 4500:** Compatibilidad electromagnética

### Regulaciones de telecomunicaciones

- **Banda 915 MHz:** La frecuencia LoRa de 915 MHz está habilitada para uso en la banda ISM (Industrial, Scientific and Medical) sin licencia en Argentina, según la Resolución 202/2021 del ENACOM.
- **Límites de potencia radiada:** Máximo +30 dBm (1 W) en banda ISM para dispositivos de baja potencia.
- **Ciclo de trabajo:** Máximo 1% por hora en transmisiones para dispositivos no licenciados.

### Normativa de dispositivos IoT

- **Resolución ENACOM 202/2021:** Reglamento de dispositivos IoT y M2M. Define requisitos de homologación y etiquetado.
- **Ley 25.326 — Protección de Datos Personales:** Aplicable si el sistema almacena datos personales de los usuarios.

## 5. Implicancias para el proyecto

### Requisitos legales que impactan el diseño
- El sistema debe operar dentro de los límites de potencia y ciclo de trabajo de la banda ISM 915 MHz
- Los dispositivos deben cumplir con los requisitos de homologación del ENACOM
- El diseño debe considerar la responsabilidad civil del productor ante falsas alarmas o fallos de detección

### Obligaciones del productor/usuario
- Mantener los nodos sensores en buen estado y con carga suficiente
- No modificar el firmware ni los parámetros de comunicación sin autorización
- Utilizar el sistema como complemento (no reemplazo) de las medidas de prevención exigidas por ley

### Consideraciones de responsabilidad civil
- El sistema está diseñado como una herramienta de alerta temprana, no como un sistema de seguridad crítico
- El fabricante no se hace responsable por daños derivados de falsos negativos (no detección de un incendio real)
- Se recomienda que el productor mantenga un seguro contra incendios y las medidas de prevención exigidas por la ley

## 6. Referencias

- Ley 19.587: http://servicios.infoleg.gob.ar/infolegInternet/anexos/15000-19999/17614/texact.htm
- Ley 25.675: http://servicios.infoleg.gob.ar/infolegInternet/anexos/75000-79999/75453/texact.htm
- Ley 26.815: http://servicios.infoleg.gob.ar/infolegInternet/anexos/185000-189999/189475/norma.htm
- ENACOM Resolución 202/2021: https://www.enacom.gob.ar
- Ley Provincial Tucumán 6.251: http://www.legislaturatucuman.gob.ar
- IRAM: https://www.iram.org.ar
- Organismos oficiales: Defensa Civil, Bomberos Voluntarios, INTA, Dirección de Recursos Naturales de Tucumán
