// Begin het spel met 0 totale clicks
var clicks = 0;

// Begin het spel met 0 punten
var totalPoints = 0;

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
	clicks = clicks + 1;

	// We kunnen ook dingen in de log schrijven, zodat we kunnen zien wat er gebeurt
	console.log("Clicks nodig om naar het volgende level te gaan: ", clicksToNextPoint());

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
		console.log("Show right image");
		document.getElementById('imgLeft').style.visibility = 'hidden';
		document.getElementById('imgRight').style.visibility = 'visible';
	} else {
		console.log("Show left image");
		document.getElementById('imgLeft').style.visibility = 'visible';
		document.getElementById('imgRight').style.visibility = 'hidden';
	}
}

// Negeer dit :)
document.getElementById("imgLeft").onclick = click;
document.getElementById("imgRight").onclick = click;