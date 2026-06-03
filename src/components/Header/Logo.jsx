import Typography from "@mui/material/Typography";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import { Stack } from "@mui/material";

export default function Logo() {
  return (
    <Stack
      direction={"row"}
      sx={{ alignItems: "center", flexWrap: "nowrap", gap: 1 }}
    >
      <TextSnippetOutlinedIcon
        sx={{
          backgroundColor: "primary.main",
          color: "black",
          borderRadius: "5px",
          padding: "2px",
        }}
      />
      <Typography
        variant={"h6"}
        component={"h1"}
        color="primary"
        sx={{ fontWeight: "bold" }}
      >
        CV Builder
      </Typography>
    </Stack>
  );
}
