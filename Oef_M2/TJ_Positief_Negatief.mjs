import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { clear } from 'node:console';
const userInput = readline.createInterface({input, output});


let num1 = await userInput.question('Geef een eerste nummer:')
let num2 = await userInput.question('Geef een tweede nummer:')

if(num1 > 0 && num2 > 0){

    console.log("Beide getallen zijn positief");
}

else if(num1 >= 0 && num2 <= 0){

    console.log("Het eerste getal is positief en het tweede getal is negatief.");
}

else if(num1 <= 0 && num2 >= 0){

    console.log("Het eerste getal is negatief en het tweede getal is positief");

}

else if(num1 <= 0 && num2 <= 0){

    console.log("Beide getallen zijn negatief.");
}

else if (num1 == 0 || num2 == 0){

    console.log( "Eén van de getallen is nul.");
}

process.exit();
