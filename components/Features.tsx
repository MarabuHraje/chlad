import React from 'react';
import { Flower, Coffee, Gift, PartyPopper } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Flower className="w-8 h-8 text-primary" />,
      title: "Čerstvé květiny",
      description: "Každý den pro vás vybíráme ty nejčerstvější řezané i hrnkové květiny."
    },
    {
      icon: <Coffee className="w-8 h-8 text-secondary" />,
      title: "Výběrová káva",
      description: "Jedinečná káva s velkým výběrem příchutí. Vychutnejte si ji u nás nebo s sebou."
    },
    {
      icon: <PartyPopper className="w-8 h-8 text-accent" />,
      title: "Svatby a oslavy",
      description: "Kompletní květinový servis pro váš velký den a dárkové balíčky na míru."
    },
    {
      icon: <Gift className="w-8 h-8 text-purple-500" />,
      title: "Dárkové předměty",
      description: "Široký výběr dárků, dekorací a dárkových balíčků pro vaše blízké."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">Moderní koncept <br/>pro všechny smysly</h2>
          <p className="text-stone-600">
            Spojujeme krásu květin s požitkem z dobré kávy. U nás najdete vše pro potěšení oka i chuti.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl bg-stone-50 border border-stone-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="mb-4 bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">{feature.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;