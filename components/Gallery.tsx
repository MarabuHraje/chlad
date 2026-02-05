import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    { src: 'https://picsum.photos/600/800?random=101', alt: 'Svatební kytice', category: 'Svatby', span: 'row-span-2' },
    { src: 'https://picsum.photos/600/600?random=102', alt: 'Káva a dort', category: 'Kavárna', span: 'col-span-1' },
    { src: 'https://picsum.photos/800/600?random=103', alt: 'Dárkové balení', category: 'Dárky', span: 'col-span-2' },
    { src: 'https://picsum.photos/600/900?random=104', alt: 'Interiér', category: 'Kavárna', span: 'row-span-2' },
    { src: 'https://picsum.photos/600/600?random=105', alt: 'Vazba květin', category: 'Květiny', span: 'col-span-1' },
    { src: 'https://picsum.photos/800/600?random=106', alt: 'Zákusky', category: 'Cukrárna', span: 'col-span-1' },
    { src: 'https://picsum.photos/600/800?random=107', alt: 'Květinový box', category: 'Květiny', span: 'row-span-2' },
    { src: 'https://picsum.photos/600/600?random=108', alt: 'Latte', category: 'Káva', span: 'col-span-1' },
    { src: 'https://picsum.photos/600/600?random=109', alt: 'Detail květu', category: 'Květiny', span: 'col-span-1' },
    { src: 'https://picsum.photos/800/600?random=110', alt: 'Oslava', category: 'Akce', span: 'col-span-2' },
    { src: 'https://picsum.photos/600/800?random=111', alt: 'Svatební brána', category: 'Svatby', span: 'row-span-2' },
    { src: 'https://picsum.photos/600/600?random=112', alt: 'Cappuccino', category: 'Káva', span: 'col-span-1' },
    { src: 'https://picsum.photos/600/600?random=113', alt: 'Detail dortu', category: 'Cukrárna', span: 'col-span-1' },
    { src: 'https://picsum.photos/600/600?random=114', alt: 'Makronky', category: 'Cukrárna', span: 'col-span-1' },
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
              className={`group relative overflow-hidden rounded-2xl shadow-sm cursor-pointer ${img.span} min-h-full w-full`}
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