import "./reset.css";
import "./style.css";
import "./App.css";
import { useState, useEffect } from "react";
import Header from "./Header/Header";
import GenInfoDiv from "./GenInfoDiv/GenInfoDiv";
import EduDiv from "./EduDiv/EduDiv";
import WorkDiv from "./WorkDiv/WorkDiv";
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
        about:
          "Self-taught web developer with a background in geospatial analysis and a box-to-box midfielder in spirit. Passionate about building user-friendly web applications, especially those involving maps, spatial data, and sleek UI design. Turning “it works on my machine” into production-ready applications. Outside of coding, I enjoy football, making long shots and beautiful tackles, and occasionally pressing high like it’s the 90th minute of a World Cup final.",
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

  // handel work data
  const initialWorkList = function () {
    const data = JSON.parse(localStorage.getItem("workData"));
    if (data) return data;
    else {
      return [
        {
          id: crypto.randomUUID(),
          position: "Junior Fullstack Wizard",
          company: "FC React United",
          location: "Germany",
          from: "May 2025",
          to: "Present",
          role: "- Built responsive web applications that successfully survived deployment on Friday nights.\n- Reduced loading times by 35% by convincing unnecessary components to retire early.",
        },
        {
          id: crypto.randomUUID(),
          position: "Junior Debugging Specialist",
          company: "Console.log() GmbH",
          location: "Germany",
          from: "May 2024",
          to: "April 2025",
          role: "- Discovered that 44% of bugs disappeared after carefully reading the error message.\n- Responsible for locating bugs by repeatedly printing console.log() and hoping for the best.\n- Earned Employee of the Month after locating a missing semicolon that had been hiding for three days.",
        },
        {
          id: crypto.randomUUID(),
          position: "Geospatial Data Magician",
          company: "Midfield Analytics GmbH",
          location: "Germany",
          from: "Jan 2021",
          to: "April 2024",
          role: "- Transformed millions of satellite pixels into meaningful maps and occasionally colorful mistakes.\n- Developed interactive WebGIS applications that helped users find patterns faster than defenders could find me in midfield.\n- Automated geospatial workflows, saving hundreds of hours and several coffee breaks.",
        },
      ];
    }
  };

  const [workList, setWorkList] = useState(initialWorkList);

  // localStorage
  useEffect(
    function () {
      localStorage.setItem("infoData", JSON.stringify(infoData));
      localStorage.setItem("eduData", JSON.stringify(eduList));
      localStorage.setItem("workData", JSON.stringify(workList));
    },
    [infoData, eduList, workList],
  );

  function clearAll() {
    localStorage.clear();
    setInfoData(initialInfoData);
    setEduList(initialEduList);
    setWorkList(initialWorkList);
  }

  return (
    <div className="app-div">
      <Header />
      <main className="flex-row">
        <section className="left-panel flex-column">
          <GenInfoDiv setInfoData={setInfoData} />
          <EduDiv eduList={eduList} setEduList={setEduList} />
          <WorkDiv workList={workList} setWorkList={setWorkList} />
          <div className="clearAllDiv">
            <ClearBtn text={"Clear All"} onClick={clearAll} />
          </div>
        </section>
        <LiveCV infoData={infoData} eduList={eduList} workList={workList} />
      </main>
    </div>
  );
}

export default App;
