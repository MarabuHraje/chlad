import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Jana Nováková",
      text: "Nejlepší káva v okolí a ty zákusky! Chodíme sem s kamarádkou pravidelně. Navíc mi vždy krásně poradí s výběrem květin.",
      rating: 5
    },
    {
      name: "Petr Svoboda",
      text: "Objednával jsem zde kytici k výročí a manželka byla nadšená. Čerstvé květiny, které vydržely dlouho. Profesionální přístup.",
      rating: 5
    },
    {
      name: "Eva Dvořáková",
      text: "Krásné a útulné prostředí. Oceňuji dětský koutek a skvělé chlebíčky. Ideální místo na odpolední relax.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">Co o nás říkají zákazníci</h2>
           <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-stone-50 p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-lg border border-stone-100">
              <div className="flex gap-1 text-secondary mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-stone-700 italic mb-6 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center font-bold text-stone-500">
                  {review.name.charAt(0)}
                </div>
                <span className="font-bold text-stone-900">{review.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;