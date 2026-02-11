import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiSearch } from 'react-icons/fi';
import {
  GiCoffeeCup,
  GiIceCube,
  GiCoffeeBeans,
  GiTeapot,
  GiChocolateBar,
  GiFruitBowl,
} from 'react-icons/gi';
import { TbLeaf } from 'react-icons/tb';
import { BiDrink } from 'react-icons/bi';

const categories = [
  { id: 'all', label: 'All', icon: GiCoffeeBeans },
  { id: 'classics', label: 'Classics', icon: GiCoffeeCup },
  { id: 'signature', label: 'Signature', icon: GiCoffeeCup },
  { id: 'specialty', label: 'Specialty', icon: BiDrink },
  { id: 'milk', label: 'Milk', icon: GiTeapot },
  { id: 'matcha', label: 'Matcha', icon: TbLeaf },
  { id: 'chocolate', label: 'Chocolate', icon: GiChocolateBar },
  { id: 'fruit-tea', label: 'Fruit Tea', icon: GiFruitBowl },
];

const menuData = [
  // Classics
  { id: 1, name: 'Americano', desc: 'Classic espresso diluted with hot water for a clean, bold finish', category: 'classics' },
  { id: 2, name: 'Long Black', desc: 'Double shot of espresso over hot water for a stronger, richer taste', category: 'classics' },
  { id: 3, name: 'Latte Classico', desc: 'Smooth espresso with silky steamed milk and light foam', category: 'classics' },
  { id: 4, name: 'Cappuccino', desc: 'Equal parts espresso, steamed milk, and velvety foam', category: 'classics' },

  // Signature Drinks
  { id: 5, name: "Matteo's Brew", desc: "Our house special - a signature blend crafted exclusively for Matteo's", category: 'signature', popular: true },
  { id: 6, name: 'Twin Nut Latte', desc: 'A rich combination of two premium nut flavors with smooth espresso', category: 'signature', popular: true },
  { id: 7, name: 'Spanish Sunset Latte', desc: 'A warm, indulgent latte with a Spanish-inspired twist. Iced only.', category: 'signature', note: 'Iced only', popular: true },

  // Specialty Drinks
  { id: 8, name: 'Cocoa Noir', desc: 'Dark cocoa blended with espresso for a rich, bittersweet delight', category: 'specialty' },
  { id: 9, name: 'Mocha Bianca', desc: 'White chocolate mocha with smooth espresso and steamed milk', category: 'specialty' },
  { id: 10, name: 'Caramel Macchiato', desc: 'Layered vanilla, steamed milk, espresso, and caramel drizzle', category: 'specialty', popular: true },
  { id: 11, name: 'Latte Español', desc: 'Spanish-style latte with sweetened condensed milk and espresso', category: 'specialty' },
  { id: 12, name: 'Hazelnut Brew', desc: 'Nutty hazelnut syrup blended with rich espresso and milk', category: 'specialty' },
  { id: 13, name: 'Almond Brew', desc: 'Smooth almond flavor paired with our signature espresso blend', category: 'specialty' },
  { id: 14, name: 'Caramelo Salé', desc: 'Salted caramel espresso with a perfect sweet and salty balance', category: 'specialty' },
  { id: 15, name: 'Caramelo Classico', desc: 'Classic caramel latte with smooth espresso and creamy milk', category: 'specialty' },

  // Milk Series
  { id: 16, name: 'Strawberry Velvet', desc: 'Creamy strawberry milk with a velvety smooth finish', category: 'milk' },
  { id: 17, name: 'Melon Cream', desc: 'Sweet melon blended with fresh cream and milk', category: 'milk' },
  { id: 18, name: 'Blueberry Dream', desc: 'Dreamy blueberry milk with a refreshing, fruity twist', category: 'milk' },

  // Matcha Series
  { id: 19, name: 'Matcha Verde', desc: 'Premium ceremonial-grade matcha with steamed milk', category: 'matcha', popular: true },
  { id: 20, name: 'Matcha Nero', desc: 'Dark matcha blend with a bold, earthy depth of flavor', category: 'matcha' },

  // Chocolate Indulgence
  { id: 21, name: 'Chocolate Classique', desc: 'Rich classic hot chocolate with steamed milk and cocoa', category: 'chocolate' },
  { id: 22, name: 'Blanc Chocolat', desc: 'Luxurious white chocolate with creamy steamed milk', category: 'chocolate' },

  // Fruit Teas
  { id: 23, name: 'Blueberry Burst', desc: 'Refreshing blueberry-infused tea with fruity sweetness', category: 'fruit-tea' },
  { id: 24, name: 'Strawberry Bloom', desc: 'Delicate strawberry tea with a floral, sweet finish', category: 'fruit-tea' },
  { id: 25, name: 'Passionfruit Glow', desc: 'Tropical passionfruit tea that is bright and tangy', category: 'fruit-tea' },
  { id: 26, name: 'Berry Fusion', desc: 'A vibrant blend of mixed berries in a refreshing tea', category: 'fruit-tea' },
];

