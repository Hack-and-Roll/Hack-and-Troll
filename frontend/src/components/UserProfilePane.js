import "../style/UserProfilePane.css";
import MenuColumn from "./MenuColumn";
import { useUser } from "../hooks/useUser";

function UserProfilePane(props) {
  const { data, status } = useUser();

  if (status === "loading" || status === "idle") {
    return (
      <div class="pane">
        <h2 class="profile">Loading...</h2>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div class="pane">
        <h2 class="profile">An error occurred...</h2>
      </div>
    );
  }

  return (
    <div class="pane">
      <h2 class="profile">{data.name}</h2>
      <h3>Coins: {data.money}</h3>
      <div class="divider"></div>
      <MenuColumn display={props.display} setDisplay={props.setDisplay} />
    </div>
  );
}

export default UserProfilePane;
