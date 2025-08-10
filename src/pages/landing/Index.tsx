import { Box } from '@mui/material';
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
      <Box>
        <Hero/>
        <Industry/>
        <Features />
        <Steps />
        <SmartSection />
        <ContactUs/>
      </Box>
    </>
  );
};

export default Index;