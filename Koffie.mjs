import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let hoeveelheidKoffie = await userInput.question('Hoeveel koppen koffie drink je gemiddeld per dag ?');

let aantalKoppen = hoeveelheidKoffie * 365;

console.log('De gebruiker gaat op jaarbasis deze aantal koppen koffie:'+' '+ aantalKoppen +' '+ 'drinken')

process.exit();