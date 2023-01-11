import React from 'react';
import StickyBar from '../../Components/StickyBar';
import NavBar from '../../Components/NavBar';
import HeroSection from './HeroSection';

function HomePage() {
  return (
    <div>
      <StickyBar />
      <NavBar />
      <HeroSection />
    </div>
  );
}

export default HomePage;
