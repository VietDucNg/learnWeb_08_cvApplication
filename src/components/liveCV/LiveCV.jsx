import CVheader from "./CVheader";
import EduShow from "./EduShow";
import "./LiveCV.css";

export default function LiveCV({ infoData, eduList }) {
  return (
    <section className="liveCV">
      <CVheader infoData={infoData} />
      <EduShow eduList={eduList} />
    </section>
  );
}
