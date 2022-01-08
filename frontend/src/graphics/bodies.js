function drawNormal(c, colour) {
    c.beginPath();
    c.fillStyle = '#88CC99';
    c.moveTo(100, 200);
    c.lineTo(220, 200);
    c.lineTo(230, 400);
    c.lineTo(90, 400);
    c.fill();
    c.closePath();
    c.fill();

    c.beginPath();
    c.fillStyle = colour || '#F0EEAA';
    c.beginPath();
    c.moveTo(150, 200);
    c.lineTo(170, 200);
    c.lineTo(190, 400);
    c.lineTo(150, 400);
    c.fill();
    c.closePath();
    c.fill();
}

function drawBeach(c, colour) {
    c.fillStyle = colour || '#F0EEAA';
    c.fillRect(90, 200, 140, 120);

    c.fillStyle = 'white';
    c.fillRect(90, 320, 140, 80);

    c.fillStyle = 'black';
    c.fillRect(160, 360, 6, 40);
    c.fillRect(90, 320, 140, 2);
}

function drawEmpty(c, colour) {}


var bodies = {
    normal: drawNormal,
    beach: drawBeach,
    empty: drawEmpty
}

export {bodies as default};