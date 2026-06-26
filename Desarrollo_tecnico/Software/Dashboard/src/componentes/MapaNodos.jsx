const W = 500, H = 320, PAD = 40

function posToXY(lat, lng) {
  const x = ((lng + 77.06) / 0.04) * (W - 2 * PAD) + PAD
  const y = ((lat + 12.07) / 0.04) * (H - 2 * PAD) + PAD
  return { x: Math.round(x), y: Math.round(y) }
}

export default function MapaNodos({ nodos, nodosInfo, onSeleccionar }) {
  return (
    <div className="mapa-wrapper">
      <svg viewBox={`0 0 ${W} ${H}`} className="mapa-svg">
        <rect x="0" y="0" width={W} height={H} fill="#e8f0e8" rx="8" />
        {nodosInfo.map(info => {
          const n = nodos.find(x => x.nodo === info.nodo)
          const { x, y } = posToXY(info.lat, info.lng)
          const color = n?.flama ? '#911B1E' : n?.humo ? '#d4a017' : '#2e7d32'
          return (
            <g key={info.nodo} onClick={() => onSeleccionar?.(info.nodo)} className="mapa-nodo">
              <circle cx={x} cy={y} r={n?.flama ? 18 : 14} fill={color} opacity="0.15" />
              <circle cx={x} cy={y} r={n?.flama ? 12 : 10} fill={color} />
              <text x={x} y={y + 28} textAnchor="middle" fontSize="11" fill="#333" fontWeight="600">{info.nombre}</text>
            </g>
          )
        })}
      </svg>
    </div>
  )
}
