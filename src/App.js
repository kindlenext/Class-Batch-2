import "./App.css";
import Card from "./components/Card";
import React from "react";

function App() {
  return (
    <div className="row gx-3">
      <Card
        img="https://cdn.pocket-lint.com/r/s/1201x/assets/images/144028-games-feature-pubg-image1-zkpdntqgbc.jpg"
        title="PUBG MOBILE"
        para="PUBG MOBILE is the FREE battle royale shooter that chosen by over 1 billion players worldwide.
         Extreme battles in 10-minute matches, play anytime, anywhere!"
        link="https://www.pubgmobile.com/"
        linktext="Pubg"
        alt="pubg"
      />

      <Card
        img="https://wallpaperaccess.com/full/899965.jpg"
        title="Grand Theft Auto V"
        para="Grand Theft Auto V and GTA Online — now upgraded for PlayStation 5 and Xbox Series ... Story Mode adventure and the dynamic, ever-evolving online world of GTA."
        link="https://www.rockstargames.com/gta-v"
        linktext="GTA V"
        alt="gta v"
      />
    </div>
  );
}

export default App;
