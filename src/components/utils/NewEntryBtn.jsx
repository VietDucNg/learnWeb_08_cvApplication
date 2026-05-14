import Button from "@mui/material/Button";
import "./NewEntryBtn.css";
import { GiGraduateCap } from "react-icons/gi";

export default function NewEntryBtn({
  NewEntryBtnTitle,
  NewEntryBtnDescription,
}) {
  return (
    <Button
      className="newEntryBtn flex-column"
      sx={{ backgroundColor: "black", textTransform: "none" }}
    >
      <p className="newEntryBtnTitle flex-row">
        {<GiGraduateCap style={{ fontSize: "2em" }} />} {NewEntryBtnTitle}
      </p>
      <p className="newEntryBtnDes"> {NewEntryBtnDescription}</p>
    </Button>
  );
}
