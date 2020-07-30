// The Solar System
// by marleen01
// Diameter, distance, orbital velocity, angle
let planets = [];
let dia = 10;
let dis = 100;
let orb = 0.002;

function setup() {
	// frameRate(60);
	createCanvas(1000, 1000);
	sun = new Planet(40, 0, 0, 100, "star");
	mercury = new Planet(dia*0.383, dis*0.387, orb*1.59, random(TWO_PI));
	venus = new Planet(dia*0.949, dis*0.723, orb*1.18, random(TWO_PI));
	earth = new Planet(dia, dis, orb, random(TWO_PI));
	mars = new Planet(dia*0.532, dis*1.52, orb*0.808, random(TWO_PI));
	jupiter = new Planet(dia*1.121, dis*2.20, orb*0.439, random(TWO_PI));
	planets.push(mercury, venus, earth, mars, jupiter);
	console.log(mercury, venus, earth);
}

function draw() {
	background(0);
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
	// noLoop();
}
