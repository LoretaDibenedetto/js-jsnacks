//jsnack3
/*il software deve richidere 10 volte all' utente di inserire un numero. il programma stampa la somma di tutti i numeri inseriti */ 




//dichiaro una variabile con array vuoto
let userNumber = [];

//normale ciclo for che itera da 1 a 10
for (let i = 0; i< 10; i++){

    //per ogni iterazione mi fara comparire un prompt
  let number = prompt('inserisci un numero:');
  //rendo il numero stringa un numero 
  number = parseInt(number);

  //aggiungo numeri inseriti all'array
  userNumber.push(number);


}
//stampo in console
console.log('i numeri inseriti sono: '  +' '+ userNumber);

