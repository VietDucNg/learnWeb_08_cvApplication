import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import Button from "@mui/material/Button";

export default function ExportBtn({ handelPrint }) {
  return (
    <Button sx={{ gap: "5px" }} variant="contained" onClick={handelPrint}>
      <FileDownloadOutlinedIcon /> Export PDF
    </Button>
  );
}
