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
      x: random(10, 140),
      y: random(10, 390),
      r: random(10, 20),
      color: color(random(255), random(50), random(50)),
      health: 100,
      speed: random(1, 2),
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
        this.entities[i].x < 400 &&
        this.entities[i].y > 0 &&
        this.entities[i].y < 400) {
        this.entities[i].x += (1 * this.entities[i].speed);
      } else {
        this.entities.splice(i, 1);
      }
    }
  }

  display() {
    for (let i = 0; i < this.entities.length; i++) {
      fill(this.entities[i].col);
      circle(
        this.entities[i].y,
        this.entities[i].x,
        this.entities[i].r
      );
    }
  }

}