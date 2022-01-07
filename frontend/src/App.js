import "./App.css";
import React from "react";
import UserProfilePane from "./components/UserProfilePane.js";
import MainDisplay from "./components/MainDisplay";
import Auth from "./Auth.jsx";

function App() {
  const [display, setDisplay] = React.useState("lobby");
  const [isLoggedIn, setLoggedIn] = React.useState(true);

  return (
    <div>
      {isLoggedIn ? (
        <div className="App">
          <UserProfilePane
            setDisplay={setDisplay}
            display={display}
            name="Tim"
          />
          <MainDisplay display={display} />
        </div>
      ) : (
        <Auth />
      )}
    </div>
  );
}

export default App;
