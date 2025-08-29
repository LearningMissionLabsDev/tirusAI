// import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
// import Divider from "@mui/material/Divider";
// import Typography from "@mui/material/Typography";
// import Chip from "@mui/material/Chip";
// import Paper from "@mui/material/Paper";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemText from "@mui/material/ListItemText";
// import { useTheme } from "@mui/material/styles";

// // Adjust the path to your file (you used ../../data/terms.json in the screenshot)
// import rawTerms from "../../data/terms.json";

// // Simple helper to avoid double bullets if a line already starts with "•", "-", "–", "—"
// const cleanBullet = (s: string) => s.replace(/^\s*[•\-–—]\s*/, "");

// const TOKENS = {
//   pageBg: "transparent",
//   panelBg: "transparent",
//   title: "#F3F2FF",
//   text: "rgba(230,230,255,0.92)",
//   dim: "rgba(210,210,245,0.75)",
//   accent: "#86a4ff"
// };

// // No external types; just use the JSON as-is
// const terms = rawTerms as any;

// export default function TermsPage() {
//   const theme = useTheme();

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         bgcolor: TOKENS.pageBg,
//         display: "flex",
//         alignItems: "flex-start",
//         py: { xs: 4, md: 8 }
//       }}
//     >
//       <Container maxWidth="xl">
//         <Paper
//           elevation={0}
//           sx={{
//             bgcolor: TOKENS.panelBg,
//             p: { xs: 3, md: 5 },
//           }}
//         >
//           {/* Title */}
//           <Typography
//             component="h1"
//             variant="h4"
//             align="center"
//             sx={{ color: TOKENS.title, fontWeight: 700, letterSpacing: 0.2, mb: 1 }}
//           >
//             {terms.title}
//           </Typography>

//           {/* Effective date (render as-is; your JSON already includes the prefix) */}
//           <Typography variant="body2" align="center" sx={{ color: TOKENS.dim, letterSpacing: 0.4, mb: 2 }}>
//             {terms.effectiveDate}
//           </Typography>

//           {/* Subtitle (render exactly as provided, no extra parentheses) */}
//           {terms.subtitle && (
//             <Typography variant="body2" align="center" sx={{ color: TOKENS.dim, fontStyle: "italic", mb: 3 }}>
//               {terms.subtitle}
//             </Typography>
//           )}

//           <Divider sx={{ opacity: 0.8, mb: 3 }} />

//           <Box component="section" sx={{ color: TOKENS.text }}>
//             {terms.sections.map((sec: any) => {
//               const groups = sec.groups ?? [];
//               return (
//                 <Box
//                   key={sec.number}
//                   sx={{
//                   }}
//                 >
//                   <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
//                     <Chip
//                       label={sec.number}
//                       size="small"
//                       sx={{
//                         bgcolor: "transparent",
//                         color: TOKENS.accent,
//                         fontWeight: 600,
//                         height: 24
//                       }}
//                     />
//                     <Typography sx={{ ...theme.typography.body1, fontFamily: "Poppins, sans-serif", color: TOKENS.title, fontWeight: 600 }}>
//                       {sec.title}
//                     </Typography>
//                   </Box>

//                   {sec.paragraphs?.map((p: string, idx: number) => (
//                     <Typography key={idx}  sx={{ ...theme.typography.body1, fontFamily: "Poppins, sans-serif", color: TOKENS.text, mb: 2.5 }}>
//                       {p}
//                     </Typography>
//                   ))}

//                   {/* Optional grouped blocks (supported if you add them later) */}
//                   {groups.length > 0 && (
//                     <Box sx={{ mt: 1 }}>
//                       {groups.map((g: any, gi: number) => (
//                         <Box key={`${sec.number}-${g.title}-${gi}`} sx={{ mb: 2 }}>
//                           <Typography sx={{ ...theme.typography.body1, fontFamily: "Poppins, sans-serif", color: TOKENS.title, fontWeight: 700, mb: 0.8 }}>
//                             {g.title}
//                           </Typography>

//                           {g.paragraphs?.map((gp: string, gpi: number) => (
//                             <Typography key={gpi} variant="h1" sx={{ color: TOKENS.text, lineHeight: 1.6, mb: 1 }}>
//                               {gp}
//                             </Typography>
//                           ))}

