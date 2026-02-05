import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-cream">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-secondary/5 skew-x-12 translate-x-32 z-0" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-primary/5 -skew-x-12 -translate-x-20 z-0" />
      
      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-stone-200 shadow-sm text-stone-600 text-xs font-bold tracking-widest uppercase">
            <span className="text-primary">Květinářství</span>
            <span className="w-1 h-1 rounded-full bg-stone-300"></span>
            <span className="text-secondary">Kavárna</span>
            <span className="w-1 h-1 rounded-full bg-stone-300"></span>
            <span className="text-accent">Cukrárna</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-stone-900 leading-[1.1]">
            Vůně kávy a <br />
            <span className="text-primary font-serif italic relative inline-block">
              krása květin
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span> <br />
            na jednom místě.
          </h1>
          
          <p className="text-lg text-stone-600 max-w-lg leading-relaxed font-light">
            Spojili jsme vášeň pro floristiku s láskou k výběrové kávě a domácím dezertům. 
            Přijďte si odpočinout do prostředí, které pohladí vaši duši.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 pt-4">
            <Link 
              to="/kvetinarstvi" 
              className="px-8 py-4 bg-stone-900 text-white rounded-xl hover:bg-primary transition-all duration-300 text-center shadow-lg hover:shadow-xl hover:-translate-y-1 font-medium"
            >
              Nabídka květin
            </Link>
            <Link 
              to="/kavarna" 
              className="px-8 py-4 border-2 border-stone-200 bg-white text-stone-800 rounded-xl hover:border-secondary hover:text-secondary transition-all duration-300 text-center hover:-translate-y-1 font-medium"
            >
              Menu kavárny
            </Link>
          </div>
        </div>

        <div className="relative h-[600px] md:h-[700px] w-full hidden md:block perspective-1000">
          {/* Floating Images */}
          {/* Top Image: Cafe (Larger) */}
          <div className="absolute top-0 left-0 w-80 h-96 rounded-2xl overflow-hidden shadow-2xl z-20 border-4 border-white transform -rotate-3 hover:rotate-0 transition-transform duration-500 animate-float">
            <img 
              src="https://picsum.photos/600/800?random=20" 
              alt="Káva a dort" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </div>
          {/* Bottom Image: Flowers */}
          <div className="absolute bottom-12 right-0 w-80 h-96 rounded-2xl overflow-hidden shadow-2xl z-10 border-4 border-white transform rotate-3 hover:rotate-0 transition-transform duration-500 animate-float-delayed">
            <img 
              src="https://picsum.photos/600/800?random=10" 
              alt="Kytice" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl z-0"></div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-stone-400 animate-bounce cursor-pointer hover:text-primary transition-colors">
        <ChevronDown size={32} onClick={() => document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})} />
      </div>
    </section>
  );
};

export default Hero;