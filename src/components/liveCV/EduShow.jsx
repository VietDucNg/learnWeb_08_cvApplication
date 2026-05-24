import { GiGraduateCap } from "react-icons/gi";
import EduShowItem from "./EduShowItem";
import "./EduShow.css";

export default function EduShow({ eduList }) {
  return (
    <section className="EduShowDiv">
      <header className="EduShowHeader flex-row">
        {<GiGraduateCap />} Education
      </header>
      <div className="EduShow flex-column">
        {eduList.map((eduItem) => (
          <EduShowItem key={eduItem.id} eduItem={eduItem} />
        ))}
      </div>
    </section>
  );
}
