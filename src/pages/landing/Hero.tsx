import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import heroData from '../../data/heroData.json';
import Button from "../../components/ui/Buttons/Button";

const Hero: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex", alignItems: "center", height: '100%', flexDirection: "column", textAlign: "center", px: 2 }}>
      <Typography sx={{ ...theme.typography.h3, fontFamily: "Poppins, sans-serif", color: "#FFFFFFE6", fontWeight: 600, mb: 2, pt: {xs: "10px", sm: "40px", md: "50px", lg: "100px", xl: "130px"} }}>
        {heroData.heading}
      </Typography>
      <Typography sx={{ ...theme.typography.h3, fontFamily: "Poppins, sans-serif", color: "#FFFFFFE6", fontWeight: 400, mb: 2 }}>
        {heroData.subheading}
      </Typography>

      <Typography sx={{ ...theme.typography.body1, fontFamily: "Poppins, sans-serif", color: "#FFFFFFE6", mb: 2, fontWeight: 400, whiteSpace: "pre-line" }}>
        {heroData.description}
      </Typography>

      {/* Button on top */}
      <Box sx={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center" }}>
        <Button onClick={() => console.log("Clicked!")} label={heroData.buttonLabel} />
      </Box>
    </Box>
  );
};

export default Hero;