// Begin het spel met 0 clicks
var clicks = 0;

// Begin het spel met 0 totale clicks
var totalClicks = 0;

// Begin het spel met 0 punten
var totalPoints = 0;

// Aantal gebruikers
if(localStorage.users !== 0) {
	localStorage.users = 0;
}
var users = localStorage.users;

// Hoeveel kliks er nodig zijn voor het volgende punt
function clicksToNextPoint() {
	// Dit is een afzondering van logica, om de code proper te houden, we kunnen deze code gaan uitvoeren door 'clicksToNextPoint()' te gebruiken.

	// Deel punten door 5 om het 'level' te berekenen
	// Math.floor rondt af naar beneden (zodat we 0 uitkomen voor 0-4, dan 1 voor 5-9 enz)
	var level = Math.floor(totalPoints/5);

	// Het einde van deze berekening is 4 * 2^level, dat geven we hier terug door Math.pow te gebruiken voor de macht
	return 4 * Math.pow(2, level);
}

function click() {
	// Binnen deze accolades wordt uitgevoerd bij het klikken op de knop

	// Voeg 1 toe aan de totalPoints
	clicks++;
	totalClicks++;

	// We kunnen ook dingen in de log schrijven, zodat we kunnen zien wat er gebeurt
	// console.log("Clicks nodig om naar het volgende level te gaan: ", clicksToNextPoint());

	// Als clicks om het volgende level te bereiken gelijk is aan 0, dan hebben we het volgende level bereikt
	if(clicksToNextPoint() == clicks) {
		// Voeg 1 punt toe
		totalPoints = totalPoints + 1;

		// Reset clicks om volgende level te tracken
		clicks = 0;
	}

	// Nu updaten we het level op de website
	document.getElementById("clicksText").innerHTML = "Punten: " + totalPoints;

	// Willekeurig getal tussen 0 en 1, als het groter is dan 1/2, toon de ene afbeelding, andere afbeelding verbergen
	if(Math.random() >= 0.5) {
		document.getElementById('imgLeft').style.visibility = 'hidden';
		document.getElementById('imgRight').style.visibility = 'visible';
	} else {
		document.getElementById('imgLeft').style.visibility = 'visible';
		document.getElementById('imgRight').style.visibility = 'hidden';
	}
}

// Objects in JavaScript!
function Participant(userName, pts, clicksSinceLastPoint, total) {
	this.name = userName;
	this.points = pts;
	this.clicksSinceLastPoint = clicksSinceLastPoint;
	this.totalClicks = total;
}

function clickStop() {

	localStorage.users += 1;

	var userName = prompt("SONA NUMMER:");

	var saveKey = 'user_' + users;
	localStorage.setItem(saveKey, JSON.stringify(new Participant(userName, totalPoints, clicks, totalClicks)));

	window.open('thanks.html?userName='+userName+'&totalPoints='+totalPoints+'&clicks='+clicks+'&totalClicks='+totalClicks, '_blank');

	// Reset alles
	clicks = 0;
	totalClicks = 0;
	totalPoints = 0;

	// Nu updaten we het level op de website
	document.getElementById("clicksText").innerHTML = "Welkom!";
}

// Negeer dit :)
document.getElementById("imgLeft").onclick = click;
document.getElementById("imgRight").onclick = click;
document.getElementById("stopButton").onclick = clickStop;
document.getElementById('imgRight').style.visibility = 'hidden';