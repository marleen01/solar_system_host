// The Solar System
// by marleen01
// Diameter, distance, orbital velocity, angle
let planets = [];
let dia = 10;
let dis = 100;
let orb = 0.002;
let stars = [];

function setup() {
	// frameRate(60);
	createCanvas(800, 800);
	sun = new Planet(15, 0, 0, 100, "star");
	mercury = new Planet(dia*0.383, dis*0.387, orb*1.59, random(TWO_PI));
	venus = new Planet(dia*0.949, dis*0.723, orb*1.18, random(TWO_PI));
	earth = new Planet(dia, dis, orb, random(TWO_PI));
	mars = new Planet(dia*0.532, dis*1.52, orb*0.808, random(TWO_PI));
	jupiter = new Planet(dia*1.121, dis*2.20, orb*0.439, random(TWO_PI));
	planets.push(mercury, venus, earth, mars, jupiter);

	for (var i = 0; i < 100; i++) {
		backstar = createVector(random(0, width), random(0, height));
		stars.push(backstar);
	}
}

function draw() {
	background(0);

	for (var i = 0; i < stars.length; i++) {
		push();
		stroke(255);
		strokeWeight(random(0.8, 1.5));
		point(stars[i].x, stars[i].y);
		pop();
	}

	translate(width/2, height/2);
	sun.show();
	sun.orbit();

	for (var l = 1; l < 21; l++) {
		noFill();
		strokeWeight(15);
		stroke(255, 255, 255, map(21 - l, 0, 21, 0, 21));
		circle(0, 0, sun.diameter + l * 30 - 14);
	}

	for(let i = 0; i < planets.length; i++) {
		noStroke();
		planets[i].show();
		planets[i].orbit();
	}
}
