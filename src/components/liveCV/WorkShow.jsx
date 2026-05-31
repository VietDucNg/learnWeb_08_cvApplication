import { MdWorkHistory } from "react-icons/md";
import ShowItem from "../utils/ShowItem";

export default function WorkShow({ workList }) {
  return (
    <section className="ShowDiv">
      <header className="ShowHeader flex-row">
        {<MdWorkHistory />} Work Experience
      </header>
      <div className="Show flex-column">
        {workList.map((item) => (
          <ShowItem type="work" key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
