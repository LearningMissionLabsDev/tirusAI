import Industry from './Industry';
import Features from './Features';
import Steps from './Steps';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import ContactUsGradient from '/assets/ContactUsGradient.svg'
import StepGradient from '/assets/StepGradient.svg'
import HeroGradient320 from '/assets/HeroGradient320.svg'
import HeroGradient900 from '/assets/HeroGradient900.svg'
import HeroGradient1920 from '/assets/HeroGradient1920.svg'
import Hero from './Hero';
import SmartSection from './SmartSection';
import ContactUs from './ContactUs';

function ResponsiveImage(props: any) {
  const { src, ...rest } = props;
  const theme = useTheme();

  // Queries per breakpoint
  const xs = useMediaQuery(theme.breakpoints.only("xs"));
  const sm = useMediaQuery(theme.breakpoints.only("sm"));
  const md = useMediaQuery(theme.breakpoints.only("md"));
  const lg = useMediaQuery(theme.breakpoints.only("lg"));
  const xl = useMediaQuery(theme.breakpoints.only("xl"));
  const xxl = useMediaQuery("(min-width:1920px)");

  let selectedSrc = src?.xs;
  if (sm) selectedSrc = src?.sm ?? selectedSrc;
  if (md) selectedSrc = src?.md ?? selectedSrc;
  if (lg) selectedSrc = src?.lg ?? selectedSrc;
  if (xl) selectedSrc = src?.xl ?? selectedSrc;
  if (xxl) selectedSrc = src?.xxl ?? selectedSrc;

  return <Box component="img" src={selectedSrc} {...rest} />;
}
const Index: React.FC = () => {
  return (
    <>
      <Box sx={{ position: 'relative', mt: 0 }}>
        <ResponsiveImage
          src={{
            xs: HeroGradient320,
            sm: HeroGradient900,
            md: HeroGradient1920,
            lg: HeroGradient1920,
            xl: HeroGradient1920,
            xxl: HeroGradient1920,
          }}
          alt=""
          aria-hidden
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            height: { xs: "180%", sm: "180%", md: "188%", lg: "188%", xl: "185%", xxl: "185%" },
            width: "100%",
            objectFit: "cover",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ position: 'relative', zIndex: 1 }}>
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
            top: {xs: '60%', sm: '60%', md: '80%', lg: '91%'},
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            height: 'auto',
            zIndex: 0,
            filter: { xs: 'blur(40px)', sm: 'blur(59px)', md: 'blur(82px)', lg: 'blur(82px)', xl: 'blur(82px)', xxl: 'blur(120px)' },
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
            objectFit: "cover",
            width: '100%',
            height: 'auto',
            zIndex: 0,
            filter: { xs: 'blur(34px)', sm: 'blur(59px)', md: 'blur(82px)', lg: 'blur(82px)', xl: 'blur(82px)', xxl: 'blur(130px)' },
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