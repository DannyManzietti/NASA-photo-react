import React from "react";
import ReactDOM from "react-dom";

import NASAPhoto from "./components/NASAPhoto";
import "./index.css";

function App() {
  return (
    <div className="App">
      <NASAPhoto />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
