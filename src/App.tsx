import React from "react";
import "./App.css";
import { CalculatorPage } from "./pages";

const App = () => {
  return (
    <div className="App">
      <CalculatorPage />
    </div>
    <button onClick={() => methodDoesNotExist()}>Break the world</button>;
  );
};

export default App;