//                           {/* {g.bullets && g.bullets.length > 0 && (
//                             <List
//                               dense
//                               sx={{
//                                 pl: 0.5,
//                                 "& .MuiListItem-root": { py: 0.4 },
//                                 "& .MuiListItemText-primary": { color: TOKENS.text, fontSize: 14, lineHeight: 1.55 }
//                               }}
//                             > */}
//                               {g.bullets.map((b: string, i: number) => (
//                                 <ListItem key={i} sx={{ display: "list-item", pl: 1.25 }}>
//                                   <ListItemText primary={cleanBullet(b)} />
//                                 </ListItem>
//                               ))}
//                             {/* </List>
//                           )} */}
//                         </Box>
//                       ))}
//                     </Box>
//                   )}

//                   {sec.bullets && sec.bullets.length > 0 && (
//                     <List
//                       dense
//                       sx={{
//                         pl: 0.5,
//                         "& .MuiListItem-root": { py: 0.4 },
//                         "& .MuiListItemText-primary": { color: TOKENS.text, fontSize: 14, lineHeight: 1.55 }
//                       }}
//                     >
//                       {sec.bullets.map((b: string, i: number) => (
//                         <ListItem key={i} sx={{ display: "list-item", pl: 1.25 }}>
//                           <ListItemText primary={cleanBullet(b)} />
//                         </ListItem>
//                       ))}
//                     </List>
//                   )}

//                   {sec.labeledParagraphs?.map((lp: any, idx: number) => (
//                     <Typography key={`lp-${idx}`} variant="body2" sx={{ color: TOKENS.text, lineHeight: 1.6, mt: 1 }}>
//                       <Box component="span" sx={{ fontWeight: 700, color: TOKENS.title }}>
//                         {lp.label}
//                       </Box>
//                       {lp.text}
//                     </Typography>
//                   ))}

//                   {/* Post paragraphs */}
//                   {sec.postParagraphs?.map((p: string, idx: number) => (
//                     <Typography key={`post-${idx}`} variant="body2" sx={{ color: TOKENS.text, lineHeight: 1.6, mt: 1 }}>
//                       {p}
//                     </Typography>
//                   ))}
//                 </Box>
//               );
//             })}
//           </Box>

//           {/* Footer note (optional) */}
//           {terms.footerNote && (
//             <>
//               <Divider sx={{ borderColor: TOKENS.panelBorder, my: 2.5 }} />
//               <Typography variant="caption" sx={{ color: TOKENS.dim, display: "block", textAlign: "center" }}>
//                 {terms.footerNote}
//               </Typography>
//             </>
//           )}
//         </Paper>
//       </Container>
//     </Box>
//   );
// }

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useTheme } from "@mui/material/styles";

// Adjust the path to your file (you used ../../data/terms.json in the screenshot)
import rawTerms from "../../data/terms.json";

// Simple helper to avoid double bullets if a line already starts with "•", "-", "–", "—"
const cleanBullet = (s: string) => s.replace(/^\s*[•\-–—]\s*/, "");

const TOKENS = {
  pageBg: "transparent",
  panelBg: "transparent",
  title: "#F3F2FF",
  text: "rgba(230,230,255,0.92)",
  dim: "rgba(210,210,245,0.75)",
  accent: "#86a4ff"
};

// No external types; just use the JSON as-is
const terms = rawTerms as any;

