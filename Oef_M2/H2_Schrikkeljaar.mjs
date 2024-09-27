import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { clear } from 'node:console';
const userInput = readline.createInterface({input, output});

let jaartal = await userInput.question('Geef een jaartal:');

if(jaartal % 400 == 0 || (jaartal % 4 == 0 && jaartal % 100!= 0))
    {

        console.log("Het jaartal " + jaartal + " " + "telt 29 dagen in de maand februari")
    }
        
    else 
    {
        console.log("Het jaartal " + jaartal + " " + "telt 28 dagen in de maand februari")
    }


process.exit();