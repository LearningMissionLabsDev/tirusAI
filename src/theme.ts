import { createTheme } from '@mui/material/styles';

type ResponsiveSizes = {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
};

const typographyResponsive = (sizes: ResponsiveSizes) => ({
    fontSize: sizes.xs,
    '@media (min-width:600px)': { fontSize: sizes.sm },
    '@media (min-width:900px)': { fontSize: sizes.md },
    '@media (min-width:1200px)': { fontSize: sizes.lg },
    '@media (min-width:1536px)': { fontSize: sizes.xl },
});

declare module '@mui/material/styles' {
    interface TypographyVariants {
        mobileMenu: React.CSSProperties;
    }

    interface TypographyVariantsOptions {
        mobileMenu?: React.CSSProperties;
    }

    interface TypographyPropsVariantOverrides {
        mobileMenu: true;
    }
}

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
    typography: {
        h1: typographyResponsive({
            xs: '32px',
            sm: '36px',
            md: '42px',
            lg: '48px',
            xl: '56px',
        }),
        h2: typographyResponsive({
            xs: '24px',
            sm: '30px',
            md: '35px',
            lg: '40px',
            xl: '48px',
        }),
        h3: typographyResponsive({
            xs: '24px',
            sm: '28px',
            md: '32px',
            lg: '36px',
            xl: '40px',
        }),
        h4: typographyResponsive({
            xs: '20px',
            sm: '24px',
            md: '28px',
            lg: '32px',
            xl: '36px',
        }),
        h5: typographyResponsive({
            xs: '20px',
            sm: '22.8px',
            md: '25.4px',
            lg: '28px',
            xl: '31px',
        }),
        subtitle1: typographyResponsive({
            xs: '16px',
            sm: '18px',
            md: '20px',
            lg: '20px',
            xl: '24px',
        }),
        body1: typographyResponsive({
            xs: '14px',
            sm: '15.4px',
            md: '16.7px',
            lg: '18px',
            xl: '20px',
        }),
        body2: typographyResponsive({
            xs: '14px',
            sm: '14.5px',
            md: '15px',
            lg: '16px',
            xl: '18px',
        }),
        mobileMenu: {
            fontSize: '16px',
        },
    },
});

export default theme;