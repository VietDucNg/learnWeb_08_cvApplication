import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ClearBtn({ onClick, text, sx }) {
  return (
    <Button
      onClick={() => onClick()}
      variant="text"
      color="white"
      sx={{ ...sx }}
      startIcon={<DeleteIcon />}
    >
      {text}
    </Button>
  );
}
