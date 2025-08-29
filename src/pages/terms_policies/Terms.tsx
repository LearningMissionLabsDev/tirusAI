import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import rawTerms from "../content/terms.json";
import type { TermsData } from "../types/terms";

const TOKENS = {
  pageBg: "#0f0d28",
  panelBg: "#111233",
  panelBorder: "rgba(122, 154, 255, 0.35)",
  title: "#F3F2FF",
  text: "rgba(230,230,255,0.92)",
  dim: "rgba(210,210,245,0.75)",
  accent: "#86a4ff"
};

const terms = rawTerms as TermsData;

export default function TermsPage() {
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
            sx={{
              color: TOKENS.title,
              fontWeight: 700,
              letterSpacing: 0.2,
              mb: 1
            }}
          >
            {terms.title}
          </Typography>

          {/* Effective date + subtitle */}
          <Typography
            variant="body2"
            align="center"
            sx={{
              color: TOKENS.dim,
              textTransform: "none",
              letterSpacing: 0.4,
              mb: 2
            }}
          >
            Effective date: {terms.effectiveDate}
          </Typography>

          {terms.subtitle && (
            <Typography
              variant="body2"
              align="center"
              sx={{
                color: TOKENS.dim,
                fontStyle: "italic",
                mb: 3
              }}
            >
              ({terms.subtitle})
            </Typography>
          )}

          <Divider
            sx={{
              borderColor: TOKENS.panelBorder,
              opacity: 0.8,
              mb: 3
            }}
          />

          {/* Sections */}
          <Box component="section" sx={{ color: TOKENS.text }}>
            {terms.sections.map((sec) => (
              <Box
                key={sec.number}
                sx={{
                  mb: 3.5,
                  p: { xs: 2, md: 2.5 },
                  border: `1px solid ${TOKENS.panelBorder}`,
                  borderRadius: 2,
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0))",
                  "&:hover": {
                    borderColor: TOKENS.accent
                  }
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    mb: 1.5
                  }}
                >
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
                  <Typography
                    component="h2"
                    variant="h6"
                    sx={{
                      color: TOKENS.title,
                      fontWeight: 700
                    }}
                  >
                    {sec.title}
                  </Typography>
                </Box>

                {sec.paragraphs?.map((p, idx) => (
                  <Typography
                    key={idx}
                    variant="body2"
                    sx={{
                      color: TOKENS.text,
                      lineHeight: 1.6,
                      mb: 1.25
                    }}
                  >
                    {p}
                  </Typography>
                ))}

                {sec.bullets && sec.bullets.length > 0 && (
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
                    {sec.bullets.map((b, i) => (
                      <ListItem key={i} sx={{ display: "list-item", pl: 1.25 }}>
                        <ListItemText primary={b} />
                      </ListItem>
                    ))}
                  </List>
                )}
              </Box>
            ))}
          </Box>

          {/* Footer note */}
          {terms.footerNote && (
            <>
              <Divider sx={{ borderColor: TOKENS.panelBorder, my: 2.5 }} />
              <Typography
                variant="caption"
                sx={{ color: TOKENS.dim, display: "block", textAlign: "center" }}
              >
                {terms.footerNote}
              </Typography>
            </>
          )}
        </Paper>
      </Container>
    </Box>
  );
}