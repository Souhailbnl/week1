import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { clear } from 'node:console';
const userInput = readline.createInterface({input, output});

let getal1 = parseFloat(await userInput.question('Geef een getal:'));
let gemmidelde = 0;
gemmidelde += getal1;

getal1 = parseFloat(await userInput.question('Geef een getal2:'));
gemmidelde += getal1;

getal1 = parseFloat(await userInput.question('Geef een getal3:'));
gemmidelde += getal1;

getal1 = parseFloat(await userInput.question('Geef een getal4:'));
gemmidelde += getal1;

gemmidelde = gemmidelde / 4;

console.log(gemmidelde);

process.exit();

