import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { clear } from 'node:console';
const userInput = readline.createInterface({input, output});

let getal = parseFloat(await userInput.question('Geef een getal:'));


if(getal % 2 == 0){
     
    console.log("Het is een even getal")

    }   
else
console.log("Het getal is oneven")


process.exit();


