
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';

const Index: React.FC = () => {
  useEffect(() => {
    // Set page title
    document.title = "Jeffrey Hasan C | Full-Stack Developer";
  }, []);

  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Certifications />
      <Achievements />
      <Contact />
    </Layout>
  );
};

export default Index;