const DigitalMenu = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = menuData.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryLabel = (catId) => {
    const cat = categories.find(c => c.id === catId);
    return cat ? cat.label : catId;
  };

  const groupedItems = filteredItems.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div className="min-h-[100svh] bg-cream">
      {/* Header */}
      <div className="bg-gradient-to-b from-espresso to-dark-roast pt-20 md:pt-24 pb-8 md:pb-12 px-5 md:px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-cream/60 hover:text-cream transition-colors text-xs md:text-sm mb-6 md:mb-8 active:text-cream"
          >
            <FiArrowLeft size={14} />
            Back to Home
          </Link>

          <div className="text-center">
            <img
              src="/logo.jpg"
              alt="Matteo's Brew"
              className="w-16 h-16 md:w-20 md:h-20 mx-auto rounded-full object-cover ring-2 ring-caramel/30 mb-3 md:mb-4"
            />
            <h1 className="font-[family-name:var(--font-heading)] text-2xl md:text-4xl font-bold text-cream">
              Specialty Menu
            </h1>
            <p className="text-sand/60 mt-1.5 md:mt-2 text-xs md:text-sm">
              Crafted with passion, served with warmth
            </p>
          </div>

          {/* Search */}
          <div className="mt-6 md:mt-8 relative">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-cream/40" size={16} />
            <input
              type="text"
              placeholder="Search drinks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 md:py-3.5 rounded-xl md:rounded-2xl bg-cream/10 border border-cream/10 text-cream text-sm placeholder:text-cream/30 focus:outline-none focus:ring-2 focus:ring-caramel/50 focus:border-transparent transition-all backdrop-blur-sm"
            />
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="sticky top-0 z-30 bg-cream/95 backdrop-blur-md border-b border-sand/30">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <div
            className="flex gap-1 overflow-x-auto py-2.5 md:py-3"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-1.5 px-3 md:px-4 py-2 md:py-2.5 rounded-lg md:rounded-xl text-xs md:text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-espresso text-cream shadow-lg shadow-espresso/20'
                    : 'text-coffee/70 hover:bg-sand/50 active:bg-sand/70'
                }`}
              >
                <cat.icon size={14} />
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="max-w-3xl mx-auto px-4 md:px-6 py-5 md:py-8">
        <p className="text-xs md:text-sm text-coffee/50 mb-4 md:mb-6">
          {filteredItems.length} item{filteredItems.length !== 1 ? 's' : ''} found
        </p>

        <AnimatePresence mode="popLayout">
          {activeCategory === 'all' ? (
            Object.entries(groupedItems).map(([catId, items]) => (
              <motion.div
                key={catId}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mb-6 md:mb-8"
              >
                <h2 className="font-[family-name:var(--font-heading)] text-lg md:text-xl font-bold text-espresso mb-3 md:mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-caramel" />
                  {getCategoryLabel(catId)}
                </h2>
                <div className="space-y-2 md:space-y-3">
                  {items.map((item, index) => (
                    <MenuItemCard key={item.id} item={item} index={index} />
                  ))}
                </div>
              </motion.div>
            ))
          ) : (
            <div className="space-y-2 md:space-y-3">
              {filteredItems.map((item, index) => (
                <MenuItemCard key={item.id} item={item} index={index} />
              ))}
            </div>
          )}
        </AnimatePresence>

        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <GiCoffeeCup className="mx-auto text-sand" size={40} />
            <p className="mt-4 text-coffee/50 font-medium text-sm">No items found</p>
            <p className="text-xs text-coffee/30 mt-1">Try a different search or category</p>
          </motion.div>
        )}

        {/* Footer Note */}
        <div className="mt-8 md:mt-12 text-center pb-6 md:pb-8">
          <div className="inline-flex items-center gap-2 px-4 md:px-6 py-2.5 md:py-3 rounded-xl md:rounded-2xl bg-espresso/5 border border-espresso/10">
            <GiCoffeeCup className="text-caramel flex-shrink-0" size={14} />
            <p className="text-xs md:text-sm text-coffee/60">
              Ask our baristas about hot or iced options!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const MenuItemCard = ({ item, index }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 0.25, delay: index * 0.02 }}
    className="group bg-cream-dark/50 hover:bg-cream-dark active:bg-cream-dark rounded-xl md:rounded-2xl p-4 md:p-5 border border-transparent hover:border-caramel/20 transition-all duration-300 hover:shadow-lg hover:shadow-espresso/5"
  >
    <div className="flex items-start justify-between gap-3">
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5 md:gap-2 flex-wrap">
          <h3 className="font-semibold text-sm md:text-base text-dark-roast group-hover:text-espresso transition-colors">
            {item.name}
          </h3>
          {item.popular && (
            <span className="px-1.5 md:px-2 py-0.5 text-[9px] md:text-[10px] font-bold tracking-wider uppercase bg-caramel/20 text-amber rounded-full">
              Popular
            </span>
          )}
          {item.note && (
            <span className="px-1.5 md:px-2 py-0.5 text-[9px] md:text-[10px] font-medium tracking-wider uppercase bg-espresso/10 text-coffee rounded-full">
              {item.note}
            </span>
          )}
        </div>
        <p className="text-xs md:text-sm text-coffee/60 mt-1 line-clamp-2 leading-relaxed">
          {item.desc}
        </p>
      </div>
    </div>
  </motion.div>
);

export default DigitalMenu;
