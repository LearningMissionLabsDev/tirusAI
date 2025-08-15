import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          width: { xs: '250px', sm: '280px' },
          height: { xs: '215px', sm: '225px' },
          fontWeight: 600,
          backdropFilter: 'blur(30px)',
          backgroundColor: '#0A0F1C',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '10px',
          cursor: 'pointer',
          position: 'relative',
          transition: '400ms',
          textAlign: 'center',
          '&:hover': {
            transform: 'scale(1.02)', // Add hover effect
          },
        }}
      >
        <Box
          component="img"
          src={icon}
          alt={title}
          sx={{ my: 4, mx: "auto", width: 40, height: 40 }}
        />
        <Typography
          sx={{
            ...theme.typography.body1,
            lineHeight: 1.5,
            fontWeight: 500,
            fontFamily: "Poppins, sans-serif",
            color: "#FFFFFFE6",
            pb: "10px",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            ...theme.typography.body1,
            fontFamily: "Poppins, sans-serif",
            fontWeight: 400,
            color: '#FFFFFFB3',
            lineHeight: 1.5,
            whiteSpace: 'pre-line'
          }}
        >
          {description}
        </Typography>
        <Box
          sx={{
            content: '""',
            backgroundColor: '#ffffff13',
            position: 'absolute',
            bottom: '0',
            left: '25%',
            transform: 'translateY(-120%)',
            filter: 'blur(20px)',
            borderRadius: '50%',
            width: '7rem',
            height: '1em',
          }}
        />
      </Box>
    </Box>
  );
};

export default FeatureCard;