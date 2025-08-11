import { Box, Typography, useTheme } from "@mui/material";

interface StepItemCardProps {
  leftImg?: string;
  rightImg?: string;
  text?: string;
  alt?: string;
}

const StepItem: React.FC<StepItemCardProps> = ({
  text, leftImg, rightImg, alt
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        placeItems: "center",
        mt: 5
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
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
            p: { xs: 1.5, sm: 3 },
            zIndex: 2,
            background: "rgb(10 15 28 / 80%)",
            border: "1px solid rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(20px)",
          }}
        >
          <Typography
            sx={{
              ...theme.typography.body1,
              fontWeight: 400,
              fontFamily: `"Poppins", sans-serif`,
              color: "#FFFFFFE6",
            }}
          >
            {text}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default StepItem;