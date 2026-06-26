# Resumen Ejecutivo

**Sistema de Alerta de Incendios Rurales**
Detección temprana autónoma para productores agrícolas

**Fecha:** Junio 2026
**Versión:** 1.0
**Autor/es:** Equipo EmprendeU — UTN Facultad Regional Tucumán

## 1. El problema

Argentina registra más de 10.000 incendios rurales por año. En Tucumán, 49.100 hectáreas de caña de azúcar se quemaron en 2025. Las soluciones existentes —satélites con demoras de horas, torres de $500K USD, redes 4G sin cobertura rural— no resuelven la necesidad del productor de a pie. Las pérdidas económicas van de USD 310.000 a USD 11 millones por establecimiento.

## 2. La solución

Sistema IoT de bajo costo que detecta incendios en etapa incipiente (<5 minutos) y alerta al productor en tiempo real. Funciona sin señal celular ni red eléctrica. El flujo es: sensor en campo (con LoRa) → gateway (LoRa a WiFi) → servidor en la nube → dashboard web con alertas instantáneas.

## 3. Tecnología

- **Nodo sensor:** XIAO ESP32-S3 + módulo LoRa SX1262 (915 MHz) + sensores DS18B20 (temperatura), KY-026 (flama), detector de humo
- **Gateway:** XIAO ESP32-S3 + LoRa (receptor) + WiFi
- **Servidor:** Node.js + Express + Socket.IO + NeDB
- **Dashboard:** React 18 + Vite + Socket.IO Client
- **Alimentación:** Panel solar + batería 18650 (>24h autonomía)

## 4. Modelo de negocio

**Propuesta de valor:** Detección en <5 minutos, autónomo, sin conectividad, a $500 USD por kit.

**Clientes objetivo:** Productores agrícolas de 200-1.000+ ha en NOA (~8.000-10.000 establecimientos), aseguradoras (licencias B2B), bomberos voluntarios (beneficiarios estratégicos).

**Monetización:** Venta de kits ($500), suscripción anual ($60/año por monitoreo), licencias B2B para aseguradoras.

**Proyecciones:** Año 1: 35 kits ($17.500), Año 2: 85 kits ($44.600), Año 3: 190 kits ($102.200). Margen neto del 29% al 46%.

## 5. Impacto

- **Económico:** Reducción de pérdidas de 5x a 10x en primera temporada. Protección de activos por $80K+ (sistemas de riego, maquinaria).
- **Social:** Protección de vidas humanas, reducción de riesgo para bomberos, preservación de fuentes de trabajo.
- **Ambiental:** Preservación de suelos, biodiversidad y calidad del aire. 95.000 ha monitoreadas en año 3.

## 6. Estado actual

Prototipo funcional (MVP temprano). Pruebas de comunicación LoRa exitosas, detección de flama hasta 50 cm, más de 6 horas de autonomía. Validación con 4 entrevistas a stakeholders (productor, aseguradora, bomberos, seguridad e higiene). Próximo hito: piloto de campo con 10 unidades.

## 7. Contacto

- Mario Roberto Quiroga — quirogamario642@gmail.com
- Jeremias Mastafa Nazar — jeremiasmastafa72@gmail.com
- Gonzalo Fabricio Lescano — Glescano002@gmail.com
- Nicolas Pinto — nicolaspinto2805@gmail.com
