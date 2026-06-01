import GenInfoForm from "./GenInfoForm";
import Typography from "@mui/material/Typography";
import "./GenInfoDiv.css";

export default function GenInfoDiv({ setInfoData }) {
  return (
    <section className="GenInfoDiv">
      <Typography variant="h6" component={"h2"}>
        GENERAL INFORMATION
      </Typography>
      <GenInfoForm setInfoData={setInfoData} />
    </section>
  );
}
