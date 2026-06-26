import { useState } from 'react'

const CREDENCIALES = { usuario: 'alpa', password: 'alpa2025' }

export default function Login({ onLogin }) {
  const [usuario, setUsuario] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (usuario === CREDENCIALES.usuario && password === CREDENCIALES.password) {
      onLogin()
    } else {
      setError('Credenciales incorrectas')
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <svg viewBox="0 0 600 250" className="login-logo" xmlns="http://www.w3.org/2000/svg">
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
        <p className="login-tagline">Cuidamos tu campo</p>
        <p className="login-subtitle">Panel de Monitoreo</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Usuario"
            value={usuario}
            onChange={e => setUsuario(e.target.value)}
            autoFocus
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          {error && <p className="login-error">{error}</p>}
          <button type="submit">Ingresar</button>
        </form>
        <p className="login-demo">Demo — sin conexión al servidor</p>
      </div>
    </div>
  )
}
