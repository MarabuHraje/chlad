import React from 'react';
import { Quote } from 'lucide-react';

const AboutPreview: React.FC = () => {
  return (
    <section className="py-24 bg-stone-100 relative overflow-hidden">
      {/* Decorative background letter */}
      <span className="absolute -left-10 top-20 text-[20rem] font-serif text-white opacity-40 leading-none select-none pointer-events-none">P</span>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 relative">
             <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
               <img src="https://picsum.photos/600/700?random=90" alt="Majitel Martin Chlad" className="w-full h-auto object-cover" />
             </div>
             <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-stone-300 rounded-2xl -z-0"></div>
          </div>
          
          <div className="md:w-1/2 space-y-8">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full text-xs font-bold tracking-widest uppercase text-stone-500 mb-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                Náš příběh
             </div>
             <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900">
               Když se vášeň stane <span className="text-primary">posláním</span>
             </h2>
             <p className="text-lg text-stone-600 leading-relaxed font-light">
               Jmenuji se <strong>Martin Chlad</strong> a mým snem bylo vytvořit místo, kde se lidé budou cítit dobře. Místo, kde voní čerstvá káva a kde květiny rozdávají radost.
             </p>
             <p className="text-lg text-stone-600 leading-relaxed font-light">
               V naší kavárně a květinářství Petra spojujeme poctivé řemeslo s moderním přístupem. Ať už přijdete pro kytici k narozeninám, nebo si jen odpočinout u šálku cappuccina, chceme, abyste odcházeli s úsměvem.
             </p>
             
             <div className="bg-white p-6 rounded-xl border-l-4 border-secondary shadow-sm">
                <Quote className="text-secondary/40 mb-2 w-8 h-8" />
                <p className="font-serif italic text-stone-800 text-lg">
                  "Největší odměnou je pro nás vracející se zákazník. To je důkaz, že to děláme správně."
                </p>
                <p className="text-sm font-bold text-stone-500 mt-4 uppercase tracking-wider">— Martin Chlad, majitel</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;