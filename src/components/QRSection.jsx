import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2';
import { FiCamera, FiCoffee, FiSmartphone } from 'react-icons/fi';

const steps = [
  { icon: FiCamera, text: 'Scan the QR code with your phone camera' },
  { icon: FiSmartphone, text: 'Browse our full digital menu' },
  { icon: FiCoffee, text: 'Place your order and enjoy!' },
];

const QRSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  const menuUrl = typeof window !== 'undefined'
    ? `${window.location.origin}/digital-menu`
    : '/digital-menu';

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-espresso relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-caramel/30 to-transparent" />
      <div className="absolute top-20 -right-20 w-60 md:w-80 h-60 md:h-80 bg-coffee/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -left-20 w-60 md:w-80 h-60 md:h-80 bg-dark-roast/40 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="flex items-center gap-3 mb-4 md:mb-6 justify-center lg:justify-start">
              <HiOutlineDevicePhoneMobile className="text-caramel" size={20} />
              <p className="text-caramel tracking-[0.3em] md:tracking-[0.4em] uppercase text-xs md:text-sm font-medium">
                Scan & Order
              </p>
            </div>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-cream leading-tight">
              Skip the Line,{' '}
              <span className="text-caramel">Scan the Menu</span>
            </h2>
            <p className="mt-4 md:mt-6 text-sand/80 text-sm md:text-lg leading-relaxed">
              No more waiting! Simply scan our QR code to access the full Matteo's Brew
              digital menu right on your phone.
            </p>

            {/* Steps */}
            <div className="mt-6 md:mt-10 space-y-3 md:space-y-5">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                  className="flex items-center gap-3 md:gap-4 justify-center lg:justify-start"
                >
                  <div className="flex-shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-full bg-caramel/20 flex items-center justify-center text-caramel">
                    <step.icon size={16} />
                  </div>
                  <span className="text-cream/80 text-sm md:text-base">{step.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* QR Code Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-caramel/20 rounded-3xl blur-2xl scale-105" />

              <div className="relative bg-cream rounded-3xl p-8 md:p-10 shadow-2xl">
                <div className="text-center mb-4 md:mb-6">
                  <p className="font-[family-name:var(--font-heading)] text-lg md:text-xl font-bold text-dark-roast">
                    Matteo's Brew
                  </p>
                  <p className="text-coffee/60 text-xs md:text-sm mt-1">Digital Menu</p>
                </div>

                <div className="bg-white p-3 md:p-4 rounded-2xl shadow-inner">
                  <QRCodeSVG
                    value={menuUrl}
                    size={180}
                    level="H"
                    fgColor="#3D2414"
                    bgColor="#FFFFFF"
                    imageSettings={{
                      src: '/logo.jpg',
                      height: 35,
                      width: 35,
                      excavate: true,
                    }}
                    className="w-[180px] h-[180px] md:w-[220px] md:h-[220px]"
                  />
                </div>

                <p className="text-center mt-4 md:mt-6 text-coffee/50 text-[10px] md:text-xs tracking-wider uppercase">
                  Scan with your phone camera
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QRSection;
