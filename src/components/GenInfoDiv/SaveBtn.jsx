import Button from "@mui/material/Button";

export default function SaveBtn() {
  return (
    <Button
      type="submit"
      form="gen-info-form"
      variant="outlined"
      sx={{
        flex: "1",
        textTransform: "none",
        fontSize: "1rem",
        backgroundColor: "custom.mainBackground",
      }}
    >
      Save Contact Info
    </Button>
  );
}
