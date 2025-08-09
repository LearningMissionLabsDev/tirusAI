import React from 'react';
import { Button, useTheme } from '@mui/material';

interface CustomButtonProps {
  onClick: () => void;
  label: string;
  type?: 'button' | 'submit' | 'reset';
}

const ContactButton: React.FC<CustomButtonProps> = ({ onClick, label, type = 'button' }) => {
  const theme = useTheme();

  return (
    <Button
      onClick={onClick}
      fullWidth
      variant="outlined"
      type={type}
      sx={{
        ...theme.typography.body2,
        height: 54,
        minWidth: 50,
        minHeight: 28,
        px: 3,
        py: 1,
        borderRadius: '20px',
        borderWidth: 1,
        borderColor: '#242A3D',
        color: '#FFFFFFE6',
        backgroundColor: 'transparent',
        fontFamily: "Poppins, sans-serif",
        textTransform: 'none',
        fontWeight: 400,
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          borderColor: 'rgba(255, 255, 255, 0.6)',
        },
      }}
    >
      {label}
    </Button>
  );
};

export default ContactButton;