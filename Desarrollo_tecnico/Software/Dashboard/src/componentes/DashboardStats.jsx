export default function DashboardStats({ nodos, alertas }) {
  const alertasActivas = alertas.filter(a => a.tipo === 'alerta').length
  const tempPromedio = nodos.length
    ? (nodos.reduce((s, n) => s + n.temperatura, 0) / nodos.length).toFixed(1)
    : '—'
  const riesgo = alertasActivas > 2 ? 'crítico' : alertasActivas > 0 ? 'moderado' : 'mínimo'
  const riesgoClase = riesgo === 'crítico' ? 'rojo' : riesgo === 'moderado' ? 'ambar' : 'verde'

  return (
    <div className="stats-grid">
      <div className="stat-card">
        <span className="stat-valor">{nodos.length}</span>
        <span className="stat-label">Nodos activos</span>
      </div>
      <div className="stat-card">
        <span className="stat-valor">{alertasActivas}</span>
        <span className="stat-label">Alertas activas</span>
      </div>
      <div className="stat-card">
        <span className="stat-valor">{tempPromedio}°C</span>
        <span className="stat-label">Temp. promedio</span>
      </div>
      <div className="stat-card">
        <span className={`stat-valor stat-riesgo-${riesgoClase}`}>{riesgo}</span>
        <span className="stat-label">Riesgo general</span>
      </div>
    </div>
  )
}
