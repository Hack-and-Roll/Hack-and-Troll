import AvatarDisplay from "./AvatarDisplay";
import AssetDescription from "./AssetDescription";
import { useAssets } from "../hooks/useAssets";

function Inventory(props) {
  const { data: assets, status } = useAssets();

  if (status === "loading") {
    return (
      <div>
        <h1 style={{ color: "#191919" }}>Inventory</h1>
        <p>Loading...</p>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div>
        <h1 style={{ color: "#191919" }}>Inventory</h1>
        <p>Error occurred while fetching inventory.</p>
      </div>
    );
  }

  return (
    <div>
      <h1 style={{ color: "#191919" }}>Inventory</h1>

      {assets?.filter((asset) => asset.completed)
        .map((asset) => {
          return (
            <div>
              <AvatarDisplay asset={asset} />
              <AssetDescription asset={asset} />
            </div>
          );
        })}
    </div>
  );
}

export default Inventory;
