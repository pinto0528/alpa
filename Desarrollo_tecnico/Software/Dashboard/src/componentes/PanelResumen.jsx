export default function PanelResumen({ nodos }) {
  if (!nodos.length) {
    return <div className="vacio">Esperando datos de los nodos...</div>
  }

  return (
    <section>
      <h2 className="seccion-titulo">Nodos</h2>
      <div className="grid">
        {nodos.map(n => (
          <div key={n.nodo} className={`card ${n.tipo === 'alerta' ? 'alerta' : ''}`}>
            <div className="card-header">
              <h3>{n.nodo}</h3>
              <span className={`estado-badge ${n.tipo}`}>{n.tipo}</span>
            </div>
            <div className="card-body">
              <div className="valor">
                <span className="label">Temperatura</span>
                <span className={`dato ${n.temperatura > 50 ? 'peligro' : ''}`}>
                  {n.temperatura.toFixed(1)}°C
                </span>
              </div>
              <div className="valor">
                <span className="label">Flama</span>
                <span className={`dato ${n.flama ? 'peligro' : 'seguro'}`}>
                  {n.flama ? 'DETECTADA' : 'Sin flama'}
                </span>
              </div>
              <div className="valor">
                <span className="label">Humo</span>
                <span className={`dato ${n.humo ? 'peligro' : 'seguro'}`}>
                  {n.humo ? 'DETECTADO' : 'Sin humo'}
                </span>
              </div>
              <div className="valor">
                <span className="label">Actualizado</span>
                <span className="dato" style={{ color: '#64748b', fontSize: '0.8rem' }}>
                  {new Date(n.timestamp).toLocaleTimeString()}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
