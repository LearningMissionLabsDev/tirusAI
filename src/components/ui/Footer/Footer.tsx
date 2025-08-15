import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import footerData from '../../../data/footerData.json';
import headerData from "../../../data/headerData.json";
import TirusLogo from "/assets/TirusLogo.png";

interface NavLink {
    title: string;
    href: string;
}

interface SocialLink {
    label: string;
    href: string;
    icon: string;
}

interface FooterData {
    navLinks: NavLink[];
    socialLinks: SocialLink[];
    copyright: string;
}

const Footer = () => {
    // Using the footerData which is assumed to be typed from JSON
    const { navLinks, socialLinks, copyright }: FooterData = footerData;
    const theme = useTheme();
    return (
        <Box
            sx={{
                width: 'full',
                color: '#fff',
                px: { xs: 2, sm: 4, md: 6, lg: '120px' },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                mt: 20
            }}
        >
            <Container maxWidth="xl" sx={{ py: '20px', mt: '40px' }}>
                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    justifyContent="space-between"
                    alignItems={{ xs: 'center', md: 'center' }}
                    spacing={{ xs: 4, md: 0 }}
                    mb="50px"
                >
                    <Stack
                        direction={{ xs: 'column', md: 'row' }}
                        spacing={{ xs: 2, md: 6 }}
                        alignItems="center"
                    >
                        <Box
                            component="img"
                            src={TirusLogo}
                            alt={headerData.logoText}
                            sx={{
                                height: 32,
                                width: 125,
                                cursor: "pointer",
                            }}
                            onClick={() => console.log("Logo clicked")}
                        />
                    </Stack>

                    <Stack
                        direction={'row'}
                        spacing={{ sm: 3, xs: 3, md: 4, lg: 5, xl: 6 }}
                        alignItems="center"
                        justifyContent="center"
                        textAlign="center"
                    >
                        {navLinks.map((link) => (
                            <Typography
                                key={link.title}
                                component="a"
                                href={link.href}
                                sx={{
                                    ...theme.typography.body2,
                                    fontFamily: 'Poppins, sans-serif',
                                    fontWeight: 400,
                                    color: 'white',
                                    textDecoration: 'none',
                                    "&:hover": {
                                        textDecoration: 'underline',
                                    },
                                }}
                                alignItems="center"
                                justifyContent="center"
                                textAlign="center"
                            >
                                {link.title}
                            </Typography>
                        ))}
                    </Stack>

                    <Stack
                        direction="row"
                        spacing={3}
                        justifyContent="center"
                        alignItems="center"
                    >
                        {socialLinks.map((social) => (
                            <Box
                                key={social.label}
                                component="a"
                                href={social.href}
                                aria-label={social.label}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Box
                                    component="img"
                                    src={social.icon}
                                    alt={social.label}
                                    sx={{ width: 24, height: 24, cursor: 'pointer' }}
                                />
                            </Box>
                        ))}
                    </Stack>
                </Stack>
            </Container>
            <Box
                sx={{
                    width: '100%',
                    mb: '48px',
                    display: 'flex',
                    justifyContent: 'center',
                    py: '3px',
                }}
            >
                <Typography
                    sx={{
                        ...theme.typography.body2,
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 400,
                        textAlign: 'center',
                    }}
                >
                    {copyright}
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;