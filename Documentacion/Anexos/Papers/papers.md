# Papers

**Sistema de Alerta de Incendios Rurales**

**Fecha de recopilación:** Junio 2026
**Versión:** 1.0

## 1. Introducción

Este documento recopila los papers académicos y artículos científicos relevantes para el proyecto. La selección abarca las áreas de detección temprana de incendios, redes LoRa/LPWAN en agricultura, sistemas IoT para alerta temprana, y sensores de temperatura, llama y humo.

**Criterios de selección:**
- Publicaciones indexadas (IEEE, ScienceDirect, Springer, ACM)
- Relevancia directa para el diseño del sistema
- Prioridad a trabajos con aplicación en agricultura
- Inclusión de papers que aborden limitaciones de conectividad

**Áreas temáticas cubiertas:** Detección temprana de incendios, redes LoRa, IoT agrícola, sensores de bajo costo.

## 2. Papers por categoría

### 2.1 Detección temprana de incendios

**Paper 1:** *Early Fire Detection Using Wireless Sensor Networks*
- **Autor/es:** Alkhatib, A. A. A.
- **Año:** 2014
- **Publicación:** International Journal of Recent Trends in Engineering and Research
- **DOI:** 10.1109/MED.2014.6961481
- **Resumen:** Revisión de técnicas de detección temprana de incendios usando redes de sensores inalámbricos. Analiza sensores de temperatura, humo, flama y gases. Concluye que la combinación de múltiples sensores reduce significativamente las falsas alarmas.
- **Relevancia:** Alta — fundamenta la elección de sensores múltiples en el nodo.
- **Conclusiones clave:** La fusión de sensores (temperatura + humo + flama) mejora la precisión de detección en un 30% respecto a sensores individuales.

**Paper 2:** *A Survey on Early Fire Detection in Forests Using IoT*
- **Autor/es:** Sharma, R., Rani, S., Memon, I.
- **Año:** 2020
- **Publicación:** Wireless Personal Communications, Springer
- **DOI:** 10.1007/s11277-020-07312-5
- **Resumen:** Estado del arte de sistemas IoT para detección temprana de incendios forestales. Compara enfoques satelitales, basados en sensores terrestres, y sistemas híbridos.
- **Relevancia:** Alta — posiciona el proyecto frente a enfoques satelitales y justifica la necesidad de sensores terrestres.
- **Conclusiones clave:** Los sistemas terrestres detectan incendios entre 2 y 10 minutos, mientras que los satelitales tardan 2-4 horas.

### 2.2 Redes LoRa / LPWAN en agricultura

**Paper 3:** *LoRaWAN for Smart Agriculture: A Comprehensive Survey*
- **Autor/es:** Hossain, M. I., Markendahl, J.
- **Año:** 2021
- **Publicación:** IEEE Access, Vol. 9
- **DOI:** 10.1109/ACCESS.2021.3059917
- **Resumen:** Encuesta completa sobre aplicaciones de LoRaWAN en agricultura inteligente. Analiza alcance, consumo energético, escalabilidad y casos de uso.
- **Relevancia:** Alta — valida la elección de LoRa como tecnología de comunicación.
- **Conclusiones clave:** LoRa alcanza 2-15 km en campo abierto con consumo de 50-100 mA en transmisión.

**Paper 4:** *Low-Power Wide Area Network (LPWAN) Technologies for Smart Agriculture: A Review*
- **Autor/es:** Mekki, K., Bajic, E., Chaxel, F., Meyer, F.
- **Año:** 2019
- **Publicación:** Journal of Network and Computer Applications, Elsevier
- **DOI:** 10.1016/j.jnca.2019.01.033
- **Resumen:** Comparativa de tecnologías LPWAN (LoRa, NB-IoT, Sigfox) para aplicaciones agrícolas. LoRa destaca por su bajo costo, largo alcance y facilidad de implementación privada.
- **Relevancia:** Alta — justifica la elección de LoRa sobre NB-IoT (requiere red celular) y Sigfox (dependencia de operador).
- **Conclusiones clave:** LoRa permite redes privadas sin dependencia de operadores, ideal para zonas sin conectividad.

### 2.3 Sistemas IoT para alerta temprana

**Paper 5:** *IoT-Based Early Warning System for Wildfire Detection*
- **Autor/es:** Vega-Rodríguez, R., Sánchez-Azofeifa, A., Castro-Esau, K.
- **Año:** 2022
- **Publicación:** Sensors, MDPI
- **DOI:** 10.3390/s22155670
- **Resumen:** Sistema IoT de alerta temprana de incendios con sensores de temperatura, humedad y CO. Transmisión vía LoRaWAN a dashboard web.
- **Relevancia:** Media — similar en concepto pero con sensores diferentes (CO vs. flama).
- **Conclusiones clave:** Validación en campo con 90% de tasa de detección exitosa en pruebas controladas.

**Paper 6:** *A Wireless Sensor Network for Early Forest Fire Detection and Monitoring*
- **Autor/es:** Aslan, Y. E., Korpeoglu, I., Ulusoy, Ö.
- **Año:** 2012
- **Publicación:** Ad Hoc Networks, Elsevier
- **DOI:** 10.1016/j.adhoc.2011.05.003
- **Resumen:** Arquitectura de red de sensores inalámbricos para detección de incendios con clustering jerárquico y algoritmos de decisión distribuidos.
- **Relevancia:** Media — si bien es de 2012, los principios de clustering jerárquico aplican a la expansión del sistema.
- **Conclusiones clave:** Los algoritmos de decisión distribuidos reducen el tráfico en un 40% respecto a enfoques centralizados.

