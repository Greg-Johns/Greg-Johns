// by SamuelYAN
// more works //
// https://twitter.com/SamuelAnn0924
// https://www.instagram.com/samuel_yan_1990/

// for #WCCChallenge (The Weekly Creative Code Challenge )
// this week 
// theme
// #000000, #FFFFFF, #FF0000

var seed = Math.random() * 1341;
var t;
var num, vNum;
var radius;
var mySize,margin;
var sizes = [];

// color
let colors = [];
let colors0 = "000000-FFFFFF-FF0000".split("-").map((a) => "#" + a);

let color_bg;
let v_planet = [];

function setup() {
	randomSeed(seed);
	//pixelDensity(5);
	mySize = min(windowWidth, windowHeight);
	margin = mySize/100;
	// createCanvas(windowWidth, windowHeight);
	//let sketch = createCanvas(mySize/16*11, mySize);
	let sketch = createCanvas(mySize/16*11, mySize);
	color_bg = "#fefefe";
	colors[0] = "#000000";
	colors[1] = "#FFFFFF";
	colors[2] = "#FF0000";
	background(color_bg);
	num = int(random(5, 10));
	for (let a = 0; a < TAU; a += TAU / num) {
		sizes.push(random(0.1, 0.5))
	}
	t = 0;
	let filter1 = new makeFilter();
  sketch.parent('sketch');
}

function draw() {
	randomSeed(seed);
	for (radius = 0; radius < mySize *0.75; radius += 1) {
		// radius.push(radius1);
		for (let i = 1; i < num+1; i++) {
			let a = (TAU / num) * i + t
			let x = radius * sin(a + t) / random(5,2);
			let y = radius * cos(a + t) / random(2,5);
			v_planet[i] = createVector(x, y);
		}
	}

		push();
		translate(width / 2, height / 2);
		for (let j = 0; j < 3; j++) {
			drawingContext.shadowColor = "#ffffff33";
			drawingContext.shadowOffsetX = -1;
			drawingContext.shadowOffsetY = -1;
			drawingContext.shadowBlur = 0;
			drawingContext.shadowColor = "#2f2f2f1a";
			drawingContext.shadowOffsetX = 1;
			drawingContext.shadowOffsetY = 1;
			drawingContext.shadowBlur = 0;
			rotate(random(TAU) * j / 10 + t);
			noFill();
		
			stroke(colors[j]);
			
			strokeWeight(random(0.2, 0.6));

			beginShape();
			for (let i = 1; i < num+1; i++) {
				let d = random(radius / 2, radius / 8);
				let x_plus = 0.2 * random(-d, d) / t;
				let y_plus = 0.2 * random(-d, d) / t;
				vertex(v_planet[i].x + x_plus, v_planet[i].y - y_plus);
			}
			endShape(CLOSE);
		}
		pop();
	
	t += random(0.01, 0.005)/50;
 if(frameCount == 500){
	 strokeWeight(random(0.01, 0.05));
		stroke(str(random(colors)) + "1a");
		noFill();
		drawingContext.setLineDash([1, 1, 1, 1]);
		drawOverPattern();
		image(overAllTexture, 0, 0);
		// noLoop();
	 noFill();
 		stroke("#202020");
 		strokeWeight(margin);
 		rect(0, 0, width, height);
	 noLoop();
 }
}

function drawOverPattern() {
	push();
	translate(width / 2, height / 2);
	rotate(-PI / 2);

	let s = mySize / 2 * sqrt(3) - 2;
	let n = 4;

	for (let theta = 0; theta < TWO_PI; theta += TWO_PI / 6) { // noprotect
		divideOP(0, 0, s * cos(theta), s * sin(theta), s * cos(theta + TWO_PI / 6), s * sin(theta + TWO_PI / 6), n);
	}
	pop();
}

function prop(x1, y1, x2, y2, k) {
	let x3 = (1 - k) * x1 + k * x2;
	let y3 = (1 - k) * y1 + k * y2;
	return [x3, y3];
}

function divideOP(x1, y1, x2, y2, x3, y3, n) {
	if (n > 1) {
		let [xA, yA] = prop(x1, y1, x2, y2, 1 / 3);
		let [xB, yB] = prop(x1, y1, x2, y2, 2 / 3);
		let [xC, yC] = prop(x2, y2, x3, y3, 1 / 3);
		let [xD, yD] = prop(x2, y2, x3, y3, 2 / 3);
		let [xE, yE] = prop(x3, y3, x1, y1, 1 / 3);
		let [xF, yF] = prop(x3, y3, x1, y1, 2 / 3);
		let [xG, yG] = prop(xF, yF, xC, yC, 1 / 2);
		divideOP(x1, y1, xA, yA, xF, yF, n - 1);
		divideOP(xA, yA, xB, yB, xG, yG, n - 1);
		divideOP(xB, yB, x2, y2, xC, yC, n - 1);
		divideOP(xG, yG, xF, yF, xA, yA, n - 1);
		divideOP(xC, yC, xG, yG, xB, yB, n - 1);
		divideOP(xF, yF, xG, yG, xE, yE, n - 1);
		divideOP(xG, yG, xC, yC, xD, yD, n - 1);
		divideOP(xD, yD, xE, yE, xG, yG, n - 1);
		divideOP(xE, yE, xD, yD, x3, y3, n - 1);
	} else {
		makeTriangle([x1, y1], [x2, y2], [x3, y3]);
	}
}

function makeTriangle(v1, v2, v3) {
	let points = shuffle([v1, v2, v3]);
	let [x1, y1] = points[0];
	let [x2, y2] = points[1];
	let [x3, y3] = points[2];
	let iStep = 1 / (pow(2, floor(random(4, 2))));
	for (let i = 0; i < 1; i += iStep) { // noprotect
		let [x4, y4] = prop(x1, y1, x2, y2, 1 - i);
		let [x5, y5] = prop(x1, y1, x3, y3, 1 - i);
		triangle(x1, y1, x4, y4, x5, y5);
	}
}

function makeFilter() {
	randomSeed(seed);
	// noiseのフィルターをつくる
	colorMode(HSB, 360, 100, 100, 100);
	drawingContext.shadowColor = color(0, 0, 5, 5);
	overAllTexture = createGraphics(windowWidth, windowHeight);
	overAllTexture.loadPixels();
	for (var i = 0; i < width; i++) {
		for (var j = 0; j < height; j++) {
			overAllTexture.set(
				i,
				j,
				color(0, 10, 70, noise(i / 3, j / 3, (i * j) / 50) * random(10, 25))
			);
		}
	}
	overAllTexture.updatePixels();
}

function keyTyped() {
	if (key === "s" || key === "S") {
		saveCanvas("0516_Geometry Line (Tulle_1.3)_2022", "png");
	}
}
