import { useState, useEffect, useCallback } from 'react'

const NODOS = [
  { nodo: 'Nodo-001', nombre: 'Sector Norte', lat: -12.046, lng: -77.042 },
  { nodo: 'Nodo-002', nombre: 'Sector Este', lat: -12.056, lng: -77.032 },
  { nodo: 'Nodo-003', nombre: 'Sector Oeste', lat: -12.036, lng: -77.052 },
  { nodo: 'Nodo-004', nombre: 'Sector Sur', lat: -12.066, lng: -77.022 },
]

function rand(min, max) {
  return +(min + Math.random() * (max - min)).toFixed(1)
}

let idCounter = 0

function generarEvento(nodosPrev) {
  const base = NODOS[Math.floor(Math.random() * NODOS.length)]
  const prev = nodosPrev.find(n => n.nodo === base.nodo) || {}

  const roll = Math.random()
  let salto = 0
  if (roll < 0.08) {
    salto = rand(18, 30)
  } else if (roll < 0.18) {
    salto = rand(10, 18)
  }

  const temp = prev.temperatura !== undefined
    ? Math.max(15, Math.min(60, prev.temperatura + rand(-3, 3) + salto))
    : rand(20, 35)
  const flama = temp > 45 ? 1 : 0
  const humo = temp > 40 || flama ? 1 : 0
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
        } else {
          setAlertas(aPrev => aPrev.filter(a => a.nodo !== evt.nodo))
        }
        return nuevos
      })
    }, 3000)

    return () => clearInterval(intervalo)
  }, [])

  function simular(tipo, nodoId) {
    const ids = nodoId ? [nodoId] : [NODOS[Math.floor(Math.random() * NODOS.length)].nodo]
    setNodos(prev => {
      let nuevos = [...prev]
      for (const id of ids) {
        const base = NODOS.find(n => n.nodo === id)
        const evento = {
          _id: String(++idCounter),
          nodo: id,
          temperatura: tipo === 'critico' ? rand(55, 58) : tipo === 'moderado' ? rand(42, 47) : rand(23, 28),
          flama: tipo === 'critico' ? 1 : 0,
          humo: tipo === 'critico' || tipo === 'moderado' ? 1 : 0,
          tipo: tipo === 'normal' ? 'status' : 'alerta',
          timestamp: new Date().toISOString(),
        }
        nuevos = [evento, ...nuevos.filter(n => n.nodo !== id)]
        if (evento.tipo === 'alerta') {
          setAlertas(aPrev => [evento, ...aPrev.filter(a => a.nodo !== id)].slice(0, 50))
        } else {
          setAlertas(aPrev => aPrev.filter(a => a.nodo !== id))
        }
      }
      return nuevos
    })
  }

  return { nodos, alertas, conectado: true, nodosInfo: NODOS, simular }
}
