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
        color: "var(--font-color)",
        borderColor: "var(--font-color)",
        textTransform: "none",
        fontSize: "1rem",
      }}
    >
      Cancel
    </Button>
  );
}
