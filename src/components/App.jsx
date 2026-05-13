import "./reset.css";
import "./style.css";
import "./App.css";
import { useState, useEffect } from "react";
import Header from "./Header/Header";
import GenInfoDiv from "./GenInfoDiv/GenInfoDiv";
import EduDiv from "./EduDiv/EduDiv";
import LiveCV from "./liveCV/LiveCV";

function App() {
  // handle general info data
  const initialInfoData = function () {
    const data = JSON.parse(localStorage.getItem("infoData"));
    if (data) return data;
    else {
      return {
        name: "Viet Nguyen",
        phone: "+49 123 456 7890",
        email: "viet.nguyen@webdev.com",
        location: "Greifswald, Germany",
        title: "WebGIS developer",
      };
    }
  };

  const [infoData, setInfoData] = useState(initialInfoData);

  useEffect(
    function () {
      localStorage.setItem("infoData", JSON.stringify(infoData));
    },
    [infoData],
  );

  return (
    <div className="app-div">
      <Header />
      <main className="flex-row">
        <section className="left-panel">
          <GenInfoDiv setInfoData={setInfoData} />
          <EduDiv />
        </section>
        <LiveCV infoData={infoData} />
      </main>
    </div>
  );
}

export default App;
