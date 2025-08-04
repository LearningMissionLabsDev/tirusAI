import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

interface ContactFormCardProps {
    title: string;
}

const ContactForm: React.FC<ContactFormCardProps> = ({ title }) => {
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
                backgroundColor: "transparent",  // Make background transparent
                padding: "30px",  // Adjust padding for better form spacing
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "12px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                maxWidth: "800px",
                maxHeight: "424px",
                textAlign: "center",
                mx: 0,
                marginTop: "30px",  // Space from the previous section
            }}
        >
            <Typography variant="h6" sx={{ fontWeight: 600, color: "#fff", marginBottom: "12px" }}>
                {title}
            </Typography>

            <form onSubmit={handleSubmit} style={{ width: "100%" }}>
                <TextField
                    label="Your Name"
                    variant="outlined"
                    fullWidth
                    sx={{
                        marginBottom: "12px",
                        input: { color: "white" },
                        "& .MuiInputLabel-root": { color: "white" },  // Make label text white
                        "& .MuiOutlinedInput-root": { border: "1px solid rgba(255, 255, 255, 0.2)", borderRadius: "20px" },
                        "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#4A90E2" }, // Change on hover
                    }}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    label="Email Address"
                    variant="outlined"
                    fullWidth
                    sx={{
                        marginBottom: "12px",
                        input: { color: "white" },
                        "& .MuiInputLabel-root": { color: "white" },  // Make label text white
                        "& .MuiOutlinedInput-root": { border: "1px solid rgba(255, 255, 255, 0.2)", borderRadius: "20px" },
                        "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#4A90E2" }, // Change on hover
                    }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    label="Message"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={1}
                    sx={{
                        marginBottom: "32px",
                        input: { color: "white" },
                        "& .MuiInputLabel-root": { color: "white" },  // Make label text white
                        "& .MuiOutlinedInput-root": { border: "1px solid rgba(255, 255, 255, 0.2)", borderRadius: "20px" },
                        "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#4A90E2" }, // Change on hover
                    }}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <Button
                    type="submit"
                    variant="contained"
                    sx={{
                        width: "100%",
                        backgroundColor: "#4A90E2",  // Button color
                        "&:hover": { backgroundColor: "#3a7cd1" },
                        padding: "12px 0", // Adjust padding
                    }}
                >
                    Send
                </Button>
            </form>
        </Box>
    );
};

export default ContactForm;