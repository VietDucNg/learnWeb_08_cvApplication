import { GiGraduateCap } from "react-icons/gi";
import ShowItem from "../utils/ShowItem";
import Typography from "@mui/material/Typography";

export default function EduShow({ eduList }) {
  return (
    <section className="ShowDiv">
      <header className="ShowHeader flex-row">
        {<GiGraduateCap />}
        <Typography variant={"h5"} component={"h4"}>
          Education
        </Typography>
      </header>
      <div className="Show flex-column">
        {eduList.map((item) => (
          <ShowItem type="edu" key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
