// src/components/steps/Steps.tsx
import React from "react";
import { Box, Container, Typography } from "@mui/material";
import stepsData from "../../data/stepsData.json";
import StepItem from "../../components/ui/Items/StepItem";

const Steps: React.FC = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="md">
        <Typography
          variant="h4"
          sx={{ textAlign: "center", color: "#fff", mb: 4, fontFamily: "Poppins, sans-serif" }}
        >
          {stepsData.sectionTitle}
        </Typography>

        <Box
          sx={{
            display: "grid",
            gap: { xs: 4, md: 6 },
            justifyItems: "center",
          }}
        >
          {stepsData.items.map((s, i) => (
            <StepItem
              key={i}
              leftImg={s.leftImg}
              rightImg={s.rightImg}
              text={s.text}
              alt={s.alt}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Steps;