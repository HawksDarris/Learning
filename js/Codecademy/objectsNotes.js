/*
	Study this because each of these isn't intuitive.
	Consider making more snippets for these until you have it down.
*/
let spaceship = {
  passengers: null,
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032
  },
  crew: {
    captain: {
      name: 'Sandra',
      degree: 'Computer Engineering',
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    'back-up': {
      battery: "Lithium",
      terabytes: 50
    }
  }
};

let capFave = spaceship.crew.captain['favorite foods'][0];
spaceship.passengers = [
  {
    name: 'John',
    age: 35,
    destination: 'Mars'
  }
]

let firstPassenger = spaceship.passengers[0];

console.log(capFave);
console.log(spaceship.passengers);
console.log(firstPassenger);

console.log('\n \nNew program');

/*
	On this one, learn how to do string interpolation with the weird rules of objects.
*/

let spaceship2 = {
    crew: {
    captain: {
        name: 'Lily',
        degree: 'Computer Engineering',
        cheerTeam() { console.log('You got this!') }
        },
    'chief officer': {
        name: 'Dan',
        degree: 'Aerospace Engineering',
        agree() { console.log('I agree, captain!') }
        },
    medic: {
        name: 'Clementine',
        degree: 'Physics',
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna',
        degree: 'Conservation Science',
        powerFuel() { console.log('The tank is full!') }
        }
    }
};

// Write your code below
for (let crewMember in spaceship2.crew) {
	console.log(`${crewMember}: ${spaceship2.crew[crewMember].name}`);
}
for (let crewMember in spaceship2.crew) {
	console.log(`${spaceship2.crew[crewMember].name}: ${spaceship2.crew[crewMember].degree} `);
}

/*
	Getters and setters.
*/

/*
	Getters.
*/

/*
	When calling getters and setters, you will not have parentheses. It's like changing a property.
*/
const robot1 = {
  _model: '1E78V2',
  _energyLevel: 100,
	get energyLevel() {
		if (typeof this._energyLevel === 'number') {
			return `My current energy level is ${this._energyLevel}`
		} else {
			return `System malfunction: cannot retrieve energy level`;
		}
	}
}


console.log(robot1.energyLevel);

/*
	Setters.
*/

const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },

};

console.log('\n \nNew program');

/*
	Factory functions make new objects:
*/

/*
	Notice how the return statement has a method within it. It returns a new object.
*/
const robotFactory1 = (model, mobile) => {
	return {
		model: model,
		mobile: mobile,
		beep(){
			console.log('Beep Boop');
		}
	}
};

const tinCan = robotFactory1('P-500', true);

tinCan.beep();

console.log('\n \nNew program');

/*
	Shorthand.
*/

/*
	You can also save yourself from assigning properties in factory functions as below.

	Notice how this differs from the last robotFactory
*/
const robotFactory2 = (model, mobile) => {
	return {
		model,
		mobile,
		beep(){
			console.log('Beep Boop');
		}
	}
};

const tinCan2 = robotFactory2('P-500', true);

tinCan2.beep();


console.log('\n \nNew program');
/*
	You can assign a variable to a property of an object with curly braces like so:
*/
const robot3 = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

let {model} = robot3;
console.log(model);

/*
	Built-in object methods:
*/
const robot4 = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robot4Keys = Object.keys(robot4);

console.log(robot4Keys);

// Declare robot4Entries below this line:

const robot4Entries = Object.entries(robot4);

console.log(robot4Entries);

// Declare newRobot below this line:
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot4);

console.log(newRobot);
