class Player {
  constructor() {
    this.x = sketch.width/2;
    this.y = sketch.height/2;
    this.speed = 1;
    this.score = 0;
    this.landed = false;
  }
  move() {
    if (sketch.keyIsDown(sketch.RIGHT_ARROW)) {
      this.x += (1 * this.speed);
    }

    if (sketch.keyIsDown(sketch.LEFT_ARROW)) {
      this.x -= (1 * this.speed);
    }

    if (sketch.keyIsDown(sketch.DOWN_ARROW)) {
      this.y += (1 * this.speed);
    }

    if (sketch.keyIsDown(sketch.UP_ARROW)) {
      this.y -= (1 * this.speed);
    }

    if (this.x < 5) this.x = 5;
    if (this.x > sketch.width-5) this.x = sketch.width-5;
    if (this.y > sketch.height-5) this.y = sketch.height-5;
    if (this.y < 3/4*sketch.height+5) this.y = 3/4*sketch.height+5;
  }
  fall() {
    if (this.y > 7/8*sketch.height) {
      this.landed = true;
      this.speed = 4;
      this.y = 7/8*sketch.height+1;
    } else {
      this.speed = this.speed * 1.05;
      this.y += (1 * this.speed);
      this.x = sketch.width/2;
    }
  }
  addScore(value) {
    this.score += value;
  }
  display() {
    sketch.fill(sketch.color(sketch.random(255)));
    sketch.circle(this.x, this.y, 10)
  }
}

export default Player;