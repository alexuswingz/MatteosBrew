import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const menuCategories = [
  {
    category: 'Classics',
    items: [
      { name: 'Americano' },
      { name: 'Long Black' },
      { name: 'Latte Classico' },
      { name: 'Cappuccino' },
    ],
  },
  {
    category: 'Signature Drinks',
    items: [
      { name: "Matteo's Brew", tag: 'House Special' },
      { name: 'Twin Nut Latte' },
      { name: 'Spanish Sunset Latte', note: 'Iced only' },
    ],
  },
  {
    category: 'Specialty Drinks',
    items: [
      { name: 'Cocoa Noir' },
      { name: 'Mocha Bianca' },
      { name: 'Caramel Macchiato' },
      { name: 'Latte Español' },
      { name: 'Hazelnut Brew' },
      { name: 'Almond Brew' },
      { name: 'Caramelo Salé' },
      { name: 'Caramelo Classico' },
    ],
  },
  {
    category: 'Milk Series',
    items: [
      { name: 'Strawberry Velvet' },
      { name: 'Melon Cream' },
      { name: 'Blueberry Dream' },
    ],
  },
  {
    category: 'Matcha Series',
    items: [
      { name: 'Matcha Verde' },
      { name: 'Matcha Nero' },
    ],
  },
  {
    category: 'Chocolate Indulgence',
    items: [
      { name: 'Chocolate Classique' },
      { name: 'Blanc Chocolat' },
    ],
  },
  {
    category: 'Fruit Teas',
    items: [
      { name: 'Blueberry Burst' },
      { name: 'Strawberry Bloom' },
      { name: 'Passionfruit Glow' },
      { name: 'Berry Fusion' },
    ],
  },
];

const MenuPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="menu" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-cream to-cream-dark relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-caramel/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          <p className="text-caramel tracking-[0.3em] md:tracking-[0.4em] uppercase text-xs md:text-sm font-medium mb-3 md:mb-4">
            Specialty Menu
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl lg:text-6xl font-bold text-dark-roast">
            Our Menu
          </h2>
          <div className="w-16 md:w-20 h-1 bg-caramel mx-auto mt-4 md:mt-6 rounded-full" />
          <p className="mt-4 md:mt-6 text-coffee/70 max-w-xl mx-auto text-sm md:text-base">
            From signature brews to refreshing fruit teas, discover the full Matteo's Brew experience.
          </p>
        </motion.div>

        {/* Menu Grid - Bento style */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-5">
          {menuCategories.map((cat, catIndex) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + catIndex * 0.08 }}
              className={`bg-cream/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-6 border border-sand/50 hover:border-caramel/30 transition-all duration-500 hover:shadow-xl hover:shadow-espresso/5 group ${
                cat.category === 'Specialty Drinks' ? 'col-span-2 lg:col-span-2' : ''
              }`}
            >
              <h3 className="font-[family-name:var(--font-heading)] text-sm md:text-lg font-bold text-espresso mb-3 md:mb-4 pb-2 md:pb-3 border-b border-sand/60 flex items-center gap-2">
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-caramel inline-block flex-shrink-0" />
                <span className="truncate">{cat.category}</span>
              </h3>
              <div className={`space-y-1.5 md:space-y-2.5 ${cat.category === 'Specialty Drinks' ? 'grid grid-cols-2 gap-x-4 gap-y-1.5 md:gap-x-6 md:gap-y-2.5 space-y-0' : ''}`}>
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-1.5 md:gap-2 group/item"
                  >
                    <span className="w-1 h-1 rounded-full bg-caramel/40 flex-shrink-0" />
                    <span className="text-xs md:text-sm text-dark-roast group-hover/item:text-espresso transition-colors leading-tight">
                      {item.name}
                    </span>
                    {item.tag && (
                      <span className="hidden sm:inline px-2 py-0.5 text-[8px] md:text-[9px] font-bold tracking-wider uppercase bg-caramel/20 text-amber rounded-full flex-shrink-0">
                        {item.tag}
                      </span>
                    )}
                    {item.note && (
                      <span className="hidden sm:inline text-[9px] md:text-[10px] text-coffee/40 italic flex-shrink-0">
                        ({item.note})
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-10 md:mt-14"
        >
          <Link
            to="/digital-menu"
            className="inline-flex items-center gap-2 px-6 md:px-8 py-3.5 md:py-4 bg-espresso text-cream font-medium rounded-full hover:bg-dark-roast transition-all duration-300 tracking-wide text-sm uppercase group hover:shadow-xl hover:shadow-espresso/25 active:scale-[0.98] w-full sm:w-auto justify-center"
          >
            View Full Digital Menu
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuPreview;
