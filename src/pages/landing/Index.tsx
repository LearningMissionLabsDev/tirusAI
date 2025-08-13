import React from 'react';
import Hero from './Hero';
import ContactUs from './ContactUs';
import SmartSection from './SmartSection';
import Industry from './Industry';
import Features from './Features';
import Steps from './Steps';

const Index: React.FC = () => {
  return (
    <>
      <Hero />
      <Industry />
      <Features />
      <Steps />
      <SmartSection />
      <ContactUs />
    </>
  );
};

export default Index;