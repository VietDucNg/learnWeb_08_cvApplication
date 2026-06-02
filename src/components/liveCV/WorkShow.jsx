import { MdWorkHistory } from "react-icons/md";
import ShowItem from "../utils/ShowItem";
import Typography from "@mui/material/Typography";

export default function WorkShow({ workList }) {
  return (
    <section className="ShowDiv">
      <header className="ShowHeader flex-row">
        {<MdWorkHistory />}
        <Typography variant="h5" component="h4">
          Work Experience
        </Typography>
      </header>
      <div className="Show flex-column">
        {workList.map((item) => (
          <ShowItem type="work" key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
