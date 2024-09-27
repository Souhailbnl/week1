import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { clear } from 'node:console';
const userInput = readline.createInterface({input, output});


console.log("Welke bewerking wil je uitvoeren ?");

console.log('1. Optelling');
console.log('2. Aftrekking');
console.log('3. Vermenigvuldiging');
console.log('4. Gehele deling');

let keuze = await userInput.question('Jouw keuze: ');

let resultaat;
let getal1;
let getal2;

if(keuze == '1' || keuze == '2' || keuze == '3' || keuze == '4'){
    
    getal1 = parseFloat(await userInput.question('Geef een eerste getal:'));
    getal2 = parseFloat(await userInput.question('Geef een tweede getal:'));
}
else
console.log("Foutieve invoer,probeer opnieuw")


switch(keuze){
    case '1':
       resultaat = getal1 + getal2;
       console.log("Het resultaat van de bewerking is: " + resultaat);
       break;

       case '2':
       resultaat = getal1 - getal2;
       console.log("Het resultaat van de bewerking is: " + resultaat);
       break;

       case '3':
       resultaat = getal1 * getal2;
       console.log("Het resultaat van de bewerking is: " + resultaat);
       break;

       case '4':
        if(getal1 == 1 || getal2 == 0){
           
            console.log("Je mag niet delen door 0")
        }
        else{
            resultaat = getal1 / getal2;
            console.log("Het resultaat van de bewerking is: " + resultaat);
        } 
       break;

       default:
        console.log("De bereking is niet mogelijk");
}


process.exit();

