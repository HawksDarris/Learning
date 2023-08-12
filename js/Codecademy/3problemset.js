/*
	Code Challenges: Intermediate JavaScript
*/

// reverseArray
const sentence = ['sense.','make', 'all', 'will', 'This'];
const reverseArray = arr => {
	// make a new array to store the reversed input
	let newOrder = [];
	let originalLength = arr.length;
	for (let i = 0; i < originalLength; i++) {
		// pop last item to index 0 of the new array.
		newOrder[i] = arr.pop();
	}
return newOrder;
}

// greetAliens
const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
const greetAliens = arr => {
	for (let i = 0; i < arr.length; i++) {
		console.log(`Oh powerful ${arr[i]}, we humans offer our unconditional surrender!`);
	}
};

//greetAliens(aliens);

// convertToBaby
// Write your code here:
const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
const convertToBaby = arr => {
	let babyArray = [];
	arr.forEach((animal) => babyArray.push('baby ' + animal));
	return babyArray;
}

//smallestPowerOfTwo debug (their code)
const numbers1 = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
      let results = [];
      // The 'outer' for loop - loops through each element in the array
      for (let i = 0; i < arr.length; i++) {
            number = arr[i];

            // The 'inner' while loop - searches for smallest power of 2 greater than the given number
            // i = 1; // that just keeps resetting to 1, and it is being used as the iterator count, so that's bad.
						otherVar = 1

            while (otherVar < number) {
                  otherVar = otherVar * 2;
            }
            results.push(otherVar);
      }
      return results
}


// declineEverything and acceptEverything
const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

// Write your code here:
const declineEverything = arr => arr.forEach(politelyDecline);

const acceptEverything = arr => arr.forEach((veg) => console.log(`Ok, I guess I will eat some ${veg}.`));

//declineEverything(veggies);
//acceptEverything(veggies);


// squareNums
const numbers = [2, 7, 9, 171, 52, 33, 14]
const toSquare = num => num * num

// Write your code here:
const squareNums = arr => arr.map(num => num * num);

//shoutGreetings
const shoutGreetings = arr => arr.map(str => str.toUpperCase()+'!');


// sortYears
const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

const sortYears = arr => arr.sort().reverse();

// justCoolStuff
const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway'];

const justCoolStuff = (arr1, arr2) => arr1.filter(word => word === arr2[arr2.indexOf(word)]);
/*
	I forgot about the .includes() method, that would probably have been easier, but this also works, so you can see my logic.
*/

// isTheDinnerVegan
const dinner = [{name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}];

const dinner2 = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

const isTheDinnerVegan = arr => arr.every(item => item.source === 'plant')

// sort array of objects by key parameter with number value
const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];

const compareTeeth = (species1, species2) => species1.numTeeth >= species2.numTeeth;

function sortSpeciesByTeeth(arr, prop) {
	return arr.sort((a, b) => a[prop]- b[prop]);
}

// findMyKeys
const findMyKeys = arr => arr.includes('keys') ? arr.indexOf('keys') : -1;

// dogFactory
const dogFactory = (name, breed, weight) => {
	return {
    _name: name,
    _breed: breed,
    _weight: weight,

		//get and set name
		get name() {
			return this._name;
		},
		set name(val) {
			this._name = val;
		},
		get breed() {
			return this._breed;
		},
		set breed(val) {
			this._breed = val;
		},
		get weight() {
			return this._weight
		},
		set weight(val) {
			this._weight = val;
		},
		bark(){
			return `ruff! ruff!`;
		},
		eatTooManyTreats(){
			this._weight ++;
			return null;
		}
	}
}

// factorial
const factorial = num => {
	if (num === 0) {
		return 1;
	}
	let arr = []; // make array to store everything for a reduce method
	for (let i = 0; num > 0; num--) {
		arr.push(num);
	}
	return arr.reduce((a, b) => a * b);
};

// factorial (doing it again because I thought of a better way)
const factorial2 = num => {
	if (num === 0) {
		return 1;
	} else {
		return num * factorial2(num - 1);
	}
};

// subLength
// count the number of characters in a string between two instances of a char
// if the number of times char repeats != 2, return 0

