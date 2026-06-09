import Button from "@mui/material/Button";

export default function CancelBtn({ reset, setOpenEntryForm }) {
  function onClick() {
    reset();
    setOpenEntryForm(null);
  }

  return (
    <Button
      onClick={onClick}
      className="CancelBtn"
      variant="outlined"
      sx={{
        color: "text.primary",
        borderColor: "divider",
        textTransform: "none",
        fontSize: "1rem",
      }}
    >
      Cancel
    </Button>
  );
}
