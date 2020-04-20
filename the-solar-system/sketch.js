// The Solar System
// by marleen01
// Diameter, distance, orbital velocity, angle
let planets = [];
let dia = 10;
let dis = 100;
let orb = 0.01;

function setup() {
	createCanvas(600, 600);
	sun = new Planet(40, 0, 0, 100);
	mercury = new Planet(dia*0.383, dis*0.387, orb*1.59, random(TWO_PI));
	venus = new Planet(dia*0.949, dis*0.723, orb*1.18, random(TWO_PI));
	earth = new Planet(dia, dis, orb, random(TWO_PI));
	mars = new Planet(dia*0.532, dis*1.52, orb*0.808, random(TWO_PI));
	jupiter = new Planet(dia*1.121, dis*2.20, orb*0.439, random(TWO_PI));
	planets.push(mercury, venus, earth, mars, jupiter);
	console.log(mercury, venus, earth);
}

function draw() {
	background(0,0,20);
	translate(width/2, height/2);
	sun.show();
	sun.orbit();
	for(let i = 0; i < planets.length; i++) {
		planets[i].show();
		planets[i].orbit();
	}
}
