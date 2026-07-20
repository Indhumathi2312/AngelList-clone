
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import Stats from '../components/sections/Stats';
import Testimonials from '../components/sections/Testimonials';
import Cta from '../components/sections/Cta';

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="maincontent">
        <Hero />
        <Features />
        <Stats />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
