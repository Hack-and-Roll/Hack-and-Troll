import "../style/ComponentBox.css";

function ComponentBox({ type, status, asset, ...props }) {
  return (
    <button
      {...props}
      disabled={status === "loading"}
      title={`Re-roll this component for 5 coins`}
      className="componentBox"
    >
      {type}
      {asset && (
        <>
          <br />
          {asset.name}
        </>
      )}
    </button>
  );
}

export default ComponentBox;
