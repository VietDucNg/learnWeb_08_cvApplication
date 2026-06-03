import Logo from "./Logo";
import ExportBtn from "./ExportBtn";
import { Stack } from "@mui/material";

function Header() {
  return (
    <Stack
      direction={"row"}
      sx={{
        justifyContent: "space-between",
        borderBottom: "1px solid",
        borderBottomColor: "divider",
        pb: 2,
      }}
    >
      <Logo />
      <ExportBtn />
    </Stack>
  );
}

export default Header;
