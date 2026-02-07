import React from 'react';
import { Phone, MapPin, Clock, Mail, Facebook } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-white pt-24 pb-12 border-t border-stone-100">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 mb-20">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-stone-900 font-serif">Kontaktujte nás</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="bg-stone-50 p-4 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs text-stone-400 uppercase font-bold tracking-widest mb-1">Telefon</p>
                  <a href="tel:731827149" className="text-xl font-medium text-stone-900 hover:text-primary transition-colors">
                    731 827 149
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="bg-stone-50 p-4 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-stone-400 uppercase font-bold tracking-widest mb-1">Odpovědné osoby</p>
                  <p className="text-xl font-medium text-stone-900">
                    Petra Tichá
                  </p>
                  <p className="text-sm text-stone-500">Květinářství</p>
                  <p className="text-xl font-medium text-stone-900 mt-2">
                    Petra Chladová
                  </p>
                  <p className="text-sm text-stone-500">Kavárna & Cukrárna</p>
                </div>
              </div>
            </div>
          </div>

          {/* Business Info */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-stone-900 font-serif">Otevírací doba</h3>
            <div className="bg-cream/50 p-8 rounded-2xl border border-stone-100 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="flex items-center gap-3 mb-6 text-stone-800">
                <Clock className="text-secondary" size={24} />
                <span className="font-serif font-bold text-lg">Kdy nás zastihnete?</span>
              </div>
              <ul className="space-y-4 text-stone-700">
                <li className="flex justify-between items-center border-b border-stone-200/50 pb-3">
                  <span>Pondělí - Pátek</span>
                  <span className="font-bold text-stone-900">8:00 - 16:00</span>
                </li>
                <li className="flex justify-between items-center border-b border-stone-200/50 pb-3">
                  <span>Sobota</span>
                  <span className="font-bold text-stone-900">8:00 - 10:30</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Neděle</span>
                  <span className="font-medium text-accent">Zavřeno</span>
                </li>
              </ul>
            </div>
            <div className="text-stone-400 text-sm pl-2">
              <p>IČO: 24026310</p>
            </div>
          </div>

          {/* Social / CTA */}
          <div className="space-y-8">
             <h3 className="text-3xl font-bold text-stone-900 font-serif">Sledujte nás</h3>
             <p className="text-stone-600 leading-relaxed">
               Inspirujte se našimi nejnovějšími vazbami a sladkými novinkami. Buďte u toho s námi.
             </p>
             <div className="flex gap-4">
               <a href="#" className="w-14 h-14 bg-stone-900 text-white rounded-full flex items-center justify-center hover:bg-primary hover:-translate-y-1 transition-all duration-300 shadow-lg">
                 <Facebook size={28} />
               </a>
             </div>
             <div className="pt-4">
                <div className="p-6 bg-secondary/10 rounded-xl text-stone-800 border border-secondary/20">
                  <p className="font-serif italic text-center text-lg">"Kde se potkává vůně kávy s vůní květin."</p>
                </div>
             </div>
          </div>
        </div>

        <div className="border-t border-stone-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-stone-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Petra Tichá & Petra Chladová. Všechna práva vyhrazena.</p>
          <div className="flex gap-6">
             <a href="#" className="hover:text-primary transition-colors">Ochrana údajů</a>
             <a href="#" className="hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;