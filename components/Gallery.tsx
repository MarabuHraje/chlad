import React from 'react';

const Gallery: React.FC = () => {
  // Gallery mapping based on user photos (1.jpeg - 17.jpeg)
  const images = [
    { src: 'images/1.jpeg', alt: 'Interiér kavárny s modrými křesly', category: 'Kavárna', span: 'col-span-2 md:col-span-2 row-span-2' },
    { src: 'images/3.jpeg', alt: 'Spokojené zákaznice', category: 'Květiny', span: 'col-span-1 row-span-2' },
    { src: 'images/9.jpeg', alt: 'Domácí buchty', category: 'Cukrárna', span: 'col-span-1 row-span-1' },
    { src: 'images/6.jpeg', alt: 'Výloha', category: 'Květiny', span: 'col-span-1 row-span-1' },
    { src: 'images/12.jpeg', alt: 'Barový pult', category: 'Kavárna', span: 'col-span-2 row-span-1' },
    { src: 'images/13.jpeg', alt: 'Dárkové předměty', category: 'Dárky', span: 'col-span-1 row-span-2' },
    { src: 'images/2.jpeg', alt: 'Jarní košík', category: 'Květiny', span: 'col-span-1 row-span-1' },
    { src: 'images/10.jpeg', alt: 'Houpací křeslo', category: 'Interiér', span: 'col-span-1 row-span-1' },
    { src: 'images/5.jpeg', alt: 'Květinový regál', category: 'Květiny', span: 'col-span-1 row-span-1' },
    { src: 'images/7.jpeg', alt: 'Pokojové rostliny', category: 'Květiny', span: 'col-span-1 row-span-1' },
    { src: 'images/17.jpeg', alt: 'Detail květin', category: 'Květiny', span: 'col-span-1 row-span-1' },
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