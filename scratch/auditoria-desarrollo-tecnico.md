# Auditoría — ALPA · Rama `desarrollo-tecnico`
**Fecha:** 2026-06-26 | **Nivel de severidad general:** Alto

## Resumen Ejecutivo

La rama contiene el código funcional del sistema: firmware, servidor y dashboard. El servidor y firmware son sólidos, pero el dashboard referencia tipografías (Playfair Display, Montserrat) sin cargarlas, el README describe una estructura que no coincide con la rama, y no hay tests en ningún componente. El prototipo 1 (WeMos) está obsoleto pero sigue en el repo sin indicación de descarte.

## Hallazgos por Impacto

### 🔴 Críticos

- **Hallazgo:** Dashboard referencia tipografías sin cargarlas
  - **Evidencia:** `Desarrollo_Tecnico/Software/Dashboard/src/App.jsx:44`, `src/App.css:43`
  - **Razón:** `App.jsx` usa `font-family: 'Playfair Display', Georgia, serif` y App.css espera Montserrat como cuerpo, pero ningún archivo importa las fuentes (no hay `<link>` a Google Fonts en `index.html` ni en los CSS). Se renderiza con la fuente fallback Georgia.
  - **Consecuencia:** El dashboard se ve con tipografía incorrecta. La marca ALPA exige Playfair Display + Montserrat.
  - **Recomendación:** Agregar `<link>` a Google Fonts en `index.html` para Playfair Display (700) y Montserrat (300, 400, 600, 700).

- **Hallazgo:** README describe estructura que no existe en esta rama
  - **Evidencia:** `README.md:31-38`
  - **Razón:** El README usa `Desarrollo_tecnico/` (minúscula) en vez de `Desarrollo_Tecnico/` (mayúscula) y referencia `Documentacion/` que no está presente.
  - **Consecuencia:** Información falsa sobre la estructura del proyecto para quien navegue esta rama.
  - **Recomendación:** Actualizar el README para reflejar el contenido real de la rama.

- **Hallazgo:** Color de fondo `#f5f5f0` en vez de `#F5F5F5` (hueso ALPA)
  - **Evidencia:** `Desarrollo_Tecnico/Software/Dashboard/src/App.css:5`
  - **Razón:** El fondo del dashboard es `#f5f5f0` en vez del hueso oficial `#F5F5F5`. Diferencia sutil pero incumple la identidad visual.
  - **Consecuencia:** El dashboard no coincide cromáticamente con el resto de los materiales de marca.
  - **Recomendación:** Cambiar a `#F5F5F5`.

### 🟠 Altos

- **Hallazgo:** Cero tests en toda la rama
  - **Evidencia:** No existe ningún archivo `*.test.js`, `*.spec.js`, `__tests__/`, ni `test/` en `Servidor/` ni `Dashboard/`.
  - **Razón:** Un servidor Express con API REST y WebSocket y un frontend React sin tests unitarios ni de integración.
  - **Consecuencia:** No hay forma de verificar que cambios no rompan funcionalidad existente. Cualquier refactor es riesgoso.
  - **Recomendación:** Agregar tests unitarios para server.js (rutas API) y tests de componentes para el dashboard (Vitest + React Testing Library).

- **Hallazgo:** Prototipo 1 (WeMos LOLIN32) abandonado pero presente
  - **Evidencia:** `Desarrollo_Tecnico/Hardware/Prototipos/prototipo_1.md`
  - **Razón:** El prototipo 1 usaba WeMos LOLIN32 sin LoRa, descartado por el prototipo 2 (XIAO + SX1262). Sigue en el repo sin marca de obsoleto.
  - **Consecuencia:** Confusión sobre cuál es el diseño vigente. Alguien podría intentar reproducir el prototipo 1 pensando que es actual.
  - **Recomendación:** Agregar indicación "OBSOLETO — reemplazado por Prototipo 2" al inicio del archivo, o eliminar el archivo.

- **Hallazgo:** No hay `.env.example` para configuración del servidor
  - **Evidencia:** `Desarrollo_Tecnico/Software/Servidor/` no contiene `.env.example` ni `.env`.
  - **Razón:** `server.js:1` requiere `dotenv` y usa `process.env.PORT`, pero no hay un archivo de ejemplo que documente las variables necesarias.
  - **Consecuencia:** Nuevos desarrolladores no saben qué variables de entorno configurar.
  - **Recomendación:** Crear `.env.example` con `PORT=3001` y cualquier otra variable necesaria.

- **Hallazgo:** package-lock.json trackeado en git
  - **Evidencia:** `Desarrollo_Tecnico/Software/Servidor/package-lock.json`, `Desarrollo_Tecnico/Software/Dashboard/package-lock.json`
  - **Razón:** Archivos autogenerados de gran tamaño (especialmente el de Dashboard) están versionados. En proyectos pequeños sin necesidad de reproducibilidad exacta, suelen ignorarse.
  - **Consecuencia:** Incrementa el tamaño del repo innecesariamente.
  - **Recomendación:** Agregar `package-lock.json` al `.gitignore` o mantenerlo si se requiere reproducibilidad estricta (decisión explícita).

