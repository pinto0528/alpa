import { motion } from 'framer-motion'
import RevealText from './RevealText'
import AnimatedCounter from './AnimatedCounter'
import { fadeUp } from '../utils/animations'

const stats = [
  { num: '4000', label: 'Hectareas quemadas en Tucuman en la ultima temporada de incendios', src: 'Fuente: EEAOC' },
  { num: '+8000', label: 'Establecimientos rurales en Argentina sin acceso a internet ni telefonia celular', src: 'Fuente: ENACOM' },
  { num: '+50%', label: 'Aumento de la superficie afectada por incendios en el NOA respecto a la temporada anterior', src: 'Fuente: INTA' },
]

const problems = [
  {
    icon: '01',
    title: 'No hay conectividad en el lote',
    text: 'El productor no tiene señal de celular ni internet en el campo. Los sistemas de alerta existentes asumen que si.',
    badge: 'Realidad del NOA profundo',
  },
  {
    icon: '02',
    title: 'Las alternativas cuestan demasiado',
    text: 'Deteccion satelital, drones termicos o torres con camaras cuestan entre USD 500 y USD 10.000 al año. Fuera del alcance del productor PyME.',
    badge: 'Brecha de accesibilidad',
  },
  {
    icon: '03',
    title: 'El tiempo de reaccion es critico',
    text: 'Un incendio en campo de caña avanza 1 hectarea cada 10 minutos en condiciones normales. Cada hora de retraso multiplica los daños por 6.',
    badge: 'Ventana de oportunidad: minutos',
  },
  {
    icon: '04',
    title: 'No hay energia en el terreno',
    text: 'Los sistemas de monitoreo requieren alimentacion electrica continua. En el lote no hay poste de luz ni generador.',
    badge: 'Autonomia total requerida',
  },
]

const coverage = [
  {
    title: 'Cobertura 4G en Argentina',
    text: 'Segun ENACOM (2025), el 82% de las antenas 4G del pais estan en zonas urbanas y periurbanas. En el NOA, la densidad de antenas por km2 en zonas rurales es 12 veces menor que en el area metropolitana de Buenos Aires.',
    badge: 'Fuente: ENACOM Q2 2025',
  },
  {
    title: 'Comparativa internacional',
    text: 'La OCDE reporto en 2025 que Argentina tiene la segunda brecha de conectividad rural-urbana mas alta de Latinoamerica. Mientras que el 94% de las zonas urbanas tiene 4G, apenas el 38% de las rurales productivas tiene cobertura.',
    badge: 'Fuente: OCDE, julio 2025',
  },
  {
    title: 'Como se enteran hoy?',
    text: 'El 90% de los productores del NOA se entera del incendio porque ve el humo desde la ruta o porque un vecino lo llama. Para cuando alguien avisa, el fuego ya avanzo entre 1 y 3 hectareas.',
    badge: 'Fuente: Entrevistas con productores',
  },
  {
    title: 'Validacion con productores',
    text: 'Entrevistamos a productores de Tucuman, Salta y Santiago del Estero. El 100% confirmo que no tiene señal en el lote de produccion. Nadie tiene monitoreo en tiempo real del campo.',
    badge: 'Fuente: Entrevistas con productores',
  },
]

export default function Problema() {
  return (
    <motion.section
      id="problema"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative min-h-screen flex items-center py-20 px-4 md:py-24 md:px-8 bg-lino-claro overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.22]"
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/incendio-campo.jpg)` }}
      />
      <div className="relative z-10 max-w-[1000px] mx-auto w-full">
        <RevealText
          text="El problema que nadie resuelve"
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
          Los incendios rurales en el NOA son cada vez mas frecuentes y devastadores. Y el productor se entera cuando ya es tarde.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.num}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeUp}
              custom={i}
              className="bg-hueso rounded-2xl py-7 px-5 text-center border-2 border-white hover:scale-[1.02] hover:shadow-lg hover:shadow-rojo/10 transition-all duration-300"
            >
              <div className="font-display text-[2.4rem] md:text-[2.8rem] lg:text-5xl font-black text-rojo leading-none">
                <AnimatedCounter text={stat.num} />
              </div>
              <div className="text-[0.85rem] font-semibold text-[#444] mt-2 leading-snug">{stat.label}</div>
              <span className="block text-[0.7rem] text-gris-claro font-medium mt-1">{stat.src}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeUp}
          custom={1}
          className="bg-hueso rounded-2xl p-5 border-l-5 border-rojo mb-6"
        >
          <p className="text-[0.88rem] text-gris font-medium leading-relaxed">
            <strong className="text-pizarra">El dato clave:</strong> En la provincia de Tucuman, el 70% de la superficie afectada por incendios corresponde a campos de caña de azucar y pastizales. La mayoria de estos campos no tiene cobertura 4G, no llega la electricidad y estan a kilometros de la vivienda del productor. Cuando alguien ve el humo, el fuego ya lleva horas avanzando.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeUp}
              custom={i * 0.3}
              className="bg-hueso rounded-2xl p-5 border-2 border-white hover:scale-[1.02] hover:shadow-lg hover:shadow-rojo/10 transition-all duration-300"
            >
              <div className="font-display text-2xl font-black text-rojo mb-1">{p.icon}</div>
              <h3 className="font-extrabold text-[0.95rem] text-pizarra mb-1">{p.title}</h3>
              <p className="text-[0.85rem] text-gris font-medium leading-relaxed">{p.text}</p>
              <span className="inline-block bg-lino text-pizarra font-bold text-[0.75rem] py-1 px-3 rounded-full mt-2 border border-white">
                {p.badge}
              </span>
            </motion.div>
          ))}
        </div>

        <RevealText
          text="Por que no hay señal en el campo?"
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
          El "mapa negro" del NOA: la mayoria de los lotes productivos estan fuera de la cobertura 4G.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {coverage.map((c, i) => (
            <motion.div
              key={c.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeUp}
              custom={i * 0.3}
              className="bg-hueso rounded-2xl p-5 border-2 border-white hover:scale-[1.02] hover:shadow-lg hover:shadow-rojo/10 transition-all duration-300"
            >
              <h3 className="font-extrabold text-[0.9rem] text-rojo mb-2">{c.title}</h3>
              <p className="text-[0.85rem] text-gris font-medium leading-relaxed">{c.text}</p>
              <span className="inline-block bg-lino text-pizarra font-bold py-1 px-3 rounded-full text-[0.75rem] mt-2 border border-white">
                {c.badge}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
