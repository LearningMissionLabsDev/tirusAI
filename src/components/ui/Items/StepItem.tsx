import { Box, Typography } from '@mui/material';
import StepBack from '/assets/StepBack.png';

interface StepItemProps {
  number: string;
  text: string;
}

const StepItem: React.FC<StepItemProps> = ({ number, text }) => (
  <Box
    sx={{
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      maxWidth: '305px',
      margin: '0 auto',
    }}
  >
    <Box
      component="img"
      src={number}
      alt="Step Icon"
      sx={{
        width: '305px',
        height: '122px',
        zIndex: 1,
      }}
    />
    <Box
      sx={{
        backgroundImage: `url(${StepBack})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        borderRadius: '20px',
        width: '305px',
        height: '102px',
        mt: '-40px',
        zIndex: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography
        fontSize="18px"
        fontWeight={400}
        fontFamily="sans-serif"
        color="#ffffff"
        textAlign="center"
        letterSpacing="0.08em"
      >
        {text}
      </Typography>
    </Box>
  </Box>
);

export default StepItem;