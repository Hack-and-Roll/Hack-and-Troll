import "../style/Lobby.css";
import "../style/Button.css";
import ComponentBox from "./ComponentBox";
import AvatarDisplay from "./AvatarDisplay";

function Lobby(props) {
  return (
    <div>
      <div class="lobby">
        <div class="lobby-column">
          <ComponentBox />
          <ComponentBox />
          <ComponentBox />
        </div>
        <AvatarDisplay />
        <div class="lobby-column">
          <ComponentBox />
          <ComponentBox />
          <ComponentBox />
        </div>
      </div>
      <button class="button-primary">Save Your NFT!</button>
      <div>
        <p style={{ color: "#2D4263" }}>Description of items and rarities</p>
        <p style={{ color: "#C84B31" }}>Rarity: Super Rare!!</p>
      </div>
    </div>
  );
}

export default Lobby;
