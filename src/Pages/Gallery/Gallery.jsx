import React from 'react';
import Hero3 from '../../components/Hero3/Hero3';
import NavBar from '../../components/NavBar/NavBar';
import StickyBar from '../../components/StickyBar/StickyBar';
import Footer from '../Home/Footer/Footer';
import Picture from './Pictures/Picture';

export default function Gallery() {
  return (
    <div>
      <StickyBar />
      <NavBar />
      <Hero3 data="Gallery" text="Gallery" />
      <Picture />
      <Footer />
    </div>
  );
}
