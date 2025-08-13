import React from "react";
import { Box, Container, Typography, useTheme } from "@mui/material";
import ContactCard from "../../components/ui/Cards/ContactCard";
import ContactForm from "../../components/form/ContactForm";
import contactCardData from "../../data/contactCardData.json";
import contactFormData from "../../data/contactFormData.json";
import gradientSvg from "/assets/ContactUsGradient.svg"

type ContactCardItem = {
  icon: string;
  title: string;
  description: string;
  link: string;
};

const ContactUs: React.FC = () => {
  const theme = useTheme();

  return (
    <Box maxWidth={'100%'} sx={{ p: { xs: 4, sm: 4, md: 3, lg: 3, xl: 3 }, position: "relative", overflow: "hidden", }}>
      <Box>
        <Typography
          sx={{
            ...theme.typography.h1,
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            color: "#FFFFFFE6",
            textAlign: "center",
            mb: 6,
          }}
        >
          {contactCardData.sectionTitle}
        </Typography>
      </Box>
      <Container
        maxWidth={false}
        sx={{ maxWidth: "1230px", mx: "auto" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 3, md: 8 },
            justifyContent: "center",
            alignItems: { xs: "center", md: "stretch" },
          }}

        >
          {/* Left Side - Contact Info Cards */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
              flex: 1,
              maxWidth: { xs: "100%", md: "384px" },
              alignItems: { xs: 'center', md: 'stretch' },
              width: "100%",
              height: "100%",
            }}
          >
             {contactCardData.items.map((item: ContactCardItem, idx: number) => (
              <ContactCard
                key={idx}
                icon={item.icon}
                title={item.title}
                description={item.description}
                link={item.link}
              />
            ))}
          </Box>
          {/* Right Side - Form */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
              maxWidth: "794px",
              height: "424px",
              borderRadius: "12px",
              mr: { xs: 0, md: 3.5 },
            }}
          >
             <ContactForm
              title={contactFormData.title}
              fields={contactFormData.fields}
              submitText={contactFormData.submitButton.text}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactUs;