const getRarity = (asset) => {
  const bgRarity = asset?.background?.rarity;
  const faceRarity = asset?.face?.rarity;
  const hatRarity = asset?.hat?.rarity;
  const handsRarity = asset?.hands?.rarity;
  const bodyRarity = asset?.body?.rarity;
  const petRarity = asset?.pet?.rarity;
  return (
    (bgRarity === undefined ? 0 : bgRarity) *
    (faceRarity === undefined ? 0 : faceRarity) *
    (hatRarity === undefined ? 0 : hatRarity) *
    (handsRarity === undefined ? 0 : handsRarity) *
    (bodyRarity === undefined ? 0 : bodyRarity) *
    (petRarity === undefined ? 0 : petRarity)
  );
};

function AssetDescription(props) {
  const { asset } = props;

  return (
    <div style={{ textAlign: "left" }}>
      <p style={{ color: "#2D4263" }}></p>
      <ul style={{ color: "#2D4263" }}>
        <li>
          <span class="name">Background:</span>{" "}
          {asset?.background?.name},{" "}
          <span class="rarity">Rarity: </span>
          {asset?.background?.rarity}
        </li>
        <li>
          <span class="name">Face:</span> {asset?.face?.name},{" "}
          <span class="rarity">Rarity: </span>
          {asset?.face?.rarity}
        </li>
        <li>
          <span class="name">Hat:</span> {asset?.hat?.name},{" "}
          <span class="rarity">Rarity: </span>
          {asset?.hat?.rarity}
        </li>
        <li>
          <span class="name">Hands:</span> {asset?.hands?.name},{" "}
          <span class="rarity">Rarity: </span>
          {asset?.hands?.rarity}
        </li>
        <li>
          <span class="name">Body:</span> {asset?.body?.name},{" "}
          <span class="rarity">Rarity: </span>
          {asset?.body?.rarity}
        </li>
        <li>
          <span class="name">Pet:</span> {asset?.pet?.name},{" "}
          <span class="rarity">Rarity: </span>
          {asset?.pet?.rarity}
        </li>
      </ul>
      <p style={{ color: "#C84B31" }}>Rarity: {getRarity(asset)}</p>
    </div>
  );
}

export default AssetDescription;
