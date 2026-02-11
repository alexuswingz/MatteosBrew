import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect, useCallback } from 'react';
import { FiCheck, FiStar, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const packages = [
  {
    name: 'Mini Brew',
    price: '8,500',
    cups: 50,
    features: [
      '4 hot or iced coffee-based drink choices',
      '2 non-coffee drinks',
      'Free 5 upgrade cups',
    ],
    popular: false,
  },
  {
    name: 'Starter Brew',
    price: '10,900',
    cups: 70,
    features: [
      '4 hot or iced coffee-based drink choices',
      '2 non-coffee drinks',
    ],
    popular: false,
  },
  {
    name: 'Classic Brew',
    price: '13,900',
    cups: 100,
    features: [
      '4 hot or iced coffee-based drink choices',
      '1 signature drink',
      '2 non-coffee drink choices',
    ],
    popular: true,
  },
  {
    name: 'Grande Brew',
    price: '19,500',
    cups: 150,
    features: [
      '5 hot or iced coffee-based drink choices',
      '1 signature drink',
      '2 non-coffee drinks',
    ],
    popular: false,
  },
  {
    name: 'Elite Brew',
    price: '23,900',
    cups: 200,
    features: [
      '5 hot or iced coffee-based drink choices',
      '2 specialty drinks',
      '3 non-coffee drinks',
    ],
    popular: false,
  },
];

const PackageCard = ({ pkg }) => (
  <div
    className={`relative rounded-3xl flex flex-col h-full transition-all duration-500 ${
      pkg.popular
        ? 'bg-espresso text-cream shadow-xl shadow-espresso/20 ring-2 ring-caramel/50 pt-10 p-6'
        : 'bg-cream border border-sand/50 p-6'
    }`}
  >
    {pkg.popular && (
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <span className="inline-flex items-center gap-1 px-4 py-1.5 bg-caramel text-dark-roast text-[10px] font-bold tracking-wider uppercase rounded-full whitespace-nowrap shadow-lg shadow-caramel/30">
          <FiStar size={10} />
          Most Popular
        </span>
      </div>
    )}

    <h3 className={`font-[family-name:var(--font-heading)] text-lg font-bold ${
      pkg.popular ? 'text-cream' : 'text-dark-roast'
    }`}>
      {pkg.name}
    </h3>

    <div className="mt-3 mb-1">
      <span className={`text-3xl font-bold ${pkg.popular ? 'text-caramel' : 'text-espresso'}`}>
        &#8369;{pkg.price}
      </span>
    </div>

    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium mb-5 self-start ${
      pkg.popular ? 'bg-cream/10 text-cream/80' : 'bg-espresso/5 text-coffee/70'
    }`}>
      <img src="/logo.jpg" alt="" className="w-3.5 h-3.5 rounded-full object-cover" />
      {pkg.cups} cups
    </div>

    <ul className="space-y-2.5 flex-1">
      {pkg.features.map((feature, i) => (
        <li key={i} className="flex items-start gap-2">
          <FiCheck className="flex-shrink-0 mt-0.5 text-caramel" size={14} />
          <span className={`text-xs leading-relaxed ${
            pkg.popular ? 'text-cream/80' : 'text-coffee/70'
          }`}>
            {feature}
          </span>
        </li>
      ))}
    </ul>

    <a
      href="https://www.facebook.com/people/Matteos-Brew/61580708654888/"
      target="_blank"
      rel="noopener noreferrer"
      className={`mt-6 block text-center py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
        pkg.popular
          ? 'bg-caramel text-dark-roast hover:bg-amber'
          : 'bg-espresso/10 text-espresso hover:bg-espresso hover:text-cream'
      }`}
    >
      Reserve Now
    </a>
  </div>
);

const Packages = () => {
  const ref = useRef(null);
  const scrollRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [activeSlide, setActiveSlide] = useState(2); // Start on "Classic Brew" (popular)

  // Scroll to the active slide
  const scrollToSlide = useCallback((index) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cardWidth = container.firstChild?.offsetWidth || 0;
    const gap = 16;
    const scrollPos = index * (cardWidth + gap);
    container.scrollTo({ left: scrollPos, behavior: 'smooth' });
    setActiveSlide(index);
  }, []);

  // Track scroll position to update dots
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const cardWidth = container.firstChild?.offsetWidth || 0;
      const gap = 16;
      const index = Math.round(container.scrollLeft / (cardWidth + gap));
      setActiveSlide(Math.min(index, packages.length - 1));
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to popular on mount (mobile)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (scrollRef.current && window.innerWidth < 768) {
        scrollToSlide(2);
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [scrollToSlide]);

  return (
    <section id="packages" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-cream-dark to-cream relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-caramel/30 to-transparent" />

      <div ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16 px-6"
        >
          <p className="text-caramel tracking-[0.3em] md:tracking-[0.4em] uppercase text-xs md:text-sm font-medium mb-3 md:mb-4">
            Introductory Packages
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl lg:text-6xl font-bold text-dark-roast">
            Choose Your Package
          </h2>
          <div className="w-16 md:w-20 h-1 bg-caramel mx-auto mt-4 md:mt-6 rounded-full" />
          <p className="mt-4 md:mt-6 text-coffee/70 max-w-xl mx-auto text-sm md:text-base px-4">
            Perfect for any event size. All packages include our full espresso bar setup with aesthetic cart and certified baristas.
          </p>
        </motion.div>

        {/* Mobile: Horizontal Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:hidden"
        >
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto overflow-y-visible snap-x snap-mandatory px-6 pt-4 pb-4 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
          >
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className="snap-center flex-shrink-0 w-[75vw] max-w-[300px] pt-3"
              >
                <PackageCard pkg={pkg} />
              </div>
            ))}
          </div>

          {/* Slider Navigation */}
          <div className="flex items-center justify-center gap-4 mt-4 px-6">
            <button
              onClick={() => scrollToSlide(Math.max(0, activeSlide - 1))}
              className="w-9 h-9 rounded-full bg-espresso/10 flex items-center justify-center text-espresso active:bg-espresso active:text-cream transition-all"
              aria-label="Previous package"
            >
              <FiChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {packages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToSlide(i)}
                  className={`rounded-full transition-all duration-300 ${
                    activeSlide === i
                      ? 'w-6 h-2.5 bg-espresso'
                      : 'w-2.5 h-2.5 bg-espresso/20'
                  }`}
                  aria-label={`Go to package ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => scrollToSlide(Math.min(packages.length - 1, activeSlide + 1))}
              className="w-9 h-9 rounded-full bg-espresso/10 flex items-center justify-center text-espresso active:bg-espresso active:text-cream transition-all"
              aria-label="Next package"
            >
              <FiChevronRight size={18} />
            </button>
          </div>
        </motion.div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 max-w-7xl mx-auto px-6 lg:px-8 pt-4">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="hover:-translate-y-1 transition-transform duration-300"
            >
              <PackageCard pkg={pkg} />
            </motion.div>
          ))}
        </div>

        {/* Terms of Payment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-8 md:mt-12 max-w-2xl mx-auto px-6"
        >
          <div className="bg-cream rounded-2xl p-5 md:p-6 border border-sand/50 text-center">
            <h4 className="font-[family-name:var(--font-heading)] font-bold text-dark-roast mb-3 text-sm">
              Terms of Payment
            </h4>
            <div className="space-y-1.5 text-xs text-coffee/60">
              <p>30% downpayment (non-refundable)</p>
              <p>Remaining balance to be settled 3 days before the event</p>
              <p>Accepts <span className="font-medium text-coffee">GCash</span>, <span className="font-medium text-coffee">bank transfer</span>, or <span className="font-medium text-coffee">cash</span></p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Packages;
