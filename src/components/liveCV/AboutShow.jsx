import { AiOutlineProfile } from "react-icons/ai";

export default function AboutShow({ infoData }) {
  return (
    <section className="ShowDiv">
      <header className="ShowHeader flex-row">
        {<AiOutlineProfile />} Intro
      </header>
      <div className="Show">{infoData.about}</div>
    </section>
  );
}
