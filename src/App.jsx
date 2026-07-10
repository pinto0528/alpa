import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problema from './components/Problema'
import Solucion from './components/Solucion'
import Diferencial from './components/Diferencial'
import Competencia from './components/Competencia'
import Clientes from './components/Clientes'
import Equipo from './components/Equipo'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Problema />
      <Solucion />
      <Diferencial />
      <Competencia />
      <Clientes />
      <Equipo />
      <CTA />
      <Footer />
    </div>
  )
}
