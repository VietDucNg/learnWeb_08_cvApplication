import "./reset.css";
import "./style.css";
import "./App.css";
import { useState } from "react";
import Header from "./Header/Header";
import GenInfoDiv from "./GenInfoDiv/GenInfoDiv";
import LiveCV from "./liveCV/LiveCV";

function App() {
  const initialInfoData = {
    name: "Viet Nguyen",
    phone: "+49 123 456 7890",
    email: "viet.nguyen@webdev.com",
    location: "Greifswald, Germany",
    title: "WebGIS developer",
  };
  const [infoData, setInfoData] = useState(initialInfoData);

  return (
    <div className="app-div">
      <Header />
      <main className="flex-row">
        <GenInfoDiv setInfoData={setInfoData} />
        <LiveCV infoData={infoData} />
      </main>
      <button onClick={() => console.log(infoData)}>test</button>
    </div>
  );
}

export default App;
