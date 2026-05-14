import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Cards from './components/Cards';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Module2Experience from './modules/module2/Module2Experience.jsx';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Module2Experience />
      <section id="detalles" className="py-20 bg-white">
        <Features />
      </section>
      <section id="productos" className="py-20 bg-slate-50">
        <Cards />
      </section>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
