import "./reset.css";
import "./style.css";
import "./App.css";
import { useState, useEffect } from "react";
import Header from "./Header/Header";
import GenInfoDiv from "./GenInfoDiv/GenInfoDiv";
import EduDiv from "./EduDiv/EduDiv";
import LiveCV from "./liveCV/LiveCV";
import ClearBtn from "./utils/ClearBtn";

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
  const initialEduList = function () {
    const data = JSON.parse(localStorage.getItem("eduData"));
    if (data) return data;
    else {
      return [
        {
          id: crypto.randomUUID(),
          degreeType: "M.Sc.",
          degree: "Coding Perfectionism",
          uni: "University of Early-Bird Debugging",
          location: "Germany",
          from: "Oct 2020",
          to: "June 2023",
        },
        {
          id: crypto.randomUUID(),
          degreeType: "B.Sc.",
          degree: "90-Minute Box-to-Box Engine",
          uni: "Midfield Football Academy",
          location: "Hanoi, Vietnam",
          from: "Sep 2015",
          to: "June 2019",
        },
      ];
    }
  };

  const [eduList, setEduList] = useState(initialEduList);

  // localStorage
  useEffect(
    function () {
      localStorage.setItem("infoData", JSON.stringify(infoData));
      localStorage.setItem("eduData", JSON.stringify(eduList));
    },
    [infoData, eduList],
  );

  function clearAll() {
    localStorage.clear();
    setInfoData(initialInfoData);
    setEduList(initialEduList);
  }

  return (
    <div className="app-div">
      <Header />
      <main className="flex-row">
        <section className="left-panel">
          <div>
            <GenInfoDiv setInfoData={setInfoData} />
            <EduDiv eduList={eduList} setEduList={setEduList} />
          </div>
          <div className="clearAllDiv">
            <ClearBtn text={"Clear All"} onClick={clearAll} />
          </div>
        </section>
        <LiveCV infoData={infoData} eduList={eduList} />
      </main>
    </div>
  );
}

export default App;
