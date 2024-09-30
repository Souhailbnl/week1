import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
 
 
 
let Dag = parseFloat(await userInput.question('Geef Het aantal dagen in:'));
 
 
let Uren = parseFloat(await userInput.question('Geef Het aantal uren in:'));
 
 
let Minuten = parseFloat(await userInput.question('Geef Het aantal minuten in:'));
 
 
let Seconden = parseFloat(await userInput.question('Geef Het aantal seconden in:'));
 
 
let som1 = Dag * 86400;
let som2 = Uren * 3600;
let som3 = Minuten * 60;
let som4 = som1 + som2 + som3 + Seconden;
 
console.log("Het aantal seconden is = "+ som4);
 
process.exit();
