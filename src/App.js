import "./App.css";
import Listt from "./components/Listt";

function App() {
  return <div className="container">
    <div className="row">
      <Listt list={[["warning", "Shoaib"],
      ["primary", "Sharjeel"],
      ["info", "Sibgha"]]} />

    </div>
  </div>;
}

export default App;
