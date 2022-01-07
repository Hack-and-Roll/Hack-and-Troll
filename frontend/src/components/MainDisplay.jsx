import Lobby from "./Lobby.jsx";
import Inventory from "./Inventory.jsx";
import "../style/MainDisplay.css";

function MainDisplay(props) {
  let display;
  if (props.display === "lobby") {
    display = <Lobby />;
  } else {
    display = <Inventory />;
  }

  return <div class="mainDisplay">{display}</div>;
}

export default MainDisplay;
