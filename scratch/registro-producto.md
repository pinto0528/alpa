# Registro de ALPA — Trámites y Requisitos

**ALPA — Sistema de Alerta de Incendios Rurales**

**Fecha:** Julio 2026
**Versión:** 1.0

---

## 1. Registro de Marca — INPI (nacional)

**Organismo:** Instituto Nacional de la Propiedad Industrial (INPI)
**Sitio:** portaltramites.inpi.gob.ar
**Requisito previo:** Clave Fiscal AFIP nivel 2 o superior

| Concepto | Detalle |
|---|---|
| **Qué protege** | Nombre "ALPA" y/o logotipo. Clase 9 (hardware/sensores) y/o Clase 42 (software/IoT). |
| **Vigencia** | 10 años, renovable indefinidamente. |
| **Costo** | ~$39.000 ARS por clase (arancel INPI, se actualiza mensualmente por UMAPI). Honorarios de gestor/abogado opcional: $200.000–$300.000 ARS. |
| **Tiempo estimado** | ~2 meses si no hay oposiciones. |
| **Proceso** | 1. Búsqueda previa de antecedentes (hoy el INPI no la hace automáticamente). 2. Solicitud online con datos del titular, tipo de marca, clases. 3. Publicación en Boletín de Marcas (30 días de oposiciones). 4. Concesión automática si no hay oposiciones. |
| **Mantenimiento** | No hay anualidades. A los 5 años hay que presentar Declaración Jurada de uso (arancelado). |

Más información: argentina.gob.ar/inpi/marcas/registrar-una-marca

---

## 2. Patente de Invención o Modelo de Utilidad — INPI

**Organismo:** INPI
**Sitio:** portaltramites.inpi.gob.ar

| Concepto | Patente de Invención | Modelo de Utilidad |
|---|---|---|
| **Qué protege** | El sistema/método de detección en sí | Mejoras funcionales del hardware (ej: diseño del nodo sensor) |
| **Requisitos** | Novedad, actividad inventiva, aplicación industrial | Novedad, aplicación industrial (menos exigente) |
| **Vigencia** | 20 años | 10 años |
| **Tiempo de trámite** | ~5 años | ~2 años |
| **Descuento** | PyMEs, universidades, personas humanas: 50% de aranceles | Ídem |

**Cuidado:** Si el proyecto ya fue divulgado (ferias, papers, GitHub público), hay un plazo máximo de **1 año** desde la divulgación para presentar la solicitud (art. 5 Ley 24.481).

**Anualidades:** Se deben pagar tasas de mantenimiento anual una vez concedida. Si no se pagan, la patente caduca.

Más información: argentina.gob.ar/inpi/patentes-de-invencion-y-modelos-de-utilidad

---

## 3. Homologación ENACOM — Obligatorio para hardware con radiofrecuencia

**Organismo:** Ente Nacional de Comunicaciones (ENACOM)
**Aplica a:** Nodo sensor (LoRa 915 MHz), gateway (LoRa + WiFi). Todo equipo que emita RF necesita homologación para comercializarse.

### Normativa vigente: Resolución ENACOM 57/2026

A partir del **1 de septiembre de 2026** rige el nuevo Registro de Actividades y Materiales de Telecomunicaciones (RAMATEL).

**Requisitos:**
1. Inscripción en el Sub-registro de Actividades del RAMATEL como "Comercialización".
2. Equipo tipificado en el Nomenclador Técnico Oficial del ENACOM.
3. Certificado de Conformidad emitido por una Agencia de Certificación acreditada (inscripta en el Registro de Agencias de Certificación del ENACOM).
4. Informe de ensayo de laboratorio acreditado por OAA (Organismo Argentino de Acreditación).
5. Documentación técnica completa: frecuencias, potencia de transmisión, diagramas en bloque.

**Sobre la banda 915 MHz:**
- Es banda ISM (915–928 MHz) en Argentina, de uso compartido sin licencia individual.
- Regulada por Resolución ENACOM 2019-4653. Hay que cumplir parámetros técnicos (potencia máxima, ciclo de trabajo, etc.).
- Para LoRaWAN, la región es AU915 (canalización ANSI/TIA-862).

**Costos estimados:** USD 1.000–5.000 según el laboratorio y complejidad del equipo.

**Vigencia:** Con el nuevo régimen, las inscripciones no tienen vencimiento siempre que se mantengan las condiciones originales.

Más información: enacom.gob.ar/homologacion-de-equipos_p347

---

