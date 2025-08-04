// import React from "react";
// import { Stack, Container, Typography, Box } from "@mui/material";
// import ContactCard from "../../components/ui/Cards/ContactCard";
// import ContactPhone from "/assets/ContactPhone.png";
// import ContactMessage from "/assets/ContactMessage.png";
// import ContactForm from "../../components/form/ContactForm";

// const ContactUs: React.FC = () => {
//   return (
//     <>
//     <Box maxHeight="100%">
//       <Box>
//         <Typography
//           variant="h3"
//           sx={{
//             fontFamily: "Poppins, sans-serif",
//             fontWeight: 600,
//             color: "#fff",
//             textAlign: "center",
//           }}
//         >
//           Contact Us
//         </Typography>
//       </Box>
//       <Container
//         maxWidth="900px"
//         height="full"
//         sx={{
//           mt: 2,
//           padding: { xs: 2, sm: 4 },
//           display: "flex",
//           justifyContent: "center",
//         }}
//       >
//         {/* Contact Information and Contact Form */}
//         <Stack
//           direction={{ xs: "column", md: "row" }}
//           spacing={4}
//           justifyContent="space-between"
//           alignItems="flex-start"
//           sx={{
//             mb: 2,
//             padding: { xs: 2, sm: 4 },
//             height: "450px", // Set fixed height for both contact cards and form
//           }}
//         >
//           {/* Left side Contact Information */}
//           <Stack
//             direction="column"
//             spacing={4}
//             flex={1}
//             alignItems="center"
//             sx={{
//               maxWidth: "384px",
//               maxHeight: "450px",
//               padding: "16px",
//               height: "100%", // Ensure this takes up the full height available
//             }}
//           >
//             <ContactCard
//               logo={ContactPhone}
//               title="Phone Number"
//               description="+1(626) 540-2577"
//               link="tel:+16265402577"
//             />
//             <ContactCard
//               logo={ContactMessage}
//               title="Message Us"
//               description="info@tirus.ai"
//               link="mailto:info@tirus.ai"
//             />
//           </Stack>

//           {/* Right side Contact Form */}
//           <Stack
//             direction="column"
//             spacing={4}
//             flex={1}
//             alignItems="center"
//             sx={{
//               maxWidth: "800px",
//               height: "100%",
//               padding: "16px",
//               borderRadius: "12px", // Optional for rounded edges
//             }}
//           >
//             <ContactForm
//               title="If you have any questions or inquiries, please don’t hesitate to contact us—we’re here to help."
//             />
//           </Stack>
//         </Stack>
//       </Container>
//     </Box>
//     </>
//   );
// };

// export default ContactUs;

import React from "react";
import { Box, Container, Typography } from "@mui/material";
import ContactCard from "../../components/ui/Cards/ContactCard";
import ContactPhone from "/assets/ContactPhone.png";
import ContactMessage from "/assets/ContactMessage.png";
import ContactForm from "../../components/form/ContactForm";

const ContactUs: React.FC = () => {
  return (
    <Box maxHeight="100%">
      <Box>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            color: "#fff",
            textAlign: "center",
            mb: 4,
          }}
        >
          Contact Us
        </Typography>
      </Box>

      <Container
        maxWidth="900px"
        sx={{
          
          padding: { xs: 2, sm: 4 },
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {/* Contact Information and Contact Form */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 4,
            height: "450px", // Set fixed height for both contact cards and form
          }}
        >
          {/* Left side Contact Information */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
              flex: 1,
              alignItems: "center",
              maxWidth: "384px",
              maxHeight: "450px",
              padding: "16px",
              height: "100%", // Ensure this takes up the full height available
            }}
          >
            <ContactCard
              logo={ContactPhone}
              title="Phone Number"
              description="+1(626) 540-2577"
              link="tel:+16265402577"
            />
            <ContactCard
              logo={ContactMessage}
              title="Message Us"
              description="info@tirus.ai"
              link="mailto:info@tirus.ai"
            />
          </Box>

          {/* Right side Contact Form */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
              flex: 1,
              alignItems: "center",
              maxWidth: "800px",
              height: "100%",
              padding: "16px",
              borderRadius: "12px", // Optional for rounded edges
            }}
          >
            <ContactForm
              title="If you have any questions or inquiries, please don’t hesitate to contact us—we’re here to help."
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactUs;























// import React from "react";
// import { Stack, Container, Typography, Box } from "@mui/material";
// import ContactCard from "../../components/ui/Cards/ContactCard";
// import ContactPhone from "/assets/ContactPhone.png";
// import ContactMessage from "/assets/ContactMessage.png";
// import ContactForm from "../../components/form/ContactForm";

// const ContactUs: React.FC = () => {
//   return (
//     <>
//       <Box sx={{ width: "100%", minHeight: "100vh", }}>
//         <Box>
//           <Typography
//             variant="h3"
//             sx={{
//               fontFamily: "Poppins, sans-serif",
//               fontWeight: 600,
//               color: "#fff",
//               textAlign: "center",
//               mt: { xs: 2, sm: 4 },
//               mb: { xs: 2, sm: 4 },
//               fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
//             }}
//           >
//             Contact Us
//           </Typography>
//         </Box>
//         <Container
//           maxWidth="md"
//           sx={{
//             py: { xs: 2, sm: 4 },
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             minHeight: { xs: "auto", md: "70vh" },
//           }}
//         >
//           {/* Contact Information and Contact Form */}
//           <Stack
//             direction={{ xs: "column", md: "row" }}
//             spacing={{ xs: 2, md: 4 }}
//             justifyContent="space-between"
//             alignItems="stretch"
//             sx={{
//               width: "100%",
//               borderRadius: 2,
//               p: { xs: 2, sm: 4 },
//             }}
//           >
//             {/* Left side Contact Information */}
//             <Stack
//               direction="column"
//               spacing={2}
//               flex={1}
//               alignItems="center"
//               sx={{
//                 width: "100%",
//                 maxWidth: { xs: "100%", md: "350px" },
//                 p: { xs: 1, sm: 2 },
//               }}
//             >
//               <ContactCard
//                 logo={ContactPhone}
//                 title="Phone Number"
//                 description="+1(626) 540-2577"
//                 link="tel:+16265402577"
//               />
//               <ContactCard
//                 logo={ContactMessage}
//                 title="Message Us"
//                 description="info@tirus.ai"
//                 link="mailto:info@tirus.ai"
//               />
//             </Stack>

//             {/* Right side Contact Form */}
//             <Stack
//               direction="column"
//               spacing={2}
//               flex={2}
//               alignItems="center"
//               sx={{
//                 width: "100%",
//                 maxWidth: { xs: "100%", md: "500px" },
//                 p: { xs: 1, sm: 2 },
//                 borderRadius: 2,
//               }}
//             >
//               <ContactForm
//                 title="If you have any questions or inquiries, please don’t hesitate to contact us—we’re here to help."
//               />
//             </Stack>
//           </Stack>
//         </Container>
//       </Box>
//     </>
//   );
// };

// export default ContactUs;