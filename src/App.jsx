import React, { useEffect, useRef, Suspense, lazy } from 'react';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PartnersSection from './components/PartnersSection';
import TestimonialsSection from './components/TestimonialsSection';
import Cards from './components/Cards';
import Comparison from './components/Comparison';
import Work from './components/Work';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import AnimatedLoader from './components/AnimatedLoader';
import 'react-toastify/dist/ReactToastify.css';

const Hero = lazy(() => import('./components/Hero'));

function App() {
  const ScrollRef = useRef(null);

  const handleScroll = (e) => {
    const { deltaY } = e;
    if (deltaY > 0) {
      gsap.to(ScrollRef.current, { y: -100, duration: 0.5 });
    } else {
      gsap.to(ScrollRef.current, { y: 0, duration: 0.5 });
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    lenis.on('scroll', ScrollTrigger.update);

    window.addEventListener('wheel', handleScroll);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="scroll-container">
      <div id="home"></div>
      <div data-scroll-container className="bg-[#010102] text-white font-sans min-h-screen flex flex-col">
        <div className="BG w-full overflow-hidden relative">
          <div className="glow-quarter"></div>
          <div className="glow-inner"></div>
          <Header ref={ScrollRef} />
          <HeroSection />
        </div>
        <PartnersSection />
        <TestimonialsSection/>
        <Suspense fallback={<AnimatedLoader />}>
          <Hero />
        </Suspense>
        <Cards />
        <Comparison />
        <Work />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}

export default App;
