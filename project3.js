//global variables

var start = -30;

var indWidth; // individual width for each drawing
// x,y,scale, and rotation variables for the Sorcerer
var xTransSor;
var yTransSor;
var resize;
var rot;

// variable for the person in the middle
var personMove;

var scene;

var bldgColor = [];
var bldgX = [];
var bldgY = [];
var lightsOn = [];

var distance;
var kidY;
function setup() 
{	
	createCanvas(400, 400);
	scene = 1;
	distance = 15;
	kidY = 250;

	indWidth=400;

	//scene 2
	for(var x = 0; x < 400; x += 100){
		bldgColor.push(color(random(100, 175)));
		bldgX.push(x);
		bldgY.push(random(100));

	}
	for(var y = 0; y < 33; y++){
		lightsOn.push(random(2));
	}
	
}

//functions for Sorcerer Drawing
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
		point(indWidth / 2, -220);

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
			quad(0, 0, indWidth / 2, -100, indWidth / 2, 0, 0, 100);

			fill(204, 204, 0);
			quad(0, 80, indWidth / 2, 0, indWidth / 2, 105, 0, 110);

			//feet
			feet();

			push();
				translate(150, 0);
				feet();
			pop();

			//Top half of body
			fill(0, 102, 0);
			triangle(0, -10, indWidth / 2, -110, 80, -200);

			fill(0, 102, 0);
			arc(130, -110, 140, 250, 4 * PI / 3, 0);
		pop();

		//Head
		head();

		//Bow

		fill(0, 102, 204);
		ellipse(indWidth / 2, -140, 15, 30);

		fill(0, 102, 204);
		ellipse(210, -150, 30, 15);

		noStroke();
		fill(0, 102, 204);
		ellipse(indWidth / 2, -150, 20);

		//Staff
		fill(144, 89, 7);
		quad(215, -140, 225, -140, 190, 130, 185, 130);

		//Hand
		noStroke();
		fill(288, 220, 149);
		rect(indWidth / 2, -100, 30, 30, 10);

		fill(288, 220, 149);
		rect(205, -110, 10, 20, 10);

		//Sleeve
		fill(0, 102, 0);
		arc(197, -76, 30, 46, 3 * PI / 2, PI / 2);
	pop();
}

// fucntion for Kid 
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

function drawKid(x,y,scalez){
	push();
		noStroke();
		scale(scalez);
		translate(x/scalez,y/scalez);
		fill(200,110,118);   // red color
		ellipse(0,0,40,40); //face
		fill(80,160,230);   // light blue color
		quad(-20,-10,-10,-40,10,-40,20,-10); // top hat
		fill(22,52,230);    // darker blue
		quad(-10,20,-25,80,25,80,10,20); // body
		legs();
		hands();
	pop();
}

function legs(){
	if (start % 20 == 0){
		if (distance == 15){
			distance = 0;
		}
		else{
			distance = 15;
		}
	}

	push();
		translate(distance,0);
		rect(-20,75,10,25,5);   // left leg
	pop();  
	push();    
		translate(-(distance),0);
		rect(10,75,10,25,5);  
	pop();          // right leg
}

function hands(){
	fill(230,110,118);
	push();
		translate(distance, 0);
		ellipse(-5,60,10,10); 
	pop();
}
// functions for Eric's background
function cloud(x, y, s){
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
function treeZZ(x, y, s){
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
function drawPinkBackGround(){
	fill(255,108,109);
	rect(0,0,400,400);
}
function drawSun(x,y){
	push();
		translate(x,y);
		fill(255, 255, 255);
		noStroke();
		ellipse(0, 0, 60, 60);
		stroke(255, 255, 255);
		strokeWeight(1);
		translate(-x,-y);
		line(cenx, censun, indWidth, 175);
		line(cenx, censun, indWidth, 150);
		line(cenx, censun, indWidth, 125);
		line(cenx, censun, indWidth, 100);
		line(cenx, censun, indWidth, 75);
		line(cenx, censun, indWidth, 50);
		line(cenx, censun, indWidth, 25);
		line(cenx, censun, indWidth, 0);
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
	pop();
}
function drawClouds(){
	cloud(25, 100, 1);
	cloud(125, 150, 1.5);
	cloud(200, 50, 1);
	cloud(300, 100, 2);
}
function drawGoodTrees(){
	treeZZ(50, 280, 1);
	treeZZ(150, 280, 0.75);
	treeZZ(225, 280, 1);
	treeZZ(320, 280, 1);
}
function drawLandz(x,y){
	push();
		translate(x,y);
		noStroke();
		fill(245, 166, 10);
		rect(0,0,indWidth, 225);
	pop();
}
function drawMountainz(x,y){
	push();
		translate(x,y);
		noStroke();
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
	pop();
}
function drawForeGround(){
	fill(0, 35, 0);
	rect(0, 280, indWidth, 120);
}

function scene1(){
	drawPinkBackGround();
	drawClouds();
	drawGoodTrees();
	drawForeGround();
}

function buildings(x, bldgColor){
	push();
	//console.log(bldgW + " " + k);

	fill(bldgColor);
	rect(x, 500, 100, -450);

	var index = 0;

	for(var i = 0; i < 11 ; i++){
		for(var j = 0; j < 3; j++){

			if(lightsOn[index] > 1){
				fill(255, 255, 0);
			}
			else{
				fill(0);
			}

			index++;
			rect(j * 30 + 10 + x, 360 - i * 30, 20);
		}
	}
	pop();
}

function scene2(){
	background(0);
	for(var i = 0; i < bldgX.length; i++){
		push();
			translate(0, bldgY[i]);
			buildings(bldgX[i], bldgColor[i]);
		pop();
	}
	
	fill(125);
	rect(100, 300, 25, 100);
	rect(200, 300, 25, 100);
	rect(300, 300, 25, 100);
	rect(0, 275, 400, 40);
}


function draw() 
{
	var count = 1;
	count++;
	console.log(count);
	background(255);

	if(scene == 1){
		scene1();
	}
	else if(scene == 2){
		scene2();
	}
	drawKid(start, kidY, 1);
	//sorciere(100,200,0.25,0);
	if(start < 350){
		start++;
	}
	else{
		scene = 2;
		start = 0;
		kidY -= 50;
	}
}
