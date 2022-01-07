import "../style/UserProfilePane.css";
import MenuColumn from "./MenuColumn";
import { useAssets } from "../hooks/useAssets";
import { useUser } from "../hooks/useUser";

function UserProfilePane(props) {
  const { data, status } = useUser();
  const { data: assets } = useAssets();

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
      {!!assets && assets.length && assets.filter(asset => asset.completed)
        .map((asset) => {
          return <div>{asset.id}</div>;
        })}
      <div class="divider"></div>
      <MenuColumn display={props.display} setDisplay={props.setDisplay} />
    </div>
  );
}

export default UserProfilePane;
