import Bullet from './Bullet';

class BulletController {
  constructor() {
    this.entities = [];
  }

  create(bulletX, bulletY) {
    let newBullet = new Bullet({
      x: bulletX,
      y: bulletY,
      r: 5,
      color: sketch.color(250, 220, 20),
      health: 50,
      speed: 5
    });
    this.entities.push(newBullet);
  }

  move() {
    for (let i = 0; i < this.entities.length; i++) {
      if (this.entities[i].y > 0 &&
        this.entities[i].y < sketch.height &&
        this.entities[i].x > 0 &&
        this.entities[i].x < sketch.width &&
        this.entities[i].health > 0) {
        this.entities[i].y -= (1 * this.entities[i].speed);
      } else {
        this.entities.splice(i, 1);
      }
    }
  }

  display() {
    for (let i = 0; i < this.entities.length; i++) {
      sketch.fill(this.entities[i].col);
      sketch.circle(this.entities[i].x, this.entities[i].y, this.entities[i].r);
    }
  }
};

export default BulletController;