## 4. Certificación de Seguridad Eléctrica — IRAM

**Organismo:** IRAM u organismos de certificación reconocidos

**Aplica a:** Todo producto eléctrico de baja tensión que se comercialice en Argentina (Resolución 237/2024).

**Relevancia para ALPA:**
- El **nodo sensor** funciona a batería (18650 + panel solar). Probablemente exento.
- El **gateway** si usa cargador de red (220V), requiere certificación de seguridad eléctrica.
- El **certificado** se obtiene mediante ensayos en laboratorios acreditados contra normas IRAM o IEC aplicables.

Más información: iram.org.ar/servicio/certificacion-de-seguridad-electrica

---

## 5. Habilitación Comercial — Municipalidad de San Miguel de Tucumán

**Sitio:** munidigital.com/citizenv2/sanmigueldetucuman/login
**Dirección física:** Crisóstomo Álvarez 229 (para consultas presenciales)

**Requisitos para habilitación online:**
1. Crear cuenta en el sistema MuniDigital.
2. Completar Formulario FHN-1 (Uso Conforme) y FHN-2 (Solicitud de Habilitación y Empadronamiento). Disponibles en dimsmt.gob.ar.
3. Foto de la fachada del local (si aplica).
4. DNI del titular.
5. Constancia de inscripción en AFIP.
6. Constancia de inscripción en Dirección General de Rentas de Tucumán (rentastucuman.gob.ar).
7. Sistema Registral de AFIP.
8. Acreditación del derecho de uso del inmueble.
9. Seguro de Responsabilidad Civil.

**Plazos:**
- Habilitación provisoria: inmediata (válida por 60 días).
- Inspección municipal durante esos 60 días.
- Habilitación definitiva: luego de aprobada la inspección.

**Nota:** Por ahora aplica a negocios de bajo riesgo, sin afluencia masiva de público, locales hasta 300 m². Un emprendimiento tecnológico sin local comercial podría calificar.

**Contacto:** 9 de Julio 598 Sur, SMT | Tel: 4516500

Más información: smt.gob.ar

---

## 6. Registro Provincial de Economía del Conocimiento — Tucumán (Ley 9.626)

**Organismo:** Ministerio de Desarrollo Productivo / IDEP Tucumán
**Sitio:** producciontucuman.gob.ar

**Beneficios:** Exenciones y promociones fiscales provinciales para empresas de software, IoT, electrónica.

**Requisitos:**
1. Estar inscripto en el **Registro Nacional de Beneficiarios del Régimen de Promoción de la Economía del Conocimiento** (argentina.gob.ar).
2. Desarrollar actividades en inmuebles ubicados en Tucumán.
3. No poseer deudas con DGR Tucumán.
4. Constancia de inscripción en AFIP y DGR con las actividades de Economía del Conocimiento.

**Actividades que aplican a ALPA según nomenclador (Ley 9.629):**
- Software embebido (código 722000)
- Plataformas IoT / aplicaciones informáticas (código 729000)
- Desarrollo de hardware con componente de software

**Proceso:**
1. Obtener certificado del Registro Nacional de Economía del Conocimiento.
2. Completar preinscripción en sipe.empleotucuman.gob.ar.
3. Esperar aprobación por Resolución del Ministerio de Desarrollo Productivo.

**Actualmente** hay solo 5 empresas inscriptas en la provincia. Es un registro nuevo con baja competencia.

Más información: producciontucuman.gob.ar | portal.empleotucuman.gob.ar

---

## 7. SENASA — No aplica

El sistema ALPA es un dispositivo de detección electrónica. No es un producto fitosanitario, fertilizante ni biológico. **No requiere registro en SENASA.**

---

## Resumen de prioridades

| Trámite | Prioridad | Costo estimado | Tiempo |
|---|---|---|---|
| Registro de marca (INPI) | Alta — proteger el nombre | ~$39.000 ARS + gestor | ~2 meses |
| Homologación ENACOM | Alta — obligatorio para vender hardware con RF | USD 1.000–5.000 | 3–6 meses |
| Habilitación municipal (SMT) | Media — para operar legalmente | Tasas municipales | 60 días (provisoria) |
| Certificación IRAM | Media — si el gateway usa 220V | Variable | 1–3 meses |
| Registro Economía del Conocimiento | Media-baja — beneficios fiscales | Gratuito | 1–2 meses |
| Patente / Modelo de Utilidad | Baja — largo plazo | Aranceles INPI + anualidades | 2–5 años |

---

*Creado: Julio 2026*
