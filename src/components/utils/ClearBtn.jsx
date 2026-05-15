import Button from "@mui/material/Button";
import { BsTrash } from "react-icons/bs";
import "./clearBtn.css";

export default function ClearBtn({ onClick, text }) {
  return (
    <Button
      onClick={() => onClick()}
      className="clearBtn flex-row"
      variant="text"
      color="white"
      sx={{ textTransform: "none", fontSize: "1rem" }}
      startIcon={<BsTrash />}
    >
      {text}
    </Button>
  );
}
