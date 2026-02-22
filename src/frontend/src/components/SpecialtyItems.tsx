import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function SpecialtyItems() {
  const animation = useScrollAnimation();

  const specialtyItems = [
    {
      image: '/assets/generated/photo-frame-pink.dim_400x400.png',
      title: 'Photo Frames & Artwork',
      description: 'We handle your precious memories and artwork with utmost care, using specialized packing materials to ensure they arrive in perfect condition.',
    },
    {
      image: '/assets/generated/trophy-pink.dim_400x400.png',
      title: 'Trophies & Awards',
      description: 'Your achievements deserve special attention. We pack trophies and awards with custom protection to preserve their pristine condition.',
    },
    {
      image: '/assets/generated/antique-item-pink.dim_400x400.png',
      title: 'Antiques & Collectibles',
      description: 'Valuable antiques and collectibles require expert handling. Our team ensures these irreplaceable items are transported safely.',
    },
  ];

  return (
    <section
      ref={animation.ref as React.RefObject<HTMLElement>}
      className={`py-20 px-6 bg-gradient-to-br from-cardboard-lightest to-coffee-light/30 transition-all duration-1000 delay-300 ${
        animation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto max-w-7xl">
        <h3 className="text-4xl lg:text-5xl font-bold text-center text-coffee-darkest mb-6">
          Specialty Items We Handle
        </h3>
        <p className="text-xl text-center text-coffee-dark mb-16 max-w-3xl mx-auto leading-relaxed">
          From delicate antiques to cherished memories, we provide expert care for your most valuable possessions
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialtyItems.map((item, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-2xl shadow-warm border-2 border-cardboard-medium hover:shadow-warm-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2 group"
            >
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-darkest/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h4 className="text-2xl font-bold text-coffee-darkest mb-3">{item.title}</h4>
              <p className="text-coffee-dark leading-relaxed text-lg">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-coffee-dark font-medium">
            Have other specialty items? <span className="text-coffee-darkest font-bold">We handle them all with professional care!</span>
          </p>
        </div>
      </div>
    </section>
  );
}
