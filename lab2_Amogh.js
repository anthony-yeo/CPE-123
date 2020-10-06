function setup() {
	createCanvas(400,400);
}

//draw Tree function
function drawTree(x, y,scalezz){
push();
	noStroke();
	fill(40,26,13); //Tree Brown
	scale(scalezz);
	translate(x/scalezz,y/scalezz);
	rect(0,0,30,250,20)
	push();
	//left side branches
		rotate(3*PI/4);
		rect(-10,-20,20,100,20);
		rect(-60,-15,15,40,20);
		rect(-18,85,15,40,20);
		rotate(PI/6);
		rect(27,50,15,80,15);
		rect(-110,50,15,80,15);
	pop();
	push();
	//right side branches
		rotate(-3*PI/4);
		rect(-30,0,20,100,20);
		rect(-25,95,15,60,20);
		rect(90,10,15,60,20);
		rotate(-PI/6);
		rect(-70,60,15,80,15);
	pop();
pop();
}

//draw Person function
function drawPerson(x,y,scalez)
{
	push();
		noStroke();
		scale(scalez);
		translate(x/scalez,y/scalez);
		fill(230,110,118);   // red color
		ellipse(0,0,40,40); //face
		fill(80,160,230);   // light blue color
		quad(-20,-10,-10,-40,10,-40,20,-10); // top hat
		fill(22,52,230);    // darker blue
		quad(-10,20,-25,80,25,80,10,20); // body
		rect(-20,75,10,25,5);            // left leg
		rect(10,75,10,25,5);             // right leg
		fill(230,110,118);               // red color
		ellipse(5,60,10,10);    // hand
	pop();
}

function drawBackground(x,y)
{
background(225,225,225); // plain white color
	push();
		fill(217,22,22);         // deep red 
		noStroke();
		ellipse(x,y,220,220); // background sun
	pop();
}

function draw() {
drawBackground(200,80);
drawTree(50,200,0.5);
drawTree(200,200,0.5);
drawTree(350,200,0.5);
drawPerson(300,300,0.5);
}
