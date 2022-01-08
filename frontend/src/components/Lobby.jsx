import "../style/Lobby.css";
import "../style/Button.css";
import ComponentBox from "./ComponentBox";
import AvatarDisplay from "./AvatarDisplay";
import { useAssets } from "../hooks/useAssets";
import { useConfirmUserAsset } from "../hooks/useConfirmUserAsset";
import { useRollRandomComponent } from "../hooks/useRollRandomComponent";

function Lobby(props) {
  const { data: assets } = useAssets();
  const rollRandomComponentMutation = useRollRandomComponent();
  const confirmUserAssetMutation = useConfirmUserAsset();

  const uncompletedAsset =
    !!assets && assets.length && assets.find((asset) => !asset.completed);

  const getOnClickHandler = (component_type) => {
    return () => {
      rollRandomComponentMutation.mutateAsync(component_type).catch((error) => {
        if (error?.message) {
          window.alert(error.message);
        }
      });
    };
  };

  const getRarity = () => {
    const bgRarity = uncompletedAsset?.background?.rarity;
    const faceRarity = uncompletedAsset?.face?.rarity;
    const hatRarity = uncompletedAsset?.hat?.rarity;
    const handsRarity = uncompletedAsset?.hands?.rarity;
    const bodyRarity = uncompletedAsset?.body?.rarity;
    const petRarity = uncompletedAsset?.pet?.rarity;
    return (
      (bgRarity === undefined ? 0 : bgRarity) *
      (faceRarity === undefined ? 0 : faceRarity) *
      (hatRarity === undefined ? 0 : hatRarity) *
      (handsRarity === undefined ? 0 : handsRarity) *
      (bodyRarity === undefined ? 0 : bodyRarity) *
      (petRarity === undefined ? 0 : petRarity)
    );
  };

  const onConfirmAsset = () => {
    confirmUserAssetMutation
      .mutateAsync(uncompletedAsset?.id)
      .catch((error) => {
        if (error?.message) {
          window.alert(error.message);
        }
      });
  };

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
      <button
        className="button-primary"
        onClick={onConfirmAsset}
        disabled={
          !uncompletedAsset || confirmUserAssetMutation.status === "loading"
        }
      >
        Save Your NFT!
      </button>
      <div style={{ textAlign: "left" }}>
        <p style={{ color: "#2D4263" }}></p>
        <ul style={{ color: "#2D4263" }}>
          <li>
            <span class="name">Background:</span>{" "}
            {uncompletedAsset?.background?.name},
            <span class="rarity">Rarity: </span>
            {uncompletedAsset?.background?.rarity}
          </li>
          <li>
            <span class="name">Face:</span> {uncompletedAsset?.face?.name},{" "}
            <span class="rarity">Rarity: </span>
            {uncompletedAsset?.face?.rarity}
          </li>
          <li>
            <span class="name">Hat:</span> {uncompletedAsset?.hat?.name},{" "}
            <span class="rarity">Rarity: </span>
            {uncompletedAsset?.hat?.rarity}
          </li>
          <li>
            <span class="name">Hands:</span> {uncompletedAsset?.hands?.name},{" "}
            <span class="rarity">Rarity: </span>
            {uncompletedAsset?.hands?.rarity}
          </li>
          <li>
            <span class="name">Body:</span> {uncompletedAsset?.body?.name},{" "}
            <span class="rarity">Rarity: </span>
            {uncompletedAsset?.body?.rarity}
          </li>
          <li>
            <span class="name">Pet:</span> {uncompletedAsset?.pet?.name},{" "}
            <span class="rarity">Rarity: </span>
            {uncompletedAsset?.pet?.rarity}
          </li>
        </ul>
        <p style={{ color: "#C84B31" }}>Rarity: {getRarity()}</p>
      </div>
    </div>
  );
}

export default Lobby;
