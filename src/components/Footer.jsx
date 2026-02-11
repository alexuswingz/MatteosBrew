import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FiCoffee, FiPhone } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-roast text-cream/70 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-coffee/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8 py-10 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3">
              <img
                src="/logo.jpg"
                alt="Matteo's Brew"
                className="w-9 h-9 md:w-10 md:h-10 rounded-full object-cover ring-2 ring-coffee/30"
              />
              <span className="font-[family-name:var(--font-heading)] text-base md:text-lg font-bold text-cream">
                Matteo's Brew
              </span>
            </div>
            <p className="mt-3 md:mt-4 text-xs md:text-sm text-cream/40 leading-relaxed">
              Crafted with passion, served with warmth.
            </p>
            {/* Social */}
            <div className="flex items-center gap-2.5 mt-4 md:mt-5">
              <a
                href="https://www.facebook.com/people/Matteos-Brew/61580708654888/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-cream/10 flex items-center justify-center hover:bg-caramel hover:text-dark-roast transition-all duration-300 active:scale-95"
              >
                <FaFacebookF size={13} />
              </a>
              <a
                href="https://www.instagram.com/matteosbrew/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-cream/10 flex items-center justify-center hover:bg-caramel hover:text-dark-roast transition-all duration-300 active:scale-95"
              >
                <FaInstagram size={13} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] font-bold text-cream text-xs md:text-sm mb-3 md:mb-4 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2 md:space-y-2.5">
              {['Home', 'About', 'Menu', 'Events', 'Packages'].map((link) => (
                <li key={link}>
                  <a
                    href={`/#${link.toLowerCase()}`}
                    className="text-xs md:text-sm text-cream/40 hover:text-caramel transition-colors active:text-caramel"
                  >
                    {link}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  to="/digital-menu"
                  className="text-xs md:text-sm text-cream/40 hover:text-caramel transition-colors active:text-caramel"
                >
                  Digital Menu
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="hidden md:block">
            <h4 className="font-[family-name:var(--font-heading)] font-bold text-cream text-sm mb-4 tracking-wide">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-cream/40">
              <li>Coffee Cart Rental</li>
              <li>Wedding Events</li>
              <li>Birthday Celebrations</li>
              <li>Corporate Events</li>
              <li>Custom Packages</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] font-bold text-cream text-xs md:text-sm mb-3 md:mb-4 tracking-wide">
              Contact Us
            </h4>
            <div className="space-y-2.5 md:space-y-3">
              <a
                href="tel:09778038614"
                className="flex items-center gap-2 text-xs md:text-sm text-cream/40 hover:text-caramel transition-colors active:text-caramel"
              >
                <FiPhone size={12} />
                0977 803 8614
              </a>
              <a
                href="tel:09178680122"
                className="flex items-center gap-2 text-xs md:text-sm text-cream/40 hover:text-caramel transition-colors active:text-caramel"
              >
                <FiPhone size={12} />
                0917 868 0122
              </a>
              <p className="text-[10px] md:text-xs text-cream/25 mt-2 md:mt-3">
                FB / IG: @matteosbrew
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-3 md:gap-4">
          <p className="text-[10px] md:text-xs text-cream/25">
            &copy; {currentYear} Matteo's Brew. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-[10px] md:text-xs text-cream/25">
            <span>Crafted with</span>
            <FiCoffee className="text-caramel/50" size={11} />
            <span>and love</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
