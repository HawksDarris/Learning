function getReminder () {
	console.log('Water the plants.');
}

function greetInSpanish () {
	console.log('Buenas tardes.');
}

function sayThanks (times) {
	for (let i = 0; i < times+1; i++){
			sayThanks();
	}
}

function sayThanks (name) {
	console.log(`Thank you for your purchase ${name}! We appreciate your business.`)
}

//shopping list

function makeShoppingList([item1, item2, item3] = ['milk', 'bread', 'eggs']) {
	console.log(`Remember to buy ${item1}`);
	console.log(`Remember to buy ${item2}`);
	console.log(`Remember to buy ${item3}`);
}

//monitors

function monitorCount (rows, columns) {
	return rows * columns;
}

const numOfMonitors = monitorCount(4,5);

function costOfMonitors (rows, columns) {
	return monitorCount(4,5)*200;
}

const totalCost = costOfMonitors(4,5);


// plant
/*
   common practice to use const for function expressions
   the function keyword is optional
   cannot be called before declared.
*/
const plantNeedsWater = function (day) {
	if (day === 'Wednesday') {
			return true;
	} else return false;
};

// arrow syntax
/*
	if no parameters,
			const variable = (parameters) => {
				function contents
			}
*/
const firstPlantNeedsWater = (day) => {
	if (day === 'Wednesday') {
			return true;
	} else return false;
}

// concise function
/*
	const variable = parameters => function body;
		no parentheses for parameters
		no return statement
*/
const secondPlantNeedsWater = day => day === 'Wednesday' ? true : false;

// rock paper scissors
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  switch (userInput) {
    case 'rock':
      return 0;
    case 'paper':
      return 1;
    case 'scissors':
      return 2;
    case 'bomb':
      return 3;
    default:
      console.log('That is not a valid move');
      return null;
  }
};

function getComputerChoice() {
  let number = Math.floor(Math.random() * 3);
  if (number > 2 || number < 0) {
    console.log('Computer made an invalid move.');
    return null;
  } else {
    return number;
  }
}

function playGame() {
  let userHand = getUserChoice('rock');
  let computerHand = getComputerChoice();
  let victory = null;

  if (userHand === null || computerHand === null) {
    console.log('Invalid moves, cannot compare hands.');
    return;
  }

	determineWinner(userHand, computerHand)

}

function determineWinner(userHand, computerHand) {
	if (userHand===3) {
    console.log('You win!');
	}
	else if (userHand === computerHand) {
    console.log('It\'s a tie!');
  } else if ((userHand === 0 && computerHand === 2) ||
             (userHand === 1 && computerHand === 0) ||
             (userHand === 2 && computerHand === 1)) {
    console.log('You win!');
  } else {
    console.log('Computer wins!');
  }
}

// sleep stuff
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function getSleepHours (day) {
	switch (day) {
		case 'Sunday':
			return 8;
			break;
		case 'Monday':
			return 8;
			break;
		case 'Tuesday':
			return 8;
			break;
		case 'Wednesday':
			return 8;
			break;
		case 'Thursday':
			return 8;
			break;
		case 'Friday':
			return 8;
			break;
		case 'Saturday':
			return 8;
			break;

		default:
			return null;
	}
}

function getActualSleepHours() {
	let totalSleepHours = 0;

  days.forEach((day) => {
    const sleepHours = getSleepHours(day);
    totalSleepHours += sleepHours;
  });

	return totalSleepHours;
}

function idealHours() {
	return 7*8;
}

function calculateSleepDebt() {
	let actualSleepHours = getActualSleepHours();
	let idealSleepHours = idealHours();
	if (actualSleepHours >= idealSleepHours) {
		console.log('Congrats you sleep enough');
	} else {
		console.log('sleep more');
	}
}

// scope
const city = 'New York City';

function logCitySkyline() {
	let skyscraper = 'Empire State Building';
	return `The stars over the ${skyscraper} in ${city}`;
}

// global scope
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';

function callMyNightSky() {
	return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}

// block scope
function logVisibleLightWaves() {
	const lightWaves = 'Moonlight';
	console.log(lightWaves);
}

/*
	Can't do
		console.log(lightWaves);
	outside of the function.
*/

// scope pollution
function callMyNightSky() {
	stars = 'Sirius';
	return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}
/*
	Now stars is defined in two different ways. avoid that.
*/
console.log(`Next stop: ${destination}`);
