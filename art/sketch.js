let x = 0;
let y = 0;
var r;
var stepSize = 5.0;
var randomLetter = 0;
var fade = 0;
var fadeAmount = 1;
let font = 'Georgia';
var maxCount;
let letters = [
	"They're not sending you. They're not sending you.",
	"They're sending people that have lots of problems, and they're bringing those problems with us (sic).",
	"They're bringing drugs.",
	"They're bringing crime.",
	"They're rapists.",
	"Sadly, the overwhelming amount of violent crime in our major cities is committed by blacks and hispanics-a tough subject-must be discussed.",
	"When will the U.S. stop sending $'s to our enemies, i.e. Mexico and others.",
	"The Mexican legal system is corrupt, as is much of Mexico. Pay me the money that is owed me now - and stop sending criminals over our border.",
	"Mexico's court system  corrupt.",
	"I want nothing to do with Mexico other than to build an impenetrable WALL and stop them from ripping off U.S.",
	"The border is wide open for cartels & terrorists.",
	"Secure our border now.",
	"Build a massive wall & deduct the costs from Mexican foreign aid!",
	"Mexican gov doesn't want me talking about terrible border situation & horrible trade deals. Forcing Univision to get me to stop- no way!",
	"I love the Mexican people, but Mexico is not our friend.",
	"They're killing us at the border and they're killing us on jobs and trade. FIGHT!",
	"Mexican leaders and negotiators are much tougher and smarter than those of the U.S. Mexico is killing us on jobs and trade. WAKE UP!",
	"El Chapo and the Mexican drug cartels use the border unimpeded like it was a  vacuum cleaner, sucking drugs and death right into the U.S.",
	"FMR PRES of Mexico, Vicente Fox horribly used the F word when discussing the wall. He must apologize! If I did that there would be a uproar!",
	"Everybody is talking about the protesters burning the American flags and proudly waving Mexican flags.",
	"I want America First - so do voters\!",
	"When do we beat Mexico at the border\?",
	"They’re laughing at us, at our stupidity",
	"And now they are beating us economically.",
	"They are not our friend, believe me.",
	"But they’re killing us economically.",
	"The U.S. has become a dumping ground for everybody else’s problems.",
	"You look at countries like Mexico, where they’re killing us on the border.",
	"Absolutely destroying us on the border.",
	"They’re destroying us in terms of economic development.",
	"“I think I’m going to do very well with Hispanics. But we’re building a wall.",
	"He’s a Mexican. We’re building a wall between here and Mexico.",
	"Well, I want to — I’m building a wall, OK?",
	"And it’s a wall between Mexico, not another country.",
	"When Mexico sends its people, they're not sending their best.",
	"And some, I assume, are good people.",
];
let fontSizeMin = 3;
let angleDistortion = 0.0;
let counter = 0;
let imageLoaded = 0;
let img = new Array();

function preload() {
	for (i = 0; i < 37; i++) {
		let imageFileName = "/art/border_detainment_assets/detainment" + i + ".jpg";
		img[i] = loadImage(imageFileName);
	}
}

function setup() {
	// Have to do the following by hand
	frameRate(30);
	r = int(random(0, 37));
    createCanvas(img[r].width, img[r].height);
  c anvas.parent("sketch-holder");
	background(255);
	maxCount = 1;
	image(img[r], 0, 0);
	randomLetters = int(random(0, letters.length));
	console.log(randomLetters);
	x = mouseX;
	y = mouseY;
	textFont(font);
	textAlign(LEFT);

}

function draw() {
	var phrase = letters[randomLetters];

	if (maxCount > 4 || phrase == "And some, I assume, are good people.") {
		phrase = "And some, I assume, are good people";
		fill("white");
		console.log(phrase);
		if (imageLoaded == 0) {
			image(img[r], 0, 0);
			imageLoaded = 1;
		}
		var d = dist(x, y, mouseX, mouseY);
		textSize(fontSizeMin + d / 2);
		var newLetter = phrase.charAt(counter);
		console.log(phrase);
		stepSize = textWidth(newLetter);
		if (d > stepSize) {
			var angle = atan2(mouseY - y, mouseX - x);
			push();
			translate(x, y);
			rotate(angle + random(angleDistortion));
			text(newLetter, 0, 0);
			pop();
			counter++;
			if (counter >= phrase.length) {
				noLoop();
			}
			x = x + cos(angle) * stepSize;
			y = y + sin(angle) * stepSize;
		}
	}
	else if (mouseIsPressed && mouseButton == LEFT) {
		console.log(phrase);
		var d = dist(x, y, mouseX, mouseY);
		textSize(fontSizeMin + d / 2);
		var newLetter = phrase.charAt(counter);
		console.log(phrase);
		stepSize = textWidth(newLetter);
		if (d > stepSize) {
			var angle = atan2(mouseY - y, mouseX - x);
			push();
			translate(x, y);
			rotate(angle + random(angleDistortion));
			text(newLetter, 0, 0);
			pop();
			counter++;
			if (counter >= phrase.length) {
				counter = 0;
				randomLetters = int(random(0, letters.length));
				phrase = letters[randomLetters];
				maxCount = maxCount + 1;

			}
			x = x + cos(angle) * stepSize;
			y = y + sin(angle) * stepSize;
		}
	}
}

function mousePressed() {
	x = mouseX;
	y = mouseY;
}

function keyReleased() {
	if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
	if (keyCode == DELETE || keyCode == BACKSPACE) background(255);
}

function keyPressed() {
	// angleDistortion ctrls arrowkeys up/down
	if (keyCode == UP_ARROW) angleDistortion += 0.1;
	if (keyCode == DOWN_ARROW) angleDistortion -= 0.1;
}