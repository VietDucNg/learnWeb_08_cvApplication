import Logo from "./Logo";
import ExportBtn from "./ExportBtn";
import { IconButton, Stack } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function Header({ mode, setMode, handelPrint }) {
  function changeMode() {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  }

  return (
    <Stack
      direction={"row"}
      sx={{
        flexWrap: "wrap",
        gap: 1,
        justifyContent: "space-between",
        borderBottom: "1px solid",
        borderBottomColor: "divider",
        pb: 2,
      }}
    >
      <Logo />
      <Stack direction={"row"} spacing={2}>
        <IconButton onClick={changeMode}>
          {mode === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
        <ExportBtn handelPrint={handelPrint} />
      </Stack>
    </Stack>
  );
}
