/*
Mixed Messages

In this project, you’ll build a message generator program that outputs a new, random message every time a user runs the program. Your program should showcase basic JavaScript syntax and programming concepts.
*/
const randomMessages = {
  intro: ['Hello!', 'Greetings!', 'Hey there!', 'Hi!'],
  body: ['Hope you are having a great day.', 'Just wanted to say you are amazing.', 'Remember to smile today.'],
  conclusion: ['Take care!', 'Have a wonderful day!', 'Best wishes!', 'Stay awesome!']
};


const getMessage = messagesObject => {
	let messageOutput = '';
	for (let property in messagesObject) {
		messageOutput += messagesObject[property][ Math.floor(Math.random() * messagesObject[property].length) ] + ' ';
	}
	return messageOutput
};

console.log(getMessage(randomMessages));
