
function halo(c, colour) {
    c.strokeStyle = 'yellow';
    c.lineWidth = 4;
    c.beginPath();
    c.ellipse(160, 90, 60, 26, 0, 0, Math.PI * 2, false);
    c.closePath();
    c.stroke();
}

function cap(c, colour) {
    c.fillStyle = colour || 'cornflowerblue';
    c.strokeStyle = 'black';
    c.lineWidth = 2
    c.beginPath();
    c.ellipse(160, 115, 60, 50, 0, 0, Math.PI, true);
    c.ellipse(160, 115, 60, 10, 0, Math.PI, 0, true);
    c.closePath();
    c.fill();
    c.stroke();
    c.beginPath();
    c.ellipse(190, 118, 40, 20, 0, -Math.PI, -Math.PI / 4, true);
    c.quadraticCurveTo(180, 100, 150, 118);
    c.closePath();
    c.fill();
    c.stroke();
}

function drawEmpty(c, colour) {}

var hats = {
    halo: halo,
    cap: cap,
    empty: drawEmpty
}

export {hats as default};