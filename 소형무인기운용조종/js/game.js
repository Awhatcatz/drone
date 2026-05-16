const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 400;

let droneX = 220;

function drawDrone(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle = "cyan";

    ctx.fillRect(droneX, 330, 60, 40);
}

drawDrone();

document.getElementById("leftBtn")
.addEventListener("touchstart", ()=>{

    droneX -= 20;

    drawDrone();
});

document.getElementById("rightBtn")
.addEventListener("touchstart", ()=>{

    droneX += 20;

    drawDrone();
});