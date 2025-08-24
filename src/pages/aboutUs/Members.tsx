import React from "react";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import membersData from "../../data/membersData.json";

type Member = {
    name: string;
    role: string;
    image: string;
};

const Members: React.FC = () => {
    const theme = useTheme();

    return (
        <Box component="section" sx={{ width: "100%", mt: { xs: '110px', sm: '100px', md: '100px', lg: '150px', xl: '130px', xxl: '220px' }, pb: 1 }}>
            <Typography
                sx={{
                    ...theme.typography.h3,
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 600,
                    color: '#FFFFFFE6',
                    textAlign: 'center',
                    mb: { xs: 2.5, sm: 2.5, md: 6 },
                    lineHeight: "40px"
                }}
            >
                {membersData.sectionTitle}
            </Typography>
            <Grid container spacing={{ xs: 3, sm: 3, md: 3, lg: 3, xl: 3, xxl: 5 }} px={{ xs: 2, sm: 2, md: 3, lg: 12, xl: 30, xxl: 50 }} rowSpacing={{ xs: 3, sm: 3, md: 3, lg: 3, xl: 4 }} justifyContent="center">
                {(membersData.items as Member[]).map((m) => (
                    <Grid item key={`${m.name}-${m.role}`}
                        xs={12}
                        sm={6}
                        md={3}
                        lg={3}
                        xl={3}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <Box
                                component="img"
                                src={m.image}
                                alt={`${m.name} — ${m.role}`}
                                sx={{
                                    width: 282,
                                    height: 300,
                                    objectFit: "cover",
                                    display: "block",
                                    pb: 2
                                }}
                            />
                            <Typography
                                sx={{
                                    ...theme.typography.body1,
                                    color: "#FFFFFFE6",
                                    fontWeight: 500,
                                    fontFamily: "Poppins, sans-serif",
                                    textAlign: "center",
                                }}
                            >
                                {m.name}
                            </Typography>

                            <Typography
                                sx={{
                                    ...theme.typography.body1,
                                    color: "#FFFFFFB3",
                                    fontWeight: 400,
                                    fontFamily: "Poppins, sans-serif",
                                    textAlign: "center",
                                    lineHeight: 1.9
                                }}
                            >
                                {m.role}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Members;