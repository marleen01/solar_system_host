class Planet {
  constructor(diameter, distance, orbitspeed, angle, t = "planet") {
    this.diameter = diameter;
    this.distance = distance;
    this.orbitspeed = orbitspeed;
    this.angle = angle;
    this.t = t;
  }

  orbit() {
    this.angle += this.orbitspeed;
  }

  show() {
    push();
    rotate(this.angle);
    translate(this.distance, 0);
    if (this.t === "planet") {
      fill(0, 0, 0, 150);
      rotate(-HALF_PI);
      rect(-this.diameter / 2, 0, this.diameter, 400);
    }

    fill(255);
    point(0, 0);
    ellipse(0, 0, this.diameter);
    pop();

  }
}
