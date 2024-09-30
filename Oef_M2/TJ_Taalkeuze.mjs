import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { clear } from 'node:console';
const userInput = readline.createInterface({input, output});


console.log('NL');
console.log('FR');
console.log('EN');


let taal = await userInput.question('Kies uw taal');

if(taal == "FR"){

    console.log("Hallo, uw hebt voor nederlands gekozen");
}

else if(taal == "FR"){

    console.log("Bonjour, vous avez choisi pour le français");
}

else if(taal == "EN"){

    console.log("Hey, you have choose for english ");
}


process.exit();


