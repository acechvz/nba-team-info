import React from "react";
import FloatingBall from "./components/Floating/FloatingBall";
import Players from "./components/Player/Players/Players";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Players />
      <FloatingBall />
    </div>
  );
}

export default App;
