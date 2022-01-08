var cloud = function(c, x, y) {
    c.fillStyle = 'white';
    c.beginPath();
    c.arc(x, y, 20, Math.PI / 2, Math.PI * 2, false);
    c.arc(x + 18, y - 15, 16, Math.PI, Math.PI * 2, false);
    c.arc(x + 40, y + 4, 16, 3 * Math.PI / 2, Math.PI / 2, false);
    c.closePath();
    c.fill();
}

var tree = function(c, x, y) {
    c.fillStyle = 'brown';
    c.fillRect(x, y, 12, -30);

    c.fillStyle = 'darkgreen';
    c.beginPath();
    c.moveTo(x - 12, y - 12);
    c.lineTo(x + 24, y - 12);
    c.lineTo(x + 6, y - 32);
    c.closePath();
    c.fill();
    c.beginPath();
    c.moveTo(x - 10, y - 22);
    c.lineTo(x + 22, y - 22);
    c.lineTo(x + 6, y - 50);
    c.closePath();
    c.fill();
    c.beginPath();
    c.moveTo(x - 8, y - 36);
    c.lineTo(x + 20, y - 36);
    c.lineTo(x + 6, y - 60);
    c.closePath();
    c.fill();
}

var star = function(c, x, y) {
    c.fillStyle = '#DDE022';
    c.beginPath();
    c.moveTo(x, y);
    c.lineTo(x + 5, y + 2);
    c.lineTo(x + 7, y + 10);
    c.lineTo(x + 9, y + 2);
    c.lineTo(x + 14, y);
    c.lineTo(x + 9, y - 2);
    c.lineTo(x + 7, y - 10);
    c.lineTo(x + 5, y - 2);
    c.closePath();
    c.fill();
}

function drawPlain(c, colour) {
    c.fillStyle = colour || '#9999F0';
    c.fillRect(0, 0, 400, 400);
}

function drawCloud(c, colour) {
    c.fillStyle = '#9999FF';
    c.fillRect(0, 0, 400, 400);

    cloud(320, 100);
    cloud(210, 60);
    cloud(60, 110);
    cloud(50, 290);
    cloud(270, 180);
    cloud(0, 190);
    cloud(360, 280);
    cloud(230, 300);
    
}

function drawForest(c, colour) {
    drawCloud(colour);
    
    c.fillStyle = 'green';
    c.fillRect(0, 360, 400, 60);

    tree(380, 360);
    tree(300, 380);
    tree(260, 360);
    tree(200, 368);
    tree(340, 384);
    tree(0, 370);
    tree(60, 380);
}

function drawSpace(c, colour) {
    c.fillStyle = '#301940';
    c.fillRect(0, 0, 400, 400);

    star(300, 100);
    star(60, 40);
    star(15, 90);
    star(50, 160);
    star(30, 210);
    star(20, 280);
    star(90, 100);
    star(120, 140);
    star(130, 70);
    star(180, 50);
    star(250, 20);
    star(320, 50);
    star(270, 160);
    star(340, 180);
    star(370, 220);
    star(370, 90);
    star(320, 290);
    star(270, 250);
}

function drawEmpty(c, colour) {
    c.StrokeStyle = 'black';
    c.strokeRect(0, 0, 400, 400);
}

var backgrounds = {
    plain: drawPlain,
    cloud: drawCloud,
    forest: drawForest,
    space: drawSpace,
    empty: drawEmpty
}

export {backgrounds as default};