import "./App.css";
import React from "react";
import UserProfilePane from "./components/UserProfilePane.js";
import MainDisplay from "./components/MainDisplay";

function App() {
  const [display, setDisplay] = React.useState("lobby");

  return (
    <div className="App">
      <UserProfilePane setDisplay={setDisplay} display={display} name="Tim" />
      <MainDisplay display={display} />
    </div>
  );
}

export default App;
