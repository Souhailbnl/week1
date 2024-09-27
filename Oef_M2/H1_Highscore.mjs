import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { clear } from 'node:console';
const userInput = readline.createInterface({input, output});

let getal1 = parseFloat(await userInput.question('Geef een getal:'));
let getal2 = parseFloat(await userInput.question('Geef een getal:'));
let getal3 = parseFloat(await userInput.question('Geef een getal:'));
let getal4 = parseFloat(await userInput.question('Geef een getal:'));
let getal5 = parseFloat(await userInput.question('Geef een getal:'));

let gemiddelde;
let som;

console.log(Math.max(getal1,getal2,getal3,getal4,getal5));
console.log(Math.min(getal1,getal2,getal3,getal4,getal5));

som = getal1 + getal2 + getal3 + getal4 + getal5;

gemiddelde = som / 5;

console.log("Het gemiddelde is " + gemiddelde);


process.exit();