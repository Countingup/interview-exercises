import React from "react";
import "./App.css";
import Table from "./Table";
import data from "./out.json";

const App = () => {
  console.log(data);

  return (
    <div className="App">
      <h1>Countingup</h1>
      <Table />
    </div>
  );
};

export default App;
