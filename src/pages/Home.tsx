import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import About from '../components/About';
import Projects from '../components/Projects';
import Blog from '../components/Blog';
import Contact from '../components/Contact';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.state]);

  return (
    <main className="pt-16">
      <About />
      <Projects />
      <Blog />
      <Contact />
    </main>
  );
}