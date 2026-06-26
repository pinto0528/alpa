import { useState } from 'react'

const TIPOS = [
  { id: 'critico', label: 'Crítico', icon: '🔴', clase: 'btn-critico' },
  { id: 'moderado', label: 'Moderado', icon: '🟠', clase: 'btn-moderado' },
  { id: 'normal', label: 'Normal', icon: '🟢', clase: 'btn-normal' },
]

export default function PanelSimulacion({ nodosInfo, simular }) {
  const [abierto, setAbierto] = useState(false)
  const [nodoId, setNodoId] = useState(nodosInfo[0]?.nodo || '')

  if (!nodosInfo.length) return null

  function handleSimular(tipo) {
    simular(tipo, nodoId)
    setAbierto(false)
  }

  return (
    <>
      <button className="simulacion-flotante" onClick={() => setAbierto(!abierto)} title="Simular evento">
        ⚡
      </button>
      {abierto && (
        <div className="simulacion-panel">
          <div className="simulacion-header">
            <strong>Simular evento</strong>
            <button className="simulacion-cerrar" onClick={() => setAbierto(false)}>✕</button>
          </div>
          <select value={nodoId} onChange={e => setNodoId(e.target.value)} className="simulacion-select">
            {nodosInfo.map(n => <option key={n.nodo} value={n.nodo}>{n.nombre}</option>)}
          </select>
          <div className="simulacion-botones">
            {TIPOS.map(t => (
              <button key={t.id} className={`simulacion-btn ${t.clase}`} onClick={() => handleSimular(t.id)}>
                {t.icon} {t.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
