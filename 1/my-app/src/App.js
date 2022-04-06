import ALLItems from "./component/ALLItems";
import SeletedItems from "./component/SeletedItems";
import React from "react";
import Context from "./CheckItem";

function App() {
  return (
    <Context>
      <div className="container">
        <div className="allItems">
          <ALLItems  />
        </div>

        <div className="listContainer">
          <SeletedItems  />
        </div>
      </div>
    </Context>
  );
}

export default App;
