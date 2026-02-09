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
import { Phone, Flower2, Coffee } from 'lucide-react';

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
      
       <div className="flex flex-col md:flex-row items-center gap-12 mb-12 max-w-5xl mx-auto">
          <div className="md:w-1/2 text-left">
             <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4 font-serif">Kde nás najdete</h2>
             <p className="text-stone-600 text-lg leading-relaxed">
               Zastavte se za námi v naší kouzelné kavárně s květinářstvím. 
               Těšíme se na vaši návštěvu!
             </p>
          </div>
          <div className="md:w-1/2">
             <div className="rounded-2xl overflow-hidden shadow-xl rotate-1 hover:rotate-0 transition-transform duration-500 border-4 border-white h-64 md:h-80 w-full">
               {/* Image 15 */}
               <img 
                 src="https://marabie.eu/images_chlad/15.jpeg" 
                 alt="Vstup do obchodu" 
                 className="w-full h-full object-cover"
                 loading="lazy"
               />
             </div>
          </div>
       </div>

       {/* Contact Boxes */}
       <div className="max-w-4xl mx-auto mb-16 grid md:grid-cols-2 gap-6">
          <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-primary hover:shadow-xl transition-shadow">
             <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-full text-primary">
                   <Flower2 size={24} />
                </div>
                <div>
                   <h3 className="text-xl font-bold text-stone-900">Květinářství</h3>
                   <p className="text-stone-500 text-sm">Petra Tichá</p>
                </div>
             </div>
             <p className="text-stone-600 mb-4">Objednávky květin, svatby, smuteční vazby.</p>
             <a href="tel:731827149" className="flex items-center gap-2 text-xl font-bold text-primary hover:underline">
                <Phone size={20} />
                731 827 149
             </a>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-secondary hover:shadow-xl transition-shadow">
             <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-secondary/10 rounded-full text-secondary">
                   <Coffee size={24} />
                </div>
                <div>
                   <h3 className="text-xl font-bold text-stone-900">Kavárna & Cukrárna</h3>
                   <p className="text-stone-500 text-sm">Petra Chladová</p>
                </div>
             </div>
             <p className="text-stone-600 mb-4">Rezervace stolů, objednávky dortů a zákusků.</p>
             <div className="flex flex-col gap-2">
                <a href="tel:731827149" className="flex items-center gap-2 text-xl font-bold text-secondary hover:underline">
                    <Phone size={20} />
                    731 827 149
                </a>
                <a href="tel:727821315" className="flex items-center gap-2 text-xl font-bold text-secondary hover:underline">
                    <Phone size={20} />
                    727 821 315
                </a>
             </div>
          </div>
       </div>
      
       {/* Contact Form Section */}
       <div className="max-w-3xl mx-auto mb-24">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-stone-100">
            <div className="text-center mb-10">
              <span className="text-primary font-bold tracking-widest uppercase text-sm">Napište nám</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mt-2">Kontaktní formulář</h2>
              <p className="text-stone-600 mt-4 leading-relaxed">
                Chcete si objednat dort, kytici na přání nebo se jen na něco zeptat?<br/>
                Vyplňte formulář a my se vám ozveme co nejdříve.
              </p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                 <label htmlFor="department" className="text-sm font-bold text-stone-700">Čeho se týká váš dotaz?</label>
                 <select id="department" className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-stone-700">
                    <option value="florist">Květinářství (Petra Tichá)</option>
                    <option value="cafe">Kavárna & Cukrárna (Petra Chladová)</option>
                    <option value="general">Obecný dotaz</option>
                 </select>
              </div>

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