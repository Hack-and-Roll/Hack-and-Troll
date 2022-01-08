import "../style/AvatarDisplay.css";
import React, {useRef} from 'react';
import backgrounds from "../graphics/backgrounds.js";
import pets from "../graphics/pets.js";
import bodies from "../graphics/bodies.js";
import faces from "../graphics/faces.js";
import arms from "../graphics/arms.js";
import hats from "../graphics/hats.js";


function drawBackground(c, key, colour) {
    backgrounds[key](c, colour);
}

function drawFace(c, key, colour) {
    faces[key](c, colour);
}

function drawBody(c, key, colour) {
    bodies[key](c, colour);
}

function drawHat(c, key, colour) {
    hats[key](c, colour);
}

function drawArms(c, key, colour) {
    arms[key](c, colour);
}

function drawPet(c, key, colour) {
    pets[key](c, colour);
}

function drawComponents(c, asset) {
  drawBackground(c, asset?.background?.name || "empty", null);
  drawBody(c, asset?.body?.name || "empty", '#F0EEAA');
  drawArms(c, asset?.hands?.name || "empty", "purple");
  drawFace(c, asset?.face?.name || "empty", '#593a00');
  drawHat(c, asset?.hat?.name || "empty", null);
  drawPet(c, asset?.pet?.name || "empty", '#b700ff');
}

function AvatarDisplay(props) {
  const canvasRef = useRef(null);
  const asset = props.asset;

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const c = canvas.getContext("2d");

    return drawComponents(c, asset);
  }, [asset]);

  return (
  <div className="avatarDisplay">
    <canvas ref={canvasRef} width="400" height="400"></canvas>
  </div>
  );
}

export default AvatarDisplay;
