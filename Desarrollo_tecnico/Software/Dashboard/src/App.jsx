import { useState } from 'react'
import Login from './componentes/Login.jsx'
import DashboardStats from './componentes/DashboardStats.jsx'
import MapaNodos from './componentes/MapaNodos.jsx'
import PanelResumen from './componentes/PanelResumen.jsx'
import TimelineAlertas from './componentes/TimelineAlertas.jsx'
import DetalleNodo from './componentes/DetalleNodo.jsx'
import BarraEstado from './componentes/BarraEstado.jsx'
import useMockData from './hooks/useMockData.js'

const TABS = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'nodos', label: 'Nodos' },
  { id: 'alertas', label: 'Alertas' },
]

function App() {
  const [autenticado, setAutenticado] = useState(false)
  const [tab, setTab] = useState('dashboard')
  const [nodoSeleccionado, setNodoSeleccionado] = useState(null)
  const { nodos, alertas, conectado, nodosInfo } = useMockData()

  if (!autenticado) return <Login onLogin={() => setAutenticado(true)} />

  return (
    <div className="app">
      <header className="header">
        <div className="header-left">
          <svg viewBox="0 0 600 250" className="logo-alpa" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <mask id="cutout">
                <rect x="140" y="30" width="320" height="190" fill="white" />
                <text x="300" y="185" fontFamily="'Playfair Display', Georgia, serif"
                      fontWeight="700" fontSize="70" textAnchor="middle"
                      letterSpacing="0" fill="black">
                  <tspan>A</tspan><tspan dx="4">L</tspan><tspan dx="0">P</tspan><tspan dx="-2">A</tspan>
                </text>
              </mask>
            </defs>
            <rect x="40" y="55" width="25" height="140" fill="#911B1E" />
            <rect x="90" y="55" width="25" height="140" fill="#911B1E" />
            <rect x="140" y="30" width="320" height="190" fill="#911B1E" mask="url(#cutout)" />
            <rect x="485" y="55" width="25" height="140" fill="#911B1E" />
            <rect x="535" y="55" width="25" height="140" fill="#911B1E" />
          </svg>
          <div className="header-titles">
            <h1>Panel de Monitoreo</h1>
            <span className="tagline">Cuidamos tu campo</span>
          </div>
        </div>
        <div className="header-right">
          <BarraEstado conectado={conectado} cantidad={nodos.length} />
          <button className="btn-logout" onClick={() => setAutenticado(false)}>Salir</button>
        </div>
      </header>

      <nav className="tabs">
        {TABS.map(t => (
          <button key={t.id} className={`tab ${tab === t.id ? 'activo' : ''}`} onClick={() => setTab(t.id)}>
            {t.label}
          </button>
        ))}
      </nav>

      <main>
        {tab === 'dashboard' && (
          <>
            <DashboardStats nodos={nodos} alertas={alertas} />
            <section style={{ marginTop: '1.5rem' }}>
              <h2 className="seccion-titulo">Ubicación de nodos</h2>
              <MapaNodos nodos={nodos} nodosInfo={nodosInfo} onSeleccionar={setNodoSeleccionado} />
            </section>
          </>
        )}
        {tab === 'nodos' && (
          <PanelResumen nodos={nodos} onSeleccionar={setNodoSeleccionado} />
        )}
        {tab === 'alertas' && (
          <TimelineAlertas alertas={alertas} />
        )}
      </main>

      {nodoSeleccionado && (
        <DetalleNodo
          nodo={nodos.find(n => n.nodo === nodoSeleccionado)}
          onCerrar={() => setNodoSeleccionado(null)}
        />
      )}
    </div>
  )
}

export default App
