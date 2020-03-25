let canvas ;
let uiPanel;
let layerPanel;


const colorInput = document.getElementById('color');
const weight = document.getElementById('weight');
const clear = document.getElementById('clear');
const paths = [];
let currentPath = [];

function setup() {
  
  canvas = createCanvas(400,400);
  centerCanvas();
  background(255);
  strokeWeight(weight);
  stroke(0);
  console.log(canvas);
  console.log(colorInput);
}

//runs forever untill you somehow stop it
function draw() {

  strokeWeight(weight.value);
  stroke(colorInput.value);
  strokeCap(ROUND);
  
  noFill();
	
	if(mouseIsPressed){
		console.log(currentPath);
		const point = {
			x: mouseX,
			y: mouseY,
			color: colorInput.value,
			weight: weight.value
		};
		currentPath.push(point);
	}
	
	paths.forEach(path => {
		beginShape();
		path.forEach(point => {
			stroke(point.color);
			strokeWeight(point.weight);
			vertex(point.x, point.y);
		});
		endShape();
	});
	//undo stokes.
	if (keyIsDown(CONTROL)&&keyIsDown(90)) {
		console.log('undo function here'+currentPath.length);
		return;
	}
}

//called whenever window is resized
function windowResized() {
	centerCanvas();


}

function centerCanvas() {

  	var x = (windowWidth - width) / 2;
  	var y = (windowHeight - height) / 2;
  	if (windowWidth<=width) {
  		windowWidth = width;
  	}
  	else{
  		width = 400
  	}

  canvas.position(x, y);
}

function mousePressed() {
	currentPath = [];
	paths.push(currentPath);
}

clear.addEventListener('click', () => {
	paths.splice(0);
	background(255);
});