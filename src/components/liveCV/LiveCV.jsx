import CVheader from "./CVheader";
import "./LiveCV.css";

export default function LiveCV({ infoData }) {
  return (
    <section className="liveCV">
      <CVheader infoData={infoData} />
    </section>
  );
}
