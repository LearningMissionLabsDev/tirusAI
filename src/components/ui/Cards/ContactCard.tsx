import React from "react";
import { Box, Typography } from "@mui/material";

interface ContactCardProps {
  logo: string;
  title: string;
  description: string;
  link?: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ logo, title, description, link }) => {
  return (
    <Box
      sx={{
        width: 250,
        height: 150,
        border: "1px solid rgba(255, 255, 255, 0.2)",
        borderRadius: "12px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
        background: "transparent",
        transition: "all 0.3s ease",
        "&:hover": {
          borderColor: "rgba(255, 255, 255, 0.4)",
          transform: "translateY(-4px)",
        },
      }}
    >
      <Box
        component="img"
        src={logo}
        alt={title}
        sx={{
          width: 30,
          height: 30,
          filter: "invert(1)",
        }}
      />
      <Typography
        sx={{
          fontFamily: "Poppins, sans-serif",
          fontSize: "14px",
          fontWeight: 500,
          color: "white",
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
            fontFamily: "Poppins, sans-serif",
            fontSize: "14px",
            color: "rgba(255,255,255,0.7)",
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          {description}
        </Typography>
      ) : (
        <Typography
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "14px",
            color: "rgba(255,255,255,0.7)",
          }}
        >
          {description}
        </Typography>
      )}
    </Box>
  );
};

export default ContactCard;