import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiPhone, FiHeart, FiGift, FiBriefcase } from 'react-icons/fi';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { GiCoffeeCup } from 'react-icons/gi';

const eventTypes = [
  { icon: FiHeart, label: 'Weddings' },
  { icon: FiGift, label: 'Birthdays' },
  { icon: FiBriefcase, label: 'Corporate Events' },
];

const CoffeeCart = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="events" className="py-16 md:py-24 lg:py-32 bg-cream-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-caramel/30 to-transparent" />
      <div className="absolute -top-20 -right-20 w-60 md:w-80 h-60 md:h-80 bg-caramel/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-60 md:w-80 h-60 md:h-80 bg-sand/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl shadow-espresso/10">
              <img
                src="/coffee-cart.png"
                alt="Matteo's Brew Coffee Cart"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-roast/40 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-3 right-3 md:-bottom-4 md:right-8 bg-cream rounded-xl md:rounded-2xl p-3 md:p-4 shadow-xl shadow-espresso/10 border border-sand/50"
            >
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-caramel/20 flex items-center justify-center">
                  <GiCoffeeCup className="text-espresso" size={16} />
                </div>
                <div>
                  <p className="font-[family-name:var(--font-heading)] font-bold text-dark-roast text-xs md:text-sm">
                    Coffee Cart
                  </p>
                  <p className="text-[9px] md:text-[10px] text-coffee/50 uppercase tracking-wider">
                    Matcha & Non-Coffee
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <p className="text-caramel tracking-[0.3em] md:tracking-[0.4em] uppercase text-xs md:text-sm font-medium mb-3 md:mb-4">
              Events & Catering
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-dark-roast leading-tight">
              Book Us for Your{' '}
              <span className="text-espresso italic">Next Event</span>
            </h2>
            <p className="mt-4 md:mt-6 text-coffee/70 text-sm md:text-lg leading-relaxed">
              Let's talk and tailor-fit what you want. Our aesthetic coffee cart setup
              brings the full Matteo's Brew experience to your special occasion.
            </p>

            {/* Event Types */}
            <div className="mt-5 md:mt-8 flex flex-wrap gap-2 md:gap-3">
              {eventTypes.map((event) => (
                <div
                  key={event.label}
                  className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-2 md:py-2.5 rounded-xl bg-cream border border-sand/50 text-xs md:text-sm text-coffee"
                >
                  <event.icon className="text-caramel" size={14} />
                  {event.label}
                </div>
              ))}
            </div>

            {/* What's Included Summary */}
            <div className="mt-5 md:mt-8 p-4 md:p-5 rounded-2xl bg-cream border border-sand/50">
              <h4 className="font-[family-name:var(--font-heading)] font-bold text-dark-roast mb-2 md:mb-3 text-sm">
                Package Inclusions
              </h4>
              <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-coffee/70">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-caramel mt-1.5 flex-shrink-0" />
                  Full espresso bar setup with aesthetic cafe cart and signage
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-caramel mt-1.5 flex-shrink-0" />
                  100% Arabica beans + Matteo's signature blends
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-caramel mt-1.5 flex-shrink-0" />
                  1-2 Certified Baristas, 3-4 hours of serving time
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-caramel mt-1.5 flex-shrink-0" />
                  Free add-ons: syrups, latte art, and cafe-style presentation
                </li>
              </ul>
            </div>

            {/* Contact CTA */}
            <div className="mt-5 md:mt-8 flex flex-col sm:flex-row gap-2.5 md:gap-3">
              <a
                href="tel:09778038614"
                className="inline-flex items-center justify-center gap-2 px-5 md:px-6 py-3 md:py-3.5 bg-espresso text-cream font-medium rounded-full hover:bg-dark-roast transition-all duration-300 text-sm tracking-wide active:scale-[0.98]"
              >
                <FiPhone size={16} />
                0977 803 8614
              </a>
              <a
                href="tel:09178680122"
                className="inline-flex items-center justify-center gap-2 px-5 md:px-6 py-3 md:py-3.5 bg-transparent border-2 border-espresso/30 text-espresso font-medium rounded-full hover:bg-espresso/5 transition-all duration-300 text-sm tracking-wide active:scale-[0.98]"
              >
                <FiPhone size={16} />
                0917 868 0122
              </a>
            </div>

            {/* Social */}
            <div className="mt-4 md:mt-5 flex items-center gap-3">
              <span className="text-[10px] md:text-xs text-coffee/40 uppercase tracking-wider">Send us a message:</span>
              <a
                href="https://www.facebook.com/people/Matteos-Brew/61580708654888/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-espresso/10 flex items-center justify-center text-espresso hover:bg-espresso hover:text-cream transition-all duration-300 active:scale-95"
              >
                <FaFacebookF size={12} />
              </a>
              <a
                href="https://www.instagram.com/matteosbrew/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-espresso/10 flex items-center justify-center text-espresso hover:bg-espresso hover:text-cream transition-all duration-300 active:scale-95"
              >
                <FaInstagram size={12} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoffeeCart;