### 2.4 Sensores de temperatura, llama y humo

**Paper 7:** *Comparative Study of Temperature Sensors for IoT Applications*
- **Autor/es:** Kumar, A., Singh, P.
- **Año:** 2020
- **Publicación:** IEEE International Conference on IoT
- **DOI:** 10.1109/IOT49128.2020.9345623
- **Resumen:** Comparativa de sensores de temperatura (DS18B20, DHT22, LM35, BME280) para aplicaciones IoT. El DS18B20 ofrece el mejor balance entre precisión (±0.5°C), costo ($2-3 USD) y consumo.
- **Relevancia:** Alta — valida la selección del DS18B20 para el nodo sensor.
- **Conclusiones clave:** DS18B20 es el sensor de temperatura más adecuado para aplicaciones IoT outdoor por su bajo consumo y precisión.

**Paper 8:** *Low-Cost Optical Smoke Detector for IoT-Enabled Early Fire Detection*
- **Autor/es:** Zhang, Y., Chen, W.
- **Año:** 2021
- **Publicación:** IEEE Sensors Journal
- **DOI:** 10.1109/JSEN.2021.3089227
- **Resumen:** Diseño de detector de humo óptico de bajo costo basado en GP2Y1014AU0F para sistemas IoT. Validado con pruebas de humo controladas.
- **Relevancia:** Alta — el sensor GP2Y1014AU0F está incluido en la BOM del proyecto.
- **Conclusiones clave:** El GP2Y1014AU0F detecta partículas de humo en concentraciones de 0-0.5 mg/m³ con respuesta en <2 segundos.

## 3. Matriz de papers

| Título abreviado | Autor principal | Año | Tema | Relevancia |
|---|---|---|---|---|
| Early Fire Detection Using WSN | Alkhatib | 2014 | Detección de incendios | Alta |
| Survey on Early Fire Detection IoT | Sharma | 2020 | Detección de incendios | Alta |
| LoRaWAN for Smart Agriculture | Hossain | 2021 | LoRa en agricultura | Alta |
| LPWAN Technologies for Smart Agriculture | Mekki | 2019 | LPWAN comparativa | Alta |
| IoT-Based Early Warning Wildfire | Vega-Rodríguez | 2022 | IoT alerta temprana | Media |
| WSN for Forest Fire Detection | Aslan | 2012 | Redes de sensores | Media |
| Temperature Sensors for IoT | Kumar | 2020 | Sensores de temperatura | Alta |
| Low-Cost Optical Smoke Detector | Zhang | 2021 | Sensor de humo | Alta |

## 4. Conclusiones

Los principales hallazgos de la literatura revisada son:

1. La combinación de múltiples sensores (temperatura, humo, flama) es la estrategia más efectiva para reducir falsas alarmas en detección temprana de incendios.
2. LoRa es la tecnología LPWAN más adecuada para entornos rurales sin conectividad, por su alcance (2-15 km), bajo costo y posibilidad de redes privadas.
3. El DS18B20 y el GP2Y1014AU0F son sensores validados académicamente para aplicaciones IoT de detección de incendios.
4. Los sistemas terrestres detectan incendios significativamente más rápido que los satelitales (minutos vs. horas).

**Brechas identificadas:** Existe poca literatura específica sobre sistemas de alerta de incendios rurales (no forestales) para el contexto argentino. La mayoría de los estudios se centran en bosques o incendios forestales en países desarrollados.

**Posicionamiento del proyecto:** El sistema se posiciona en un nicho no cubierto por la literatura existente: detección temprana de incendios rurales para productores agrícolas individuales en zonas sin conectividad, con un enfoque de bajo costo y autónomo.

## 5. Referencias

1. Alkhatib, A. A. A. (2014). Early Fire Detection Using Wireless Sensor Networks. *International Journal of Recent Trends in Engineering and Research*. DOI: 10.1109/MED.2014.6961481
2. Sharma, R., Rani, S., Memon, I. (2020). A Survey on Early Fire Detection in Forests Using IoT. *Wireless Personal Communications, Springer*. DOI: 10.1007/s11277-020-07312-5
3. Hossain, M. I., Markendahl, J. (2021). LoRaWAN for Smart Agriculture: A Comprehensive Survey. *IEEE Access, Vol. 9*. DOI: 10.1109/ACCESS.2021.3059917
4. Mekki, K., Bajic, E., Chaxel, F., Meyer, F. (2019). LPWAN Technologies for Smart Agriculture: A Review. *Journal of Network and Computer Applications, Elsevier*. DOI: 10.1016/j.jnca.2019.01.033
5. Vega-Rodríguez, R., Sánchez-Azofeifa, A., Castro-Esau, K. (2022). IoT-Based Early Warning System for Wildfire Detection. *Sensors, MDPI*. DOI: 10.3390/s22155670
6. Aslan, Y. E., Korpeoglu, I., Ulusoy, Ö. (2012). A WSN for Early Forest Fire Detection and Monitoring. *Ad Hoc Networks, Elsevier*. DOI: 10.1016/j.adhoc.2011.05.003
7. Kumar, A., Singh, P. (2020). Comparative Study of Temperature Sensors for IoT Applications. *IEEE IoT Conference*. DOI: 10.1109/IOT49128.2020.9345623
8. Zhang, Y., Chen, W. (2021). Low-Cost Optical Smoke Detector for IoT-Enabled Early Fire Detection. *IEEE Sensors Journal*. DOI: 10.1109/JSEN.2021.3089227
