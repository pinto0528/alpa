import { useState, useEffect, useCallback } from 'react'

const NODOS = [
  { nodo: 'Nodo-001', nombre: 'Sector Norte' },
  { nodo: 'Nodo-002', nombre: 'Sector Este' },
  { nodo: 'Nodo-003', nombre: 'Sector Oeste' },
  { nodo: 'Nodo-004', nombre: 'Sector Sur' },
]

function rand(min, max) {
  return +(min + Math.random() * (max - min)).toFixed(1)
}

let idCounter = 0

function generarEvento(nodosPrev) {
  const base = NODOS[Math.floor(Math.random() * NODOS.length)]
  const prev = nodosPrev.find(n => n.nodo === base.nodo) || {}
  const temp = prev.temperatura !== undefined
    ? Math.max(15, Math.min(60, prev.temperatura + rand(-3, 3)))
    : rand(20, 35)
  const flama = temp > 45 ? 1 : (Math.random() < 0.1 ? 1 : 0)
  const humo = temp > 40 || flama ? 1 : (Math.random() < 0.15 ? 1 : 0)
  const tipo = (temp > 50 || flama || humo) ? 'alerta' : 'status'
  const timestamp = new Date().toISOString()
  return { _id: String(++idCounter), nodo: base.nodo, temperatura: temp, flama, humo, tipo, timestamp }
}

export default function useMockData() {
  const [nodos, setNodos] = useState([])
  const [alertas, setAlertas] = useState([])

  useEffect(() => {
    const iniciales = NODOS.map(n => ({
      _id: String(++idCounter),
      nodo: n.nodo,
      temperatura: rand(20, 35),
      flama: 0,
      humo: 0,
      tipo: 'status',
      timestamp: new Date().toISOString(),
    }))
    setNodos(iniciales)

    const intervalo = setInterval(() => {
      setNodos(prev => {
        const evt = generarEvento(prev)
        const copia = prev.filter(n => n.nodo !== evt.nodo)
        const nuevos = [evt, ...copia]
        if (evt.tipo === 'alerta') {
          setAlertas(aPrev => [evt, ...aPrev].slice(0, 50))
        }
        return nuevos
      })
    }, 3000)

    return () => clearInterval(intervalo)
  }, [])

  return { nodos, alertas, conectado: true }
}
