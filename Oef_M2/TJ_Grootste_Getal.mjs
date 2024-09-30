import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { clear } from 'node:console';
const userInput = readline.createInterface({input, output});


let getal1 = await userInput.question('Geef een getal:');
let getal2 = await userInput.question('Geef een getal:');

if(getal1 < getal2){

    console.log(getal2);
}

else{
    console.log(getal1);
}

process.exit();



