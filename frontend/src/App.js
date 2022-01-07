import "./App.css";
import React from "react";
import UserProfilePane from "./components/UserProfilePane";
import MainDisplay from "./components/MainDisplay";
import Auth from "./Auth";
import { useAuth } from "./hooks/useAuth";

function App() {
  const [display, setDisplay] = React.useState("lobby");
  const isLoggedIn = !!useAuth().user();

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
