import * as p5 from 'p5';
import Player from './Player';
import EnemyController from './EnemyController';
import BulletController from './BulletController';

let s = (sketch) => {  
  window.sketch = sketch;
  let enemies, bullets, player;

  sketch.setup = () => {
    sketch.createCanvas(400, sketch.windowHeight);
    bullets = new BulletController(sketch);
    player = new Player();
    enemies = new EnemyController(sketch);
    setInterval(function() {
      enemies.create();
    }, 1000);
  }

  sketch.draw = () => {
    sketch.background(220);
    drawFloor();
    drawCeiling();
    sketch.textSize(32);
    sketch.text(player.score, 10, 30);
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

      if (sketch.keyIsDown(32) &&
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

  sketch.keyPressed = () => {
    switch (sketch.keyCode) {
      case 32: {
        bullets.create(player.x, player.y);
      }
    }
  }

  function drawFloor() {
    sketch.fill(160);
    sketch.rect(0, 3/4*sketch.height, sketch.width, 1/4*sketch.height);
  }
  
  function drawCeiling() {
    sketch.fill(100);
    sketch.rect(0, 3/4*sketch.height, sketch.width, 4);
  }
  
}

const P5 = new p5(s);