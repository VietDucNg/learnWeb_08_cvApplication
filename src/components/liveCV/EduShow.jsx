import { GiGraduateCap } from "react-icons/gi";
import EduShowItem from "./EduShowItem";

export default function EduShow({ eduList }) {
  return (
    <section className="ShowDiv">
      <header className="ShowHeader flex-row">
        {<GiGraduateCap />} Education
      </header>
      <div className="Show flex-column">
        {eduList.map((eduItem) => (
          <EduShowItem key={eduItem.id} eduItem={eduItem} />
        ))}
      </div>
    </section>
  );
}
