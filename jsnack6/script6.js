//jsnack 6

/*fate generare un numero random da 0 a 10 al computer e chiedete all'utente di inserire il suo numero se il numero scelto dall'utente e' uguale all'numero del computer informate l'utente che ha vinto altrimenti ha perso */

//numero random
let randomNumber = Math.floor(Math.random() * 10 + 1);

console.log(randomNumber);


//dichiaro una variabile che fa comparire un prompt che mi rende la stringa numero
let userNumber = parseInt(prompt('inserisci un numero da 1 a 10'));

//se il numero dell'utente e maggiore di 10 compare ub alert 
if(userNumber > 10) {
    alert('digita un numero da 1 a 10!');
//stessa cosa se e' minore di 1
}else if(userNumber < 1){

    alert('digita un numero da 1 a 10!');

    //se i numeri sono uguali l'utente ha vinto 
}else if( userNumber === randomNumber){

  alert('hai vinto!!!!');
  //atrimenti ha perso
}else{

    alert('peccato riprova ancora!!');
};