import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import TechnologySection from './components/TechnologySection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <TechnologySection />
      <Footer />
    </>
  );
};

export default App;
