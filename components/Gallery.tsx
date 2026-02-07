import React from 'react';
import img1 from '../images/1.jpeg';
import img2 from '../images/2.jpeg';
import img3 from '../images/3.jpeg';
import img5 from '../images/5.jpeg';
import img6 from '../images/6.jpeg';
import img7 from '../images/7.jpeg';
import img9 from '../images/9.jpeg';
import img10 from '../images/10.jpeg';
import img12 from '../images/12.jpeg';
import img13 from '../images/13.jpeg';
import img17 from '../images/17.jpeg';

const Gallery: React.FC = () => {
  // Gallery mapping based on user photos (1.jpeg - 17.jpeg)
  const images = [
    { src: img1, alt: 'Interiér kavárny s modrými křesly', category: 'Kavárna', span: 'col-span-2 md:col-span-2 row-span-2' },
    { src: img3, alt: 'Spokojené zákaznice', category: 'Květiny', span: 'col-span-1 row-span-2' },
    { src: img9, alt: 'Domácí buchty', category: 'Cukrárna', span: 'col-span-1 row-span-1' },
    { src: img6, alt: 'Výloha', category: 'Květiny', span: 'col-span-1 row-span-1' },
    { src: img12, alt: 'Barový pult', category: 'Kavárna', span: 'col-span-2 row-span-1' },
    { src: img13, alt: 'Dárkové předměty', category: 'Dárky', span: 'col-span-1 row-span-2' },
    { src: img2, alt: 'Jarní košík', category: 'Květiny', span: 'col-span-1 row-span-1' },
    { src: img10, alt: 'Houpací křeslo', category: 'Interiér', span: 'col-span-1 row-span-1' },
    { src: img5, alt: 'Květinový regál', category: 'Květiny', span: 'col-span-1 row-span-1' },
    { src: img7, alt: 'Pokojové rostliny', category: 'Květiny', span: 'col-span-1 row-span-1' },
    { src: img17, alt: 'Detail květin', category: 'Květiny', span: 'col-span-1 row-span-1' },
  ];

  return (
    <section className="py-32 bg-cream min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <span className="text-primary font-bold tracking-widest uppercase text-sm">Portfolio</span>
          <h2 className="text-5xl md:text-6xl font-bold text-stone-900 font-serif">
            Galerie radosti
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto font-light">
            Nahlédněte do našeho světa plného barev, chutí a vůní. Každý kousek je originál tvořený s láskou.
          </p>
        </div>

        {/* Added grid-flow-dense to pack items tightly without gaps */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[250px] grid-flow-dense">
          {images.map((img, index) => (
            <div 
              key={index} 
              className={`group relative overflow-hidden rounded-2xl shadow-sm cursor-pointer ${img.span} min-h-[250px] w-full`}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                <span className="text-white font-serif text-2xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 drop-shadow-md">
                  {img.category}
                </span>
                <span className="w-12 h-1 bg-primary mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100"></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;