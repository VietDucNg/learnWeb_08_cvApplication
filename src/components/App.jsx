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

  // handle edu data
  const initialEduList = [
    {
      id: crypto.randomUUID(),
      degreeType: "M.Sc.",
      degree: "Coding Perfectionism",
      uni: "University of Early-Bird Debugging",
      from: 2020,
      to: 2023,
    },
    {
      id: crypto.randomUUID(),
      degreeType: "B.Sc. ",
      degree: "90-Minute Box-to-Box Engine",
      uni: "Midfield Football Academy",
      from: 2015,
      to: 2019,
    },
  ];

  const [eduList, setEduList] = useState(initialEduList);

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
          <EduDiv eduList={eduList} setEduList={setEduList} />
        </section>
        <LiveCV infoData={infoData} />
      </main>
    </div>
  );
}

export default App;
