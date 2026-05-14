import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductCards from './components/Cards';
import ContactForm from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
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