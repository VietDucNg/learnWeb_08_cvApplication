import "../styles/reset.css";
import "../styles/style.css";
import "../styles/App.css";
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
