import React from 'react';
import Hero3 from '../../components/Hero3/Hero3';
import NavBar from '../../components/NavBar/NavBar';
import StickyBar from '../../components/StickyBar/StickyBar';
import Visits from './Visits/Visits';

export default function Package() {
  return (
    <div>
      <StickyBar />
      <NavBar />
      <Hero3 data="Tour Package" text="Tour Package" />
      <Visits />
    </div>
  );
}
