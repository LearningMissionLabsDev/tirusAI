import { Box } from '@mui/material';
import React from 'react';
import Hero from './Hero';
import ContactUs from './ContactUs';

const Index: React.FC = () => {
  return (
    <>
      <Box>
        <Hero/>
        <ContactUs/>
      </Box>
    </>
  );
};

export default Index;