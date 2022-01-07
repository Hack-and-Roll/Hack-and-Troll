import "../style/UserProfilePane.css";
import MenuColumn from "./MenuColumn";

function UserProfilePane(props) {
  return (
    <div class="pane">
      <h2 class="profile">{props.name}</h2>
      <div class="divider"></div>
      <MenuColumn display={props.display} setDisplay={props.setDisplay} />
    </div>
  );
}

export default UserProfilePane;
