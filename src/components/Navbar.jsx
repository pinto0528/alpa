import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { href: '#problema', label: 'Problema' },
  { href: '#solucion', label: 'Solucion' },
  { href: '#diferencial', label: 'Diferencial' },
  { href: '#competencia', label: 'Competencia' },
  { href: '#equipo', label: 'Equipo' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (e, href) => {
    e.preventDefault()
    setOpen(false)
    const id = href.replace('#', '')
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }, 200)
  }

  return (
    <nav className="sticky top-0 z-50 bg-hueso border-b-3 border-rojo">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-14">
        <a href="#" className="font-display font-black text-xl text-rojo tracking-wide">
          ALPA
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-11 h-11 flex flex-col items-center justify-center gap-[5px] rounded-lg"
          aria-label="Menu"
        >
          <span
            className={`block w-6 h-[3px] bg-pizarra rounded-sm transition-all duration-300 ${
              open ? 'translate-y-[8px] rotate-45' : ''
            }`}
          />
          <span
            className={`block w-6 h-[3px] bg-pizarra rounded-sm transition-all duration-300 ${
              open ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-[3px] bg-pizarra rounded-sm transition-all duration-300 ${
              open ? '-translate-y-[8px] -rotate-45' : ''
            }`}
          />
        </button>

        <div className="hidden md:flex items-center gap-0">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-xs font-semibold text-pizarra border-b-3 border-transparent hover:border-rojo transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-hueso border-b-3 border-rojo shadow-lg"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="block px-6 py-3 text-sm font-semibold text-pizarra border-l-3 border-transparent hover:border-rojo hover:bg-lino-claro transition-colors"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
