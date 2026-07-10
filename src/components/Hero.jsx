import { motion } from 'framer-motion'
import Logo from './Logo'

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative min-h-screen flex items-center justify-center bg-lino px-6 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.30]"
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/campo-verde.jpg)` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-lino/40 via-transparent to-lino/40" />
      <div className="absolute top-0 left-0 right-0 h-[22px] bg-[linear-gradient(#911b1e_0,#911b1e_4px,transparent_6px,transparent_16px,#911b1e_16px,#911b1e_22px)]" />
      <div className="absolute bottom-0 left-0 right-0 h-[22px] bg-[linear-gradient(#911b1e_0,#911b1e_6px,transparent_6px,transparent_16px,#911b1e_16px,#911b1e_22px)]" />

      <div className="relative z-10 text-center py-20">
        <Logo className="w-[200px] md:w-[300px] lg:w-[360px] mx-auto mb-6" />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xs md:text-sm text-rojo font-bold tracking-[0.3em] uppercase mb-4"
        >
          Cuidamos tu campo
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="font-display text-3xl md:text-4xl lg:text-[2.8rem] font-black text-pizarra leading-tight"
        >
          Alerta temprana de incendios{' '}
          <span className="text-rojo">donde no hay señal</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-4 text-base md:text-lg text-gris font-medium max-w-xl mx-auto leading-relaxed"
        >
          Detectamos el fuego en el campo y alertamos al productor al instante.
          Sin celular, sin internet, sin electricidad. Nodos sensores monitoreando las 24 horas y avisan directo al productor.
        </motion.p>
      </div>
    </motion.section>
  )
}
