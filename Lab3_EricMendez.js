var ice_cream;

function setup() 
{
	createCanvas(400, 400);
}

function iceberg(icex, icey, ices)
{
	push();
	 translate(icex, icey);
	 scale(ices);

	 fill(255, 255, 255);
	 stroke(0);
	 strokeWeight(1.25);
	 beginShape();
	  vertex(0,0);
	  vertex(20, -20);
	  vertex(30, -40);
	  vertex(40, -30);
	  vertex(50, -55);
	  vertex(60, -45);
	  vertex(75, -80);
	  vertex(85, -60);
	  vertex(90, -65);
	  vertex(95, -50);
	  vertex(110, -30);
	  vertex(115, -35);
	  vertex(125, -20);
	  vertex(135, -10);
	  vertex(140, 0);
	 endShape();
	 beginShape();
	  vertex(80, 0);
	  vertex(90, -30);
	  vertex(95, -20);
	  vertex(105, -50);
	  vertex(110, -35);
	  vertex(115, -25);
	  vertex(125, -10);
	  vertex(130, 0);
	 endShape();
	 beginShape();
	  vertex(0, 0);
	  vertex(15, -30);
	  vertex(25, -15);
	  vertex(30, -25);
	  vertex(35, -10);
	  vertex(45, -15);
	  vertex(55, 0);
	 endShape();
	pop();
}

function cloud(x, y, s)
{
	push();
	 translate(x, y);
	 scale(s);

	 fill(255);
	 stroke(0);
	 strokeWeight(1);
	 beginShape();
	 curveVertex(0, 0);
	 curveVertex(0, 0);
	 curveVertex(7, -8);
	 curveVertex(15, -10);
	 curveVertex(25, -23);
	 curveVertex(40, -25);
	 curveVertex(47, -20);
	 curveVertex(55, -19);
	 curveVertex(60, -13);
	 curveVertex(65, -11);
	 curveVertex(70, -5);
	 curveVertex(73, 0);
	 curveVertex(0, 0);
	 curveVertex(0, 0);
	 endShape();
	pop();
}

function dolphin(x, y, s)
{
	push();
	 translate(x, y)
	 scale(s)
	 stroke(0);
	 strokeWeight(1);
	 fill(140);
	 beginShape();
	  curveVertex(0, 0);
	  curveVertex(0, 0);
	  curveVertex(5, -3);
	  curveVertex(10, -3);
	  curveVertex(20, -12);
	  curveVertex(20, -12);
	  curveVertex(17.5, -15);
	  curveVertex(15, -15);
	  curveVertex(20, -18);
	  curveVertex(30, -17);
	  curveVertex(35, -18);
	  curveVertex(40, -18);
	  curveVertex(45, -16);
	  curveVertex(50, -14);
	  curveVertex(45, -13);
	  curveVertex(35, -9);
	  curveVertex(25, -5);
	  curveVertex(15, -1);
	  curveVertex(20, 0);
	  curveVertex(22, 4);
	  curveVertex(11, 1);
	  curveVertex(0, 0);
	  curveVertex(0, 0);
	 endShape();
	 beginShape();
	  curveVertex(36, -12);
	  curveVertex(36, -12);
	  curveVertex(40, -10)
	  curveVertex(41, -7);
	  curveVertex(38, -8);
	  curveVertex(34, -9);
	  curveVertex(34, -9);
	 endShape();
	pop();
}

function fish(x, y, s)
{
	push();
	translate(x, y);
	scale(s);
	fill(255, 140, 27)
	stroke(0)
	strokeWeight(1)

	triangle(0, 0, 5, 5, 0, 10)
	ellipse(12.5, 5, 15, 10)
	fill(0)
	ellipse(16, 3.5, 2, 2)
	pop()
}

function Cone(x, y, s)
{
	push();
	translate(x, y);
	scale(s);
	fill(255, 123, 0);
	stroke(0);
	strokeWeight(1);

	triangle(0, 0, 70, 140, 140, 0);
	line(20, 0, 80, 117)
	line(40, 0, 90, 99);
	line(60, 0, 100, 80);
	line(80, 0, 110, 58);
	line(100, 0, 120, 38);
	line(120, 0, 130, 19);
	line(130, 0, 60, 117);
	line(110, 0, 50, 99);
	line(90, 0, 40, 80);
	line(70, 0, 30, 58);
	line(50, 0, 20, 38);
	line(30, 0, 10, 19);
	pop();
}

function draw() 
{
	background(0, 150, 251);

	//ocean
	noStroke();
	fill(0, 0, 255);
	rect(0, 200, 400, 200);

	//sky
	cloud(40, 80, 1.15);
	cloud(30, 80, .85);
	cloud(280, 50, 1.5);
	cloud(150, 115, 1);
	cloud(225, 80, 0.5);
	cloud(-25, 150, 1);
	cloud(325, 175, 1.25);

	iceberg(110, 200, 1.25);

	//animals
	dolphin(50, 200, 1.25);
	dolphin(15, 200, 0.8);
	dolphin(275, 200, 0.8);
	dolphin(315, 200, 0.8);
	dolphin(355, 200, 0.8);

	fish(300, 300, 2);
	fish(350, 225, 1.25);
	fish(50, 250, 1.5);
	fish(75, 350, 1.75);

	if(ice_cream)
	{
		Cone(110, 200, 1.25)
		fill(250, 222, 0)
		stroke(0)
		strokeWeight(2)
		ellipse(0, 0, 100, 100)
	}
}

function mouseClicked()
{
	if(mouseX > 110 && mouseX < 285 && mouseY > 100 && mouseY < 200)
	{
		//create cone
		ice_cream = true
	}
}