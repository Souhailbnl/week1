import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { clear } from 'node:console';
const userInput = readline.createInterface({input, output});

console.log("Welkom bij de quiz? Beantwoord de volgende 5 vragen: ")

let resultaat;
let score = 0;


console.log("Vraag 1: Wat is de hoofdstad van Frankrijk?");
let antwoord1 = await userInput.question('Jouw antwoord: ');
if(antwoord1 == "Parijs"){
    
    console.log("Goed antwoord");
    score++;
}
else{
    console.log("Fout antwoord. Het juiste antwoord is Parijs");
}

console.log("Vraag 2: Hoeveel planeten zijn er in ons zonnestelsel?");
let antwoord2 = await userInput.question('Jouw antwoord: ');
if(antwoord2 == 8){
    
    console.log("Goed antwoord");
    score++;
}
else{
    console.log("Fout antwoord. Het juiste antwoord is 8");
}

console.log("Vraag 3: Wat is het grootste zoogdier ter wereld?");
let antwoord3 = await userInput.question('Jouw antwoord: ');
if(antwoord3 == "Blauwe vinvis"){
    
    console.log("Goed antwoord");
    score++;
}
else{
    console.log("Fout antwoord. Het juiste antwoord is blauwe vinvis");
}

console.log("Vraag 4: Wie schreef het toneelstuk 'Romeo en Julia'?");
let antwoord4 = await userInput.question('Jouw antwoord: ');
if(antwoord4 == "Shakespeare"){
    
    console.log("Goed antwoord");
    score++;
}
else{
    console.log("Fout antwoord. Het juiste antwoord is Shakespeare");
}

console.log("Vraag 5: Hoeveel poten heeft een spin?");
let antwoord5 = await userInput.question('Jouw antwoord: ');
if(antwoord5 == 8){
    
    console.log("Goed antwoord");
    score++;
}
else{
    console.log("Fout antwoord. Het juiste antwoord is 8");
}

console.log("Je hebt " + score + " " + "van de 5 vragen beantwoordt.")

process.exit();
