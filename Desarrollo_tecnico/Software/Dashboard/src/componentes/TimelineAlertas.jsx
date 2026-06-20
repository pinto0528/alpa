const MOTIVOS = {
  flama: 'Flama detectada',
  humo: 'Humo detectado',
  temperatura: 'Temperatura elevada',
}

function motivoAlerta(e) {
  if (e.flama) return MOTIVOS.flama
  if (e.humo) return MOTIVOS.humo
  if (e.temperatura > 50) return MOTIVOS.temperatura
  return 'Alerta'
}

export default function TimelineAlertas({ alertas }) {
  if (!alertas.length) {
    return (
      <section style={{ marginTop: '2rem' }}>
        <h2 className="seccion-titulo">Alertas</h2>
        <div className="vacio">Sin alertas por el momento</div>
      </section>
    )
  }

  return (
    <section style={{ marginTop: '2rem' }}>
      <h2 className="seccion-titulo">Alertas recientes</h2>
      <div className="card" style={{ padding: '0 1.25rem' }}>
        {alertas.map((a, i) => (
          <div key={a._id || i} className="alerta-item">
            <div className="alerta-icono">!</div>
            <div className="alerta-info">
              <div className="nodo-label">{a.nodo}</div>
              <div className="detalle">{motivoAlerta(a)}</div>
              <div className="timestamp">{new Date(a.timestamp).toLocaleString()}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
