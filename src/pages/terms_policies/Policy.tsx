import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import rawPolicy from "../../data/privacy.json";

/* ---------- Types that match your JSON ---------- */
type LabeledParagraph = {
  label: string; // e.g., "California (CCPA/CPRA): "
  text: string;
};

type Group = {
  title: string;
  bullets?: string[];
  paragraphs?: string[];
};

type Section = {
  number: number;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  postParagraphs?: string[];
  groups?: Group[];
  labeledParagraphs?: LabeledParagraph[];
};

type Policy = {
  title: string;
  effectiveDate: string;
  subtitle?: string;
  sections: Section[];
  footerNote?: string;
};

/* ---------- Styling tokens (dark UI) ---------- */
const TOKENS = {
  pageBg: "#0f0d28",
  panelBg: "#111233",
  panelBorder: "rgba(122, 154, 255, 0.35)",
  title: "#F3F2FF",
  text: "rgba(230,230,255,0.92)",
  dim: "rgba(210,210,245,0.75)",
  accent: "#86a4ff"
};

const policy = rawPolicy as Policy;

export default function PrivacyPage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: TOKENS.pageBg,
        display: "flex",
        alignItems: "flex-start",
        py: { xs: 4, md: 8 }
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={0}
          sx={{
            bgcolor: TOKENS.panelBg,
            border: `1px solid ${TOKENS.panelBorder}`,
            borderRadius: 3,
            p: { xs: 3, md: 5 },
            boxShadow:
              "0 10px 30px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(255,255,255,0.03)"
          }}
        >
          {/* Title */}
          <Typography
            component="h1"
            variant="h4"
            align="center"
            sx={{ color: TOKENS.title, fontWeight: 700, letterSpacing: 0.2, mb: 1 }}
          >
            {policy.title}
          </Typography>

          {/* Effective date (use as-is; your JSON already includes the prefix) */}
          <Typography
            variant="body2"
            align="center"
            sx={{ color: TOKENS.dim, letterSpacing: 0.4, mb: 2 }}
          >
            {policy.effectiveDate}
          </Typography>

          {/* Subtitle (no extra parentheses; render exactly as provided) */}
          {policy.subtitle && (
            <Typography
              variant="body2"
              align="center"
              sx={{ color: TOKENS.dim, fontStyle: "italic", mb: 3 }}
            >
              {policy.subtitle}
            </Typography>
          )}

          <Divider sx={{ borderColor: TOKENS.panelBorder, opacity: 0.8, mb: 3 }} />

          {/* Sections */}
          <Box component="section" sx={{ color: TOKENS.text }}>
            {policy.sections.map((sec) => {
              const groups = sec.groups ?? [];
              const showLetters = groups.length > 1; // e.g., A/B/C for section 2, but not for a single "AI-specific uses"
              return (
                <Box
                  key={sec.number}
                  sx={{
                    mb: 3.5,
                    p: { xs: 2, md: 2.5 },
                    border: `1px solid ${TOKENS.panelBorder}`,
                    borderRadius: 2,
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0))",
                    "&:hover": { borderColor: TOKENS.accent }
                  }}
                >
                  {/* Section heading */}
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5 }}>
                    <Chip
                      label={sec.number}
                      size="small"
                      sx={{
                        bgcolor: "transparent",
                        border: `1px solid ${TOKENS.accent}`,
                        color: TOKENS.accent,
                        fontWeight: 600,
                        height: 24
                      }}
                    />
                    <Typography component="h2" variant="h6" sx={{ color: TOKENS.title, fontWeight: 700 }}>
                      {sec.title}
                    </Typography>
                  </Box>

                  {/* Intro paragraphs */}
                  {sec.paragraphs?.map((p, idx) => (
                    <Typography key={idx} variant="body2" sx={{ color: TOKENS.text, lineHeight: 1.6, mb: 1.25 }}>
                      {p}
                    </Typography>
                  ))}

                  {/* Grouped sub-sections (A/B/C…) */}
                  {groups.length > 0 && (
                    <Box sx={{ mt: 1 }}>
                      {groups.map((g, gi) => (
                        <Box key={`${sec.number}-${g.title}-${gi}`} sx={{ mb: 2 }}>
                          <Typography
                            variant="subtitle1"
                            sx={{ color: TOKENS.title, fontWeight: 700, mb: 0.8 }}
                          >
                            {showLetters ? `${String.fromCharCode(65 + gi)}. ${g.title}` : g.title}
                          </Typography>

                          {g.paragraphs?.map((gp, gpi) => (
                            <Typography key={gpi} variant="body2" sx={{ color: TOKENS.text, lineHeight: 1.6, mb: 1 }}>
                              {gp}
                            </Typography>
                          ))}

                          {g.bullets && g.bullets.length > 0 && (
                            <List
                              dense
                              sx={{
                                pl: 0.5,
                                "& .MuiListItem-root": { py: 0.4 },
                                "& .MuiListItemText-primary": {
                                  color: TOKENS.text,
                                  fontSize: 14,
                                  lineHeight: 1.55
                                }
                              }}
                            >
                              {g.bullets.map((b, i) => (
                                <ListItem key={i} sx={{ display: "list-item", pl: 1.25 }}>
                                  <ListItemText primary={b} />
                                </ListItem>
                              ))}
                            </List>
                          )}
                        </Box>
                      ))}
                    </Box>
                  )}

                  {/* Flat bullets (fallback when no groups) */}
                  {!groups.length && sec.bullets && sec.bullets.length > 0 && (
                    <List
                      dense
                      sx={{
                        pl: 0.5,
                        "& .MuiListItem-root": { py: 0.4 },
                        "& .MuiListItemText-primary": { color: TOKENS.text, fontSize: 14, lineHeight: 1.55 }
                      }}
                    >
                      {sec.bullets.map((b, i) => (
                        <ListItem key={i} sx={{ display: "list-item", pl: 1.25 }}>
                          <ListItemText primary={b} />
                        </ListItem>
                      ))}
                    </List>
                  )}

                  {/* Labeled one-line paragraphs (e.g., CCPA / EEA-UK) */}
                  {sec.labeledParagraphs?.map((lp, idx) => (
                    <Typography key={`lp-${idx}`} variant="body2" sx={{ color: TOKENS.text, lineHeight: 1.6, mt: 1 }}>
                      <Box component="span" sx={{ fontWeight: 700, color: TOKENS.title }}>
                        {lp.label}
                      </Box>
                      {lp.text}
                    </Typography>
                  ))}

                  {/* Post paragraphs */}
                  {sec.postParagraphs?.map((p, idx) => (
                    <Typography key={`post-${idx}`} variant="body2" sx={{ color: TOKENS.text, lineHeight: 1.6, mt: 1 }}>
                      {p}
                    </Typography>
                  ))}
                </Box>
              );
            })}
          </Box>

          {/* Footer note (optional) */}
          {policy.footerNote && (
            <>
              <Divider sx={{ borderColor: TOKENS.panelBorder, my: 2.5 }} />
              <Typography variant="caption" sx={{ color: TOKENS.dim, display: "block", textAlign: "center" }}>
                {policy.footerNote}
              </Typography>
            </>
          )}
        </Paper>
      </Container>
    </Box>
  );
}