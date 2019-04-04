// Number of users
if(!localStorage.users2) {
	localStorage.users2 = 0;
}
var users = localStorage.users2;

// Objects in JavaScript!
function Participant(userName, size) {
	this.name = userName;
	this.size = size;
}

function clickStop() {

	var size = slider.value();

	localStorage.users2 = Number(localStorage.users2) + 1;

	var userName = prompt("SONA NUMMER:");

	var saveKey = 'user_2_' + users;
	localStorage.setItem(saveKey, JSON.stringify(new Participant(userName, size)));

	window.open('thanks.html?userName=' + userName + '&size=' + size, '_blank');

	users = localStorage.users2;
}

document.getElementById("stopButton").onclick = clickStop;

// p5

var CANVAS_SIZE = 400;
var STARTING_SIZE = 100;

var slider;

function setup() {
	createCanvas(CANVAS_SIZE, CANVAS_SIZE);
	slider = createSlider(1, CANVAS_SIZE / 2, STARTING_SIZE);
}

function draw() {
	background(220);
	stroke(0);
	fill(0, 0, 0, 0);
	circle(CANVAS_SIZE / 2, CANVAS_SIZE / 2, slider.value());
}