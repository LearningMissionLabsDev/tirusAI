import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import HeaderMobile from "./Header/HeaderMobile";
import HeaderDesktop from "./Header/HeaderDesktop";

const Header: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar
      position="fixed"
      sx={{
        background: "transparent",
        backdropFilter: "blur(350px)",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ px: 3, py: 1.4 }}>
        {isSmallScreen ? <HeaderMobile /> : <HeaderDesktop />}
      </Toolbar>
    </AppBar>
  );
};

export default Header;