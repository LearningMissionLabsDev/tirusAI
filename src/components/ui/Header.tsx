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
        backgroundColor: "rgba(10, 15, 28, 0.05)", // transparent with 5% opacity
        backdropFilter: "blur(30px)",
        WebkitBackdropFilter: "blur(30px)",
        backgroundImage: "url(/assets/Header.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        boxShadow: "none",
        zIndex: theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar sx={{ p: 0, px: { xs: 3, sm: 3 } }}>
        {isSmallScreen ? <HeaderMobile /> : <HeaderDesktop />}
      </Toolbar>
    </AppBar>
  );
};

export default Header;