const { LINEAR, TRIANGLES, HALF_PI, QUADRATIC, FILL, STROKE } = require("./libraries/p5");

//La Sorciere

var xTrans;
var yTrans;
var resize;
var rot;
var inBound;


function setup() {
	createCanvas(400, 400);
	xTrans = -120;
	yTrans = 290;
	resize = .5;
	rot = 0;
	inBound = true;
}

function feet(){
	push();
		noStroke();
		fill(255, 0, 0);
		rect(0, 105, 50, 30);
	pop();

}

function basket(){
	push();
		noFill();
		stroke(204, 204, 0);
		strokeWeight(10);
		arc(205, -60, 50, 50, PI, 0);
	pop();

	push();
		noStroke();
		fill(204, 204, 0);
		rect(200, -60, 40, 40, 5);
	pop();
}
function head(){
	push();
		//Hood
		noStroke();
		fill(0, 102, 0);
		ellipse(175, -210, 70, 80);

		//Face
		fill(288, 220, 149);
		ellipse(196, -210, 30, 60);

		//Eye
		stroke('blue');
		strokeWeight(5);
		point(width / 2, -220);

		//Mouth
		noFill();
		stroke('red');
		strokeWeight(3);
		arc(210, -190, 20, 20, 5 * PI / 4, 3 * PI / 2);

		//Nose
		noStroke();
		fill(288, 220, 149);
		triangle(210, -220, 220, -205, 210, -205);
	pop();
}

function sorciere(x, y, z, r){

	translate(x, y);
	scale(z);
	rotate(r);
	
	push();
		//Basket
		basket();

		//Bottom half of body
		push();
			noStroke();
			fill(0, 102, 0);
			quad(0, 0, width / 2, -100, width / 2, 0, 0, 100);

			fill(204, 204, 0);
			quad(0, 80, width / 2, 0, width / 2, 105, 0, 110);

			//feet
			feet();

			push();
				translate(150, 0);
				feet();
			pop();

			//Top half of body
			fill(0, 102, 0);
			triangle(0, -10, width / 2, -110, 80, -200);

			fill(0, 102, 0);
			arc(130, -110, 140, 250, 4 * PI / 3, 0);
		pop();

		//Head
		head();

		//Bow

		fill(0, 102, 204);
		ellipse(width / 2, -140, 15, 30);

		fill(0, 102, 204);
		ellipse(210, -150, 30, 15);

		noStroke();
		fill(0, 102, 204);
		ellipse(width / 2, -150, 20);

		//Staff
		fill(144, 89, 7);
		quad(215, -140, 225, -140, 190, 130, 185, 130);

		//Hand
		noStroke();
		fill(288, 220, 149);
		rect(width / 2, -100, 30, 30, 10);

		fill(288, 220, 149);
		rect(205, -110, 10, 20, 10);

		//Sleeve
		fill(0, 102, 0);
		arc(197, -76, 30, 46, 3 * PI / 2, PI / 2);
	pop();

	}

	function tree(){
	push();
		noStroke();
		fill(0, 0, 150);
		rect(50, 150, 30, 250);

		push();
			fill(0, 0, 150);
			rotate(0.149066);
			rect(73, -100, 30, 250);
		pop();

		push();
			fill(0, 0, 150);
			rotate(PI / 4);
			rect(120, -60, 30, 100);
		pop();
	pop();

	
}

function sky(x, y){
	push();
		noStroke();
		fill(0, 100, 255, 160);
		rect(x, y, 400, 150);
	pop();
}

function backdrop(){
	push();
		fill(223, 210, 24, 100);
		rect(0, 0, 400, 400);

		push();
			translate(270, -50);
			tree();
		pop();

		sky(0, 0);
		sky(0, -50);

		//tree();	
	pop();
}

function draw() {
	background(255);
	backdrop();

	push();
		sorciere(xTrans, yTrans, resize, rot);
	pop();
	
	if(xTrans <= width + 60){
		xTrans += 1;
		//inBounds = true;
	}
	else{
		xTrans = -120;
	}

	tree();

}