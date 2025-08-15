import Industry from './Industry';
import Features from './Features';
import Steps from './Steps';
import { Box } from '@mui/material';
import ContactUsGradient from '/assets/ContactUsGradient.svg'
import StepGradient from '/assets/StepGradient.svg'
import HeroGradient from '/assets/HeroGradient.svg'
import Hero from './Hero';
import SmartSection from './SmartSection';
import ContactUs from './ContactUs';

const Index: React.FC = () => {
  return (
    <>
      <Box sx={{ position: 'relative', mt: 0 }}>
        <Box
          component="img"
          src={HeroGradient}
          alt=""
          aria-hidden
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            height: { xs: '150%', sm: '150%', md: '150%', lg: '153%', xl: '153%' },
            width: "100%",
            objectFit: "cover",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ position: 'relative', zIndex: 1, }}>
            <Hero />
          </Box>
        </Box>
      </Box>
      <Industry />
      <Features />
      <Box sx={{ position: 'relative' }}>
        <Box
          component="img"
          src={StepGradient}
          alt="Contact section background gradient"
          sx={{
            position: 'absolute',
            top: '91%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            height: 'auto',
            zIndex: 0,
            filter: 'blur(100px)',
            pointerEvents: 'none',
          }}
        />
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <Steps />
          </Box>
        </Box>
      </Box>
      <SmartSection />
      <Box sx={{ position: 'relative' }}>
        <Box
          component="img"
          src={ContactUsGradient}
          alt="Contact section background gradient"
          sx={{
            position: 'absolute',
            top: '67%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundSize: '100% 100% 100% 100%',
            width: '100%',
            height: 'auto',
            zIndex: 0,
            filter: 'blur(122px)',
            pointerEvents: 'none',
          }}
        />
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <ContactUs />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Index;