export default function BarraEstado({ conectado, cantidad }) {
  return (
    <div className="barra-estado">
      <span className={`bola ${conectado ? 'online' : 'offline'}`} />
      <span>{conectado ? 'Conectado' : 'Desconectado'}</span>
      {conectado && <span>· {cantidad} nodos</span>}
    </div>
  )
}
