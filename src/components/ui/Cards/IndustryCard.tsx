import { Box, Typography, useTheme } from '@mui/material';

interface CardProps {
  titleLine1: string;
  titleLine2: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ titleLine1, titleLine2, image }) => {
  const theme = useTheme();

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ position: 'relative', width: '384px', height: '273px' }}>
        <Box
          sx={{
            position: 'absolute',
            width: '336px',
            height: '263px',
            background: 'linear-gradient(90deg, #2AD5CD, #7A02B9)',
            borderRadius: '20px',
            top: 10,
            left: 24,
            zIndex: 1,
            filter: 'blur(2px)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            width: '384px',
            height: '263px',
            borderRadius: '20px',
            padding: '2px',
            background: 'linear-gradient(90deg, #2ad5cd33, #7a02b933)',
            zIndex: 2,
            boxSizing: 'border-box',
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '100%',
              backgroundColor: '#000',
              borderRadius: '18px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Typography
              color="white"
              fontFamily="Poppins, sans-serif"
              sx={{
                position: 'absolute',
                top: 24,
                left: 24,
                mb: 24,
                textAlign: 'left',
                lineHeight: 1.3,
                zIndex: 2,
                fontSize: theme.typography.h5.fontSize,
              }}
            >
              {titleLine1}
              <br />
              {titleLine2}
            </Typography>

            <Box
              sx={{
                position: 'absolute',
                top: 116,
                right: 16,
                width: '166px',
                height: '166px',
                zIndex: 2,
                transition: 'transform 0.4s ease',
                transformOrigin: 'center',
                '&:hover': {
                  transform: 'rotate(-25deg)',
                },
              }}
            >
              <Box
                component="img"
                src={image}
                alt={`${titleLine1} ${titleLine2}`}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;