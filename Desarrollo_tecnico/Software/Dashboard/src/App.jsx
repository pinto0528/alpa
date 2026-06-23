import { useState, useEffect, useRef } from 'react'
import PanelResumen from './componentes/PanelResumen.jsx'
import TimelineAlertas from './componentes/TimelineAlertas.jsx'
import BarraEstado from './componentes/BarraEstado.jsx'
import useWebSocket from './hooks/useWebSocket.js'

function App() {
  const [nodos, setNodos] = useState([])
  const [alertas, setAlertas] = useState([])
  const socketRef = useRef(null)
  const [conectado, setConectado] = useState(false)

  useEffect(() => {
    fetch('/api/nodos')
      .then(r => r.json())
      .then(setNodos)
    fetch('/api/alertas')
      .then(r => r.json())
      .then(setAlertas)
  }, [])

  useEffect(() => {
    const socket = useWebSocket()
    socketRef.current = socket

    socket.on('connect', () => setConectado(true))
    socket.on('disconnect', () => setConectado(false))

    socket.on('nuevo-evento', (evento) => {
      setNodos(prev => {
        const copia = prev.filter(n => n.nodo !== evento.nodo)
        return [evento, ...copia]
      })
      if (evento.tipo === 'alerta') {
        setAlertas(prev => [evento, ...prev].slice(0, 100))
      }
    })

    return () => socket.close()
  }, [])

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
