import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { clear } from 'node:console';
const userInput = readline.createInterface({input, output});


let maand = await userInput.question('Geef een maand in het jaar:');

let dagen = 0;

switch(maand){
 
case 'januari':
    dagen = 31;
 break;

 case 'februari':
    dagen = 29
 break;

 case 'maart':
    dagen = 31;
break;

case 'april':
    dagen = 30;
break;

case 'mei':
    dagen = 31;
break;

case 'juni':
    dagen = 30;
break;

case 'julli':
    dagen = 31;
break;

case 'augustus':
    dagen = 31;
break;

case 'september':
    dagen = 30;
break;

case 'oktober':
    dagen = 31;
break;

case 'november':
    dagen = 30;
break;

case 'december':
    dagen = 31;
break;

default:
    console.log("Maand niet gekend");


}


console.log(dagen);

process.exit();

