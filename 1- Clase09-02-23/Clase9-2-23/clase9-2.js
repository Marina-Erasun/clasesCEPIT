let readlineSync = require('readline-sync');
let nombrePersona = readlineSync.question("Indique el nombre de la persona: ");
let alturaPersona = readlineSync.question("Indique la altura de la persona: ");

if(Number(alturaPersona) >178){
    console.log(nombrePersona, "Es mayor que el promedio")
}else {
    console.log (nombrePersona, "Es menor que el promedio")
}

