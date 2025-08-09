import React from "react";
import { Box, Typography } from "@mui/material";

interface StepItemCardProps {
  leftImg?: string;
  rightImg?: string;
  text?: string;
  alt?: string;
}

const StepItem: React.FC<StepItemCardProps> = ({
  text, leftImg, rightImg, alt
}) => {
  return (
    <Box
      component="main"
      sx={{
        m: 0,
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        color: "#fff",
        fontFamily: `"Poppins", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`,
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "40px",
          justifyContent: "center",
          alignItems: "center",
          p: 3,
          position: "relative",
        }}
      >
        {/* Numbers */}
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translate(-50%, -65%)",
            zIndex: 1,
            display: "flex",
            gap: "16px",
            pointerEvents: "none",
          }}
        >
          <Box component="img" src={leftImg} alt={alt} />
          <Box component="img" src={rightImg} alt={alt} />
        </Box>

        {/* Glass Card */}
        <Box
          sx={{
            position: "relative",
            width: 257,
            minHeight: 81,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            flexDirection: "column",
            lineHeight: 1.5,
            borderRadius: "20px",
            p: 3,
            zIndex: 2,
            background: "rgb(10 15 28 / 80%)",
            border: "1px solid rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(20px)",
          }}
        >
          <Typography
            sx={{
              fontSize: 18,
              fontWeight: 400,
              fontFamily: `"Poppins", sans-serif`,
            }}
          >
            {text}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default StepItem;