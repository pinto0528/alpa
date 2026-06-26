import { useState } from 'react'
import Login from './componentes/Login.jsx'
import PanelResumen from './componentes/PanelResumen.jsx'
import TimelineAlertas from './componentes/TimelineAlertas.jsx'
import BarraEstado from './componentes/BarraEstado.jsx'
import useMockData from './hooks/useMockData.js'

function App() {
  const [autenticado, setAutenticado] = useState(false)
  const { nodos, alertas, conectado } = useMockData()

  if (!autenticado) return <Login onLogin={() => setAutenticado(true)} />

  return (
    <div className="app">
      <header className="header">
        <div className="header-left">
          <svg viewBox="0 0 600 250" className="logo-alpa" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <mask id="cutout">
                <rect x="140" y="30" width="320" height="190" fill="white" />
                <text x="300" y="185" font-family="'Playfair Display', Georgia, serif"
                      font-weight="700" font-size="70" text-anchor="middle"
                      letter-spacing="0" fill="black">
                  <tspan>A</tspan>
                  <tspan dx="4">L</tspan>
                  <tspan dx="0">P</tspan>
                  <tspan dx="-2">A</tspan>
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
        <BarraEstado conectado={conectado} cantidad={nodos.length} />
      </header>
      <main>
        <PanelResumen nodos={nodos} />
        <TimelineAlertas alertas={alertas} />
      </main>
    </div>
  )
}

export default App
