import Button from "@mui/material/Button";
import { BsTrash } from "react-icons/bs";

export default function ClearBtn({ onClick, text, sx }) {
  return (
    <Button
      onClick={() => onClick()}
      variant="text"
      color="white"
      sx={{ ...sx }}
      startIcon={<BsTrash />}
    >
      {text}
    </Button>
  );
}
