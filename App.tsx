import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import FloristSection from './components/FloristSection';
import CafeSection from './components/CafeSection';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import AboutPreview from './components/AboutPreview';
import Testimonials from './components/Testimonials';

// Wrapper to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Page Components
const HomePage = () => (
  <>
    <Hero />
    <Features />
    <AboutPreview />
    <Testimonials />
  </>
);

const FloristPage = () => (
  <div className="pt-10">
    <FloristSection />
  </div>
);

const CafePage = () => (
  <div className="pt-10">
    <CafeSection />
  </div>
);

const ContactPage = () => (
  <div className="pt-32 pb-10 bg-stone-50">
    <div className="container mx-auto px-6">
      
       {/* Contact Form Section */}
       <div className="max-w-3xl mx-auto mb-24">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-stone-100">
            <div className="text-center mb-10">
              <span className="text-primary font-bold tracking-widest uppercase text-sm">Máte dotaz?</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mt-2">Napište nám</h2>
              <p className="text-stone-600 mt-4 leading-relaxed">
                Chcete si objednat dort, kytici na přání nebo se jen na něco zeptat?<br/>
                Vyplňte formulář a my se vám ozveme co nejdříve.
              </p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-stone-700">Jméno a příjmení</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-stone-400" placeholder="Jan Novák" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-stone-700">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-stone-400" placeholder="jan@novak.cz" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-bold text-stone-700">Telefon</label>
                <input type="tel" id="phone" className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-stone-400" placeholder="+420 777 888 999" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-stone-700">Vaše zpráva</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none placeholder:text-stone-400" placeholder="Dobrý den, měl bych zájem o..."></textarea>
              </div>

              <button type="submit" className="w-full bg-stone-900 text-white font-bold py-4 rounded-xl hover:bg-primary transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Odeslat zprávu
              </button>
            </form>
          </div>
       </div>

       <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4 font-serif">Kde nás najdete</h2>
          <p className="text-stone-600">Těšíme se na vaši návštěvu.</p>
       </div>
       {/* Map Placeholder */}
       <div className="w-full h-[400px] bg-stone-200 rounded-2xl flex items-center justify-center mb-12 border border-stone-300 overflow-hidden shadow-inner">
         <p className="text-stone-500 font-medium">Zde by byla interaktivní mapa (Google Maps)</p>
       </div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="antialiased scroll-smooth flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/kvetinarstvi" element={<FloristPage />} />
            <Route path="/kavarna" element={<CafePage />} />
            <Route path="/galerie" element={<Gallery />} />
            <Route path="/kontakt" element={<ContactPage />} />
          </Routes>
        </main>
        <Contact />
      </div>
    </Router>
  );
}

export default App;