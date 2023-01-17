import React from 'react';
import Hero3 from '../../components/Hero3/Hero3';
import NavBar from '../../components/NavBar/NavBar';
import StickyBar from '../../components/StickyBar/StickyBar';
import Footer from '../Home/Footer/Footer';
import Address from './Address/Address';

export default function Contact() {
  return (
    <div>
      <StickyBar />
      <NavBar />
      <Hero3 data="Contact Us" text="Gallery" />
      <Address />
      <Footer />
    </div>
  );
}
