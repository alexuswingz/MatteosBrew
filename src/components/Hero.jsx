import { motion } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/banner.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-dark-roast/60" />
        {/* Warm gradient overlay to match brand */}
        <div className="absolute inset-0 bg-gradient-to-b from-mocha/40 via-transparent to-dark-roast/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-6 lg:px-8 text-center pt-20 pb-24 md:pt-0 md:pb-0">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-6 md:mb-8"
        >
          <img
            src="/logo.jpg"
            alt="Matteo's Brew"
            className="w-28 h-28 md:w-40 md:h-40 mx-auto rounded-full object-cover shadow-2xl shadow-black/30 ring-4 ring-cream/20"
          />
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-caramel tracking-[0.3em] md:tracking-[0.4em] uppercase text-xs md:text-sm font-medium mb-3 md:mb-4 drop-shadow-lg">
            Welcome to
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-[2.75rem] sm:text-6xl md:text-7xl lg:text-8xl font-bold text-cream leading-[1.1] drop-shadow-xl">
            Matteo's
            <span className="block text-caramel">Brew</span>
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-5 md:mt-6 text-base md:text-xl text-cream/80 max-w-2xl mx-auto leading-relaxed px-2 drop-shadow-md"
        >
          Crafted with passion, served with warmth. Every cup tells a story
          of carefully sourced beans and artisan brewing.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4"
        >
          <a
            href="#menu"
            className="w-full sm:w-auto px-8 py-3.5 md:py-4 bg-caramel text-dark-roast font-semibold rounded-full hover:bg-amber transition-all duration-300 tracking-wide text-sm uppercase hover:shadow-xl hover:shadow-black/20 active:scale-[0.98] text-center"
          >
            Explore Our Menu
          </a>
          <a
            href="#about"
            className="w-full sm:w-auto px-8 py-3.5 md:py-4 bg-cream/10 backdrop-blur-sm border-2 border-cream/30 text-cream font-medium rounded-full hover:bg-cream/20 transition-all duration-300 tracking-wide text-sm uppercase active:scale-[0.98] text-center"
          >
            Our Story
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-cream/50"
          >
            <span className="text-[10px] md:text-xs tracking-widest uppercase">Scroll</span>
            <FiArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
