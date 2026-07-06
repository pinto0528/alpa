# Referencias

**ALPA — Sistema de Alerta de Incendios Rurales**

**Fecha:** Junio 2026
**Versión:** 1.0

## 1. Introducción

Este documento compila todas las referencias bibliográficas, técnicas e institucionales utilizadas en el desarrollo del proyecto. Su propósito es centralizar las fuentes consultadas y facilitar su localización y verificación.

**Alcance:** Incluye bibliografía académica, documentación técnica de componentes, recursos institucionales, normativas y enlaces de interés.

## 2. Bibliografía

### Libros y manuales técnicos

| Autor/es | Título | Editorial | Año | ISBN |
|---|---|---|---|---|
| Tanenbaum, A. S., Wetherall, D. J. | Computer Networks (5th ed.) | Pearson | 2011 | 978-0-13-212695-3 |
| Arduino LLC | Arduino Programming Cookbook | O'Reilly | 2020 | 978-1-492-08137-6 |
| Espressif Systems | ESP32-S3 Technical Reference Manual | Espressif | 2023 | — |

### Artículos académicos

| Autor/es | Título | Publicación | Año | DOI |
|---|---|---|---|---|
| Alkhatib, A. A. A. | Early Fire Detection Using WSN | IJRT | 2014 | 10.1109/MED.2014.6961481 |
| Sharma, R. et al. | Survey on Early Fire Detection Using IoT | WPC, Springer | 2020 | 10.1007/s11277-020-07312-5 |
| Hossain, M. I. et al. | LoRaWAN for Smart Agriculture | IEEE Access | 2021 | 10.1109/ACCESS.2021.3059917 |
| Mekki, K. et al. | LPWAN Technologies for Smart Agriculture | JNCA, Elsevier | 2019 | 10.1016/j.jnca.2019.01.033 |
| Vega-Rodríguez, R. et al. | IoT-Based Early Warning for Wildfire | Sensors, MDPI | 2022 | 10.3390/s22155670 |
| Aslan, Y. E. et al. | WSN for Forest Fire Detection | Ad Hoc Networks | 2012 | 10.1016/j.adhoc.2011.05.003 |
| Kumar, A., Singh, P. | Temperature Sensors for IoT | IEEE IoT Conf. | 2020 | 10.1109/IOT49128.2020.9345623 |
| Zhang, Y., Chen, W. | Low-Cost Optical Smoke Detector | IEEE Sensors J. | 2021 | 10.1109/JSEN.2021.3089227 |

### Tesis y trabajos de investigación

| Autor/es | Título | Institución | Año |
|---|---|---|---|
| INTA | Impacto Económico de Incendios Rurales en Argentina | INTA | 2023 |
| FAO | Evaluación de Pérdidas por Incendios Agrícolas | FAO | 2022 |

## 3. Recursos técnicos

### Documentación de hardware

| Componente | Tipo | Enlace / Referencia | Versión |
|---|---|---|---|
| XIAO ESP32-S3 | MCU | https://wiki.seeedstudio.com/XIAO_ESP32S3/ | v1.0 |
| Wio-SX1262 | LoRa Module | https://wiki.seeedstudio.com/Wio-SX1262/ | v1.0 |
| DS18B20 | Temperature sensor | https://www.analog.com/en/products/ds18b20.html | — |
| KY-026 | Flame sensor | Datasheet incluido en el repositorio | — |
| GP2Y1014AU0F | Smoke sensor | https://www.sharpsde.com/products/optoelectronics/ | — |
| TP4056 | Battery charger | Datasheet — módulo de carga Li-Ion | — |
| Batería 18650 | Power | 3000 mAh, 3.7V Li-Ion | — |

### Documentación de software

| Librería | Versión | Enlace |
|---|---|---|
| Express | 4.21.x | https://expressjs.com |
| Socket.IO | 4.7.x | https://socket.io |
| NeDB | — | https://github.com/louischatriot/nedb |
| Socket.IO Client | 4.7.x | https://socket.io/docs/v4/client-api/ |
| React | 18.3.x | https://react.dev |
| Vite | 5.4.x | https://vite.dev |
| RadioLib | 7.1.x | https://github.com/jgromes/RadioLib |
| ArduinoJson | 7.4.x | https://arduinojson.org |
| OneWire | — | https://www.pjrc.com/teensy/td_libs_OneWire.html |
| DallasTemperature | — | https://github.com/milesburton/Arduino-Temperature-Control-Library |

### Estándares y protocolos

| Estándar | Descripción | Enlace |
|---|---|---|
| LoRaWAN 1.1 | Especificación LoRaWAN | https://lora-alliance.org |
| IEEE 802.11 | WiFi (como estándar de capa física) | https://ieeexplore.ieee.org |
| HTTP/1.1 | Protocolo de transferencia de hipertexto | RFC 7230 |
| WebSocket | Protocolo de comunicación bidireccional | RFC 6455 |

