let canvas = document.getElementById("myCanvas");
let pencil = canvas.getContext("2d");


function drawGrass() {
    pencil.fillStyle = "#15660b";
    pencil.fillRect(0, 350, 500, 100);
}

function drawSun() {
    pencil.beginPath();
    pencil.arc(75, 50, 40, 0, Math.PI * 2);
    pencil.fillStyle = "#fcf120ff";
    pencil.fill();
    pencil.closePath();
}

function drawBoulder() {
    pencil.beginPath();
    pencil.moveTo(250, 300);
    pencil.lineTo(350, 350);
    pencil.lineTo(200, 350);
    pencil.lineTo(100,200);
    pencil.lineTo(200, 200);
    pencil.closePath();
    pencil.fillStyle = "#4f4f4f";
    pencil.fill();
}


document.getElementById('grass').addEventListener('click', drawGrass);
document.getElementById('sun').addEventListener('click', drawSun);
document.getElementById('boulder').addEventListener('click', drawBoulder);
