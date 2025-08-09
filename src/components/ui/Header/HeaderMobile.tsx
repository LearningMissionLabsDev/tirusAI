import React from "react";
import {
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Button from "../Buttons/Button";
import headerData from "../../../data/headerData.json";
import { useTheme } from "@mui/material/styles";
import TirusLogo from "/assets/TirusLogo.png";

const HeaderMobile: React.FC = () => {
  const theme = useTheme();
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
        <IconButton
          sx={{ py: 0, px: 0, ml: 0, mr: 0, width: "25px" }}
          onClick={() => setMenuOpen(true)}
          edge="start"
        >
          <MenuIcon sx={{ fontSize: "30.5px", color: "white" }} />
        </IconButton>
         <Box
        component="img"
        src={TirusLogo}
        alt={headerData.logoText}
        sx={{
          height: 32,
          width: 125,
          cursor: "pointer",
          ml: 1,
        }}
        onClick={() => console.log("Logo clicked")}
      />
      </Box>

      <Box sx={{ flex: "1 0 auto", display: "flex", justifyContent: "flex-end" }}>
       <Button onClick={() => console.log("Clicked!")} label={headerData.buttonLabel} />
      </Box>

      <Drawer
        anchor="left"
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        PaperProps={{
          sx: {
            width: 250,
            px: 2,
            py: 2,
            backgroundImage: "url(/assets/Sidebar.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", py: 2 }}>
          <Typography
            fontWeight="bold"
            fontSize={32}
            color="white"
            sx={{
              fontFamily: "Poppins, sans-serif",
              letterSpacing: 1,
            }}
          >
            {headerData.logoText || "Tirus"}
          </Typography>
          <IconButton sx={{ color: "white", p: 0 }} onClick={() => setMenuOpen(false)}>
            <CloseIcon sx={{ fontSize: 20.59 }} />
          </IconButton>
        </Box>

        <Box sx={{ mt: 2 }} role="presentation">
          <List sx={{ gap: 2, p: 0, display: "flex", flexDirection: "column" }}>
            {headerData.menuItems.map((item: string) => (
              <ListItem
                key={item}
                sx={{
                  borderRadius: "20px",
                  border: "1px solid rgba(255,255,255,0.05)",
                  backdropFilter: "blur(2px)",
                  px: "12px",
                  py: "10px",
                }}
              >
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: theme.typography.body2.fontSize,
                    color: "white",
                    fontFamily: "sans-serif",
                  }}
                  primary={item}
                />
                <Box sx={{ pr: "8px" }}>
                  <IconButton
                    edge="end"
                    sx={{
                      background: "rgba(20,20,30,0.85)",
                      borderRadius: "50%",
                      color: "white",
                      width: 32,
                      height: 32,
                      "&:hover": {
                        background: "rgba(255,255,255,0.15)",
                      },
                    }}
                  >
                    <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M7 17L17 7" />
                      <path d="M8 7h9v9" />
                    </svg>
                  </IconButton>
                </Box>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default HeaderMobile;