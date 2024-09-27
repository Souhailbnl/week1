import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { clear } from 'node:console';
const userInput = readline.createInterface({input, output});
 
console.log("1.Morad");
console.log("2.Ninho");
console.log("3.Campelinho");
console.log("4.Grisha");
 
let keuze = await userInput.question('Kies een artiest uit de lijst');
 
switch(keuze)
{
    case "1":
    console.log("quando ella sale")
    break;
 
 
    case "2":
        console.log("Malcom")
        break;
 
 
    case "3":
         console.log("Perdao")
         break;
 
 
    case "4":
            console.log("Zone")
            break;
            default:
                console.log('Artiest niet gekend');
 
}
 
 
 
process.exit();