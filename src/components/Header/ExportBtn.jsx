import { MdOutlineFileDownload } from "react-icons/md";
import Button from "@mui/material/Button";

export default function ExportBtn() {
  return (
    <Button sx={{ gap: "5px" }} variant="contained">
      <MdOutlineFileDownload /> Export PDF
    </Button>
  );
}
