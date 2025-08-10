import React from 'react';
import { Box } from '@mui/material';
import industryData from '../../data/industryData.json';
import IndustryCard from '../../components/ui/Cards/IndustryCard';

const Industry: React.FC = () => {
  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        py: { xs: 4, md: 6 },
      }}
    >
      {/* Constrain the grid so it stays centered and responsive on big screens */}
      <Box
        sx={{
          width: '100%',
          maxWidth: {md: '1000px', lg: '1250px', xl: '1400px'},       // << keep the content width under control
          mx: 'auto',
          px: { xs: 2, md: 0 },

          display: 'grid',
          // Columns scale by breakpoint. Each column is 1fr so the wrappers can center a fixed-width card.
          gridTemplateColumns: {
            xs: '1fr',
            sm: '1fr',
            md: 'repeat(3, minmax(0, 1fr))',
          },
          columnGap: { xs: 3, md: 0 },
          rowGap: { xs: 3, md: 0 },

          alignItems: 'center', // center side cards vertically relative to the tallest column
        }}
      >
        {industryData.map((item, idx) => (
          // Wrapper centers the fixed-width card inside the flexible column
          <Box
            key={idx}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignSelf: { md: idx === 1 ? 'start' : 'center' },
            }}
          >
            <IndustryCard
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Industry;
