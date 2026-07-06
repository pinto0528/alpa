# Operaciones

**ALPA — Sistema de Alerta de Incendios Rurales**

**Fecha:** Junio 2026
**Versión:** 1.0

## Recursos

### Equipo Humano (Roles)

| Rol | Cantidad | Responsabilidades | Perfil |
|-----|----------|-------------------|--------|
| **Líder de proyecto / Desarrollo** | 1 | Coordinación general, desarrollo de firmware ESP32, integración LoRa, backend | Estudiante avanzado de Ing. en Sistemas / Electrónica |
| **Hardware y ensamblaje** | 1 | Diseño de PCB, selección de componentes, ensamblaje de prototipos, pruebas de laboratorio | Estudiante de Ing. Electrónica |
| **Comercial y operaciones** | 1 | Ventas, relación con aseguradoras, logística, instalaciones en campo, soporte al cliente | Estudiante de Ing. Industrial / Comercialización |

*En etapa inicial, los tres roles son cubiertos por los integrantes del equipo. La dotación proyectada evoluciona según el volumen de clientes:*

| Año | Roles | Dotación total | Incorporaciones |
|-----|-------|:--------------:|-----------------|
| 1 | Líder de proyecto/desarrollo, Hardware/ensamblaje, Comercial/operaciones | 3 | Los 3 fundadores |
| 2 | + Técnico de campo (instalaciones, mantenimiento), + Desarrollador frontend (dashboard, app mobile) | 5 | Se suman 2 roles |
| 3 | + Asistente administrativo-contable, + 2.º técnico de campo, + Comercial adicional (canal aseguradoras) | 8 | Se suman 3 roles |

*Las incorporaciones están condicionadas al crecimiento de ingresos y a la obtención de financiamiento externo (ANR, Fondo Semilla).*

### Tecnología

| Recurso | Especificación | Propósito |
|---------|---------------|-----------|
| **Nodo sensor** | ESP32 + LoRa SX1262 + sensores (humo, temperatura, llama) + panel solar 5W + batería LiPo + carcasa IP65 | Detección en campo |
 | **Gateway** | ESP32 + concentrador LoRaWAN + antena + batería/cargador solar + módulo 4G opcional | Recepción de alertas y comunicación a la nube |
| **Dashboard web** | Panel de control en tiempo real con mapa, historial de eventos, alertas y reportes | Monitoreo del productor y la aseguradora |
| **Backend / Cloud** | Servidor cloud (API REST + base de datos + servicio de alertas) | Procesamiento y almacenamiento de eventos |
| **Infraestructura de desarrollo** | IDE (PlatformIO / Arduino), repositorio Git, herramientas de diseño de PCB (KiCad/Eagle) | Desarrollo de firmware y hardware |

### Infraestructura Física

| Recurso | Descripción | Etapa |
|---------|-------------|-------|
| **Taller de ensamblaje** | Espacio en UTN-FRT o domicilio particular con estación de soldadura, herramientas de precisión, multímetro | Inicial (Fase 0-1) |
| **Laboratorios UTN-FRT** | Electrónica (cámaras climáticas, osciloscopios), comunicaciones (analizador de espectro), ensayos mecánicos | Validación y certificación |
| **Servidores cloud** | Instancia VPS o servicio PaaS para backend, base de datos y dashboard | Continuo |

### Financieros

| Recurso | Monto Estimado | Fuente |
|---------|---------------|--------|
| Inversión inicial (prototipado 10 unidades) | USD 2.950 | Aportes propios / SECyT UTN |
| Capital de trabajo (Año 1) | USD 3.000 | Subsidio / ahorros |
| Producción 100 unidades (Año 2) | USD 21.000 | ANR IDEP / Fondo Semilla / reinversión |

---

## Actividades

### Cadena de Valor

| Actividad | Descripción | Frecuencia | Responsable |
|-----------|-------------|-----------|-------------|
| **Desarrollo de firmware** | Programación de microcontroladores ESP32: lectura de sensores, protocolo LoRa, lógica de alertas, modo de bajo consumo | Continuo (sprints) | Líder de proyecto |
| **Diseño de hardware** | Diseño y optimización de PCB, selección de componentes, actualización de BOM | Por iteración de producto | Hardware |
| **Ensamblaje de nodos** | Soldadura de componentes en PCB, montaje en carcasa IP65, sellado estanco, conexión de panel solar | Por lote de producción | Hardware |
| **Testing y calibración** | Pruebas de estrés térmico, calibración de umbrales de sensores, prueba de alcance LoRa, verificación de estanqueidad | Por lote + muestreo | Hardware |
| **Instalación en campo** | Visita al establecimiento, colocación de nodos en puntos estratégicos, configuración de gateway, activación de dashboard | Por venta | Comercial / Técnico |
| **Actualización de software** | Mejoras en firmware (OTA), nuevas funcionalidades en dashboard, parches de seguridad | Trimestral | Líder de proyecto |
| **Atención al cliente** | Soporte técnico pre-venta y post-venta, resolución de incidencias, consultas | Continuo | Comercial |
| **Monitoreo de plataforma** | Supervisión de servidores, verificación de conectividad de gateways activos, detección de nodos caídos | Diario | Líder de proyecto (automático) |

