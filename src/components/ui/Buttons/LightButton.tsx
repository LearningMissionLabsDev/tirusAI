import { Box, Button } from '@mui/material';
import type { ButtonProps } from '@mui/material/Button';
import type { ReactNode } from 'react';

interface LightGradientBorderButtonProps extends ButtonProps {
  children: ReactNode;
  sx?: object;
}

const LightGradientBorderButton: React.FC<LightGradientBorderButtonProps> = ({
  children,
  onClick,
  sx = {},
  ...props
}) => {
  return (
    <Box
      sx={{
        display: 'inline-block',
        borderRadius: '999px',
        p: '1px',
        background: 'linear-gradient(90deg, #ffffff, #dddddd)',
      }}
    >
      <Button
        onClick={onClick}
        variant="contained"
        sx={{
          borderRadius: '999px',
          textTransform: 'none',
          px: 3,
          backgroundColor: '#fff',
          color: '#000',
          fontSize: 16,
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: '#f0f0f0',
          },
          ...sx,
        }}
        {...props}
      >
        {children}
      </Button>
    </Box>
  );
};

export default LightGradientBorderButton;