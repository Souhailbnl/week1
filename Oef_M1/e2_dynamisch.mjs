import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
 
 
 
let name = await userInput.question('Wat is jouw naam? ');
console.log(name);
 
let age= await userInput.question('Wat is jouw leeftijd? ');
console.log(age);
 
let favoriteGame= await userInput.question('Wat is jouw lievelingsgame? ');
 
console.log('Hallo '+ name +', ik hoor dat je '+ age +' jaar oud bent en dat je lievelingsgame '+ favoriteGame +' is.');

process.exit();
