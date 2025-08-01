import React from 'react';
import { Button as MuiButton } from '@mui/material';

interface CustomButtonProps {
  onClick?: () => void;
  label?: string;
}

const Button: React.FC<CustomButtonProps> = ({
  onClick = () => {},
  label = 'Contact Us',
}) => {
  return (
    <MuiButton
      onClick={onClick}
      variant="outlined"
      sx={{
        width: 137,
        height: 40,
        minWidth: 50,
        minHeight: 28,
        px: 3,
        py: 1,
        borderRadius: '100px',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.4)',
        color: 'white',
        backgroundColor: 'transparent',
        textTransform: 'none',
        fontSize: 16,
        fontWeight: 500,
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          borderColor: 'rgba(255, 255, 255, 0.6)',
        },
      }}
    >
      {label}
    </MuiButton>
  );
};

export default Button;
