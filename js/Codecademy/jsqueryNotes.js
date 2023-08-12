/*
	Modifying the DOM
*/

// Select the h1 element
const h1Element = document.querySelector('h1');

// Modify the content of the h1 element
h1Element.innerHTML = "Most popular Harry Potter characters";


// for class, need to say which one you want to change, same as index 0 == first:
document.getElementsByClassName("slytherin")[0].innerHTML = 'Salazar Slytherin';

// for id, there can be only one, so you don't need that:
document.getElementById("fourth").innerHTML = 'Professor Snape';

// for tagname, you need to say which html element has it and which index it is:
document.getElementsByTagName('li')[0].innerHTML = 'Dobby';

/*
	Modifying CSS:
*/
let blueElement = document.querySelector('.blue');
blueElement.style.backgroundColor = 'blue';

/*
	# NOTE:
	Unlike CSS, the DOM .style property does not implement a hyphen such as background-color, but rather camel case notation, backgroundColor
*/

let backgroundBody = document.querySelector('body');
backgroundBody.style.backgroundColor = '#201f2e';

// this is for the heading class, so it starts with a .
let headingFont = document.querySelector('.heading');
headingFont.style.fontFamily = 'Roboto';

/*
#NOTE:

	Each element has a .parentNode and .children property. The .parentNode property returns the parent of the specified element in the DOM hierarchy. Note that the document element is the root node so its .parentNode property will return null. The .children property returns an array of the specified element’s children. If the element does not have any children, it will return null.
*/

/*

*/
let first = document.body.children[0]; // set the variable `first` to the first child of the body element of the document.
first.innerHTML = "BROWN BEARS ARE AWESOME!";

let parent = first.parentNode;
parent.style.backgroundColor = "beige";

let newAttraction = document.createElement('li');
newAttraction.id = 'vespa';
newAttraction.innerHTML = 'Rent a Vespa';
document.getElementById('italy-attractions').appendChild(newAttraction)

let elementToRemove = document.getElementById('vespa');
document.getElementById('italy-attractions').removeChild(elementToRemove);

/*
	The .onclick property allows you to assign a function to run on when a click event happens on an element:

let element = document.querySelector('button');

element.onclick = function() {
  element.style.backgroundColor = 'blue'
};

You can also assign the .onclick property to a function by name:

let element = document.querySelector('button');

function turnBlue() {
   element.style.backgroundColor = 'blue';
}

element.onclick = turnBlue;

In the above example code, when the <button> element detects a click event, the backgroundColor will change to 'blue'.
*/
// element.style.property = 'value';
// eventTarget.addEventListener('event', eventHandlerFunction);
	// This one is better for large code because you can have a lot mo
// eventTarget.onclick = eventHandlerFunction;

let element = document.querySelector('button');

function turnButtonRed(){
	element.style.backgroundColor = 'red'
	element.style.color = 'white'
	element.innerHTML = 'Red Button'
}
element.onclick = turnButtonRed;

let readMore = document.getElementById('read-more');
let moreInfo = document.getElementById('more-info');

const showInfo = () => readMore.onclick = moreInfo.style.display = 'block';
readMore.addEventListener('click', showInfo);

/*
	Event handlers
	eventTarget.onclick = eventHandlerFunction;
*/
let view = document.getElementById('view-button');
let close = document.getElementById('close-button');
let codey = document.getElementById('codey');

let open = function() {
  codey.style.display = 'block';
  close.style.display = 'block';
};

let hide = function() {
  codey.style.display = 'none';
  close.style.display = 'none';
};

view.addEventListener('click', open);
close.addEventListener('click', hide);

// create a function named textChange() that changes the text in the view element to 'Hello, World!'.
const textChange = () => view.innerHTML = 'Hello, World!';

// Next, you must create a function named textReturn() that changes the text of the view element variable back to 'View'.
const textReturn = () => view.innerHTML = 'View';

