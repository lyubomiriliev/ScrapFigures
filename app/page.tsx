import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import GallerySection from '@/components/GallerySection';
import ContactSection from '@/components/ContactSection';

const HomePage = () => {
  return (
    <div>
      <section id="hero">
        <HeroSection />
      </section>
      <section id="gallery">
        <GallerySection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
};

export default HomePage;
