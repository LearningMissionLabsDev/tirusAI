import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import TirusEducation from "/assets/TirusEducation.png";

const IndustryCard: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <Box
        sx={{
          width: { sm: 384, md: 384, lg: 400, xl: 430,   },
          borderRadius: '10px',
          backgroundColor: '#ffffff14',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          px: '2px',
          py: '2px',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: 5,
            backgroundImage: 'linear-gradient(90deg, transparent 0%, #5c33bc 50%, transparent 100%)',
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            zIndex: 1,
          }}
        />

        <Box
          sx={{
            width: 'calc(100% - 6px)',
            minHeight: 128,
            maxHeight: '100%',
            borderRadius: '10px',
            backgroundColor: '#0a0f1c',
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
            px: '32px',
            py: '24px',
            boxShadow: 'inset 0 0 15px rgba(255, 255, 255, 0.06)',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box
              component="img"
              src={TirusEducation}
              alt="Tirus in Education"
              sx={{ width: 24, height: 24 }}
            />
            <Typography
              sx={{
                ...theme.typography.subtitle1,
                fontWeight: 600,
                color: 'white',
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              Tirus in Education
            </Typography>
          </Box>

          <Typography
            sx={{
              mt: 3,
              ...theme.typography.body2,
              color: 'rgba(255,255,255,0.8)',
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            Create a customizable educational platform tailored to your specific needs.
          </Typography>
        </Box>
      </Box></Box>
  );
};

export default IndustryCard;