const subLength = (string, character) => {
  const charOccurrences = [...string].reduce((acc, char, index) => {
    if (char === character) acc.push(index);
    return acc;
  }, []);

  return charOccurrences.length === 2 ? charOccurrences[1] - charOccurrences[0] + 1 : 0;
}


// groceries
const groceries = objects => {
	if (objects.length > 2) {
			const foods = objects.map(food => food.item);
			const lastTwo= foods.slice(-2).join(' and ');
			const leftover = foods.slice(0, -2).join(', ');
			return `${leftover}, ${lastTwo}`;
	} else if (objects.length > 1) {
			return `${objects[0].item} and ${objects[1].item}`;
	} else if (objects.length > 0) {
			return objects[0].item;
	} else {
			return '';
	}
}

shopping = [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}]

// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:
/*
	sum = 0
	doubled = 0
	for i in sorted(arr, reverse=True):
		sum += arr[i]
		if arr[i] % 2 == 0:
			arr[i] * 2 <= 9 ? sum += arr[i] : sum += arr[i] * 2 - 9;

	return sum % 10 === 0



	check arr[-1] (can't do this on javascript, but this is the logic)
	if arr[-2] *2 === arr[-1]
	arr[-2] * 2 <= 9 ? doubled = arr[-2] * 2 : doubled = arr[-2] * 2 - 9;
	arr[-3] === 2*(arr[-1]) && arr[-3] < 9  ? true : false;
	if arr[-3] ===	2*(arr[-1]):
		sum cc digits
	sum % 10 === ? true : false;

*/
function validateCred(arr) {// bool
	let sum = 0
	for (let i = arr.length - 1; i >= 0; i--) {
		if ((arr.length - i) % 2 === 0) {
			arr[i] * 2 <= 9 ? (sum += arr[i] * 2) : (sum += arr[i] * 2 - 9);
		} else {
			sum += arr[i]
		}
	}
	return sum % 10 === 0
}

const findInvalidCards = (nested_array) => {
	const invalid = [];
	nested_array.forEach((arr) => {
		if (!validateCred(arr)) {
			invalid.push(arr)
	}})
return invalid};


const idInvalidCardCompanies = nested_invalid => {
	companies = []
	nested_invalid.forEach((arr) => {
		switch (arr[0]) {
			case 3:
				companies.push('Amex');
				break;
			case 4:
				companies.push('Visa');
				break;
			case 5:
				companies.push('Mastercard');
				break;
			case 6:
				companies.push('Discover');
				break;
			default:
				console.log('company not found')
		}
	})
	return companies
};

// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)]
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (uniqueNum, dnaBasesArr) => {
  function specimen() {
    return {
      specimenNum: uniqueNum,
      dna: dnaBasesArr,

      mutate() {
				randBase = returnRandBase();
				thisRandBase = Math.floor(Math.random() * dnaBasesArr.length);
				while (randBase === this.dna[thisRandBase]) {
					randBase = returnRandBase();
				}
				this.dna[thisRandBase] = randBase;
			},

      compareDNA(that) {
        let same = 0;
        for (let i = 0; i < this.dna.length; i++) {
          if (this.dna[i] === that.dna[i]) {
            same++;
          }
        }
					return ((same / this.dna.length) * 100).toFixed(2);
			},

			willLikelySurvive() { // bool
				let minimum = 0.6
        for (let i = 0; i < this.dna.length; i++) {
          if (this.dna[i] === 'C' || this.dna[i] === 'G') {
            minimum++;
          }
        }
				return minimum / this.dna.length >= 0.6
			},

			complementStrand() { //arr
				const complement = [];
				for (let i = 0; i < this.dna.length; i++) {
					switch (this.dna[i]) {
						case 'A':
							complement.push('T')
							break;
						case 'T':
							complement.push('A')
							break;
						case 'G':
							complement.push('C')
							break;
						default:
							complement.push('G')
					};
				}
			}
		};
	}
	return specimen();
};

const organisms = []
let i = 1
while (organisms.length < 30){
	let newOrganism = pAequorFactory(i, mockUpStrand());
	if (newOrganism.willLikelySurvive()){
		organisms.push(newOrganism)
		i++
	}
}

for (let i = 0; i < 30; i++) {
}
organisms.forEach((organism) => {
  //console.log(`Specimen #${organism.specimenNum}: DNA - ${organism.dna.join(', ')}`);
});
