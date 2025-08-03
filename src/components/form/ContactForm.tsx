import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

interface ContactFormCardProps {
  title: string;
  description: string;
}

const ContactForm: React.FC<ContactFormCardProps> = ({ title, description }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { name, email, message });
  };

  return (
    <Box
      sx={{
        backgroundColor: "#1E1E1E",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "350px",
        textAlign: "center",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 600, color: "#fff", marginBottom: "12px" }}>
        {title}
      </Typography>
      <Typography sx={{ color: "#fff", marginBottom: "24px" }}>{description}</Typography>

      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <TextField
          label="Your Name"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: "12px", input: { color: "white" } }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Email Address"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: "12px", input: { color: "white" } }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          sx={{ marginBottom: "12px", input: { color: "white" } }}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button type="submit" variant="contained" sx={{ width: "100%" }}>
          Send
        </Button>
      </form>
    </Box>
  );
};

export default ContactForm;