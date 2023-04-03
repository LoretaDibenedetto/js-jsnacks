//jsnack 1
/*l'utente inserisce due numeri in successione, con due prompt. il software stampa il maggiore*/ 


let numberOne = prompt('inserisci il primo numero:');
let numberTwo = prompt('inserisci il secondo numero:');

numberOne = parseInt(numberOne);
numberTwo = parseInt(numberTwo);




if(numberOne < numberTwo){
    console.log("il numero maggiore e'" + numberTwo);
}else if(numberOne > numberTwo){
    console.log("il numero maggiore e'" + numberOne);

}else if(numberOne == numberTwo){
    console.log('il numeri sono uguali');
}



