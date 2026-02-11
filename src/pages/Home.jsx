import Hero from '../components/Hero';
import About from '../components/About';
import MenuPreview from '../components/MenuPreview';
import QRSection from '../components/QRSection';
import CoffeeCart from '../components/CoffeeCart';
import Packages from '../components/Packages';
import Visit from '../components/Visit';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <MenuPreview />
      <QRSection />
      <CoffeeCart />
      <Packages />
      <Visit />
    </>
  );
};

export default Home;
