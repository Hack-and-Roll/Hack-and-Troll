
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


function tap(c, colour) {
    c.fillStyle = colour;
    c.fillRect(70, 120, 250,10);
    c.fillRect(80, 110, 200,10);
    c.fillRect(80, 100, 160,10);
    c.fillRect(80, 90, 160,10);
    c.fillRect(80, 80, 160,10);
    c.fillRect(80, 70, 160,10);
}

function pap(c, colour) {
    c.fillStyle = colour;
    c.fillRect(50, 120, 250,10);
    c.fillRect(60, 110, 190,10);
    c.fillRect(100, 100, 100,10);
    c.fillRect(100, 90, 100,10);
    c.fillRect(100, 80, 100,10);
    c.fillRect(100, 70, 100,10);
    c.fillRect(100, 60, 100,10);
    c.fillRect(100, 50, 100,10);
}

function jap(c, colour) {
    c.fillStyle = colour;
    c.fillRect(50, 120, 250,10);
    c.fillRect(60, 110, 190,10);
    c.fillRect(100, 100, 100,10);
}

function drawEmpty(c, colour) {}

var hats = {
    halo: halo,
    cap: cap,
    tap: tap,
    pap: pap,
    jap: jap,
    empty: drawEmpty
}

export {hats as default};