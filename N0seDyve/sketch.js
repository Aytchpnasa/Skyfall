var skyimg;
var walls; 

function setup() {
	createCanvas(1200, 800);
	skyimg = loadImage('assets/sky.png');
}

function draw() {
	image(skyimg, 0, 0);
}
