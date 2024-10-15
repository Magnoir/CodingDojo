import React from "react";
import "./App.css";
import { CalculatorPage } from "./pages";

const App = () => {
  const methodDoesNotExist = () => {
    throw new Error("This is a forced error!"); // Cela provoque une erreur lors de l'exécution
  };
  return (
    
    <div className="App">
      <CalculatorPage />
      <button onClick={() => methodDoesNotExist()}>Break the world</button>;
    </div>

  );
};

export default App;
