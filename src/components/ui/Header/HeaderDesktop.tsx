import { Box, Typography } from "@mui/material";
import Button from "../Buttons/Button";
import headerData from "../../../data/headerData.json";
import { useTheme } from "@mui/material/styles";
import TirusLogo from "/assets/TirusLogo.png"; // Correct path based on your folder structure

const HeaderDesktop: React.FC = () => {
  const theme = useTheme();

  return (
    <>
      <Box
        component="img"
        src={TirusLogo}
        alt="Tirus AI Logo"
        sx={{
          height: 32,
          width: 125,
          cursor: "pointer",
        }}
        onClick={() => console.log("Logo clicked")}
      />

      <Box sx={{ display: "flex", gap: "48px", flexGrow: 1, justifyContent: "center" }}>
        {headerData.menuItems.map((item: string) => (
          <Typography
            key={item}
            color="white"
            sx={{
              fontSize: theme.typography.body2.fontSize,
              fontFamily: "sans-serif",
              cursor: "pointer",
            }}
          >
            {item}
          </Typography>
        ))}
      </Box>

      <Button onClick={() => console.log("Clicked!")} label={headerData.buttonLabel} />
    </>
  );
};

export default HeaderDesktop;