export default function TermsPage() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: TOKENS.pageBg,
        display: "flex",
        alignItems: "flex-start",
        py: { xs: 4, md: 2 }
      }}
    >
      <Container maxWidth="xl">
        <Paper
          elevation={0}
          sx={{
            bgcolor: TOKENS.panelBg,
            p: { xs: 3, md: 5 },
          }}
        >
          {/* Title */}
          <Typography
            component="h1"
            variant="h4"
            align="center"
            sx={{ color: TOKENS.title, fontWeight: 700, letterSpacing: 0.2, mb: 1 }}
          >
            {terms.title}
          </Typography>

          {/* Effective date (render as-is; your JSON already includes the prefix) */}
          <Typography variant="body2" align="center" sx={{ color: TOKENS.dim, letterSpacing: 0.4, mb: 2 }}>
            {terms.effectiveDate}
          </Typography>

          {/* Subtitle (render exactly as provided, no extra parentheses) */}
          {terms.subtitle && (
            <Typography variant="body2" align="center" sx={{ color: TOKENS.dim, fontStyle: "italic", mb: 3 }}>
              {terms.subtitle}
            </Typography>
          )}

          <Divider sx={{ opacity: 0.8, mb: 3 }} />

          <Box component="section" sx={{ color: TOKENS.text, gap: 3 }}>
            {terms.sections.map((sec: any) => {
              const groups = sec.groups ?? [];
              return (
                <Box
                  key={sec.number}
                  sx={{ mb: 3 }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                    <Chip
                      label={sec.number}
                      size="small"
                      sx={{
                        bgcolor: "transparent",
                        color: TOKENS.accent,
                        fontWeight: 600,
                        height: 24
                      }}
                    />
                    <Typography sx={{ ...theme.typography.body1, fontFamily: "Poppins, sans-serif", color: TOKENS.title, fontWeight: 600 }}>
                      {sec.title}
                    </Typography>
                  </Box>

                  {sec.paragraphs?.map((p: string, idx: number) => (
                    <Typography key={idx}  sx={{ ...theme.typography.body1, fontFamily: "Poppins, sans-serif", color: TOKENS.text, mb: 1 }}>
                      {p}
                    </Typography>
                  ))}

                  {/* Optional grouped blocks (supported if you add them later) */}
                  {groups.length > 0 && (
                    <Box sx={{ mt: 1 }}>
                      {groups.map((g: any, gi: number) => (
                        <Box key={`${sec.number}-${g.title}-${gi}`} sx={{ mb: 3 }}>
                          <Typography sx={{ ...theme.typography.body1, fontFamily: "Poppins, sans-serif", color: TOKENS.title, fontWeight: 700, mb: 0.8 }}>
                            {g.title}
                          </Typography>

                          {g.paragraphs?.map((gp: string, gpi: number) => (
                            <Typography key={gpi} sx={{ ...theme.typography.body1, p: 0, fontFamily: "Poppins, sans-serif", color: TOKENS.text, mb: 1 }}>
                              {gp}
                            </Typography>
                          ))}

                          {/* {g.bullets && g.bullets.length > 0 && (
                            <List
                              dense
                              sx={{
                                pl: 0.5,
                                "& .MuiListItem-root": { py: 0.4 },
                                "& .MuiListItemText-primary": { color: TOKENS.text, fontSize: 14, lineHeight: 1.55 }
                              }}
                            > */}
                              {g.bullets.map((b: string, i: number) => (
                                <ListItem key={i} sx={{ ...theme.typography.body1, p: 0,  fontFamily: "Poppins, sans-serif", display: "list-item", pl: 1.25 }}>
                                  <ListItemText primary={cleanBullet(b)} />
                                </ListItem>
                              ))}
                            {/* </List>
                          )} */}
                        </Box>
                      ))}
                    </Box>
                  )}

                  {sec.bullets && sec.bullets.length > 0 && (
                    <List>
                      {sec.bullets.map((b: string, i: number) => (
                        <ListItem key={i} sx={{ ...theme.typography.body1, fontFamily: "Poppins, sans-serif", p: 0, lineHeight: "30px", display: "list-item", pl: 1.25 }}>
                          <ListItemText primary={cleanBullet(b)} />
                        </ListItem>
                      ))}
                    </List>
                  )}

                  {sec.labeledParagraphs?.map((lp: any, idx: number) => (
                    <Typography key={`lp-${idx}`} sx={{ color: TOKENS.text, mt: 1 }}>
                      <Box component="span" sx={{ ...theme.typography.body1, fontFamily: "Poppins, sans-serif", fontWeight: 700, color: TOKENS.title }}>
                        {lp.label}
                      </Box>
                      {lp.text}
                    </Typography>
                  ))}

                  {/* Post paragraphs */}
                  {sec.postParagraphs?.map((p: string, idx: number) => (
                    <Typography key={`post-${idx}`} sx={{ ...theme.typography.body1, fontFamily: "Poppins, sans-serif", color: TOKENS.text, mt: 1 }}>
                      {p}
                    </Typography>
                  ))}
                </Box>
              );
            })}
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}