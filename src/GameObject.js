class GameObject {
  constructor({x, y, r, color, health, speed}) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.speed = speed;
    this.col = color;
    this.health = health
  }
  intersects(other) {
    var d = sketch.dist(this.x, this.y, other.x, other.y);
    if (d < this.r + other.r) {
      return true;
    } else {
      return false;
    }
  }
  collide(entities) {
    for (let i = 0; i < entities.length; i++) {
      if (this.intersects(entities[i])) {
        entities[i].damage(this.health);
        this.damage(this.health);

      }
    }
  }
  damage(value) {
    this.health -= value;
  }
}

export default GameObject;