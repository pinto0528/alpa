import { useEffect, useRef, useState } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { distanciaKm } from '../hooks/useMockData.js'

export default function MapaNodos({ nodos, nodosInfo, gateway, onSeleccionar }) {
  const mapRef = useRef(null)
  const containerRef = useRef(null)
  const [mostrarCirculos, setMostrarCirculos] = useState(true)

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return

    const map = L.map(containerRef.current, {
      center: [-27.2205, -65.501],
      zoom: 14,
      zoomControl: true,
    })

    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      attribution: '&copy; <a href="https://esri.com">ESRI</a>',
      maxZoom: 19,
    }).addTo(map)

    mapRef.current = map

    return () => {
      map.remove()
      mapRef.current = null
    }
  }, [])

  const fitted = useRef(false)

  useEffect(() => {
    const map = mapRef.current
    if (!map) return

    const grupo = L.featureGroup().addTo(map)

    if (gateway) {
      L.circleMarker([gateway.lat, gateway.lng], {
        radius: 8,
        fillColor: '#333',
        color: '#111',
        weight: 2,
        fillOpacity: 0.9,
      }).bindPopup(`<b>${gateway.nombre}</b><br>Casa del productor`).addTo(grupo)
    }

    nodosInfo.forEach(info => {
      const n = nodos.find(x => x.nodo === info.nodo)
      const color = n?.flama ? '#911B1E' : n?.humo ? '#d4a017' : '#2e7d32'
      const dist = gateway ? distanciaKm(gateway.lat, gateway.lng, info.lat, info.lng) : 0

      // Círculo de cobertura de 5 km (alcance LoRa)
      if (mostrarCirculos) {
        L.circle([info.lat, info.lng], {
          radius: 5000,
          color: '#fff',
          fillColor: '#fff',
          fillOpacity: 0.06,
          weight: 1,
          opacity: 0.3,
          interactive: false,
        }).addTo(grupo)
      }

      if (gateway) {
        L.polyline([[gateway.lat, gateway.lng], [info.lat, info.lng]], {
          color: '#999', weight: 1, dashArray: '5,5', opacity: 0.5,
        }).addTo(grupo)
      }

      const marcador = L.circleMarker([info.lat, info.lng], {
        radius: n?.flama ? 14 : 10,
        fillColor: color,
        color: '#111',
        weight: 3,
        opacity: 1,
        fillOpacity: 0.85,
      })

      const alertaHtml = [
        n?.flama ? '<span style="color:#911B1E">⚠️ Flama detectada</span>' : '',
        n?.humo ? '<span style="color:#d4a017">💨 Humo detectado</span>' : '',
      ].filter(Boolean).join('<br>') || 'Normal'

      marcador.bindPopup(`
        <b>${info.nombre}</b><br>
        ${n?.temperatura?.toFixed(1) ?? '--'}°C &nbsp;|&nbsp; ${alertaHtml}<br>
        <span style="color:#888;font-size:0.85em">
          ${info.lat.toFixed(4)}, ${info.lng.toFixed(4)}<br>
          📡 ${dist.toFixed(2)} km del gateway
        </span>
      `)

      if (onSeleccionar) {
        marcador.on('click', () => onSeleccionar(info.nodo))
      }

      marcador.addTo(grupo)
    })

    if (!fitted.current) {
      map.fitBounds(grupo.getBounds().pad(0.1))
      fitted.current = true
    }

    return () => {
      map.removeLayer(grupo)
    }
  }, [nodos, nodosInfo, gateway, onSeleccionar, mostrarCirculos])

  return (
    <div className="mapa-wrapper" style={{ position: 'relative' }}>
      <div ref={containerRef} style={{ height: '420px', width: '100%', borderRadius: '8px' }} />
      <button
        onClick={() => setMostrarCirculos(v => !v)}
        style={{
          position: 'absolute',
          top: 50,
          right: 10,
          zIndex: 1000,
          background: mostrarCirculos ? '#911B1E' : '#555',
          color: '#fff',
          border: 'none',
          borderRadius: 4,
          padding: '6px 10px',
          fontSize: 12,
          cursor: 'pointer',
          opacity: 0.85,
          lineHeight: 1.2,
        }}
        title="Mostrar/ocultar círculos de cobertura"
      >
        {mostrarCirculos ? 'Ocultar' : 'Mostrar'} círculos<br />de cobertura
      </button>
    </div>
  )
}