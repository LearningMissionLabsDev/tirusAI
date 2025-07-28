import { Box, Typography, Paper } from '@mui/material';
import FutureCardGradient from '/assets/FutureCardGradient.png';

const FeatureCard = ({ icon, title, subtitle }) => (
  <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', width: 'full' }}>
    <Paper
      sx={{
        width: '234px',
        height: '163px',
        backgroundColor: '#000000b3',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        borderRadius: '20px',
        textAlign: 'center',
        color: 'white',
        py: 4,
        px: 3,
        zIndex: 1,
        position: 'relative',
        backgroundImage: `url(${FutureCardGradient})`,
      }}
    >
      <Box mb={4} sx={{
      }}>{icon}</Box>
      <Typography
        fontFamily="Poppins, sans-serif"
        fontSize="18px"
        mb="10px"
      >
        {title}
      </Typography>
      <Typography
        fontFamily="Poppins, sans-serif"
        fontSize="16px"
        color="#ccc"
        sx={{ whiteSpace: 'pre-line' }}
      >
        {subtitle}
      </Typography>
    </Paper>
  </Box>
);

export default FeatureCard;