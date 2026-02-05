import React from 'react';
import { Star, ArrowRight, Coffee, Croissant, Utensils, Bean } from 'lucide-react';

const CafeSection: React.FC = () => {
  return (
    <div className="bg-cream min-h-screen">
       {/* Hero Header */}
       <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-secondary/10 -skew-y-6 -translate-x-20 z-0" />
        
        <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative h-[600px] hidden md:block order-2 md:order-1">
            <div className="absolute top-10 left-10 w-96 h-[450px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform -rotate-2 animate-float">
              <img 
                src="https://picsum.photos/600/800?random=44" 
                alt="Káva a dort" 
                className="w-full h-full object-cover"
              />
            </div>
             <div className="absolute bottom-24 right-10 w-64 h-64 rounded-full overflow-hidden shadow-2xl border-4 border-white transform rotate-6 animate-float-delayed z-20">
              <img 
                src="https://picsum.photos/500/500?random=55" 
                alt="Latte Art" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-8 animate-fade-in-up order-1 md:order-2">
            <span className="text-secondary font-bold tracking-widest uppercase text-sm">Kavárna & Cukrárna</span>
            <h1 className="text-5xl md:text-7xl font-bold text-stone-900 leading-[1.1]">
              Sladké chvíle <br />
              <span className="text-secondary font-serif italic relative inline-block">
                pro každý den
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </h1>
            <p className="text-xl text-stone-600 max-w-lg leading-relaxed font-light">
              Přijďte si vychutnat jedinečnou atmosféru, kde voní čerstvě namletá káva a domácí pečivo. Místo, kde se potkávají přátelé a kde čas plyne pomaleji.
            </p>
            <div className="flex gap-4">
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md text-stone-700 font-medium hover:text-secondary transition-colors cursor-default">
                    <Coffee className="text-secondary w-5 h-5"/>
                    <span>Káva s sebou</span>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coffee & Menu Highlights */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl font-serif font-bold text-stone-900 mb-6">Naše nabídka</h2>
              <p className="text-stone-600 text-lg">
                Vše připravujeme s láskou z těch nejkvalitnějších surovin.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {/* Coffee Column */}
              <div className="space-y-6 group">
                <div className="h-64 rounded-2xl overflow-hidden relative shadow-lg">
                   <img src="https://picsum.photos/400/600?random=201" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Káva" />
                   <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg font-bold text-stone-900 flex items-center gap-2">
                      <Bean className="text-coffee w-5 h-5" /> Káva
                   </div>
                </div>
                <div>
                   <h3 className="text-2xl font-serif font-bold text-stone-900 mb-3">Výběrová káva</h3>
                   <p className="text-stone-600 leading-relaxed mb-4">
                     Nabízíme jedinečnou kávu s velkým výběrem příchutí. Od klasického espressa, přes krémové cappuccino až po flat white.
                   </p>
                   <ul className="space-y-2 text-stone-500 text-sm border-t border-stone-100 pt-4">
                     <li className="flex justify-between"><span>Espresso</span> <span className="font-bold">45 Kč</span></li>
                     <li className="flex justify-between"><span>Cappuccino</span> <span className="font-bold">55 Kč</span></li>
                     <li className="flex justify-between"><span>Latte Macchiato</span> <span className="font-bold">65 Kč</span></li>
                   </ul>
                </div>
              </div>

              {/* Sweet Column */}
              <div className="space-y-6 group">
                <div className="h-64 rounded-2xl overflow-hidden relative shadow-lg">
                   <img src="https://picsum.photos/400/600?random=202" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Dorty" />
                   <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg font-bold text-stone-900 flex items-center gap-2">
                      <Croissant className="text-accent w-5 h-5" /> Cukrárna
                   </div>
                </div>
                <div>
                   <h3 className="text-2xl font-serif font-bold text-stone-900 mb-3">Denně čerstvé dezerty</h3>
                   <p className="text-stone-600 leading-relaxed mb-4">
                     Naše vitrína je každý den plná čerstvých dortů, zákusků a domácích koláčů. Pečeme podle tradičních i moderních receptur.
                   </p>
                   <ul className="space-y-2 text-stone-500 text-sm border-t border-stone-100 pt-4">
                     <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent rounded-full"></div>Větrníky a kremrole</li>
                     <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent rounded-full"></div>Ovocné řezy</li>
                     <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent rounded-full"></div>Dorty na objednávku</li>
                   </ul>
                </div>
              </div>

              {/* Salty Column */}
              <div className="space-y-6 group">
                <div className="h-64 rounded-2xl overflow-hidden relative shadow-lg">
                   <img src="https://picsum.photos/400/600?random=203" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Chlebíčky" />
                   <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg font-bold text-stone-900 flex items-center gap-2">
                      <Utensils className="text-secondary w-5 h-5" /> Svačinky
                   </div>
                </div>
                <div>
                   <h3 className="text-2xl font-serif font-bold text-stone-900 mb-3">Slané občerstvení</h3>
                   <p className="text-stone-600 leading-relaxed mb-4">
                     Máte chuť na něco slaného? Připravujeme poctivé chlebíčky, obložené bagety a svačinky ideální nejen pro děti.
                   </p>
                   <ul className="space-y-2 text-stone-500 text-sm border-t border-stone-100 pt-4">
                     <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>Tradiční chlebíčky</li>
                     <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>Plněné croissanty</li>
                     <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>Dětské svačinky</li>
                   </ul>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* Dárkové balíčky */}
      <section className="py-20 bg-stone-100">
         <div className="container mx-auto px-6">
            <div className="bg-white rounded-3xl p-10 md:p-16 shadow-xl flex flex-col md:flex-row items-center gap-12">
               <div className="md:w-1/2 space-y-6">
                  <h3 className="text-3xl font-serif font-bold text-stone-900">Dárkové balíčky na míru</h3>
                  <p className="text-stone-600 text-lg leading-relaxed">
                    Nevíte si rady s dárkem? Spojili jsme to nejlepší z našeho sortimentu. Připravíme pro vás dárkový koš plný výběrové kávy, čajů, sladkostí a samozřejmě květin. Ideální pro firemní partnery i vaše blízké.
                  </p>
                  <button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} className="px-8 py-3 bg-secondary text-white rounded-full hover:bg-stone-800 transition-colors shadow-lg">
                    Poptat balíček
                  </button>
               </div>
               <div className="md:w-1/2">
                  <div className="grid grid-cols-2 gap-4">
                     <img src="https://picsum.photos/300/300?random=501" className="rounded-xl shadow-md rotate-2" alt="Dárek 1" />
                     <img src="https://picsum.photos/300/300?random=502" className="rounded-xl shadow-md -rotate-2 mt-8" alt="Dárek 2" />
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default CafeSection;