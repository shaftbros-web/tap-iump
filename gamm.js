const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let playerY = 350;
let velocity = 0;
let gravity = 0.5;
let jumpPower = -10;

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // プレイヤーを描画
  ctx.fillStyle = "blue";
  ctx.fillRect(140, playerY, 20, 20);

  // 重力
  velocity += gravity;
  playerY += velocity;

  // 地面で止める
  if (playerY > 350) {
    playerY = 350;
    velocity = 0;
  }

  requestAnimationFrame(update);
}

canvas.addEventListener("click", () => {
  if (playerY >= 350) {
    velocity = jumpPower;
  }
});

update();
