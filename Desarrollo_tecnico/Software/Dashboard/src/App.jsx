import { useState } from 'react'
import Login from './componentes/Login.jsx'
import DashboardStats from './componentes/DashboardStats.jsx'
import MapaNodos from './componentes/MapaNodos.jsx'
import PanelResumen from './componentes/PanelResumen.jsx'
import TimelineAlertas from './componentes/TimelineAlertas.jsx'
import DetalleNodo from './componentes/DetalleNodo.jsx'
import BarraEstado from './componentes/BarraEstado.jsx'
import useMockData from './hooks/useMockData.js'
import useRouter from './hooks/useRouter.js'

const TABS = [
  { id: 'dashboard', path: '/', label: 'Dashboard' },
  { id: 'nodos', path: '/nodos', label: 'Nodos' },
  { id: 'alertas', path: '/alertas', label: 'Alertas' },
]

function App() {
  const [autenticado, setAutenticado] = useState(false)
  const [path, navigate] = useRouter()
  const [nodoSeleccionado, setNodoSeleccionado] = useState(null)
  const { nodos, alertas, conectado, nodosInfo } = useMockData()

  const tabActual = path === '/' ? 'dashboard' : path.slice(1)
  const tabValido = TABS.find(t => t.id === tabActual)
  if (!tabValido && autenticado) navigate('/')

  if (!autenticado) return <Login onLogin={() => setAutenticado(true)} />

  return (
    <div className="app">
      <header className="header">
        <div className="header-left">
          <a href="/" className="logo-link" onClick={e => { e.preventDefault(); navigate('/') }}>
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
          </a>
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
          <a key={t.id} href={t.path} className={`tab ${tabActual === t.id ? 'activo' : ''}`}
             onClick={e => { e.preventDefault(); navigate(t.path) }}>
            {t.label}
          </a>
        ))}
      </nav>

      <main>
        {tabActual === 'dashboard' && (
          <>
            <DashboardStats nodos={nodos} alertas={alertas} />
            <section style={{ marginTop: '1.5rem' }}>
              <h2 className="seccion-titulo">Ubicación de nodos</h2>
              <MapaNodos nodos={nodos} nodosInfo={nodosInfo} onSeleccionar={setNodoSeleccionado} />
            </section>
          </>
        )}
        {tabActual === 'nodos' && (
          <PanelResumen nodos={nodos} onSeleccionar={setNodoSeleccionado} />
        )}
        {tabActual === 'alertas' && (
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
