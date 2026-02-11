import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GiCoffeeBeans, GiCoffeeCup } from 'react-icons/gi';
import { TbLeaf } from 'react-icons/tb';

const features = [
  {
    icon: GiCoffeeBeans,
    title: 'Premium Beans',
    description: '100% Arabica beans paired with Matteo\'s signature blends, roasted to perfection for every cup.',
  },
  {
    icon: GiCoffeeCup,
    title: 'Handcrafted Drinks',
    description: 'Each beverage is carefully prepared by our certified baristas with love and precision.',
  },
  {
    icon: TbLeaf,
    title: 'Beyond Coffee',
    description: 'From matcha and fruit teas to milk series and chocolate indulgence — something for everyone.',
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 bg-cream relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-caramel/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <p className="text-caramel tracking-[0.3em] md:tracking-[0.4em] uppercase text-xs md:text-sm font-medium mb-3 md:mb-4">
            Our Story
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl lg:text-6xl font-bold text-dark-roast">
            More Than Just Coffee
          </h2>
          <div className="w-16 md:w-20 h-1 bg-caramel mx-auto mt-4 md:mt-6 rounded-full" />
        </motion.div>

        {/* Story Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center mb-12 md:mb-20"
        >
          <p className="text-base md:text-lg text-coffee/80 leading-relaxed">
            At <span className="font-semibold text-espresso">Matteo's Brew</span>, we believe that great coffee
            is an experience, not just a drink. Nestled in the heart of the community, our shop
            is a warm haven where the aroma of freshly brewed coffee meets the comfort of home.
            Every cup is crafted with intention, every smile is genuine, and every visit feels like
            coming back to a place you belong.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
              className="group text-center p-6 md:p-8 rounded-3xl bg-cream-dark/50 hover:bg-cream-dark transition-all duration-500 hover:shadow-xl hover:shadow-espresso/5 active:scale-[0.98] md:active:scale-100 md:hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-espresso/10 text-espresso mb-4 md:mb-6 group-hover:bg-espresso group-hover:text-cream transition-all duration-500">
                <feature.icon size={24} className="md:hidden" />
                <feature.icon size={28} className="hidden md:block" />
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-lg md:text-xl font-bold text-dark-roast mb-2 md:mb-3">
                {feature.title}
              </h3>
              <p className="text-coffee/70 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
