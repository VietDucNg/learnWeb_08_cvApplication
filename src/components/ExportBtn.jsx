import { MdOutlineFileDownload } from "react-icons/md";
import { Download } from "lucide-react";
import "../styles/ExportBtn.css";
import Button from "@mui/material/Button";

export default function ExportBtn() {
  return (
    <Button className="export-btn" variant="contained">
      <MdOutlineFileDownload /> Export PDF
    </Button>
    // <button className="export-btn flex-row">
    //   <MdOutlineFileDownload /> Export PDF
    // </button>
  );
}
