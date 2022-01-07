import "../style/ComponentBox.css";

function ComponentBox({ type, status, asset, ...props }) {
  return (
    <button {...props} disabled={status === "loading"} className="componentBox">
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
