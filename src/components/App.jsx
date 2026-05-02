import "./reset.css";
import "./style.css";
import "./App.css";
import Header from "./Header/Header";
import GenInfoDiv from "./GenInfoDiv/GenInfoDiv";

function App() {
  return (
    <div className="app-div">
      <Header />
      <main>
        <GenInfoDiv />
      </main>
    </div>
  );
}

export default App;
