const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const WIDTH = canvas.width;
const HEIGHT = canvas.height;

function random(max) {
    return Math.floor(Math.random() * max);
}

function getRandomColor() {
    return `rgb(${random(256)}, ${random(256)}, ${random(256)})`;
}

function drawRandomCircles() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    for (let i = 0; i < 100; i++) {
        ctx.beginPath();
        ctx.fillStyle = getRandomColor();
        ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, Math.PI * 2);
        ctx.fill();
    }
}

drawRandomCircles();
