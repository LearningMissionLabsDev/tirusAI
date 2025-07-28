import { Box, Button } from '@mui/material';
import { keyframes } from '@emotion/react';
import theme from '../../../theme';

// Define the rotation animation
const rotate = keyframes`
  from {
    transform: translate(-50%) rotate(0deg);
  }
  to {
    transform: translate(-50%) rotate(360deg);
  }
`;

const GradientBorderButton = ({ children, onClick, sx = {}, ...props }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'inline-block',
        borderRadius: '999px',
        p: '1px',
        overflow: 'hidden',

        // Add shimmer effect with rotating highlight
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '40px',
          height: '300px',
          background: `linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            #b9b9b9bf 50%,
            rgba(255, 255, 255, 0) 100%
          )`,
          transform: 'translate(-50%, -50%) rotate(0deg)',
          transformOrigin: 'top center',
          animation: `${rotate} 2s linear infinite`,
          zIndex: 1,
          pointerEvents: 'none',
        },
      }}
    >
      <Button
        onClick={onClick}
        variant="contained"
        sx={{
          position: 'relative',
          zIndex: 2,
          borderRadius: '999px',
          textTransform: 'none',
          px: 3,
          py: 0.9,
          backgroundColor: '#000',
          color: 'white',
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: '#111',
          },
          ...theme.typography.body2,
          ...sx,
        }}
        {...props}
      >
        {children}
      </Button>
    </Box>
  );
};

export default GradientBorderButton;