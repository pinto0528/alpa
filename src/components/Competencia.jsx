import { useRef, useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import RevealText from './RevealText'
import { fadeUp } from '../utils/animations'

const competitors = [
  {
    name: 'ALPA',
    sin4g: true,
    sinElect: true,
    costo: '~USD 60',
    instalacion: '15 min, sin obra',
    alpa: true,
  },
  {
    name: 'Dryad Networks',
    sin4g: false,
    sinElect: true,
    costo: 'USD 500+',
    instalacion: 'Tecnica',
  },
  {
    name: 'N5 Sensors',
    sin4g: false,
    sinElect: false,
    costo: 'USD 800+',
    instalacion: 'Tecnica',
  },
  {
    name: 'Satellites on Fire',
    sin4g: true,
    sinElect: true,
    costo: 'USD 1.200+',
    instalacion: 'No aplica',
  },
  {
    name: 'OroraTech',
    sin4g: true,
    sinElect: true,
    costo: 'USD 2.000+',
    instalacion: 'No aplica',
  },
  {
    name: 'Pano AI',
    sin4g: false,
    sinElect: false,
    costo: 'USD 10.000+',
    instalacion: 'Obra civil',
  },
]

function CompTag({ ok, children }) {
  return (
    <span
      className={`inline-flex items-center gap-1 text-[0.72rem] font-semibold py-1 px-2.5 rounded-full ${
        ok === true
          ? 'bg-[#e8f5e9] text-[#2e7d32]'
          : ok === false
          ? 'bg-[#fce4ec] text-[#c62828]'
          : 'bg-lino-claro text-pizarra'
      }`}
    >
      {ok === true && <span className="text-rojo font-black">/</span>}
      {ok === false && <span className="text-[#ccc] font-black">/</span>}
      {children}
    </span>
  )
}

export default function Competencia() {
  const sectionRef = useRef(null)
  const [imageIdx, setImageIdx] = useState(0)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    setImageIdx(v < 0.5 ? 0 : 1)
  })

  const images = [
    `${import.meta.env.BASE_URL}images/dron-campo.jpg`,
    `${import.meta.env.BASE_URL}images/satelite-campo.jpg`,
  ]

  return (
    <motion.section
      ref={sectionRef}
      id="competencia"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative min-h-screen flex items-center py-20 px-4 md:py-24 md:px-8 bg-naranja-fuego-claro overflow-hidden"
    >
      {images.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-300"
          style={{
            opacity: imageIdx === i ? 0.40 : 0,
            backgroundImage: `url(${src})`,
          }}
        />
      ))}

      <div className="relative z-10 max-w-[1000px] mx-auto w-full">
        <RevealText
          text="ALPA vs. otras soluciones"
          className="font-display text-3xl md:text-4xl lg:text-[2.5rem] font-black text-pizarra text-center mb-4"
        />
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          custom={0.5}
          className="text-base md:text-lg text-gris font-medium text-center max-w-[600px] mx-auto mb-10 leading-relaxed"
        >
          Ninguna de las startups globales de deteccion de incendios esta disenada para el productor sin conectividad en el lote.
        </motion.p>

        <div className="flex flex-col gap-3 md:hidden">
          {competitors.map((c, i) => (
            <motion.div
              key={c.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeUp}
              custom={i * 0.2}
              className={`rounded-2xl p-4 border-2 flex flex-wrap items-center gap-2 hover:scale-[1.02] hover:shadow-lg hover:shadow-rojo/10 transition-all duration-300 ${
                c.alpa ? 'bg-lino border-rojo' : 'bg-hueso border-white'
              }`}
            >
              <span className={`w-full font-extrabold text-[0.9rem] ${c.alpa ? 'text-rojo' : 'text-pizarra'}`}>
                {c.name}
              </span>
              <CompTag ok={c.sin4g}>Sin 4G</CompTag>
              <CompTag ok={c.sinElect}>Sin electricidad</CompTag>
              <CompTag>{c.costo}</CompTag>
              <CompTag ok={c.alpa ? true : c.instalacion === 'No aplica' ? undefined : false}>
                {c.instalacion}
              </CompTag>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeUp}
          custom={0.5}
          className="hidden md:block bg-hueso rounded-2xl border-2 border-white overflow-hidden mt-6"
        >
          <table className="w-full border-collapse text-[0.82rem]">
            <thead>
              <tr>
                <th className="bg-rojo text-white font-bold py-3.5 px-4 text-left text-[0.8rem] uppercase tracking-wider">Solucion</th>
                <th className="bg-rojo text-white font-bold py-3.5 px-4 text-left text-[0.8rem] uppercase tracking-wider">Sin 4G en el lote</th>
                <th className="bg-rojo text-white font-bold py-3.5 px-4 text-left text-[0.8rem] uppercase tracking-wider">Sin electricidad</th>
                <th className="bg-rojo text-white font-bold py-3.5 px-4 text-left text-[0.8rem] uppercase tracking-wider">Costo anual</th>
                <th className="bg-rojo text-white font-bold py-3.5 px-4 text-left text-[0.8rem] uppercase tracking-wider">Instalacion</th>
              </tr>
            </thead>
            <tbody>
              {competitors.map((c) => (
                <tr
                  key={c.name}
                  className={c.alpa ? 'bg-lino font-bold text-pizarra hover:bg-lino-oscuro' : 'hover:bg-lino-claro'}
                >
                  <td className={`py-3 px-4 border-b border-lino-claro ${c.alpa ? 'font-black' : 'text-gris font-medium'}`}>
                    {c.alpa ? <strong>ALPA</strong> : c.name}
                  </td>
                  <td className="py-3 px-4 border-b border-lino-claro">
                    {c.sin4g ? <span className="text-rojo font-black">/</span> : <span className="text-[#ccc] font-black">/</span>}
                  </td>
                  <td className="py-3 px-4 border-b border-lino-claro">
                    {c.sinElect ? <span className="text-rojo font-black">/</span> : <span className="text-[#ccc] font-black">/</span>}
                  </td>
                  <td className="py-3 px-4 border-b border-lino-claro text-gris font-medium">{c.costo}</td>
                  <td className="py-3 px-4 border-b border-lino-claro text-gris font-medium">{c.instalacion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </motion.section>
  )
}
