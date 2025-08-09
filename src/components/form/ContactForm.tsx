import React, { useState } from "react";
import { Box, Typography, TextField, useTheme } from "@mui/material";
import ContactButton from "../ui/Buttons/ContactButton";
type Field = { label: string };

interface ContactFormCardProps {
    title: string;
    submitText: string;
    fields: Field[];
}

const ContactForm: React.FC<ContactFormCardProps> = ({ title, fields, submitText }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const theme = useTheme();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", { name, email, message });
    };

    return (
        <Box
            sx={{
                position: "relative",
                px: { xs: "30px", sm: "30px", md: "25px", lg: "32px", xl: "25px" },
                py: { xs: "64px", sm: "64px", md: "64px", lg: "64px", xl: "32px" },
                border: "2px solid transparent",
                borderRadius: "20px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                maxWidth: "724px",
                height: "100%",
                maxHeight: "424px",
                textAlign: "center",
                overflow: "hidden",
                backgroundImage: `
  linear-gradient(#0A0F1C, #0A0F1C),
  linear-gradient(
    to left,
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
            <Typography sx={{ ...theme.typography.body1, fontWeight: 400, fontFamily: "Poppins, sans-serif", color: "#FFFFFFE6", marginBottom: 4, whiteSpace: 'pre-line', }}>
                {title}
            </Typography>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ width: { xs: '100%', sm: '100%', md: '100%', lg: '666px', xl: '666px' } }}
            >
                <TextField
                label={fields[0]?.label}
                variant="outlined"
                fullWidth
                sx={{
                    marginBottom: "12px",
                    input: { color: "#FFFFFFE6" },
                    "& .MuiInputLabel-root": {
                        ...theme.typography.body2, color: "#FFFFFFB3", fontFamily: "Poppins, sans-serif", fontWeight: 400, lineHeight: 1.5, "&.Mui-focused": {
                            color: "#FFFFFFB3 !important",
                        }, padding: "0 10px",
                    },
                    "& .MuiOutlinedInput-root": {
                        borderRadius: "20px",
                        "& fieldset": {
                            borderColor: "#171C28",
                        },
                        "&:hover fieldset": {
                            borderColor: "#282E3A",
                        },
                        "&.Mui-focused fieldset": {
                            borderColor: "#282E3A",
                        },
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderWidth: "1px"
                    },
                    "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#282E3A !important"
                    },
                    "& .MuiOutlinedInput-root.Mui-focused": {
                        boxShadow: "none",
                    },
                    "& .MuiOutlinedInput-input": {
                        padding: "14px 24px",
                        lineHeight: 0,
                    },
                }}
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    label={fields[1]?.label}
                    variant="outlined"
                    fullWidth
                    sx={{
                        marginBottom: "12px",
                        input: { color: "#FFFFFFE6" },
                        "& .MuiInputLabel-root": {
                            ...theme.typography.body2, color: "#FFFFFFB3", fontFamily: "Poppins, sans-serif", fontWeight: 400, lineHeight: 1.5, "&.Mui-focused": {
                                color: "#FFFFFFB3 !important",
                            }, padding: "0 10px",
                        },
                        "& .MuiOutlinedInput-root": {
                            borderRadius: "20px",
                            "& fieldset": {
                                borderColor: "#171C28",
                            },
                            "&:hover fieldset": {
                                borderColor: "#282E3A",
                            },
                            "&.Mui-focused fieldset": {
                                borderColor: "#282E3A",
                            },
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderWidth: "1px",
                        },
                        "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#282E3A !important",
                        },
                        "& .MuiOutlinedInput-root.Mui-focused": {
                            boxShadow: "none",
                        },
                        "& .MuiOutlinedInput-input": {
                            padding: "14px 24px",
                            lineHeight: 0,
                        },
                    }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    label={fields[2]?.label}
                    variant="outlined"
                    fullWidth
                    sx={{
                        marginBottom: "32px",
                        input: { color: "#FFFFFFE6" },
                        "& .MuiInputLabel-root": {
                            ...theme.typography.body2, color: "#FFFFFFB3", fontFamily: "Poppins, sans-serif", fontWeight: 400, lineHeight: 1.5, "&.Mui-focused": {
                                color: "#FFFFFFB3 !important"
                            }, padding: "0 10px"
                        },
                        "& .MuiOutlinedInput-root": {
                            borderRadius: "20px",
                            "& fieldset": {
                                borderColor: "#171C28",
                            },
                            "&:hover fieldset": {
                                borderColor: "#282E3A",
                            },
                            "&.Mui-focused fieldset": {
                                borderColor: "#282E3A",
                            },
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderWidth: "1px",
                        },
                        "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#282E3A !important",
                        },
                        "& .MuiOutlinedInput-root.Mui-focused": {
                            boxShadow: "none",
                        },
                        "& .MuiOutlinedInput-input": {
                            padding: "14px 24px",
                            lineHeight: 0,
                        },
                    }}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <ContactButton
                    label={submitText}
                    onClick={() => console.log("Submitted")}
                    type="submit"
                />
            </Box>
        </Box>
    );
};

export default ContactForm;