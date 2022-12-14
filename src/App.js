import "./App.css";
import Listt from "./components/Listt";
import Header from "./components/Header";

function App() {
  return <div className="container">
    <div className="row">
      {/* <Listt list={[["warning", "Shoaib"],
      ["primary", "Sharjeel"],
      ["info", "Sibgha"]]} /> */}

      <Header nav={["Learn", "Blog"]} title="Web.Dev" />

      <Header nav={["Learn", "Blog", "Measure"]} title="Sk" />
      <Header nav={["Learn", "Blog", "Measure", "About"]} />

    </div>
  </div>;
}

export default App;
