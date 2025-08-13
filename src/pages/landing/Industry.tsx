import React from 'react';
import { Box, Grid } from '@mui/material';
import industryData from '../../data/industryData.json';
import IndustryCard from '../../components/ui/Cards/IndustryCard';

const Industry: React.FC = () => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        mt: '160px'
      }}
    >
      <Box
        sx={{
          width: '100%',
        }}
      >
        <Grid
          container
          spacing={{ xs: 3, md: 3, lg: 3, xl: 3 }}
          justifyContent="center"
          alignItems="center"
          columns={{ xs: 1, sm: 1, md: 3 }}
          p={2}
        >
          {industryData.map((item, idx) => (
             <Grid
              key={idx}
              item
              xs={12}    
              sm={12}
              md={4}           
              lg={4}
              xl={4}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignSelf: { md: idx === 1 ? 'flex-start' : 'center' },
              }}
            >
              <IndustryCard
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Industry;