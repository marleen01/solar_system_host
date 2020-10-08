class Planet {
  constructor(diameter, distance, orbitspeed, angle, t = "planet") {
    this.diameter = diameter;
    this.distance = distance;
    this.orbitspeed = orbitspeed * orb;
    console.log(this.orbitspeed);
    this.angle = angle;
    this.t = t;
    this.history = [];
  }

  orbit() {
    this.angle -= this.orbitspeed;
  }

  showtrail() {
    push();
    stroke(255, 255, 255, 100);
    strokeWeight(1);
    noFill();
    circle(0, 0, this.distance * 2);
    pop();
  }

  show() {
    if (this.t === "planet") {
      push();
      rotate(this.angle);
      translate(this.distance, 0);
      fill(0, 0, 0, 150);
      rotate(-HALF_PI);
      rect(-this.diameter / 2, 0, this.diameter, 400);
      fill(255);
      point(0, 0);
      ellipse(0, 0, this.diameter);
      pop();
    }
    if (this.t === "star") {
      push();
      fill(255);
      point(0, 0);
      ellipse(0, 0, this.diameter);
      pop();
    }
  }

}
