import { motion } from 'framer-motion'
import RevealText from './RevealText'
import { fadeUp } from '../utils/animations'

const diffs = [
  {
    title: 'Sin torre ni repetidor',
    text: 'Los nodos se comunican entre si por radio LoRa. No necesitan torre de telefonia, repetidor WiFi ni fibra optica. El unico requisito es que el productor tenga WiFi o 4G en un lugar cercano para el punto de salida.',
  },
  {
    title: 'Sin suscripcion cara',
    text: 'Las alternativas satelitales cuestan USD 500+ al año. ALPA ofrece una suscripcion mensual accesible, pensada para la economia del productor PyME argentino.',
  },
  {
    title: 'Sin tecnico especializado',
    text: 'El productor instala los nodos el mismo en menos de 15 minutos. No se necesita ingeniero, contratista ni obra civil. Se proveen repuestos y soporte remoto.',
  },
  {
    title: 'Sin depender de la red celular',
    text: 'Los nodos se comunican por radio LoRa en el campo. Cuando el productor vuelve a la vivienda (con WiFi o 4G), el gateway entrega las alertas acumuladas.',
  },
]

export default function Diferencial() {
  return (
    <motion.section
      id="diferencial"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative min-h-screen flex items-center py-20 px-4 md:py-24 md:px-8 bg-verde-campo-claro overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.22]"
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/alpa-prototipo.jpg)` }}
      />
      <div className="relative z-10 max-w-[1000px] mx-auto w-full">
        <RevealText
          text="Por que ALPA es diferente"
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
          Las soluciones existentes estan disenadas para zonas urbanas o requieren infraestructura que el campo no tiene. ALPA nace para el que esta afuera.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {diffs.map((d, i) => (
            <motion.div
              key={d.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeUp}
              custom={i * 0.3}
              className="bg-hueso rounded-2xl p-5 border-2 border-white hover:scale-[1.02] hover:shadow-lg hover:shadow-rojo/10 hover:border-rojo transition-all duration-300"
            >
              <h3 className="font-extrabold text-[0.95rem] text-pizarra mb-1">
                <span className="text-rojo font-black mr-1">/</span>
                {d.title}
              </h3>
              <p className="text-[0.85rem] text-gris font-medium leading-relaxed">{d.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
