import React from 'react';
import { Box, Container, Typography, useTheme } from '@mui/material';
import smartSectionData from '../../data/smartFeaturesData.json'; // <-- your JSON file
import SmartCard from '../../components/ui/Cards/SmartCard';

const SmartSection: React.FC = () => {
  const theme = useTheme();

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
      <Container maxWidth={false} sx={{ maxWidth: 1330, px: { xs: 2, sm: 3 } }}>
        
        {/* Section Title */}
        <Typography
          sx={{
            ...theme.typography.h3,
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            color: "#FFFFFFE6",
            textAlign: "center",
            mb: 6,
          }}
        >
          {smartSectionData.sectionTitle}
        </Typography>

        {/* Smart Card */}
        <SmartCard
          title={smartSectionData.item1.title}
          description={smartSectionData.item1.description}
          image={smartSectionData.item1.image}
        />
      </Container>
    </Box>
  );
};

export default SmartSection;