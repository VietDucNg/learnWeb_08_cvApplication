import Button from "@mui/material/Button";
import "./SaveBtn.css";

export default function SaveBtn() {
  return (
    <Button
      type="submit"
      form="gen-info-form"
      className="save-btn"
      variant="outlined"
    >
      Save Contact Info
    </Button>
  );
}
