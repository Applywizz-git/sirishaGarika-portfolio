import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from '@/components/Preloader';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Certification from '@/components/Certification';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      
      {!isLoading && (
        <div className="min-h-screen">
          <Header />
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Certification />
          <Education />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Index;
