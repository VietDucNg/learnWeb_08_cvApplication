import Typography from "@mui/material/Typography";
import { IoDocumentTextOutline } from "react-icons/io5";
import "./Logo.css";

export default function Logo() {
  return (
    <div className="logo-div flex-row">
      <IoDocumentTextOutline className="logo-icon" />
      <Typography
        variant={"h6"}
        component={"h1"}
        color="primary"
        sx={{ fontWeight: "bold" }}
      >
        CV Builder
      </Typography>
    </div>
  );
}
