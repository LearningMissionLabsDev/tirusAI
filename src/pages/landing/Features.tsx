import React from 'react';
import { Box, Container, Typography, useTheme } from '@mui/material';
import featureData from '../../data/featuresData.json';
import FeatureCard from '../../components/ui/Cards/FeatureCard';

const Features: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        py: { xs: 4, md: 20 },
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: {xs: 600, sm: 600, md: 650, lg: 1200, xl: 1200},
          px: { xs: 2, sm: 3, lg: 0 },
        }}
      >
        <Typography
          sx={{
            ...theme.typography.h3,
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
            color: '#FFFFFFE6',
            textAlign: 'center',
            mb: 6,
          }}
        >
          {featureData.sectionTitle}
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(4, 1fr)', // 4 across at >=1200px
            },
            gap: '24px', // exact 24px between cards
            justifyItems: 'center',
          }}
        >
          {featureData.items.map((item, i) => (
            <FeatureCard
              key={i}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Features;