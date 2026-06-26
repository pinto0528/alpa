export default function DetalleNodo({ nodo, onCerrar }) {
  if (!nodo) return null
  return (
    <div className="detalle-overlay" onClick={onCerrar}>
      <div className="detalle-panel" onClick={e => e.stopPropagation()}>
        <button className="detalle-cerrar" onClick={onCerrar}>✕</button>
        <h2>{nodo.nodo}</h2>
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
            <span className="detalle-label">Última actualización</span>
            <span className="detalle-valor">{new Date(nodo.timestamp).toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
