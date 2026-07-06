# ALPA — Sistema de Alerta Temprana de Incendios Rurales

## ¿Qué es ALPA?

ALPA es un sistema autónomo de detección temprana de incendios rurales creado por el equipo **N.T.** de la **UTN FRT** en el marco del programa **EmprendeU 2026**, organizado por la Universidad Nacional de Tucumán.

El objetivo del proyecto es reducir drásticamente el tiempo de detección de incendios en campos agrícolas del NOA argentino, donde hoy no existe una solución accesible que funcione sin conectividad.

---

## El problema

En Tucumán se quemaron más de 55 mil hectáreas en la temporada 2025. Cada incendio representa pérdidas de cientos de miles de dólares para los productores.

El problema de fondo no es que falten bomberos. Es que cuando el fuego empieza, nadie lo sabe.

Un productor típico tiene su campo a 20 km de su casa. No hay señal de celular en el lote. No hay internet. No hay electricidad. Si se prende fuego en el fondo del cañaveral, pasan 30 o 40 minutos hasta que alguien lo ve, lo va a buscar, y recién ahí puede pedir ayuda.

Ese tiempo perdido es la diferencia entre un foco controlable y un incendio de cien hectáreas.

Las soluciones que existen hoy — satélites, torres con cámaras, redes IoT tradicionales — asumen que hay torres de celular, electricidad y caminos. En el NOA argentino no las hay. El productor sin conectividad queda fuera del radar de cualquier tecnología.

---

## La solución

ALPA es un sistema de alerta temprana diseñado específicamente para funcionar donde no hay nada.

Se colocan pequeños dispositivos sensores en puntos estratégicos del campo. Cada uno monitorea temperatura, presencia de humo y llama. Si un nodo detecta una anomalía, envía una alerta por radiofrecuencia a otros nodos cercanos, que la rebotan entre sí hasta que llega a un punto de salida ubicado en la casa del productor o en el lugar con conectividad más cercano.

Esto es clave: los nodos se comunican sin necesidad de celular, internet ni red eléctrica. Funcionan con energía solar y tienen autonomía para operar de forma continua. No requieren instalación técnica ni mantenimiento complejo.

Desde el punto de salida, la alerta llega al productor al instante por los canales que use en su vida cotidiana, y puede activar sirenas o contactar automáticamente a los bomberos.

---

## Validación y mercado

Durante el desarrollo del proyecto se realizaron entrevistas en profundidad con productores agrícolas, bomberos voluntarios, ejecutivos de seguros y responsables de higiene y seguridad de ingenios azucareros. Todos confirmaron lo mismo: la alerta temprana en el campo no existe y la necesitan.

Se identificaron más de 3.500 productores en Tucumán, Salta y Jujuy que están en esta situación. Son campos de caña y cítricos de aproximadamente 200 hectáreas, sin conectividad, que hoy dependen de la suerte para enterarse de un incendio a tiempo.

---

## Estado actual

ALPA cuenta con un prototipo funcional validado en laboratorio. Se realizaron pruebas de comunicación entre nodos, detección de llama y humo, y autonomía energética. El sistema incluye un panel de monitoreo web donde se visualizan en tiempo real las lecturas de los sensores y el estado de cada nodo en el campo.

---

## El equipo

ALPA es desarrollado por cuatro estudiantes de la UTN FRT:

- **Mario Roberto Quiroga** — Full-Stack
- **Jeremías Mastafa Nazar** — Firmware
- **Gonzalo Fabricio Lescano** — Negocio
- **Nicolás Pinto** — Hardware

---

*Contacto: [información del equipo disponible en el repositorio del proyecto]*
