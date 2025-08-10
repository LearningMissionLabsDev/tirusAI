import React from "react";
import { Box, Container, Typography, useTheme, Grid } from "@mui/material";
import stepsData from "../../data/stepsData.json";
import StepItem from "../../components/ui/Items/StepItem";

const Steps: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        py: { xs: 4, md: 4 },
      }}
    >
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box sx={{ mb: 6 }}>
          <Typography
            sx={{
              ...theme.typography.h3,
              textAlign: "center",
              color: "#FFFFFFE6",
              fontFamily: "Poppins, sans-serif",
              fontWeight: 600,
              display: "block",
              mb: 6,
            }}
          >
            {stepsData.sectionTitle}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Grid
            container
            spacing={{ xs: 10, sm: 10, md: 10, lg: 12, xl: 14 }}
            justifyContent="center"
            alignItems="center"
          >
            {stepsData.items.map((s, i) => (
              <Grid
                item
                key={i}
                xs={12}
                sm={12}
                md={6}
                lg={4}
                xl={4}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <StepItem
                  leftImg={s.leftImg}
                  rightImg={s.rightImg}
                  text={s.text}
                  alt={s.alt}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Steps;