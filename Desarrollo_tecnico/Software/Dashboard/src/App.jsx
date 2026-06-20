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
        <h1>EmprendeU — Monitoreo</h1>
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
