/*
	Going to set a meal and price each morning for today's special with getters and setters.
*/

const menu = {
	_meal: '',
	_price: 0,
	set mealToCheck(string) {
		if (typeof this._meal === 'string') {
			this._meal = string;
		}
	},
	set priceToCheck(num) {
		if (typeof this._price === 'number') {
			this._price = num;
		}
	},
	get todaysSpecial() {
		if (this._meal && this._price) {
			return `Today's Special is ${this._meal} for $${this._price}!`
		} else {

		}
	}
}

menu.mealToCheck = 'Lasagna';
menu.priceToCheck = 10;

console.log(menu.todaysSpecial);
console.log(`\n \n Next problem`);

/*
	Team Stats
*/
const team = {
  _players: [
		{firstName: 'Pete', lastName: 'Wheeler', age: 54},
		{firstName: 'Jane', lastName: 'Doe', age: 28},
		{firstName: 'Michael', lastName: 'Stevenson', age: 54}],
  _games: [
		{opponent: 'Stone Talus', teamPoints: 30,	opponentPoints: 25},
		{opponent: 'Frost Talus', teamPoints: 20, opponentPoints: 25},
		{opponent: 'Igneous Talus', teamPoints: 40, opponentPoints: 34},
	],

	get players() {
		return this._players;
	},
	get games() {
		return this._games;
	},
	addPlayer(newFirstName, newLastName, newAge) {
		player:
		team._players.push({firstName: `${newFirstName}`, lastName: `${newLastName}`, age: `${newAge}`});
	},
	addGame(newOpponent, newTeamPoints, newOpponentPoints) {
		game:
		team._games.push({opponent: `${newOpponent}`, teamPoints: `${newTeamPoints}`, opponentPoints: `${newOpponentPoints}`});
	}
};

console.log(team._players);
console.log(team._games);

team.addPlayer('Bugs', 'Bunny', 76);
console.log(team._players);
team.addGame('Titans', 100, 98);
console.log(team._games);
