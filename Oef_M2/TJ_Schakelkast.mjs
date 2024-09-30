import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { clear } from 'node:console';
const userInput = readline.createInterface({input, output});

console.log('The Simpson');
console.log('Flash');
console.log('Game Of Thrones');

let keuze = await userInput.question('Jouw keuze uit een tv reeks: ');


if(keuze != 'The Simpson' || keuze != 'Flash' || keuze != 'Game Of Thrones' ){

    console.log("Sorry, ik weet niet waar " + keuze + " zich afspeelt");

}

switch(keuze){

    case 'The Simpson':
        console.log("The Simpsons vindt plaats in Springfield")
        break;

    case 'Flash':
        console.log("Flash vindt plaats in Central City");
        break;

    case 'Game Of Thrones':
        console.log("Game of Thrones vindt plaats in Westeros");
        break;

        default:


}

process.exit();


