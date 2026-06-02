import Typography from "@mui/material/Typography";
import { AiOutlineProfile } from "react-icons/ai";

export default function AboutShow({ infoData }) {
  return (
    <section className="ShowDiv">
      <header className="ShowHeader flex-row">
        {<AiOutlineProfile />}{" "}
        <Typography variant={"h5"} component={"h4"}>
          Intro
        </Typography>
      </header>
      <div className="Show">
        <Typography>{infoData.about}</Typography>
      </div>
    </section>
  );
}
