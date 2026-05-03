import "./reset.css";
import "./style.css";
import "./App.css";
import Header from "./Header/Header";
import GenInfoDiv from "./GenInfoDiv/GenInfoDiv";
import LiveCV from "./liveCV/LiveCV";

function App() {
  return (
    <div className="app-div">
      <Header />
      <main className="flex-row">
        <GenInfoDiv />
        <LiveCV />
      </main>
    </div>
  );
}

export default App;
