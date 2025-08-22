// import React from "react";
// import { Box, Container, Typography, useTheme } from "@mui/material";
// import ContactCard from "../../components/ui/Cards/ContactCard";
// import ContactForm from "../../components/form/ContactForm";
// import contactCardData from "../../data/contactCardData.json";
// import contactFormData from "../../data/contactFormData.json";

// type ContactCardItem = {
//   icon: string;
//   title: string;
//   description: string;
//   link: string;
// };

// const ContactUs: React.FC = () => {
//   const theme = useTheme();

//   return (
//     <Box maxWidth="100%" sx={{ position: "relative", justifyContent: "center", alignItems: "center", px: "16px", mx: "auto", overflow: "hidden" }}>
//       <Box>
//         <Typography
//           sx={{
//             ...theme.typography.h1,
//             fontFamily: "Poppins, sans-serif",
//             fontWeight: 600,
//             color: "#FFFFFFE6",
//             textAlign: "center",
//             mb: 6,
//           }}
//         >
//           {contactCardData.sectionTitle}
//         </Typography>
//       </Box>

//       <Container maxWidth={false} disableGutters sx={{ p: "0 !important", m: "0 !important"  }}>
//         {/* Center the whole row and cap its width */}
// <Box
//   sx={{
//     display: "flex",
//     flexDirection: { xs: "column", md: "row" },
//     gap: { xs: 3, sm: 3, md: 3 },
//     alignItems:  "center", // vertical centering on md+
//     justifyContent: "center",
//     width: "100%",
//     maxWidth: 1200,           // <= tune this (e.g., 1100–1280)
//     mx: "auto",               // <= centers the block
//   }}
// >
//           {/* Left: Contact info (no flex:1) */}
// <Box
//   sx={{
//     display: "flex",
//     flexDirection: "column",
//     gap: 3,
//     width: { xs: "100%", sm: "100%", md: 384 }, // fixed width on desktop
//   }}
// >
//             {contactCardData.items.map((item: ContactCardItem, idx: number) => (
//               <ContactCard
//                 key={idx}
//                 icon={item.icon}
//                 title={item.title}
//                 description={item.description}
//                 link={item.link}
//               />
//             ))}
//           </Box>

// <Box
//   sx={{
//     width: "100%",
//     borderRadius: "12px",
//     height: {md: "291px"},
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   }}
// >
//             <ContactForm
//               title={contactFormData.title}
//               fields={contactFormData.fields}
//               submitText={contactFormData.submitButton.text}
//             />
//           </Box>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default ContactUs;

import React from "react";
import { Box, Container, Typography, useTheme } from "@mui/material";
import ContactCard from "../../components/ui/Cards/ContactCard";
import ContactForm from "../../components/form/ContactForm";
import contactCardData from "../../data/contactCardData.json";
import contactFormData from "../../data/contactFormData.json";

type ContactCardItem = {
  icon: string;
  title: string;
  description: string;
  link: string;
};

const ContactUs: React.FC = () => {
  const theme = useTheme();

  return (
    <Box maxWidth={'100%'} sx={{ position: "relative", px: "16px", overflow: "hidden", }}>
      <Box>
        <Typography
          sx={{
            ...theme.typography.h1,
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            color: "#FFFFFFE6",
            textAlign: "center",
            mb: { xs: 2.5, sm: 2.5, md: 6 },
          }}
        >
          {contactCardData.sectionTitle}
        </Typography>
      </Box>
      <Container
        maxWidth={false}
        disableGutters sx={{ p: "0 !important", m: "0 !important" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 3, sm: 3, md: 3 },
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            maxWidth: 1200,
            mx: "auto",
          }}
        >
          {/* Left Side - Contact Info Cards */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: {xs: 2.5, sm: 3, md: 3},
              width: { xs: "99.54%", sm: "99.54%", md: 384 }, // fixed width on desktop
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
              width: "100%",
              borderRadius: "12px",
              height: { md: "291px" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
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