// Assign textChange as an event handler function to a click event fired on the view variable and run your code.
view.onclick = textChange;

// Assign textReturn as an event handler function to a click event fired on the close variable. Then run your code and fire the events!
close.onclick = textReturn;


/*
	Removing event handlers
	eventTarget.removeEventListener('click', eventHandlerFunction);
*/
let fortunes = ["A beautiful, smart, and loving person will be coming into your life.",
  "A fresh start will put you on your way.",
  "A golden egg of opportunity falls into your lap this month.",
  "A smile is your personal welcome mat.",
  "All your hard work will soon pay off."
]

let button1 = document.getElementById('fortuneButton');
let fortune = document.getElementById('fortune');

function fortuneSelector(){
  let randomFortune = Math.floor(Math.random() * fortunes.length);
  return fortunes[randomFortune];
}

function showFortune(){
  fortune.innerHTML = fortuneSelector();
  button1.innerHTML = "Come back tomorrow!";
  button1.style.cursor = "default";

	//Inside the showFortune() function, add a .removeEventListener() to prevent a new fortune from being displayed when a user tries to click the button element.
	button1.removeEventListener('click', fortuneSelector);


}

button1.addEventListener('click', showFortune);

let social = document.getElementById('social-media');
let share = document.getElementById('share-button');
let text = document.getElementById('text');

// Write your code below
let sharePhoto = function(event) {
  event.target.style.display = 'none';
  text.innerHTML = event.timeStamp;
}

share.onclick = sharePhoto;

/*
	Mouse events
*/

// This variable stores the "Pick a Color" button
let button = document.getElementById('color-button');

// This variable stores the "Mystery Color" button
let mysteryButton = document.getElementById('next-button');

// This random number function will create color codes for the randomColor variable
function colorValue() {
  return Math.floor(Math.random() * 256);
}

function colorChange(event){
  let randomColor = 'rgb(' + colorValue() + ',' + colorValue() + ',' + colorValue() + ')';
	document.querySelector('body').style.backgroundColor = randomColor;
}
button.onclick = colorChange;
mysteryButton.onwheel = colorChange;

/*
	In this exercise, you’ll modify the list elements using mouse events. You can use the reset element that is already programmed to set the other list element back to their default styles.
*/
// These variables store the boxes on the side
let itemOne = document.getElementById('list-item-one');
let itemTwo = document.getElementById('list-item-two');
let itemThree = document.getElementById('list-item-three');
let itemFour = document.getElementById('list-item-four');
let itemFive = document.getElementById('list-item-five');
let resetButton = document.getElementById('reset-button');

// This function programs the "Reset" button to return the boxes to their default styles
let reset = function() {
  itemOne.style.width = ''
  itemTwo.style.backgroundColor = ''
  itemThree.innerHTML = 'The mouse must leave the box to change the text'
  itemFive.style.display = "none"
};
resetButton.onclick = reset;

// First, create a function called increaseWidth() that changes the .width of itemOne to any size greater than '400px'.
const increaseWidth = () => itemOne.style.width = '600px';
itemOne.onmouseover = increaseWidth;
const changeBackground = () => itemTwo.style.backgroundColor = 'yellow';
itemTwo.onmouseup = changeBackground;
const changeText = () => itemThree.innerHTML = 'The mouse has left the element';
itemThree.onmouseout = changeText;
const showItem = () => itemFive.style.display = 'block';
itemFour.onmousedown = showItem;

/*
	Keyboard Events
*/
let ball = document.getElementById('float-circle');

const up = () => ball.style.bottom = '250px';
const down = () => ball.style.bottom = '50px';
ball.onkeydown = up;
ball.onkeyup = down;

/*
	This is better because onevent isn't as flexible as addEventListener
*/
let ball = document.getElementById('float-circle');

ball.addEventListener('keydown', up);
ball.addEventListener('keyup', down);
