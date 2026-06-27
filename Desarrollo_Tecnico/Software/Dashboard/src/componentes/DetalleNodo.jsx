import { distanciaKm } from '../hooks/useMockData.js'

export default function DetalleNodo({ nodo, nodosInfo, gateway, onCerrar }) {
  if (!nodo) return null
  const info = nodosInfo?.find(n => n.nodo === nodo.nodo)
  const dist = info && gateway ? distanciaKm(gateway.lat, gateway.lng, info.lat, info.lng) : null
  return (
    <div className="detalle-overlay" onClick={onCerrar}>
      <div className="detalle-panel" onClick={e => e.stopPropagation()}>
        <button className="detalle-cerrar" onClick={onCerrar}>✕</button>
        <h2>{info?.nombre || nodo.nodo}</h2>
        <span className={`estado-badge ${nodo.tipo}`}>{nodo.tipo}</span>
        <div className="detalle-cuerpo">
          <div className="detalle-fila">
            <span className="detalle-label">Temperatura</span>
            <span className={`detalle-valor ${nodo.temperatura > 50 ? 'peligro' : ''}`}>
              {nodo.temperatura.toFixed(1)}°C
            </span>
          </div>
          <div className="detalle-fila">
            <span className="detalle-label">Flama</span>
            <span className={`detalle-valor ${nodo.flama ? 'peligro' : 'seguro'}`}>
              {nodo.flama ? 'DETECTADA' : 'Sin flama'}
            </span>
          </div>
          <div className="detalle-fila">
            <span className="detalle-label">Humo</span>
            <span className={`detalle-valor ${nodo.humo ? 'peligro' : 'seguro'}`}>
              {nodo.humo ? 'DETECTADO' : 'Sin humo'}
            </span>
          </div>
          <div className="detalle-fila">
            <span className="detalle-label">Coordenadas</span>
            <span className="detalle-valor">{info ? `${info.lat.toFixed(4)}, ${info.lng.toFixed(4)}` : '—'}</span>
          </div>
          {dist !== null && (
            <div className="detalle-fila">
              <span className="detalle-label">Dist. al gateway</span>
              <span className="detalle-valor">{dist.toFixed(2)} km</span>
            </div>
          )}
          <div className="detalle-fila">
            <span className="detalle-label">Última actualización</span>
            <span className="detalle-valor">{new Date(nodo.timestamp).toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  )
}