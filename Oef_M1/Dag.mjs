import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let dagweek = await userInput.question('Welke dag van de week is het vandaag?');

let dag  = await userInput.question( 'De hoeveelste dag van de maand is het?');

let maand = await userInput.question('Welke maand zijn we vandaag?');

console.log('Het is vandaag' +" " + dagweek + " "+ dag + " " + maand );

process.exit();