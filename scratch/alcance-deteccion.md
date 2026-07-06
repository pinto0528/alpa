# Alcance de deteccion — analisis y alternativas

## El problema

Los sensores actuales del nodo (KY-026, GP2Y1014AU0F, DS18B20) detectan
fuego solo cuando esta muy cerca del nodo:

- **KY-026** (llama IR): ~0.5 m
- **GP2Y1014AU0F** (humo/polvo): depende de que el viento lleve humo al sensor
- **DS18B20** (temperatura): mide el aire en el nodo, no a distancia

La claim original de "10-50 m por nodo" solo se sostiene con viento favorable
llevando humo al sensor. Sin viento o con el fuego del lado opuesto, la
deteccion practica es de metros, no decenas de metros.

## Alternativas para aumentar alcance

| Opcion | Alcance | Costo extra | Que detecta |
|--------|---------|-------------|-------------|
| Camara termica MLX90640 (32x24 px) | 5-10 m | ~$50 | Calor |
| Sensor UV de llama (Hamamatsu / TMR5111) | 10-15 m | ~$80 | Radiacion UV del fuego |
| Sensor de CO/CO2 laser (MH-Z19B) | Solo en el nodo | ~$20 | Gases (no da alcance) |
| Microfono ultrasonico (chisporroteo) | 30-50 m | ~$30 | Ruido de fuego (falsos +) |
| LiDAR + filtro humo | 50-100 m | ~$200+ | Particulas en el aire |
| **Camara RGB + IA en el borde** | **1-5 km** | **~$50-100** | **Humo visible (columna)** |

## Camara RGB + IA: la unica opcion de salto cualitativo

La unica tecnologia que permite deteccion a 1 km o mas con hardware accesible
es una camara de color comun (RGB) con un modelo de inteligencia artificial
corriendo en el borde que detecta columnas de humo en el horizonte.

No requiere Internet. El procesamiento se hace localmente en el nodo (p.ej.
ESP32-S3 con camara OV2640 + TensorFlow Lite). Consume solo cuando toma y
procesa una imagen (cada 1-5 min, no video continuo).

Sistemas que ya hacen esto: Firewatch (Chile), Pano AI (USA), Nideport
(Argentina, USD 7M recaudados).

## Sin camara: el camino alternativo

Si no se quiere incorporar camara, la unica forma de aumentar cobertura es
**densidad de nodos**: instalar muchos nodos baratos formando una grilla.
Ejemplo: para cubrir 1 km de perimetro con deteccion a 10 m por nodo se
necesitan ~50 nodos. Escala mal en costo y mantenimiento.

## Recomendacion inmediata

Agregar el MLX90640 (camara termica) al nodo actual. Cuesta ~$50, se conecta
por I2C, y mejora la deteccion de 0.5 m a 5-10 m con un solo componente.
No reemplaza la camara RGB para alcance de 1 km, pero es el mejor upgrade
costo-beneficio para el prototipo actual.

La camara RGB + IA queda como linea de investigacion para la proxima
iteracion del producto.
