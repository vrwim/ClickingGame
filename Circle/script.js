// Stop button
// Probly unneeded

function clickStop() {
	var size = slider.value();
	console.log(size);
}

document.getElementById("stopButton").onclick = clickStop;

// Constants
var WIDTH = 400;
var HEIGHT = 400;

var MIN_CIRCLE_RADIUS = 10;
var MAX_CIRCLE_RADIUS = 190;
var BEGIN_CIRCLE_RADIUS = 50;

// Setup canvas
var canvas = document.getElementById("canvas");
canvas.width = WIDTH;
canvas.height = HEIGHT;
var context = canvas.getContext("2d");

// Setup slider
var slider = document.getElementById("slider");
slider.min = MIN_CIRCLE_RADIUS;
slider.max = MAX_CIRCLE_RADIUS;
slider.value = BEGIN_CIRCLE_RADIUS;

function draw() {
	var radius = slider.value;

	context.clearRect(0, 0, canvas.width, canvas.height);
	context.beginPath();
	context.arc(canvas.width / 2, canvas.height / 2, radius, 0, 2 * Math.PI);
	context.lineWidth = 1;
	context.strokeStyle = 'black';
	context.stroke();
}

draw();

slider.oninput = function () {
	Qualtrics.SurveyEngine.setEmbeddedData('circleradius', slider.value);
	draw();
}