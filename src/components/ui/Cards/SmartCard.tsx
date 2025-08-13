import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

interface SmartCardProps {
  title: string;
  description: string;
  image: string;
}

const SmartCard: React.FC<SmartCardProps> = ({
  title,
  description,
  image, }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          maxWidth: 1062,
          height: { xs: 'auto', sm: 'auto', md: 215 },
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 3,
          p: { xs: 3, sm: 3, md: 4, lg: 8, xl: 8 },
          mx: 3,
          borderRadius: '20px',
          border: '5px solid transparent',
          backgroundColor: "transparent",
          "& > .content": { position: "relative", zIndex: 1 },
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            borderRadius: "inherit",
            padding: "5px",
            background: "linear-gradient(135deg, #543d9eff 0%, #282E3A 8%, #282E3A 92%, #543d9eff 100% )",
            pointerEvents: "none",
            WebkitMask:
              "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          },
        }}
      >
        {/* Left: Text */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Typography
            sx={{
              ...theme.typography.h3,
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              lineHeight: 1.4,
              color: '#FFFFFF',
              mb: 3,
              whiteSpace: 'pre-line'
            }}
          >
            {title}
          </Typography>
          <Box sx={{
            width: '100%',
          }}>
            <Typography
              sx={{
                ...theme.typography.body1,
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 400,
                lineHeight: 1.6,
                color: '#FFFFFF',
                minWidth: { xs: 230, sm: 300, md: 500, lg: 610, xl: 610 },
                maxWidth: 610,
              }}
            >
              {description}
            </Typography>
          </Box>
        </Box>

        {/* Right: Image */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: { xs: 'center', sm: 'center', md: 'flex-end' },
            alignItems: { xs: 'center', sm: 'center', md: 'flex-end' },
            mr: { xs: 0, sm: 0, md: 6 }
          }}
        >
          <Box
            component="img"
            src={image}
            alt={title}
            sx={{
              width: { xs: 260, sm: 260, md: 260, lg: 281, xl: 281 },
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SmartCard;