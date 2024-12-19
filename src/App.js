import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Header />
      <AboutMe />
      <Contact />
      <Experience />
      <Skills />
      <Education />
      <Footer />
    </div>
  );
}

export default App;
