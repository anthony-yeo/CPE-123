

var orix = 0
var oriy = 0
var scle = 0.5
var cenx = 200
var censun = 175
var xdeer1 = 10
var xdeer2 = 140
function setup() 
{
	createCanvas(400, 400);
}

function deer(deerx, deery, s)
{
	push();
	 translate(deerx, deery);
	 scale(s);
	 noStroke();

	 //legs
	 fill(0);
	 rect(20, -70, 15, 40);
	 rect(40, -70, 15, 40);
	 rect(70, -70, 15, 40);
	 rect(90, -70, 15, 40);

	 //body
	 rect(10, -120, 105, 50);
	 triangle(10, -120, -5, -100, 10, -105);

	 //head & neck
	 rect(85, -140, 30, 20);
	 beginShape();
	   vertex(85, -130);
	   vertex(85, -160);
	   vertex(115, -160);
	   vertex(115, -145);
	   vertex(130, -145);
	   vertex(125, -130);
	 endShape();

	 //antlers left
	 stroke(0);
	 strokeWeight(5);
	 line(95, -160, 88, -168);
	 strokeWeight(4);
	 line(88, -168, 84, -178);
	 line(88, -168, 80, -163);
	 strokeWeight(3);
	 line(80, -163, 75, -155);
	 line(80, -163, 73, -168);
	 line(84, -178, 76, -186);
	 line(84, -178, 90, -186);
	 //antlers right
	 strokeWeight(5);
	 line(105,-160, 112, -168);
	 strokeWeight(4);
	 line(112, -168, 116, -178);
	 line(112, -168, 120, -163);
	 strokeWeight(3);
	 line(120, -163, 125, -155);
	 line(120, -163, 127, -168);
	 line(116, -178, 108, -186);
	 line(116, -178, 122, -186);
	pop();
}

function cloud(x, y, s)
{
	push();
	 translate(x, y);
	 scale(s);

	 fill(38, 0, 100);
	 noStroke();
	 beginShape();
	 curveVertex(0, 0);
	 curveVertex(0, 0);
	 curveVertex(7, -8);
	 curveVertex(15, -10);
	 curveVertex(25, -20);
	 curveVertex(40, -23);
	 curveVertex(50, -18);
	 curveVertex(55, -17);
	 curveVertex(60, -13);
	 curveVertex(65, -11);
	 curveVertex(70, -5);
	 curveVertex(73, 0);
	 curveVertex(73, 0);
	 endShape();
	pop();
}

function tree(x, y, s)
{
	push();
	 translate(x, y);
	 scale(s);

	 fill(0);
	 beginShape();
	  vertex(0, 0);
	  vertex(10, -50);
	  vertex(5, -100);
	  vertex(5, -125);
	  vertex(0, -175);
	  vertex(7, -200);
	  vertex(12, -225);
	  vertex(15, -275);
	  vertex(20, -230);
	  vertex(18, -200);
	  vertex(25, -150);
	  vertex(23, -125);
	  vertex(27, -100);
	  vertex(30, -50);
	  vertex(30, 0);
	 endShape();
	 stroke(0);
	 strokeWeight(4);
	 line(13, -225, 5, -235);
	 strokeWeight(8);
	 line(18, -200, 40, -230);
	 line(25, -150, 60, -170);
	 line(7, -100, -20, -130);
	 strokeWeight(12);
	 line(24, -75, 50, -105);
	pop();
}

function draw() 
{
	background(255, 108, 109);

	//sun
	fill(255, 255, 255);
	noStroke();
	ellipse(200, 175, 60, 60);
	stroke(255, 255, 255);
	strokeWeight(1);
	line(cenx, censun, width, 175);
	line(cenx, censun, width, 150);
	line(cenx, censun, width, 125);
	line(cenx, censun, width, 100);
	line(cenx, censun, width, 75);
	line(cenx, censun, width, 50);
	line(cenx, censun, width, 25);
	line(cenx, censun, width, 0);
	line(cenx, censun, 370, 0);
	line(cenx, censun, 340, 0);
	line(cenx, censun, 310, 0);
	line(cenx, censun, 280, 0);
	line(cenx, censun, 250, 0);
	line(cenx, censun, 220, 0);
	line(cenx, censun, 200, 0);
	line(cenx, censun, 180, 0);
	line(cenx, censun, 150, 0);
	line(cenx, censun, 120, 0);
	line(cenx, censun, 90, 0);
	line(cenx, censun, 60, 0);
	line(cenx, censun, 30, 0);
	line(cenx, censun, 0, 0);
	line(cenx, censun, 0, 25);
	line(cenx, censun, 0, 50);
	line(cenx, censun, 0, 75);
	line(cenx, censun, 0, 100);
	line(cenx, censun, 0, 125);
	line(cenx, censun, 0, 150);
	line(cenx, censun, 0, 175);

	//sky
	cloud(25, 100, 1);
	cloud(125, 150, 1.5);
	cloud(200, 50, 1);
	cloud(300, 100, 2);

	//land
	noStroke();
	fill(245, 166, 10);
	rect(0, 175, width, 225);

	//mountains
	fill(0, 175, 0);
	beginShape();
	  curveVertex(400, 225);
	  curveVertex(400, 225);
	  curveVertex(400, 150);
	  curveVertex(290, 180);
	  curveVertex(250, 225);
	  curveVertex(250, 225);
	endShape();

	fill(0, 100, 0);
	beginShape();
	  curveVertex(0, 280);
	  curveVertex(0, 280);
	  curveVertex(0, 200);
	  curveVertex(55, 175);
	  curveVertex(115, 230);
	  curveVertex(200, 280);
	  curveVertex(200, 280);
	endShape();

	tree(50, 280, 1);
	tree(150, 280, 0.75);
	tree(225, 280, 1);
	tree(320, 280, 1);

	//foreground
	fill(0, 35, 0);
	rect(0, 280, width, 120);

	//animals
	deer(xdeer1, 430, 1);
	deer(xdeer2, 420, 0.5);
	if (xdeer1 < 405)
	{
		xdeer1 += 2;
	}

	if (xdeer2 < 405)
	{
		xdeer2 += 2;
	}

}

