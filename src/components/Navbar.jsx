import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/#about' },
    { name: 'Menu', href: '/#menu' },
    { name: 'Events', href: '/#events' },
    { name: 'Packages', href: '/#packages' },
    { name: 'Visit Us', href: '/#visit' },
  ];

  const handleNavClick = (e, href) => {
    setIsOpen(false);
    if (href.startsWith('/#') && isHome) {
      e.preventDefault();
      const id = href.replace('/#', '');
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || isOpen
          ? 'bg-cream/95 backdrop-blur-md shadow-lg shadow-espresso/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 md:gap-3 group" onClick={() => setIsOpen(false)}>
            <img
              src="/logo.jpg"
              alt="Matteo's Brew"
              className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="flex flex-col">
              <span className="font-[family-name:var(--font-heading)] text-lg md:text-xl font-bold text-dark-roast tracking-wide">
                Matteo's
              </span>
              <span className="text-[10px] md:text-xs text-coffee tracking-[0.3em] uppercase -mt-1">
                Brew
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative text-sm font-medium text-coffee hover:text-dark-roast transition-colors duration-300 tracking-wide uppercase group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-caramel group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <Link
              to="/digital-menu"
              className="ml-2 px-6 py-2.5 bg-espresso text-cream text-sm font-medium rounded-full hover:bg-dark-roast transition-all duration-300 tracking-wide uppercase hover:shadow-lg hover:shadow-espresso/20"
            >
              Digital Menu
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 -mr-2 text-espresso hover:text-dark-roast transition-colors active:scale-95"
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Full screen overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed inset-0 top-16 bg-cream/98 backdrop-blur-lg z-40"
          >
            <div className="h-full flex flex-col px-6 py-8 overflow-y-auto">
              <div className="space-y-1 flex-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <Link
                      to={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="block py-3.5 text-xl font-medium text-coffee hover:text-dark-roast transition-colors tracking-wide border-b border-sand/30 active:text-espresso"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-6 pb-safe"
              >
                <Link
                  to="/digital-menu"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center py-4 bg-espresso text-cream font-medium rounded-2xl tracking-wide uppercase text-sm active:scale-[0.98] transition-transform"
                >
                  Digital Menu
                </Link>
                <div className="mt-6 text-center">
                  <p className="text-xs text-coffee/40">Follow us</p>
                  <div className="flex items-center justify-center gap-3 mt-2">
                    <a
                      href="https://www.facebook.com/people/Matteos-Brew/61580708654888/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-espresso/10 flex items-center justify-center text-espresso active:bg-espresso active:text-cream transition-all"
                    >
                      <span className="text-sm font-medium">FB</span>
                    </a>
                    <a
                      href="https://www.instagram.com/matteosbrew/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-espresso/10 flex items-center justify-center text-espresso active:bg-espresso active:text-cream transition-all"
                    >
                      <span className="text-sm font-medium">IG</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
