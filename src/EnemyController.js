import Enemy from './Enemy';

class EnemyController {
  constructor() {
    this.entities = [];
    this.score = 0;
  }

  resetScore() {
    this.score = 0;
  }

  create() {
    let newEnemy = new Enemy({
      x: sketch.random(10, sketch.width),
      y: sketch.random(10, 1/3*sketch.height),
      r: sketch.random(10, 1/20*sketch.width),
      color: sketch.color(sketch.random(255), sketch.random(50), sketch.random(50)),
      health: 100,
      speed: sketch.random(1, 2),
    });
    this.entities.push(newEnemy);
  }

  move() {
    for (let i = 0; i < this.entities.length; i++) {
      if (this.entities[i] && this.entities[i].health < 1) {
        this.score++;
        this.entities.splice(i, 1);
      }
      if (this.entities[i] &&
        this.entities[i].x > 0 &&
        this.entities[i].x < sketch.width &&
        this.entities[i].y > 0 &&
        this.entities[i].y < sketch.height) {
        this.entities[i].y += (1 * this.entities[i].speed);
      } else {
        this.entities.splice(i, 1);
      }
    }
  }

  display() {
    for (let i = 0; i < this.entities.length; i++) {
      sketch.fill(this.entities[i].col);
      sketch.circle(
        this.entities[i].x,
        this.entities[i].y,
        this.entities[i].r
      );
    }
  }

}

export default EnemyController;