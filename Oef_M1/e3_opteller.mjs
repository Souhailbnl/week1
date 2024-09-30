import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal1 = parseFloat(await userInput.question('Geef een getal:'));
let getal2 = parseFloat(await userInput.question('Geef een getal:'));

let som;

som = getal1 + getal2;


console.log("De optelling van"+ " " + getal1 + " " + "en" + " " + getal2 + " " + "is " + som)


process.exit();