class Player {
  constructor() {
    this.x = 20;
    this.y = 200;
    this.speed = 1;
    this.score = 0;
    this.landed = false;
  }
  move() {
    if (keyIsDown(RIGHT_ARROW)) {
      this.y += (1 * this.speed);
    }

    if (keyIsDown(LEFT_ARROW)) {
      this.y -= (1 * this.speed);
    }

    if (keyIsDown(DOWN_ARROW)) {
      this.x += (1 * this.speed);
    }

    if (keyIsDown(UP_ARROW)) {
      this.x -= (1 * this.speed);
    }

    if (this.x < 350) this.x = 350;
    if (this.x > 395) this.x = 395;
    if (this.y < 5) this.y = 5;
    if (this.y > 395) this.y = 395;
  }
  fall() {
    if (this.x > 350) {
      this.landed = true;
      this.speed = 4;
      this.x = 350;
    } else {
      this.speed = this.speed * 1.05;
      this.x += (1 * this.speed);
      this.y = 200;
    }
  }
  addScore(value) {
    this.score += value;
  }
  display() {
    fill(color(random(255), random(255), random(255)));
    circle(this.y, this.x, 10)
  }
}