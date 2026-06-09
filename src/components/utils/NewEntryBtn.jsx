import Button from "@mui/material/Button";
import SchoolIcon from "@mui/icons-material/School";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function NewEntryBtn({
  type,
  NewEntryBtnTitle,
  NewEntryBtnDescription,
  setOpenEntryForm,
}) {
  function onClick() {
    setOpenEntryForm(true);
  }

  return (
    <Button
      variant="outlined"
      onClick={() => onClick()}
      sx={{
        backgroundColor: "background.paper",
        mt: 1,
        height: "100px",
        width: "100%",
      }}
    >
      <Stack>
        <Stack direction={"row"} sx={{ alignItems: "center", gap: 1 }}>
          {type == "edu" ? <SchoolIcon /> : <WorkHistoryIcon />}{" "}
          <Typography variant="h6">{NewEntryBtnTitle}</Typography>
        </Stack>
        <Typography sx={{ color: "text.primary" }}>
          {NewEntryBtnDescription}
        </Typography>
      </Stack>
    </Button>
  );
}
