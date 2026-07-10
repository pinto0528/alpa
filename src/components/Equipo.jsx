import { useRef, useState } from 'react'
import { useScroll, useMotionValueEvent } from 'framer-motion'
import RevealText from './RevealText'

const team = [
  {
    name: 'Mario Quiroga',
    role: 'Desarrollo de software',
    desc: 'Encargado del desarrollo del panel web y la integracion con la nube para las alertas.',
    color: 'bg-verde-campo',
    image: `${import.meta.env.BASE_URL}equipo/mario.jpg`,
  },
  {
    name: 'Jeremias Mastafa',
    role: 'Firmware y comunicaciones',
    desc: 'Desarrolla el firmware de los nodos sensores y el protocolo de enlace LoRa.',
    color: 'bg-naranja-fuego',
    image: `${import.meta.env.BASE_URL}equipo/jeremias.jpg`,
  },
  {
    name: 'Gonzalo Lescano',
    role: 'Negocio y operaciones',
    desc: 'Define la estrategia de negocio, validacion con clientes y operaciones del proyecto.',
    color: 'bg-tierra',
    image: `${import.meta.env.BASE_URL}equipo/gonzalo.jpg`,
  },
  {
    name: 'Nicolas Pinto',
    role: 'Hardware y prototipado',
    desc: 'Disena los sensores, el circuito del nodo y el prototipo funcional del sistema.',
    color: 'bg-rojo',
    image: `${import.meta.env.BASE_URL}equipo/nicolas.jpg`,
  },
]

export default function Equipo() {
  const containerRef = useRef(null)
  const [active, setActive] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const idx = Math.min(Math.floor(v * team.length), team.length - 1)
    setActive(idx)
  })

  const member = team[active]

  return (
    <section id="equipo" className="bg-lino">
      <div className="pt-12 pb-0 px-4 md:pt-16 md:pb-0 md:px-8">
        <div className="max-w-[1000px] mx-auto w-full">
          <RevealText
            text="El equipo"
            className="font-display text-3xl md:text-4xl lg:text-[2.5rem] font-black text-pizarra text-center mb-4"
          />
          <p className="text-base md:text-lg text-gris font-medium text-center max-w-[600px] mx-auto leading-relaxed">
            Estudiantes de Ingenieria Electronica de la UTN Facultad Regional Tucuman.
          </p>
        </div>
      </div>

      <div ref={containerRef} className="relative h-[400vh]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <div className="w-full max-w-[1000px] mx-auto px-4 md:px-8 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12 items-center">
            <div
              key={`text-${active}`}
              className="text-center md:text-left order-2 md:order-1 animate-[fadeIn_0.4s_ease-out]"
            >
              <div className={`inline-block text-[0.9rem] font-bold text-white py-1.5 px-4 rounded-full mb-3 ${member.color}`}>
                {member.role}
              </div>
              <h3 className="font-display text-4xl md:text-3xl lg:text-4xl font-black text-pizarra mb-3">
                {member.name}
              </h3>
              <p className="text-lg md:text-base text-gris font-medium leading-relaxed max-w-md mx-auto md:mx-0">
                {member.desc}
              </p>
            </div>

            <div
              key={`img-${active}`}
              className="order-1 md:order-2 flex justify-center animate-[fadeIn_0.4s_ease-out]"
            >
              <div className={`relative w-[300px] h-[380px] md:w-[320px] md:h-[380px] rounded-2xl overflow-hidden shadow-2xl ${member.color}`}>
                <div className="absolute inset-0 flex items-center justify-center z-0">
                  <span className="font-display text-[5rem] md:text-[7rem] font-black text-white/30">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover z-10"
                />
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {team.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-opacity duration-300 ${
                  i === active ? 'bg-rojo opacity-100' : 'bg-rojo opacity-30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
