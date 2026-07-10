import { motion } from 'framer-motion'
import RevealText from './RevealText'
import { fadeUp } from '../utils/animations'

const steps = [
  {
    num: 1,
    title: 'Se instala en el campo, sin obra civil',
    text: 'Cada modulo del sensor mide menos de 30 cm y pesa menos de 500 g. Se colocan en un poste de madera o caño y arranca solo. No necesita cableado ni instalacion electrica.',
  },
  {
    num: 2,
    title: 'Los nodos se encadenan entre si',
    text: 'Si un nodo no alcanza al punto de salida, rebota la señal a otro nodo hasta que la alerta encuentra una ruta. Cada nodo cubre 2-5 km de enlace LoRa.',
    highlight: true,
  },
  {
    num: 3,
    title: 'Alerta inmediata al productor',
    text: 'Apenas un nodo detecta fuego, envia la alerta por LoRa hasta el gateway. El gateway la reenvia por WiFi/4G a la nube, que dispara una notificacion por WhatsApp, activa una sirena en la vivienda y notifica a bomberos voluntarios.',
  },
]

const flow = [
  { label: 'Nodo 1', sub: 'sensor + LoRa' },
  { label: 'Nodo 2', sub: 'rebota señal' },
  { label: 'Punto de salida', sub: 'LoRa → WiFi', highlight: true },
  { label: 'Nube', highlight: true },
  { label: 'WhatsApp', sub: 'alerta al productor' },
]

export default function Solucion() {
  return (
    <motion.section
      id="solucion"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="min-h-screen flex items-center py-20 px-4 md:py-24 md:px-8 bg-lino"
    >
      <div className="max-w-[1000px] mx-auto w-full">
        <RevealText
          text="Como funciona ALPA"
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
          Un sistema de nodos sensores autoalimentados que se encargan de vigilar el campo y alertar al productor. Sin infraestructura previa.
        </motion.p>

        <div className="flex flex-col gap-4 mb-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeUp}
              custom={i}
              className="flex gap-4 items-start bg-hueso rounded-2xl p-4 md:p-5 border-2 border-white hover:scale-[1.02] hover:shadow-lg hover:shadow-rojo/10 transition-all duration-300"
            >
              <div className="w-11 h-11 min-w-11 rounded-full bg-rojo text-white font-black text-lg flex items-center justify-center border-3 border-hueso">
                {step.num}
              </div>
              <div>
                <h3 className="font-extrabold text-[0.95rem] text-pizarra mb-1">{step.title}</h3>
                <p className="text-[0.85rem] text-gris font-medium leading-relaxed">
                  {step.highlight ? (
                    <>
                      Si un nodo no alcanza al <strong className="text-rojo">punto de salida</strong>, rebota la señal a otro nodo hasta que la alerta encuentra una ruta. Cada nodo cubre 2-5 km de enlace LoRa.
                    </>
                  ) : (
                    step.text
                  )}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeUp}
          custom={1}
          className="bg-hueso rounded-2xl p-5 md:p-6 border-2 border-white"
        >
          <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4 md:justify-center md:flex-wrap">
            {flow.map((item, i) => (
              <div key={item.label} className="flex flex-col items-center md:flex-row md:items-center md:gap-4">
                <div
                  className={`rounded-xl py-3 px-4 min-w-[120px] text-center border-2 border-rojo leading-tight ${
                    item.highlight ? 'bg-lino' : 'bg-white'
                  }`}
                >
                  <div className="text-[0.8rem] font-bold text-[#444]">{item.label}</div>
                  {item.sub && (
                    <div className="text-[0.7rem] font-medium text-gris">{item.sub}</div>
                  )}
                </div>
                {i < flow.length - 1 && (
                  <>
                    <span className="text-rojo text-lg font-bold my-1 md:hidden">↓</span>
                    <span className="text-rojo text-xl font-bold hidden md:block">→</span>
                  </>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
