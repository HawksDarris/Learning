/*
	This is the breakdown of the ones I've learned
	forEach returns undefined because it does not return a value, it just does what you tell it to.
*/
const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.every(num => num < 0);
// or
nums.some(num => num < 0);

/*
	.reduce() is weird.
	I do not see when it would be useful at this time.
	currentValue starts as the second index.
	accumulator starts as the first index.
	Can take a second argument to set the starting accumulator value to a given number. Why? I have no idea.
*/

/*
	Example:
*/

const numbers = [1, 3, 5, 7];

const sum = numbers.reduce((accumulator, currentValue) => {
	console.log(`The value of accumulator: ${accumulator}`);
	console.log(`The value of currentValue: ${currentValue}`);
	return accumulator + currentValue;
}, 10)

console.log(sum);

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
	console.log(`The value of accumulator: ${accumulator}`);
	console.log(`The value of currentValue: ${currentValue}`);
	return accumulator + currentValue;
})

console.log(newSum);


/*
	 Here's a more extensive example:
*/
let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' ');
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';

let count = 0;

storyWords.forEach(word => {
	count ++;
});

storyWords = storyWords.filter(word => {
	return word != unnecessaryWord;
});

storyWords = storyWords.map(word => {
	return word === misspelledWord ? 'beautiful' : word;
});

const badWordIndex = storyWords.findIndex(word => {
	return word === badWord;
});

console.log(badWordIndex);

storyWords[badWordIndex] = 'really';

let lengthCheck = storyWords.every(word => {
	return word.length <= 10;
});

storyWords = storyWords.map(word => {return word.length > 10 ? word = 'dazzling' : word});


console.log(lengthCheck);

console.log(count);
console.log(storyWords.join(' '));
