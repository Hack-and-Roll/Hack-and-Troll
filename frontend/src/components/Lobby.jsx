import "../style/Lobby.css";
import "../style/Button.css";
import ComponentBox from "./ComponentBox";
import AvatarDisplay from "./AvatarDisplay";
import { useAssets } from "../hooks/useAssets";
import { useRollRandomComponent } from "../hooks/useRollRandomComponent";

function Lobby(props) {
  const { data: assets } = useAssets();
  const rollRandomComponentMutation = useRollRandomComponent();

  const uncompletedAsset = !!assets && assets.length && assets.find((asset) => !asset.completed);

  const getOnClickHandler = (component_type) => {
    return () => {
      rollRandomComponentMutation.mutateAsync(component_type).catch((error) => {
        if (error?.message) {
          window.alert(error.message);
        }
      });
    }
  }

  return (
    <div>
      <div class="lobby">
        <div class="lobby-column">
          <ComponentBox
            type="background"
            status={rollRandomComponentMutation.status}
            asset={uncompletedAsset?.background}
            onClick={getOnClickHandler("background")}
          />
          <ComponentBox
            type="face"
            status={rollRandomComponentMutation.status}
            asset={uncompletedAsset?.face}
            onClick={getOnClickHandler("face")}
          />
          <ComponentBox
            type="hat"
            status={rollRandomComponentMutation.status}
            asset={uncompletedAsset?.hat}
            onClick={getOnClickHandler("hat")}
          />
        </div>
        <AvatarDisplay asset={uncompletedAsset} />
        <div class="lobby-column">
          <ComponentBox
            type="hands"
            status={rollRandomComponentMutation.status}
            asset={uncompletedAsset?.hands}
            onClick={getOnClickHandler("hands")}
          />
          <ComponentBox
            type="body"
            status={rollRandomComponentMutation.status}
            asset={uncompletedAsset?.body}
            onClick={getOnClickHandler("body")}
          />
          <ComponentBox
            type="pet"
            status={rollRandomComponentMutation.status}
            asset={uncompletedAsset?.pet}
            onClick={getOnClickHandler("pet")}
          />
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
