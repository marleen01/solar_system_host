// The Solar System
// by marleen01
// Diameter, distance, orbital velocity, angle
let planets = [];
let dia = 10;
let dis = 100;
let dps = 100;
let stars = [];
let c;
let orb = Math.PI * 2 / 60 / 365 * dps;

function setup() {
	frameRate(60);
	createCanvas(600, 600);
	setInterval(timer, 1000);
	c = 0;
	dps = 100;
	sun = new Planet(15, 0, 0, 100, "star");
	mercury = new Planet(dia*0.383, dis*0.387, 1.59, 2.3);
	venus = new Planet(dia*0.949, dis*0.723, 1.18, 3.3);
	earth = new Planet(dia, dis, 1, 4);
	mars = new Planet(dia*0.532, dis*1.52, 0.808, 3.6);
	jupiter = new Planet(dia*1.121, dis*2.20, 0.439, 4.1);
	planets.push(mercury, venus, earth, mars, jupiter);


	for (var i = 0; i < 100; i++) {
		backstar = createVector(random(0, width), random(0, height));
		stars.push(backstar);
	}
}

function draw() {
	background(0);

	showdate();
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
		push();
		noFill();
		strokeWeight(15);
		stroke(255, 255, 255, map(21 - l, 0, 21, 0, 21));
		circle(0, 0, sun.diameter + l * 30 - 14);
		pop();
	}

	for(let i = 0; i < planets.length; i++) {
		push();
		noStroke();
		planets[i].showtrail();
		planets[i].show();
		planets[i].orbit();
		pop();
	}

}

function timer() {
	c++;
}

function showdate() {
	// show days per second
	push();
	fill(255);
	textFont('Calisto MT');
	textSize(30);
	text(Date().slice(4, 15), 30, height - 60);
	text(dps + ' days per second', 30, height - 30);
	pop();
}
