import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { distanciaKm } from '../hooks/useMockData.js'

export default function MapaNodos({ nodos, nodosInfo, gateway, onSeleccionar }) {
  const mapRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return

    const map = L.map(containerRef.current, {
      center: [-26.890, -65.000],
      zoom: 14,
      zoomControl: true,
    })

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19,
    }).addTo(map)

    mapRef.current = map

    return () => {
      map.remove()
      mapRef.current = null
    }
  }, [])

  useEffect(() => {
    const map = mapRef.current
    if (!map) return

    const grupo = L.featureGroup().addTo(map)

    if (gateway) {
      L.circleMarker([gateway.lat, gateway.lng], {
        radius: 8,
        fillColor: '#333',
        color: '#555',
        weight: 2,
        fillOpacity: 0.9,
      }).bindPopup(`<b>${gateway.nombre}</b><br>Casa del productor`).addTo(grupo)
    }

    nodosInfo.forEach(info => {
      const n = nodos.find(x => x.nodo === info.nodo)
      const color = n?.flama ? '#911B1E' : n?.humo ? '#d4a017' : '#2e7d32'
      const dist = gateway ? distanciaKm(gateway.lat, gateway.lng, info.lat, info.lng) : 0

      if (gateway) {
        L.polyline([[gateway.lat, gateway.lng], [info.lat, info.lng]], {
          color: '#999', weight: 1, dashArray: '5,5', opacity: 0.5,
        }).addTo(grupo)
      }

      const marcador = L.circleMarker([info.lat, info.lng], {
        radius: n?.flama ? 14 : 10,
        fillColor: color,
        color: color,
        weight: 2,
        opacity: 0.8,
        fillOpacity: 0.6,
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

    map.fitBounds(grupo.getBounds().pad(0.3))

    return () => {
      map.removeLayer(grupo)
    }
  }, [nodos, nodosInfo, gateway, onSeleccionar])

  return <div className="mapa-wrapper"><div ref={containerRef} style={{ height: '420px', width: '100%', borderRadius: '8px' }} /></div>
}