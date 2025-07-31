import React from 'react';
import type { ReactNode } from 'react';
import { Box } from '@mui/material';
import Header from '../ui/Header';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box sx={{ backgroundColor: '#0A0F1C', minHeight: '100vh' }}>
      <Header />
      <main style={{ padding: '1rem', marginTop: '64px' }}>
        {children}
      </main>
    </Box>
  );
};

export default Layout;