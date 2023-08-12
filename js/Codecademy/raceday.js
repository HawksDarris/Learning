let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let runnerAge = 0;
let raceTime = '';

if (runnerAge > 18 && registeredEarly) {
    raceNumber += 1000;
    raceTime = 'Race time is 9:30';
} else if (runnerAge > 18 && !registeredEarly) {
    raceTime = 'Race time is 11:00';
} else if (runnerAge == 18) {
    raceTime = 'Please see front desk for race time'
} else {
    raceTime = 'Race time is 12:30';
}

console.log(`Race number: ${raceNumber}. ${raceTime}`);
