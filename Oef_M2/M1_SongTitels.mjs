import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { clear } from 'node:console';
const userInput = readline.createInterface({input, output});

console.log('1. Green Montana')
console.log('2. Morad')
console.log('3. Hamza')
console.log('4. Grelo')

let keuze = await userInput.question('Jouw keuze: ');


if(keuze == '1'){
    
    console.log("Uw koos voor Green Montana en hun bekende titel is Fum22 Nocive")
}

else if(keuze == '2'){

    console.log("Uw koos voor Morad en hun bekende titel is Como Estan")
}

else if(keuze == '3'){

    console.log("Uw koos voor Hamza en hun bekende titel is Lalla")
}

else if(keuze == '4'){

    console.log("Uw koos voor Grelo en hun bekende titel is So Fé")
}

process.exit();