## 4. Recursos institucionales

### Organismos gubernamentales

| Organismo | Rol | Contacto |
|---|---|---|
| Defensa Civil Nacional | Prevención y respuesta ante emergencias | https://www.argentina.gob.ar/defensa-civil |
| Bomberos Voluntarios de Argentina | Combate de incendios | https://www.bomberos.org.ar |
| INTA (Instituto Nacional de Tecnología Agropecuaria) | Investigación agropecuaria | https://www.inta.gob.ar |
| CONAE (Comisión Nacional de Actividades Espaciales) | Monitoreo satelital de incendios | https://www.conae.gov.ar |

### Asociaciones de productores

| Asociación | Descripción |
|---|---|
| Federación Agraria Argentina | Representación de pequeños y medianos productores |
| Sociedad Rural Argentina | Representación de productores ganaderos y agrícolas |
| Unión de Cañeros de Tucumán | Asociación de productores cañeros |

### Organismos internacionales

| Organismo | Rol |
|---|---|
| FAO (Food and Agriculture Organization) | Agricultura y seguridad alimentaria |
| OMM (Organización Meteorológica Mundial) | Monitoreo climático y alerta temprana |

## 5. Enlaces de interés

### Proyectos similares / competencia

| Proyecto | Descripción | Enlace |
|---|---|---|
| Faros de Conservación | Torres de detección temprana (Alta Córdoba) | https://farosdeconservacion.org |
| NASA FIRMS | Sistema satelital de monitoreo de incendios | https://firms.modaps.eosdis.nasa.gov |
| Pampa 4 | Red LoRaWAN comunitaria en Argentina | https://pampa4.org |
| Telecom Agro IoT | Solución IoT agrícola de Telecom Argentina | https://www.telecom.com.ar |

### Repositorios de código abierto relevantes

| Proyecto | Descripción | Enlace |
|---|---|---|
| RadioLib | Librería LoRa para Arduino/PlatformIO | https://github.com/jgromes/RadioLib |
| Node.js | Runtime de JavaScript | https://nodejs.org |
| React | Framework frontend | https://github.com/facebook/react |
| Vite | Build tool para frontend | https://github.com/vitejs/vite |

### Foros y comunidades técnicas

- PlatformIO Community: https://community.platformio.org
- Espressif ESP32 Forums: https://esp32.com
- LoRa Developers: https://lora-developers.semtech.com
- Stack Overflow (tags: lora, esp32, iot)

### Noticias y artículos periodísticos

- "Incendios rurales en Tucumán: 49.100 hectáreas de caña quemadas en 2025" — La Gaceta, 2025
- "Argentina perdió más de 1 millón de hectáreas por incendios en 2020" — Infobae, 2021
- "Incendios en Córdoba: 586 focos y más de 100.000 hectáreas afectadas en 2024" — La Voz del Interior, 2024

## 6. Glosario de siglas

| Sigla | Significado |
|---|---|
| API | Application Programming Interface |
| BOM | Bill of Materials (Lista de materiales) |
| BW | Bandwidth (Ancho de banda LoRa) |
| CR | Coding Rate (Tasa de codificación LoRa) |
| ENACOM | Ente Nacional de Comunicaciones |
| FAO | Food and Agriculture Organization |
| GPS | Global Positioning System |
| H&S | Higiene y Seguridad |
| HTTP | Hypertext Transfer Protocol |
| INTA | Instituto Nacional de Tecnología Agropecuaria |
| IoT | Internet of Things |
| IRAM | Instituto Argentino de Normalización y Certificación |
| ISM | Industrial, Scientific and Medical |
| LoRa | Long Range (modulación de radio) |
| LPWAN | Low-Power Wide Area Network |
| M2M | Machine to Machine |
| MCU | Microcontroller Unit |
| MISO | Master In Slave Out (SPI) |
| MOSI | Master Out Slave In (SPI) |
| MVP | Minimum Viable Product |
| NeDB | Embedded NoSQL Database |
| NOA | Noroeste Argentino |
| REST | Representational State Transfer |
| SF | Spreading Factor (Factor de esparcimiento LoRa) |
| SPI | Serial Peripheral Interface |
| SSID | Service Set Identifier (nombre de red WiFi) |
| SX1262 | Semtech LoRa transceiver |
| TAM | Total Addressable Market |
| SAM | Serviceable Addressable Market |
| SOM | Serviceable Obtainable Market |
| UML | Unified Modeling Language |
| UTN | Universidad Tecnológica Nacional |
| WiFi | Wireless Fidelity |
| WSN | Wireless Sensor Network |

## 7. Control de cambios

| Fecha | Descripción del cambio | Versión |
|---|---|---|
| Junio 2026 | Versión inicial de referencias | 1.0 |
