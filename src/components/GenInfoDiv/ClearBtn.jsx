import Button from "@mui/material/Button";
import { BsTrash } from "react-icons/bs";
import "./clearBtn.css";

export default function ClearBtn({ reset }) {
  return (
    <Button
      onClick={() => reset()}
      className="clearBtn flex-row"
      variant="text"
      color="white"
    >
      <BsTrash />
      Clear
    </Button>
  );
}
