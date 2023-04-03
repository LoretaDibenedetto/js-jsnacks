//jsnack3
/*il software deve richidere 10 volte all' utente di inserire un numero. il programma stampa la somma di tutti i numeri inseriti */ 




//dichiaro una variabile  vuota

let sumUserNumber = 0;
//normale ciclo for che itera da 1 a 10
for (let i = 0; i< 10; i++){

    //per ogni iterazione mi fara comparire un prompt e rendo il numero stringa un numero
  let number = parseInt(prompt("digita un numero:"));
  // 
  

  //sommo la variabile vuota con i numeri che passo di volta in volta
  sumUserNumber += number ;

};
//stampo in console
console.log("la somma dei numeri e':" + sumUserNumber);

