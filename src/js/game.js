const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const width = canvas.width;
const height = canvas.height;

let characterX = 20;
let characterY = height / 2;
let obstacles = [];

let score = 0;
let highestScore = localStorage.getItem("highestScore") || 0;

document.addEventListener("keydown", (event) => {
    if (event.keyCode === 38) {
        moveUp();
    } else if (event.keyCode === 40) {
        moveDown();
    }
});

function drawObstacle(x, height1, height2) {
    context.fillStyle = "red";
    context.fillRect(x, 0, 20, height1);
    context.fillRect(x, height1 + 100, 20, height2);
}

function generateObstacle() {
    let height1 = Math.floor(Math.random() * (height - characterY));
    let height2 = height - characterY - height1;
    obstacles.push({ x: width, height1, height2 });
}
function moveUp() {
    characterY -= 10;
}

function moveDown() {
    characterY += 10;
}

function draw() {
    context.clearRect(0, 0, width, height);

    // Draw character
    context.fillStyle = "blue";
    context.fillRect(characterX, characterY, 20, 20);

    // Generate obstacle
    if (Math.random() < 0.01) {
        generateObstacle();
    }

    // Move obstacles
    for (let i = 0; i < obstacles.length; i++) {
        let obstacle = obstacles[i];
        obstacle.x -= 2;
        drawObstacle(obstacle.x, obstacle.height1, obstacle.height2);

        // Check collision
        if (
            characterX + 20 > obstacle.x &&
            characterX < obstacle.x + 20 &&
            (characterY < obstacle.height1 || characterY > obstacle.height1 + 100)
        ) {
            if (score > highestScore) {
                highestScore = score;
                localStorage.setItem("highestScore", highestScore);
            }
            alert(`Game Over!\nYour score: ${score}\nHighest score: ${highestScore}`);
            score = 0;
            characterY = height / 2;
            obstacles = [];
        }

        // Remove obstacles when they go off screen
        if (obstacle.x < -20) {
            obstacles.splice(i, 1);
            score += 1;
        }
    }

    // Move character
    function moveUp() {
        characterY -= 10;
    }

    function moveDown() {
        characterY += 10;
    }

    // Draw score
    context.fillStyle = "black";
    context.font = "20px Arial";
    context.fillText(`Score: ${score}`, 10, 30);
    context.fillText(`Highest score: ${highestScore}`, 10, 60);

    requestAnimationFrame(draw);
}

draw();
