import GenInfoForm from "./GenInfoForm";
import "./GenInfoDiv.css";

export default function GenInfoDiv({ setInfoData }) {
  return (
    <section className="GenInfoDiv">
      <h5>GENERAL INFORMATION</h5>
      <GenInfoForm setInfoData={setInfoData} />
    </section>
  );
}
