import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiMapPin, FiClock, FiPhone } from 'react-icons/fi';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const Visit = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="visit" className="py-16 md:py-24 lg:py-32 bg-cream relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-caramel/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          <p className="text-caramel tracking-[0.3em] md:tracking-[0.4em] uppercase text-xs md:text-sm font-medium mb-3 md:mb-4">
            Come Say Hello
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl lg:text-6xl font-bold text-dark-roast">
            Visit Us
          </h2>
          <div className="w-16 md:w-20 h-1 bg-caramel mx-auto mt-4 md:mt-6 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto">
          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center p-6 md:p-8 rounded-2xl md:rounded-3xl bg-cream-dark/50 hover:bg-cream-dark hover:shadow-xl hover:shadow-espresso/5 transition-all duration-500 group"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-espresso/10 text-espresso mb-4 md:mb-5 group-hover:bg-espresso group-hover:text-cream transition-all duration-500">
              <FiMapPin size={22} />
            </div>
            <h3 className="font-[family-name:var(--font-heading)] text-base md:text-lg font-bold text-dark-roast mb-2">
              Find Us
            </h3>
            <p className="text-coffee/70 text-xs md:text-sm leading-relaxed">
              Matteo's Brew<br />
              Your Favorite Local Spot
            </p>
            <div className="flex items-center justify-center gap-3 mt-3 md:mt-4">
              <a
                href="https://www.facebook.com/people/Matteos-Brew/61580708654888/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-espresso/10 flex items-center justify-center text-espresso hover:bg-espresso hover:text-cream transition-all duration-300 active:scale-95"
              >
                <FaFacebookF size={14} />
              </a>
              <a
                href="https://www.instagram.com/matteosbrew/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-espresso/10 flex items-center justify-center text-espresso hover:bg-espresso hover:text-cream transition-all duration-300 active:scale-95"
              >
                <FaInstagram size={14} />
              </a>
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-center p-6 md:p-8 rounded-2xl md:rounded-3xl bg-cream-dark/50 hover:bg-cream-dark hover:shadow-xl hover:shadow-espresso/5 transition-all duration-500 group"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-espresso/10 text-espresso mb-4 md:mb-5 group-hover:bg-espresso group-hover:text-cream transition-all duration-500">
              <FiClock size={22} />
            </div>
            <h3 className="font-[family-name:var(--font-heading)] text-base md:text-lg font-bold text-dark-roast mb-2">
              Hours
            </h3>
            <p className="text-coffee/70 text-xs md:text-sm leading-relaxed">
              Mon - Fri: 7AM - 9PM<br />
              Sat - Sun: 8AM - 10PM
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center p-6 md:p-8 rounded-2xl md:rounded-3xl bg-cream-dark/50 hover:bg-cream-dark hover:shadow-xl hover:shadow-espresso/5 transition-all duration-500 group"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-espresso/10 text-espresso mb-4 md:mb-5 group-hover:bg-espresso group-hover:text-cream transition-all duration-500">
              <FiPhone size={22} />
            </div>
            <h3 className="font-[family-name:var(--font-heading)] text-base md:text-lg font-bold text-dark-roast mb-2">
              Call Us
            </h3>
            <div className="space-y-1.5">
              <a href="tel:09778038614" className="block text-xs md:text-sm text-coffee/70 hover:text-espresso transition-colors active:text-espresso">
                0977 803 8614
              </a>
              <a href="tel:09178680122" className="block text-xs md:text-sm text-coffee/70 hover:text-espresso transition-colors active:text-espresso">
                0917 868 0122
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Visit;
