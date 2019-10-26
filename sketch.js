let enemies, bullets, player;

function drawFloor() {
  fill(160);
  rect(0, 348, 400, 100);
}

function drawCeiling() {
  fill(100);
  rect(0, 348, 400, 4);
}

function setup() {
  createCanvas(400, 400);
  bullets = new BulletController();
  player = new Player();
  enemies = new EnemyController();
  setInterval(function() {
    enemies.create();
  }, 1000);
}

function draw() {
  background(220);
  drawFloor();
  drawCeiling();
  textSize(32);
  text(player.score, 10, 30);
  if (player.landed) {
    player.move();
    player.display();
    bullets.move();
    bullets.display();
    for (let i = 0; i < bullets.entities.length; i++) {
      bullets.entities[i].collide(enemies.entities);
    }
    player.addScore(enemies.score);
    enemies.resetScore();
    enemies.move();
    enemies.display();

    if (keyIsDown(32) &&
      player.score > 20 &&
      player.score < 50 &&
      bullets.entities.length < 20
    ) {
      bullets.create(player.x, player.y);
    }
  } else {
    player.fall();
    player.display();
  }
}

function keyPressed() {
  switch (keyCode) {
    case 32: {
      bullets.create(player.x, player.y);
    }
  }
}