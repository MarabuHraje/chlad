import React from 'react';
import { CheckCircle2, ArrowRight, Heart, Sprout, Star, Calendar, HeartHandshake } from 'lucide-react';

const FloristSection: React.FC = () => {
  return (
    <div className="bg-cream min-h-screen">
      {/* Hero Header */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 skew-y-12 translate-x-20 z-0" />
        
        <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <span className="text-primary font-bold tracking-widest uppercase text-sm">Květinářství Petra</span>
            <h1 className="text-5xl md:text-7xl font-bold text-stone-900 leading-[1.1]">
              Řekněte to <br />
              <span className="text-primary font-serif italic relative inline-block">
                nejkrásnější květinou
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </h1>
            <p className="text-xl text-stone-600 max-w-lg leading-relaxed font-light">
              V našem květinářství vážeme kytice s láskou a citem pro detail. Od drobných radostí pro všední den až po velkolepé svatební brány.
            </p>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} className="group flex items-center gap-2 bg-stone-900 text-white px-8 py-4 rounded-xl hover:bg-primary transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              <span>Objednat kytici</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="relative h-[600px] hidden md:block">
            <div className="absolute top-10 right-10 w-80 h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-3 animate-float">
              <img 
                src="https://picsum.photos/600/900?random=33" 
                alt="Floristické aranžmá" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-20 left-10 w-64 h-64 bg-white p-6 rounded-xl shadow-xl transform -rotate-3 animate-float-delayed z-20 flex flex-col justify-center border border-stone-100">
               <div className="text-primary mb-2"><Heart size={32} /></div>
               <p className="font-serif italic text-2xl text-stone-800 leading-tight">"Každá květina má svůj vlastní příběh."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Služby - Řezané květiny & Dekorace */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div className="order-2 lg:order-1 relative">
                <div className="grid grid-cols-2 gap-4">
                  <img src="https://picsum.photos/400/500?random=101" className="rounded-2xl shadow-lg mt-12" alt="Kytice" />
                  <img src="https://picsum.photos/400/500?random=102" className="rounded-2xl shadow-lg" alt="Květinová dekorace" />
                </div>
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-cream rounded-full blur-3xl opacity-50"></div>
             </div>
             
             <div className="order-1 lg:order-2 space-y-8">
               <h2 className="text-4xl font-serif font-bold text-stone-900">Pro každou příležitost</h2>
               <p className="text-stone-600 text-lg leading-relaxed">
                 Ať už chcete potěšit někoho blízkého k narozeninám, výročí, nebo si jen tak zkrášlit domov, u nás si vyberete. Denně dovážíme čerstvé květiny té nejvyšší kvality.
               </p>
               
               <div className="space-y-4">
                 <div className="flex gap-4 p-4 bg-stone-50 rounded-xl hover:shadow-md transition-shadow">
                   <div className="text-primary"><CheckCircle2 /></div>
                   <div>
                     <h3 className="font-bold text-stone-900">Řezané květiny</h3>
                     <p className="text-sm text-stone-600">Velký výběr sezónních i exotických květin. Vážeme na počkání nebo na objednávku.</p>
                   </div>
                 </div>
                 <div className="flex gap-4 p-4 bg-stone-50 rounded-xl hover:shadow-md transition-shadow">
                   <div className="text-primary"><Sprout /></div>
                   <div>
                     <h3 className="font-bold text-stone-900">Hrnkové květiny a interiér</h3>
                     <p className="text-sm text-stone-600">Pokojové rostliny, které oživí váš domov, včetně odborného poradenství a keramiky.</p>
                   </div>
                 </div>
                 <div className="flex gap-4 p-4 bg-stone-50 rounded-xl hover:shadow-md transition-shadow">
                   <div className="text-primary"><Star /></div>
                   <div>
                     <h3 className="font-bold text-stone-900">Dárkové předměty</h3>
                     <p className="text-sm text-stone-600">Stylové dekorace, vázy a doplňky, které perfektně ladí s našimi vazbami.</p>
                   </div>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Svatby - Premium sekce (Updated to Light Theme) */}
      <section className="py-24 bg-stone-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none text-stone-900">
            <svg width="100%" height="100%">
                <pattern id="flower-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                   <circle cx="2" cy="2" r="1" fill="currentColor"/>
                </pattern>
                <rect width="100%" height="100%" fill="url(#flower-pattern)"/>
            </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-sm">Váš velký den</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mt-4 mb-6">Svatební floristika</h2>
            <p className="text-stone-600 text-lg">
              Svatba je jedním z nejdůležitějších okamžiků v životě. Postaráme se o to, aby byla květinová výzdoba nezapomenutelná a přesně podle vašich představ.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
             <div className="p-8 border border-stone-200 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all duration-300">
               <h3 className="text-2xl font-serif font-bold text-primary mb-4">Pro nevěstu</h3>
               <ul className="text-stone-600 space-y-2">
                 <li>Svatební kytice na míru</li>
                 <li>Házecí kytice</li>
                 <li>Věnečky do vlasů</li>
                 <li>Květinové šperky</li>
               </ul>
             </div>
             <div className="p-8 border border-stone-200 rounded-2xl bg-white shadow-xl transform md:-translate-y-4 relative z-10">
               <h3 className="text-2xl font-serif font-bold text-primary mb-4">Obřad & Hostina</h3>
               <ul className="text-stone-600 space-y-2">
                 <li>Slavobrány a oltáře</li>
                 <li>Výzdoba uličky</li>
                 <li>Dekorace na stoly</li>
                 <li>Výzdoba aut</li>
               </ul>
             </div>
             <div className="p-8 border border-stone-200 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all duration-300">
               <h3 className="text-2xl font-serif font-bold text-primary mb-4">Pro ostatní</h3>
               <ul className="text-stone-600 space-y-2">
                 <li>Korsáže pro ženicha a svědky</li>
                 <li>Kytice pro maminky</li>
                 <li>Vývazky pro svatebčany</li>
                 <li>Lupínky pro družičky</li>
               </ul>
             </div>
          </div>
        </div>
      </section>

      {/* Grid: Sezónní dekorace & Smuteční floristika */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6">
           <div className="grid lg:grid-cols-2 gap-8">
              
              {/* Card 1: Sezónní a sváteční dekorace */}
              <div className="bg-white rounded-3xl shadow-sm border border-stone-100 overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
                 <div className="h-64 w-full relative group overflow-hidden">
                    <img src="https://picsum.photos/600/400?random=88" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Sezónní dekorace" />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent"></div>
                 </div>
                 <div className="p-10 space-y-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 text-secondary">
                        <Calendar size={28} />
                        <span className="font-bold tracking-widest uppercase text-sm">Inspirace</span>
                    </div>
                    <h2 className="text-3xl font-serif font-bold text-stone-900">Sezónní a sváteční dekorace</h2>
                    <p className="text-stone-600 leading-relaxed flex-grow">
                      Žijeme v souladu s přírodou a ročním obdobím. Pro každý čas v roce připravujeme tematické dekorace, 
                      které zútulní váš domov a vnesou do něj tu pravou atmosféru. Od jarního probouzení až po kouzlo Vánoc.
                    </p>
                    <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm font-medium text-stone-700 pt-4 border-t border-stone-100">
                      <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div>Adventní věnce</span>
                      <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div>Velikonoční výzdoba</span>
                      <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div>Věnce na dveře</span>
                      <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div>Sezónní truhlíky</span>
                    </div>
                 </div>
              </div>

              {/* Card 2: Smuteční floristika */}
              <div className="bg-white rounded-3xl shadow-sm border border-stone-100 overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
                 <div className="h-64 w-full relative group overflow-hidden">
                    <img src="https://picsum.photos/600/400?grayscale" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Smuteční vazba" />
                    <div className="absolute inset-0 bg-stone-900/10"></div>
                 </div>
                 <div className="p-10 space-y-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 text-stone-400">
                        <HeartHandshake size={28} />
                        <span className="font-bold tracking-widest uppercase text-sm">Pietní služby</span>
                    </div>
                    <h2 className="text-3xl font-serif font-bold text-stone-900">Smuteční floristika</h2>
                    <p className="text-stone-600 leading-relaxed flex-grow">
                      V těžkých chvílích vám pomůžeme vyjádřit úctu a rozloučit se důstojně. Připravujeme smuteční věnce, kytice na rakev i vázané kytice s kondolenční stuhou. Ke každé zakázce přistupujeme s maximální citlivostí.
                    </p>
                    <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm font-medium text-stone-700 pt-4 border-t border-stone-100">
                      <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-stone-400 rounded-full"></div>Smuteční věnce</span>
                      <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-stone-400 rounded-full"></div>Kytice na rakev</span>
                      <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-stone-400 rounded-full"></div>Vypichované kytice</span>
                      <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-stone-400 rounded-full"></div>Tištěné stuhy</span>
                    </div>
                 </div>
              </div>

           </div>
        </div>
      </section>
    </div>
  );
};

export default FloristSection;