import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let Celcius = await userInput.question('Hoeveel graden Celsius is het ?');

let Farenheit = (Celcius * 9 / 5) + 32

console.log('De omzetting van Celcius naar Farenheit is:'+ ' '+ Farenheit)

process.exit();