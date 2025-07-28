import { Typography, Box } from "@mui/material";
import DarkButton from "../../../components/UI/Buttons/DarkButton";
import headerData from "../../../data/headerData.json";
import { useTheme } from "@mui/material/styles";

const HeaderDesktop: React.FC = () => {
  const theme = useTheme();

  return (
    <>
      <Typography
        fontSize={theme.typography.h3.fontSize}
        fontWeight="bold"
        color="white"
        sx={{
          fontFamily: "Poppins, sans-serif",
          cursor: "pointer",
        }}
        onClick={() => console.log("Logo clicked")}
      >
        {headerData.logoText}
      </Typography>

      <Box sx={{ display: "flex", gap: "48px", flexGrow: 1, justifyContent: "center" }}>
        {headerData.menuItems.map((item: string) => (
          <Typography
            key={item}
            color="white"
            sx={{ fontSize: theme.typography.body2.fontSize, fontFamily: "sans-serif", cursor: "pointer" }}
          >
            {item}
          </Typography>
        ))}
      </Box>

      <DarkButton onClick={() => console.log("Clicked!")}>
        {headerData.buttonLabel}
      </DarkButton>
    </>
  );
};

export default HeaderDesktop;