import Button from "@mui/material/Button";
import "./NewEntryBtn.css";
import { GiGraduateCap } from "react-icons/gi";
import { MdWorkHistory } from "react-icons/md";

const eduIcon = <GiGraduateCap style={{ fontSize: "2em" }} />;
const workIcon = <MdWorkHistory style={{ fontSize: "2em" }} />;

export default function NewEntryBtn({
  type,
  NewEntryBtnTitle,
  NewEntryBtnDescription,
  setIsNeuEntryFormOpen,
}) {
  function onClick() {
    setIsNeuEntryFormOpen(true);
  }

  return (
    <Button
      onClick={() => onClick()}
      className="newEntryBtn flex-column"
      sx={{ backgroundColor: "black", textTransform: "none" }}
    >
      <p className="newEntryBtnTitle flex-row">
        {type == "edu" ? eduIcon : workIcon} {NewEntryBtnTitle}
      </p>
      <p className="newEntryBtnDes"> {NewEntryBtnDescription}</p>
    </Button>
  );
}
