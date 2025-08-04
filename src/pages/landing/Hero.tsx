import React from "react";
import { Box, Typography, Button } from "@mui/material";
import PurpleGradient from "/assets/HeroGradient.png"; // Make sure the path is correct

const Hero: React.FC = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", textAlign: "center", px: 2 }}>
      <Typography variant="h3" sx={{ fontFamily: "Poppins, sans-serif", color: "#fff", fontWeight: 600, mb: 2 }}>
        Meet Your New Team Member-AI
      </Typography>
      <Typography sx={{ fontFamily: "Poppins, sans-serif", color: "#fff", mb: 4 }}>
        That Drives Your Success
        <br />
        Powered by agentic AI, our chatbot goes beyond replies; it understands, adapts, and solves.
      </Typography>

      {/* Gradient layer + button */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          aspectRatio: "1538/279",
          maxWidth: 1600,
        }}
      >
        {/* Blurred gradient behind */}
        <Box
          component="img"
          src={PurpleGradient}
          alt=""
          aria-hidden
          sx={{
            position: "absolute",
            inset: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
            height: "100%",
            objectFit: "contain",
            filter: "blur(300px)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* Button on top */}
        <Box sx={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#4A90E2",
              color: "#fff",
              px: 3,
              py: 1.25,
              borderRadius: "30px",
              textTransform: "none",
              "&:hover": { backgroundColor: "#3a7cd1" },
            }}
          >
            Get Started
          </Button>
        </Box>
      </Box>

      {/* Custom divider after gradient image */}
      <Box
        sx={{
          width: "100%",
          height: "60px", // You can adjust this height to match the curve's effect
          backgroundImage: `url(/assets/YourImageForTheCurve.png)`, // Path to your curve image
          backgroundSize: "cover",
          backgroundPosition: "center",
          mt: 0,
        }}
      >
        {/* Optionally, you can also use a divider here */}
      </Box>
    </Box>
  );
};

export default Hero;