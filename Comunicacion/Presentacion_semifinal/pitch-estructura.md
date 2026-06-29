# Pitch ALPA · Semifinales EmprendeU 2026

> Enfoque: negocio. Jurado no técnico.

## Narrativa base

Hay productores que no tienen señal, no tienen internet, no tienen electricidad en su campo. Y nadie construye soluciones para ellos porque no son clientes del mundo SaaS — no consumen datos, no pagan suscripciones caras, no usan apps.

Las soluciones que existen (satélites, torres con cámaras, redes LoRaWAN públicas) asumen que hay infraestructura: torres de celular, electricidad, caminos. En el NOA argentino no la hay.

Nuestro punto fuerte no es el sensor — es que podemos comunicar una alerta desde cualquier punto del campo sin que exista absolutamente nada. Los nodos se encadenan hasta llegar a donde se pueda poner el gateway (la casa del productor, un tanque, un poste con panel solar).

## Arquitectura del sistema (visión negocio)

### Gateway
El cerebro del sistema. Se pone donde haya conectividad (la casa del productor con WiFi, o un punto con 4G). Recibe las alertas de los nodos y las envía al productor por Telegram/WhatsApp. Opcional: alerta sonora/visual local.

### Nodos
Cada nodo escucha el campo a su alrededor. Si no alcanza al gateway directo, rebota la señal a otro nodo hasta que llegue. Se alimentan con panel solar.

## Puntos fuertes para el pitch

- **Comunicación sin infraestructura previa.** No necesita torre, no necesita 4G, no necesita poste de luz. Los nodos se las arreglan solos hasta llegar al gateway.
- **Alerta en minutos.** No es un sensor mágico — es que por primera vez hay un sensor en ese lugar, y cuando lo hay, la alerta llega al instante.
- **Sin competencia directa.** Las startups globales ignoran a este cliente. Las soluciones existentes requieren infraestructura que no existe.
- **Validado en el territorio.** Productores, bomberos y aseguradoras de Tucumán confirmaron el problema y la solución.
- **Evolucionable.** Los sensores de hoy son básicos; mañana pueden ser mejores. Lo que no cambia es la red de comunicación.

## Competidores

Ver `scratch/investigacion-competencia.md`
