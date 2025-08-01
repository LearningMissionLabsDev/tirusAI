import React from 'react';
import type { ReactNode } from 'react';
import { Box } from '@mui/material';
import Header from '../ui/Header';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        backgroundColor: '#0A0F1C',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Header />
      <Box
        component="main"
        sx={{
          padding: '1rem',
          marginTop: '88px',
          flexGrow: 1,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;