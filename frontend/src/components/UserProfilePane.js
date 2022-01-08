import "../style/UserProfilePane.css";
import "../style/Button.css";
import MenuColumn from "./MenuColumn";
import { useAssets } from "../hooks/useAssets";
import { useUser } from "../hooks/useUser";
import { supabase } from "../supabaseClient";

function UserProfilePane(props) {
  const { data, status } = useUser();
  const { data: assets } = useAssets();

  const handleLogOut = () => {
    supabase.auth.signOut();
  };
  const logout = (
    <button class="button-primary" onClick={handleLogOut}>
      Logout
    </button>
  );

  if (status === "loading" || status === "idle") {
    return (
      <div class="pane">
        <h2 class="profile">Loading...</h2>
        {logout}
      </div>
    );
  }

  if (status === "error") {
    return (
      <div class="pane">
        <h2 class="profile">An error occurred...</h2>
        {logout}
      </div>
    );
  }

  return (
    <div class="pane">
      <h2 class="profile">{data.name}</h2>
      <MenuColumn display={props.display} setDisplay={props.setDisplay} />
      {logout}
      <div class="divider"></div>
      <h3>Coins: {data.money}</h3>
      {!!assets && (
        <h3>Assets: {assets.filter((asset) => asset.completed).length}</h3>
      )}
    </div>
  );
}

export default UserProfilePane;
