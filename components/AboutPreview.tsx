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
               <img 
                  src="images/16.jpeg" 
                  alt="Petra Tichá a Petra Chladová" 
                  className="w-full h-auto object-cover"
                />
             </div>
             <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-stone-300 rounded-2xl -z-0"></div>
          </div>
          
          <div className="md:w-1/2 space-y-8">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full text-xs font-bold tracking-widest uppercase text-stone-500 mb-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                Náš příběh
             </div>
             <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900">
               Dvě Petry, <span className="text-primary">jeden sen</span>
             </h2>
             <p className="text-lg text-stone-600 leading-relaxed font-light">
               Vítejte v našem světě. Jsme <strong>Petra Chladová</strong> a <strong>Petra Tichá</strong>. Spojilo nás přátelství a touha vytvořit místo, kde se budete cítit jako doma.
             </p>
             <p className="text-lg text-stone-600 leading-relaxed font-light">
               Zatímco <strong>Petra Tichá</strong> dává duši květinám a tvoří pro vás ty nejkrásnější vazby, <strong>Petra Chladová</strong> se stará o to, aby naše kavárna a cukrárna voněla čerstvou kávou a domácími dezerty.
             </p>
             
             <div className="bg-white p-6 rounded-xl border-l-4 border-secondary shadow-sm">
                <Quote className="text-secondary/40 mb-2 w-8 h-8" />
                <p className="font-serif italic text-stone-800 text-lg">
                  "Děláme to, co milujeme. A věříme, že je to na naší práci znát."
                </p>
                <div className="mt-4 flex gap-4 text-sm font-bold text-stone-500 uppercase tracking-wider">
                  <span>— Petra Tichá</span>
                  <span>&</span>
                  <span>Petra Chladová</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;