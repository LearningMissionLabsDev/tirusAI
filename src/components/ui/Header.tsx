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
      position="static"
      sx={{
        background: "transparent",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ p: 0, px: { xs: 3, sm: 3 } }}>
        {isSmallScreen ? <HeaderMobile /> : <HeaderDesktop />}
      </Toolbar>
    </AppBar>
  );
};

export default Header;