### 🟡 Medios

- **Hallazgo:** Credenciales WiFi hardcodeadas en gateway
  - **Evidencia:** `Desarrollo_Tecnico/Software/Firmware_sensores/gateway/src/main.cpp:22-23`
  - **Razón:** `WIFI_SSID "NODO"` y `WIFI_PASS "12345678"` están fijos en el código. Si la red cambia, hay que recompilar.
  - **Consecuencia:** Dificulta el despliegue en redes diferentes sin modificar el firmware.
  - **Recomendación:** Leer credenciales desde EEPROM/NVS con fallback a los valores por defecto, o documentar que deben cambiarse antes de compilar.

- **Hallazgo:** `clasificarAlerta()` usa umbral de temperatura fijo (50°C)
  - **Evidencia:** `Desarrollo_Tecnico/Software/Firmware_sensores/gateway/src/main.cpp:256-260`
  - **Razón:** El umbral de 50°C está hardcodeado sin posibilidad de configuración remota.
  - **Consecuencia:** No se puede ajustar la sensibilidad sin recompilar el firmware.
  - **Recomendación:** Definir como constante y documentar, o permitir configuración vía NVS.

- **Hallazgo:** Dashboard usa rutas API relativas sin manejo de error
  - **Evidencia:** `Desarrollo_Tecnico/Software/Dashboard/src/App.jsx:14-19`
  - **Razón:** `fetch('/api/nodos')` y `fetch('/api/alertas')` usan rutas relativas que dependen del proxy de Vite en desarrollo. En producción necesitarían URL absoluta. Tampoco hay manejo de error si el fetch falla.
  - **Consecuencia:** El dashboard no muestra ningún error si el servidor no responde.
  - **Recomendación:** Agregar `.catch()` con estado de error visible en la UI.

- **Hallazgo:** `useWebSocket` crea socket sin opciones de reconexión
  - **Evidencia:** `Desarrollo_Tecnico/Software/Dashboard/src/hooks/useWebSocket.js:4`
  - **Razón:** `io({ transports: ['websocket', 'polling'] })` usa configuración mínima. Ante caída del servidor, Socket.IO se reconecta por defecto pero sin callbacks visibles para el usuario.
  - **Consecuencia:** El usuario no sabe si la conexión se perdió y se está reconectando.
  - **Recomendación:** La UI ya muestra estado de conexión (BarraEstado), está cubierto parcialmente.

### 🔵 Bajos

- **Hallazgo:** `server.js` no valida tipo de datos en POST /api/eventos
  - **Evidencia:** `Desarrollo_Tecnico/Software/Servidor/server.js:20-23`
  - **Razón:** Valida que `nodo` y `temperatura` existan, pero no verifica que `temperatura` sea numérica.
  - **Recomendación:** Validar `typeof temperatura === 'number'` y responder 400 si no.

- **Hallazgo:** Dashboard muestra `toFixed(1)` sin verificar que temperatura sea número
  - **Evidencia:** `Desarrollo_Tecnico/Software/Dashboard/src/componentes/PanelResumen.jsx:20`
  - **Razón:** Si temperatura es `undefined` o string, `toFixed` lanza error en runtime.
  - **Recomendación:** Agregar guard: `{typeof n.temperatura === 'number' ? n.temperatura.toFixed(1) : 'N/A'}°C`

## Aspectos Positivos

- `server.js` es código limpio, minimalista y funcional: 4 rutas, NeDB, Socket.IO bien integrado.
- Firmware de transmisor (`transmisor.cpp`) bien estructurado: configuración clara, struct binario packeado, manejo correcto de flags de flama/humo, transmisión LoRa a 915 MHz.
- Firmware de gateway (`main.cpp`) robusto: manejo de recepción LoRa por IRQ, clasificación de alertas, HTTP POST con JSON, modo simulación para tests offline.
- Dashboard funcional con React + Vite: uso correcto de hooks, WebSocket en tiempo real, cards con indicación visual de alertas.
- Diagrama Mermaid del sistema claro y completo.
- Documentación de prototipo 2 detallada: pinouts, diagramas ASCII, checklist de ensamblaje, config de firmware.
- Lista de materiales actualizada y completa con cantidades, estados y notas.
- Dependencias mínimas y actualizadas en ambos package.json.

## Checklist de Cumplimiento

| Aspecto | Estado | Observación |
|---------|--------|-------------|
| Estructura | ✅ | Organización clara: Hardware/, Software/Firmware/, Servidor/, Dashboard/ |
| Código | ⚠️ | Sólido pero sin tests ni validación de tipos |
| Documentación | ⚠️ | README desactualizado; prototipos bien documentados |
| Branding | ❌ | Dashboard sin fuentes ALPA cargadas; color de fondo incorrecto |
| Tests | ❌ | Zero tests en toda la rama |
