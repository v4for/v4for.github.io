////////////////////////////
// Twitter: @mikedevelops
////////////////////////////

// Array of phrases to cycle through
var phrases = [
	"Search Website e.g. \"Buildnow.gg\"",
	"Type random to play a random gxme"
];
var searchBar = $('#searchTerm'), // Updated selector
	// placeholder loop counters
	phraseIndex = 0,
	phCount = 0,
	backCount = 0;

// Function to return random number between min/max range
function randDelay(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

// Function to print placeholder text in a 'typing' effect
function printLetter(string, el) {
	var arr = string.split(''),
		input = el,
		origString = string,
		curPlace = $(input).attr("placeholder"),
		placeholder = curPlace + arr[phCount];

	setTimeout(function() {
		$(input).attr("placeholder", placeholder);
		phCount++;

		if (phCount < arr.length) {
			printLetter(origString, input);
		} else {
			// Delay before backspacing
			setTimeout(function() {
				backspace(input);
			}, 2000); // 2 seconds delay
		}
	}, randDelay(50, 90));
}

// Function to backspace each character
function backspace(el) {
	var curPlace = $(el).attr("placeholder");

	if (curPlace.length > 0) {
		// Remove last character
		$(el).attr("placeholder", curPlace.slice(0, -1));
		backCount++;

		setTimeout(function() {
			backspace(el);
		}, randDelay(50, 90));
	} else {
		// Move to the next phrase after finishing the backspacing
		phraseIndex = (phraseIndex + 1) % phrases.length;
		phCount = 0; // reset character count
		backCount = 0; // reset backspace count
		// Start typing the next phrase
		printLetter(phrases[phraseIndex], el);
	}
}

// Function to init animation
function placeholder() {
	$(searchBar).attr("placeholder", "");
	printLetter(phrases[phraseIndex], searchBar);
}

placeholder();
