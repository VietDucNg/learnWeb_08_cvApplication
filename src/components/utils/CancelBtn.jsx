import Button from "@mui/material/Button";

export default function CancelBtn({ reset, setIsNeuEntryFormOpen }) {
  function onClick() {
    reset();
    setIsNeuEntryFormOpen(false);
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
