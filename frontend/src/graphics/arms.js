function drawNormal(c, colour) {
    c.fillStyle = colour || 'red';
    c.beginPath();
    c.moveTo(100, 200);
    c.quadraticCurveTo(10, 230, 40, 330);
    c.lineTo(55, 320);
    c.quadraticCurveTo(30, 240, 100, 230);
    c.closePath();
    c.fill();

    c.beginPath();
    c.moveTo(225, 200);
    c.quadraticCurveTo(250, 280, 320, 236);
    c.lineTo(330, 250);
    c.quadraticCurveTo(250, 300, 220, 240);
    c.closePath();
    c.fill();

    c.fillStyle = 'sandybrown';
    c.beginPath();
    c.arc(50, 330, 15, 0, Math.PI * 2, false);
    c.closePath();
    c.fill();
    c.beginPath();
    c.arc(330, 240, 15, 0, Math.PI * 2, false);
    c.closePath();
    c.fill();

    
}

function drawRobot(c, colour) {
    c.fillStyle = 'grey';
    c.strokeStyle = 'black';
    c.fillRect(50, 200, 50, 180);
    c.strokeRect(65, 200, 20, 180);
    c.fillRect(220, 200, 50, 180);
    c.strokeRect(235, 200, 20, 180);

    c.fillStyle = 'darkgrey';
    c.strokeStyle = 'grey';
    c.beginPath();
    c.arc(75, 290, 30, 0, Math.PI * 2, false);
    c.closePath();
    c.fill();
    c.stroke();
    
    c.beginPath();
    c.arc(245, 290, 30, 0, Math.PI * 2, false);
    c.closePath();
    c.fill();
    c.stroke();
}

function drawArmless(c, colour) {}


var arms = {
    normal: drawNormal,
    robot: drawRobot,
    empty: drawArmless,
}

export {arms as default};