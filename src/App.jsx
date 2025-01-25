import React, { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PartnersSection from './components/PartnersSection';
import TestimonialsSection from './components/TestimonialsSection';
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Comparison from "./components/Comparison";
import Work from "./components/Work";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time); 
      requestAnimationFrame(raf); 
    }
    requestAnimationFrame(raf);

    lenis.on('scroll', ScrollTrigger.update);

    return () => {
      lenis.destroy();
    };
  }, []);


  return (
    <div className="scroll-container">
      <div id='home'></div>
      <div data-scroll-container className="bg-gradient-to-b from-[#0a0a1a] to-black text-white font-sans min-h-screen flex flex-col">
        <Header />
        <div className="h-screen">
          <HeroSection />
          <PartnersSection />
        </div>
        <TestimonialsSection />
        <Hero/>
        <Cards />
        <Comparison />
        <Work/>
        <FAQ/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
