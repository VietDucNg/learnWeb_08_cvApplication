import GenInfoForm from "./GenInfoForm";
import "./GenInfoDiv.css";
import { useState } from "react";
import ClearBtn from "../utils/ClearBtn";

export default function GenInfoDiv({ setInfoData }) {
  const [resetForm, setResetForm] = useState(null);

  return (
    <section className="GenInfoDiv">
      <header className="flex-row">
        <h5>GENERAL INFORMATION</h5>
        <ClearBtn setResetForm={() => resetForm?.()} />
      </header>
      <GenInfoForm setResetForm={setResetForm} setInfoData={setInfoData} />
    </section>
  );
}
