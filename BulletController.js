class BulletController {
  constructor() {
    this.entities = [];
  }

  create(bulletX, bulletY) {
    let newBullet = new Bullet({
      x: bulletX,
      y: bulletY,
      r: 5,
      color: color(250, 220, 20),
      health: 50,
      speed: 5
    });
    this.entities.push(newBullet);
  }

  move() {
    for (let i = 0; i < this.entities.length; i++) {
      if (this.entities[i].y > 0 &&
        this.entities[i].y < 400 &&
        this.entities[i].x > 0 &&
        this.entities[i].x < 400 &&
        this.entities[i].health > 0) {
        this.entities[i].x -= (1 * this.entities[i].speed);
      } else {
        this.entities.splice(i, 1);
      }
    }
  }

  display() {
    for (let i = 0; i < this.entities.length; i++) {
      fill(this.entities[i].col);
      circle(this.entities[i].y, this.entities[i].x, this.entities[i].r);
    }
  }
};