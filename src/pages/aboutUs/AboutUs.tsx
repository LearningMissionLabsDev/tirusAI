import { Box, useMediaQuery, useTheme } from '@mui/material';
import StepGradient from '/assets/StepGradient.svg'
import HeroGradient320 from '/assets/HeroGradient320.svg'
import HeroGradient900 from '/assets/HeroGradient900.svg'
import HeroGradient1920 from '/assets/HeroGradient1920.svg'
import StepGradient320 from '/assets/StepGradient320.svg'
import AboutHero from './AboutHero';
import Members from './Members';
import { useDocumentTitle } from "../../hooks";

function ResponsiveImage(props: any) {
  const { src, ...rest } = props;
  const theme = useTheme();

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
const AboutUs: React.FC = () => {
  useDocumentTitle("About");

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
            <AboutHero />
          </Box>
        </Box>
      </Box>
      <Box sx={{ position: 'relative', mt: 0, overflow: 'hidden' }}>
        <ResponsiveImage
          src={{ xs: StepGradient320, sm: StepGradient320, md: StepGradient, lg: StepGradient, xl: StepGradient, xxl: StepGradient }}
          alt=""
          sx={{
            position: 'absolute',
            top: { xs: '30%', sm: '45%', md: '35%', lg: '35%' },
            left: '50%',
            transform: { xs: 'translate(-50%, -50%)', sm: 'translate(-50%, -50%)', md: 'translate(-50%, -50%)' },
            width: '100%',
            height: 'auto',
            zIndex: 0,
            filter: { xs: 'blur(50px)', sm: 'blur(80px)', md: 'blur(82px)', lg: 'blur(92px)', xl: 'blur(92px)', xxl: 'blur(120px)' },
            pointerEvents: 'none',
          }}
        />
        <ResponsiveImage
          src={{ xs: StepGradient320, sm: StepGradient320, md: StepGradient, lg: StepGradient, xl: StepGradient, xxl: StepGradient }}
          alt=""
          sx={{
            position: 'absolute',
            top: { xs: '70%', sm: '80%', md: '75%', lg: '75%' },
            left: '50%',
            transform: { xs: 'translate(-50%, -50%)', sm: 'translate(-50%, -50%)', md: 'translate(-50%, -50%)' },
            width: '100%',
            height: 'auto',
            zIndex: 0,
            filter: { xs: 'blur(50px)', sm: 'blur(80px)', md: 'blur(82px)', lg: 'blur(92px)', xl: 'blur(92px)', xxl: 'blur(120px)' },
            pointerEvents: 'none',
          }}
        />
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <Members />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AboutUs;