// hello world
function greetWorld() {
	return 'Hello, World!';
}

const canIVote = age => age >= 18 ? true : false;;

const agreeOrDisagree = (firstCheck, secondCheck) =>
  firstCheck === secondCheck ? 'You agree!' : 'You disagree!';

function lifePhase(age) {
	if (age > 140 || age < 0) {
		return 'This is not a valid age';
	}
	if (age >= 0 && age <=3) {
		return 'baby';
	} else if (age >= 4 && age <= 12) {
		return 'child';
	} else if (age >= 13 && age <= 19) {
		return 'teen';
	} else if (age >= 20 && age <= 64) {
		return 'adult';
	} else if (age > 64) {
		return 'senior citizen';
	}
}


function finalGrade(...numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }

	let average = sum / numbers.length;

	if (numbers.some(number => number < 0 || number > 100)) {
		return 'You have entered an invalid grade.';
	} else if (average <= 59) {
		return 'F';
	} else if (average < 69) {
		return 'D';
	} else if (average < 79) {
		return 'C';
	} else {
		return average < 89 ? 'B' : 'A';
	}
}

const reportingForDuty3 = (rank, lastName) => `${rank} ${lastName} reporting for duty!`;

function calculateWeight(earthWeight, planet) {
	planet = planet.toLowerCase();
	if (planet === 'mercury') {
		return earthWeight * 0.378;
	} else if (planet === 'venus') {
		return earthWeight * 0.907;
	} else if (planet === 'mars') {
		return earthWeight * 0.377;
	} else if (planet === 'jupiter') {
		return earthWeight * 2.36;
	} else if (planet === 'saturn') {
		return earthWeight * 0.916;
	} else {
		return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'
	}
}

const numImaginaryFriends = numFriends => Math.ceil(numFriends/4);

const sillySentence = (string1, string2, string3) => `I am so ${string1} because I ${string2} coding! Time to write some more awesome ${string3}!`;

function howOld(age, year) {
	let currentYear = new Date().getFullYear();
	let birthYear = currentYear - age;
	let calcYears;

	if (year > currentYear) {
		// year is in future
		calcYears = age + year - currentYear;
		return `You will be ${calcYears} in the year ${year}`
	} else if (year < birthYear) {
		// year is before birth
		calcYears = birthYear - year;
		return `The year ${year} was ${calcYears} years before you were born`;
	} else {
		calcYears = year - birthYear ;
		return `You were ${calcYears} in the year ${year}`;
	}
}

function tipCalculator(quality, total) {
	if (quality === 'bad') {
		return total * 0.05;
	} else if (quality === 'ok') {
		return total * 0.15;
	} else if (quality === 'good') {
		return total * 0.20;
	} else if (quality === 'excellent') {
		return total * 0.30;
	} else {
		return total * 0.18;
	}
}

function toEmoticon(str) {
	switch (str) {
		case 'shrug':
			return '|_{"}_|'
			break;
		case 'smiley face':
			return ':)'
			break;
		case 'frowny face':
			return ':('
			break;
		case 'winky face':
			return ';)'
			break;
		case 'heart':
			return '<3'
			break;
		default:
			return '|_(* ~ *)_|'
			break;
	}
}

const colorMessage = (favoriteColor, shirtColor) => favoriteColor === shirtColor ? 'The shirt is your favorite color!' : 'That is a nice color.';

const isEven = num => num % 2 == 0 ? true : false;

const numberDigits = x => x.toString().length > 2 ? `The number is: ${x}` : x.toString().length === 1 ? `One digit: ${x}` : `Two digits: ${x}`;