### Flujo Operativo por Ciclo de Venta

```
Contacto → Relevamiento → Propuesta → Instalación → Capacitación → Activación → Monitoreo → Soporte
```

| Etapa | Duración | Recursos Involucrados |
|-------|----------|----------------------|
| Contacto y relevamiento | 1-2 días | Comercial |
| Propuesta y cierre | 1-3 días | Comercial |
| Fabricación/ensamblaje (si no hay stock) | 5-10 días | Hardware |
| Instalación en campo | 1 día | Técnico + Comercial |
| Capacitación | 2 horas | Técnico |
| Activación de dashboard | Inmediato | Líder de proyecto |
| Monitoreo continuo | 24/7 | Automático + supervisión |
| Soporte post-venta | Continuo | Comercial / Técnico |

### Actividades por Etapa del Proyecto

| Etapa | Actividades Clave | Entregable |
|-------|------------------|------------|
| **Fase 0: Bootstrapping** | Desarrollo de prototipo funcional (1 nodo + 1 gateway + dashboard básico). Pruebas en laboratorio UTN. | MVP funcional |
| **Fase 1: Piloto** | Fabricación de 10 kits. Instalación en campos de prueba (Lules, Tafí Viejo). Validación con productores y bomberos. Métricas de rendimiento. | 10 campos monitoreados |
| **Fase 2: Escalamiento** | Producción de 100+ unidades. Contratos con aseguradoras. Expansión a NOA. Procesos semi-automatizados de ensamblaje. | 100+ clientes activos |

---

## Socios Clave

| Socio | Tipo de Aporte | Beneficio para el Proyecto | Beneficio para el Socio |
|-------|---------------|---------------------------|------------------------|
| **UTN Facultad Regional Tucumán** | I+D, laboratorios, recursos académicos, vinculación tecnológica | Infraestructura de validación, respaldo institucional, acceso a programas de financiamiento | Proyecto de aplicación real para estudiantes, publicaciones, vinculación con el medio |
| **Proveedores de componentes electrónicos** | Insumos (ESP32, LoRa, sensores, paneles solares, baterías, carcasas) | Cadena de suministro para fabricación. Descuentos por volumen. | Cliente recurrente, previsibilidad de demanda |
| **Aseguradoras agrícolas** | Canal de distribución, base de clientes, validación del modelo B2B | Escalamiento comercial sin inversión en captación. Ingresos recurrentes por licencias. | Reducción de siniestralidad, diferenciación de pólizas, datos auditables |
| **Brigadas forestales / bomberos** | Validación técnica, prescripción, feedback de campo | Credibilidad ante productores. Mejora del sistema basada en uso real. | Alertas tempranas con geolocalización, reducción de riesgo operativo |
| **Cooperativas agrícolas** | Canal de distribución a productores asociados, difusión | Acceso a productores medianos y pequeños. Confianza del canal. | Servicio de valor agregado para sus asociados, compra grupal |

### Matriz de Socios por Tipo de Relación

| Socio | Tipo de Vínculo | Intensidad | Dependencia | Alternativas |
|-------|----------------|------------|-------------|-------------|
| UTN-FRT | Institucional / académico | Alta (Fase 0-1) / Media (Fase 2+) | Media — laboratorios son críticos para validación | Convenios con otras universidades o INTI |
| Proveedores | Comercial | Media | Alta — sin componentes no hay producto | Multi-sourcing (varios proveedores por componente) |
| Aseguradoras | Comercial / estratégico | Creciente (Baja→Alta) | Media — canal de escalamiento | Venta directa como respaldo |
| Bomberos / brigadas | Colaboración técnica | Media | Baja — deseable pero no crítico | Defensa Civil, policía |
| Cooperativas | Comercial / distribución | Media (Fase 2+) | Baja — canal complementario | Venta directa, ferias |

---

*ALPA - 2026*
