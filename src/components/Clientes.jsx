import { useRef, useState } from 'react'
import { useScroll, useMotionValueEvent } from 'framer-motion'
import RevealText from './RevealText'

const clients = [
  {
    name: 'Productor grande',
    text: 'Mas de 200 hectareas, caña de azucar o soja, contrata peones, tiene la vivienda en el campo pero el lote esta a kilometros. Necesita multiples nodos por parcela.',
    image: `${import.meta.env.BASE_URL}clientes/productor-grande.jpg`,
  },
  {
    name: 'Productor chico',
    text: 'Menos de 50 hectareas, produce el mismo, un solo lote. Con un nodo es suficiente. Nunca antes tuvo acceso a tecnologia de deteccion por el costo.',
    image: `${import.meta.env.BASE_URL}clientes/productor-chico.jpg`,
  },
  {
    name: 'Bomberos voluntarios',
    text: 'Reciben la alerta en simultaneo con el productor. Llegan al campo cuando el fuego todavia se puede controlar. Reducen el tiempo de respuesta de horas a minutos.',
    image: `${import.meta.env.BASE_URL}clientes/bomberos.jpg`,
  },
]

export default function Clientes() {
  const containerRef = useRef(null)
  const [active, setActive] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const idx = Math.min(Math.floor(v * clients.length), clients.length - 1)
    setActive(idx)
  })

  const client = clients[active]

  return (
    <section id="clientes" className="bg-tierra-claro">
      <div className="pt-12 pb-0 px-4 md:pt-16 md:pb-0 md:px-8">
        <div className="max-w-[1000px] mx-auto w-full">
          <RevealText
            text="Para quien es ALPA"
            className="font-display text-3xl md:text-4xl lg:text-[2.5rem] font-black text-pizarra text-center mb-4"
          />
          <p className="text-base md:text-lg text-gris font-medium text-center max-w-[600px] mx-auto leading-relaxed">
            Dos perfiles de cliente, una misma necesidad: saber si el campo se esta quemando antes de que sea tarde.
          </p>
        </div>
      </div>

      <div ref={containerRef} className="relative h-[300vh]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8">
            <div className="flex flex-col gap-6 md:grid md:grid-cols-[1fr_1.4fr] md:gap-12 md:items-center">
              <div>
                <div className="flex flex-col gap-3 mb-8">
                  {clients.map((c, i) => (
                    <div
                      key={c.name}
                      className={`transition-all duration-300 ${
                        i === active
                          ? 'text-3xl md:text-2xl lg:text-3xl font-black text-rojo'
                          : 'hidden'
                      }`}
                    >
                      {c.name}
                    </div>
                  ))}
                </div>

                <div
                  key={`desc-${active}`}
                  className="animate-[fadeIn_0.4s_ease-out]"
                >
                  <p className="text-base md:text-lg text-gris font-medium leading-relaxed max-w-md">
                    {client.text}
                  </p>
                </div>
              </div>

              <div
                key={`img-${active}`}
                className="flex justify-center animate-[fadeIn_0.4s_ease-out]"
              >
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-full h-[300px] md:h-[480px] rounded-2xl object-cover shadow-2xl"
                />
              </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
              {clients.map((_, i) => (
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
      </div>
    </section>
  )
}
