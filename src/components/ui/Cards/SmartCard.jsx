import { Box, Typography, Paper, Button } from '@mui/material';

const SmartCard = ({
  title,
  description,
  buttonText,
  image,
  bderColor,
  btnTextColor,
  bgColor,
  marginRight,
  inverted = false,
}) => {
  return (
    <Paper
      elevation={3}
      sx={{
        px:6,
        py:8,
        width:'100%',
        maxWidth:'1100px',
        minHeight: '180px',
        borderRadius: '20px',
        border: inverted ? `2px solid ${bderColor}` : 'none',
        display: 'flex',
        flexDirection: 'column',
        ...(typeof bgColor === 'string' && bgColor.endsWith('.png')
          ? {
            backgroundImage: `url(${bgColor})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }
          : {
            background: bgColor,
          }),

      }}
    >
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 2,
        }}
      >
        <Box sx={{ flex: 1, maxWidth:'670px' }}>
          <Typography
            fontSize={{sm: '20px', md: '24px', lg: '36px'}}
            sx={{
              fontWeight: 600,
              mb: 3,
              fontFamily: '"Roboto Condensed", sans-serif',
              letterSpacing: '0.5px',
              color: btnTextColor,
              lineHeight: 1.5,
            }}
          >
            {title.split('\n').map((line, idx) => (
              <span key={idx}>
                {line}
                <br />
              </span>
            ))}
          </Typography>

          <Typography fontSize='18px' sx={{
            fontWeight: 400,
            mb: 2,
            lineHeight: 1.5,
            fontFamily: '"Roboto Condensed", sans-serif',
            letterSpacing: '0.5px',
            color: btnTextColor,
            maxWidth: '700px'
          }}>
            {description}
          </Typography>
          <Button
            variant="outlined"
            sx={{
              py: '12px',
              px: '24px',
              fontSize:"16px",
              fontFamily: '"Arial", sans-serif',
              borderRadius: '100px',
              borderColor: bderColor,
              color: btnTextColor,
              '&:hover': {
                backgroundColor: inverted
                  ? 'rgba(255,255,255,0.1)'
                  : 'rgba(0,0,0,0.04)',
              },
            }}
          >
            {buttonText}
          </Button>
        </Box>
         <Box
          component="img"
          src={image}
          alt={title}
          sx={{
            maxWidth: '288px',
            maxHeight: '250px',
            objectFit: 'contain',
            marginRight: marginRight,
          }}
        />
      </Box>
    </Paper>
  );
};

export default SmartCard;