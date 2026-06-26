# Sistema de Alerta de Incendios Rurales

**Fecha:** Junio 2026
**Versión:** 1.0
**Autor/es:** Equipo EmprendeU — UTN Facultad Regional Tucumán

## 1. Contexto

Los incendios rurales en Argentina representan una amenaza recurrente para el sector agrícola. Según datos del INTA y la FAO, se registran más de 10.000 incendios rurales por año en el país, afectando cientos de miles de hectáreas. En la provincia de Tucumán, durante 2025 se quemaron 49.100 hectáreas de caña de azúcar y 6.770 hectáreas de otros cultivos.

Las soluciones actuales presentan limitaciones significativas: los sistemas satelitales (como NASA FIRMS) tienen demoras de 2 a 4 horas en detectar un foco ígneo; las torres de detección temprana (como Faros de Conservación) requieren una inversión de $500.000 USD por unidad; y las redes 4G/5G no están disponibles en gran parte del territorio productivo.

Existe una oportunidad clara de desarrollar un sistema de detección autónomo, de bajo costo y que funcione sin conectividad celular ni red eléctrica, adaptado a las necesidades del productor agrícola argentino.

## 2. Problema

Los productores agrícolas en zonas rurales sin conectividad no cuentan con un sistema accesible de detección temprana de incendios. Esto afecta directamente a más de 35.000 establecimientos productivos en el Noroeste Argentino (NOA).

El problema persiste porque:
- Las soluciones satelitales tienen latencias de horas
- Las torres de detección son prohibitivas en costo
- Las redes celulares no cubren zonas rurales productivas
- Los sistemas IoT comerciales requieren conectividad permanente

El impacto económico, social y ambiental es severo: pérdidas de USD 310.000 a USD 11 millones por establecimiento según el INTA, riesgo de vidas humanas, y degradación ambiental por la pérdida de suelos y biodiversidad.

## 3. Solución propuesta

Sistema IoT de bajo costo que detecta incendios en etapa incipiente (menos de 5 minutos) y alerta al productor en tiempo real, funcionando sin señal celular ni red eléctrica.

**Valor diferencial:**
- Detección en menos de 5 minutos (vs. 2-4 horas satelital)
- Autónomo: sin conectividad celular ni red eléctrica
- Energía solar con batería de respaldo (>24h de autonomía)
- Costo accesible ($500 USD por kit)
- Alerta directa al productor vía dashboard web

## 4. Objetivos

### 4.1 Objetivo general

Desarrollar e implementar un sistema autónomo de detección temprana de incendios rurales que permita a los productores agrícolas recibir alertas en menos de 5 minutos, sin depender de conectividad celular ni red eléctrica.

### 4.2 Objetivos específicos

1. Diseñar un nodo sensor de bajo consumo basado en XIAO ESP32-S3 con sensores de temperatura, flama y humo, comunicado vía LoRa
2. Implementar un gateway que reciba las transmisiones LoRa y las reenvíe a un servidor vía WiFi
3. Desarrollar un servidor backend opcional con API REST y WebSocket para almacenar y distribuir eventos (el dashboard funciona standalone en modo demo)
4. Construir un dashboard web en tiempo real para visualizar el estado de los nodos y las alertas
5. Validar el prototipo en condiciones de campo con productores reales

## 5. Alcance

### Lo que el sistema cubre
- Detección de temperatura elevada (>50°C)
- Detección de flama (sensor IR KY-026)
- Detección de humo (sensor de partículas)
- Transmisión LoRa a 915 MHz (hasta 2-5 km en campo abierto)
- Alerta en dashboard web en tiempo real
- Historial de eventos y alertas
- Funcionamiento autónomo con energía solar + batería

### Lo que el sistema NO cubre
- Supresión o extinción de incendios
- Cobertura celular o satelital
- Detección de gases tóxicos
- Video vigilancia
- Control de acceso

### Limitaciones conocidas
- Alcance LoRa limitado por topografía y vegetación
- Dependencia de WiFi en el gateway
- Precisión del sensor de flama limitada a ~50 cm
- Base de datos NeDB adecuada para prototipo, escalable a PostgreSQL

## 6. Destinatarios / Usuarios

- **Productores agrícolas** del NOA (mercado primario, ~8.000-10.000 establecimientos)
- **Aseguradoras** (interés en reducción de siniestros y reportes digitales auditables)
- **Bomberos voluntarios** (coordenadas GPS precisas para respuesta rápida)
- **Seguridad e higiene industrial** (activación de protocolos de evacuación)

## 7. Estructura del documento

Este documento forma parte de un conjunto mayor de documentación del proyecto Sistema de Alerta de Incendios Rurales, desarrollado en el marco del programa EmprendeU. Incluye secciones de contexto del problema, solución técnica, modelo de negocio, validación con usuarios, análisis financiero e impacto esperado.
