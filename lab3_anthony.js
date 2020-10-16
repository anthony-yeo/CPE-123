const { LINEAR, TRIANGLES, HALF_PI, QUADRATIC, FILL, STROKE } = require("./libraries/p5");

//Man wearing top hat with face that changes to a clock
var x;
var y;
var fC;

function setup() {
	createCanvas(400, 400);
	x = width;
	y = 0;
	fC = false;
}

function scene(){
	noStroke();
	fill(0, 204, 0);
	rect(0, 2 * height / 3, width, height);

	fill(255);
	ellipse(300, 50, 50, 50);

	push();
		star(50, 50, 1);
	pop();
	push();
		star(75, 100, 0.5);
	pop();
	push();
		star(125, 90, 0.7);
	pop();
	push();
		star(10, 20, 0.2);
	pop();
	push();
		star(100, 20, .5);
	pop();
}

function star(x, y, z){
	translate(x, y);
	scale(z);
	push();
		noStroke();
		fill(255, 255, 0);

		rect(0, 0, 25, 25);
		rotate(PI / 4);
		rect(5, -13, 25, 25);
	pop();
}

function shootingStar(x, y){
 	noStroke();
	fill(255);
	ellipse(x, y, 10, 10);
	ellipse(x+4, y-2, 10, 10);
 	ellipse(x+8, y-4, 10, 10);
 	ellipse(x+12, y-6, 10, 10);
 	ellipse(x+16, y-8, 10, 10);
 	ellipse(x+20, y-10, 10, 10);
}

function button(x, y){
	fill(0);
	ellipse(x, y, 10);
}

function head(x, y){
	stroke(0);
	fill(224, 195, 100);
	ellipse(x, y, 80, 105);

	eye(185, 100);
	eye(215, 100);

	nose(200, 110);

	fill(246, 153, 107);
	ellipse(x, y + 26, 25, 5);

	//hat(10, -185);
}

function eye(x, y){
	stroke(0);
	fill(255);
	ellipse(x, y, 15, 10);

	noStroke();
	fill(0, 0, 255);
	ellipse(x, y + 2, 5, 5);
}

function nose(x, y){
	stroke(0);
	noFill();
	arc(x, y, 5, 10, 0, PI);
}

function hat(x, y){
	stroke(255);
	fill(0);
	rect(x, y, 80, 65, 20, 20);
	rect(x - 20, y + 50, 120, 15);
}

function clock(x, y){
	push();
		stroke(0);
		strokeWeight(2);
		fill(255);
		ellipse(x, y, 100);

		textSize(20);
		push();
			fill(0);
			noStroke();
			text('3', x + 35, y + 10);
			text('6', x - 5, y + 45);
			text('9', x - 45, y + 10);
		pop();
		push();
			stroke(0);
			strokeWeight(5);

			point(x + 33, y + 20);
			point(x + 20, y + 30);
			point(x - 20, y + 30);
			point(x - 33, y + 20);
			point(x + 33, y - 15);
			point(x - 33, y - 15);

			line(x, y + 2, x + 35, y + 2);
			line(x, y + 2, x + 25, y + 18);

			strokeWeight(10);
			point(x, y + 2);
		pop();
	pop();
}

function body(x, y){
	translate(x, y);
	push();
		fill(0);
		stroke(255);
		rect(-50, -50, 200, 250, 30, 30, 0, 0);

		noStroke();
		fill(223, 195, 100);
		rect(30, -70, 40, 20);
		/*
		if(faceClicked == true){
			push();
				head(50, -105);
			pop();
		}
		else if(faceClicked == false){
			push();
				clock(50, -100);
			pop();
		}
		*/
		//hat(10, -185);
		

		fill(255);
		noStroke();
		triangle(10, -50, 90, -50, 50, 70);

		push();
			stroke(0);
			line(40, 50, 40, -35);
			line(60, 50, 60, -35);
		pop();

		fill(200, 0, 0);
		quad(20, -45, 20, -25, 80, -45, 80, -25);

		stroke(255);
		line(-10, 200, -10, 30);
		line(110, 200, 110, 30);

		button(50, -15);
		button(50, 5);
		button(50, 25);
		button(50, 45);
	pop();
}

function man(){
	body(150, 200);
}

function mouseClicked(){
	console.log(fC);
	if(fC == false){
		fC = true;
		console.log('False');
	}
	else if(fC == true){
		fC = false;
		console.log('True');
	}
	console.log('faceClicked is : ' + fC);
}

function draw() {
	background(0);
	scene();
	
	push();
		stroke(50);
		fill(100);

		shootingStar(x, y);
		shootingStar(x - 70, y);
	pop();

	x = x - 3;
	y = y + 1;
	push();
		man();
	pop();

	if (y > 280) {
		y = 0;
		x = width;
	}

	if(fC == false){
		push();
			head(200, 95);
		pop();
	}
	else if(fC == true){
		push();
			clock(200, 100);
		pop();
	}
	hat(160, 20);
}
