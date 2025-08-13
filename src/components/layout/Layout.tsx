import React from 'react';
import type { ReactNode } from 'react';
import { Box } from '@mui/material';
import Header from '../ui/Header';
import Footer from '../ui/Footer/Footer';
import TirusBG from '/assets/TirusBG.svg'

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
        <Box sx={{
        backgroundImage: `url(${TirusBG})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%',
        zIndex: 1
      }}>
      <Header />
      <Box
        component="main"
        sx={{
          marginTop: '88px',
          flexGrow: 1,
        }}
      >
        {children}
      </Box>
      <Footer/>
    </Box></Box>
  );
};

export default Layout;