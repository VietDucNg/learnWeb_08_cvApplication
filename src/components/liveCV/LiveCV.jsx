import CVheader from "./CVheader";
import AboutShow from "./AboutShow";
import EduShow from "./EduShow";
import "./LiveCV.css";

export default function LiveCV({ infoData, eduList }) {
  return (
    <section className="liveCV">
      <CVheader infoData={infoData} />
      {infoData.about && <AboutShow infoData={infoData} />}
      {eduList.length > 0 && <EduShow eduList={eduList} />}
    </section>
  );
}
