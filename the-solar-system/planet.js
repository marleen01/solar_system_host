class Planet {
  constructor(diameter, distance, orbitspeed, angle) {
    this.diameter = diameter;
    this.distance = distance;
    this.orbitspeed = orbitspeed;
    this.angle = angle;
  }

  orbit() {
    this.angle += this.orbitspeed;
  }

  show() {
    push();
    fill(255);
    rotate(this.angle);
    translate(this.distance, 0);
    point(0, 0);
    ellipse(0, 0, this.diameter);
    pop();
  }
}
