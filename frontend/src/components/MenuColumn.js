import "../style/Button.css";
import "../style/MenuColumn.css";

function MenuColumn(props) {
  return (
    <div class="menu">
      <button
        class={
          props.display === "lobby" ? "button-secondary" : "button-primary"
        }
        onClick={() => props.setDisplay("lobby")}
      >
        Lobby
      </button>
      <button
        class={
          props.display === "lobby" ? "button-primary" : "button-secondary"
        }
        onClick={() => props.setDisplay("inventory")}
      >
        Inventory
      </button>
    </div>
  );
}

export default MenuColumn;
