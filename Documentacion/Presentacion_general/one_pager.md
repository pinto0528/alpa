# One-Pager: Sistema de Alerta de Incendios Rurales

> Este documento es una guía de contenido para diseñar el PDF one-pager (`one_pager.pdf`) en una herramienta visual como Canva, Illustrator o PowerPoint.

## Formato del documento
- Tamaño: A4
- Orientación: vertical
- Extensión: 1 página (cara y contracara opcional)
- Tipo de archivo: PDF

## Secciones del one-pager (anverso)

### Encabezado
- Logo del proyecto (UTN + EmprendeU)
- Nombre: Sistema de Alerta de Incendios Rurales
- Tagline: "Protegiendo tu campo antes de que el fuego se propague"

### Bloque superior izquierdo: El problema
- **Título:** 10.000 incendios rurales por año en Argentina
- **Párrafo:** Los productores agrícolas en zonas sin conectividad no tienen forma de detectar un incendio hasta que ya es demasiado tarde. Las soluciones satelitales tardan horas, las torres cuestan $500K y el 4G no llega al campo.
- **Estadística destacada:** 49.100 ha de caña quemadas en Tucumán (2025)

### Bloque superior derecho: La solución
- **Título:** Detección en menos de 5 minutos
- **Párrafo:** Sistema IoT autónomo que alerta al productor en tiempo real sin necesidad de señal celular ni red eléctrica.
- **Icono:** Sensor con señal LoRa

### Bloque central: Cómo funciona
- Diagrama de flujo simplificado:
  - Recuadro 1: Sensor en campo (LoRa 915 MHz)
  - Recuadro 2: Gateway (LoRa → WiFi)
  - Recuadro 3: Servidor en la nube (Node.js)
  - Recuadro 4: Alerta al productor (Dashboard)
- Flechas de conexión entre recuadros

### Bloque inferior izquierdo: Tecnología
- XIAO ESP32-S3 + SX1262 (LoRa)
- Sensores: temperatura, flama, humo
- Panel solar + batería 18650
- Dashboard React en tiempo real

### Bloque inferior derecho: Impacto
- <5 minutos de detección (vs 2-4h satelital)
- $500 por kit (vs $500K torre)
- >24h de autonomía sin sol
- Hasta 5 km de alcance LoRa

### Pie de página
- Web / contacto: quirogamario642@gmail.com
- "Proyecto EmprendeU — UTN Facultad Regional Tucumán"

## Secciones (contracara opcional)

### Reverso (si aplica)
- **Equipo:** Mario Quiroga, Jeremias Mastafa Nazar, Gonzalo Lescano, Nicolas Pinto
- **Estado del proyecto:** Prototipo funcional — Piloto de 10 unidades
- **Próximos hitos:** Validación en campo, producción de 100+ unidades
