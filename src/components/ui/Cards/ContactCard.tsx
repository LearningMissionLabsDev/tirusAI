import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

interface ContactCardProps {
  icon: string;
  title: string;
  description: string;
  link?: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ icon, title, description, link }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: {
          xs: "100%",
        },
        height: "198px",
        maxHeight: 196,
        border: "2px solid transparent",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
        transition: "all 0.3s ease",
        "&:hover": {
          borderColor: "rgba(255, 255, 255, 0.01)",
          transform: "translateY(-4px)",
        },
        backgroundImage: `
  linear-gradient(#0A0F1C, #0A0F1C),
  linear-gradient(
    to right,
    #303F6E 25%,
    #282E3A 80%
  )
    `,
        backgroundOrigin: "border-box",
        backgroundClip: "padding-box, border-box, border-box",
        WebkitBackgroundClip: "padding-box, border-box, border-box",
        WebkitBoxDecorationBreak: "clone",
      }}
    >
      <Box
        component="img"
        src={icon}
        alt={title}
        sx={{
          width: 33,
          height: 33,
        }}
        pb={2}
      />
      <Typography
        sx={{
          ...theme.typography.body1,
          fontFamily: "Poppins, sans-serif",
          fontWeight: 500,
          color: "#FFFFFFE6",
        }}
      >
        {title}
      </Typography>
      {link ? (
        <Typography
          component="a"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            ...theme.typography.body1,
            fontFamily: "Poppins, sans-serif",
            fontWeight: 400,
            color: "#FFFFFFB3",
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          {description}
        </Typography>
      ) : (
        <Typography
          sx={{
            ...theme.typography.body1,
            fontWeight: 400,
            fontFamily: "Poppins, sans-serif",
            color: "#FFFFFFB3",
          }}
        >
          {description}
        </Typography>
      )}
    </Box>
  );
};

export default ContactCard;