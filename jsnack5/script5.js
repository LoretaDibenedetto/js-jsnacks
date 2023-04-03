//jsnack5

/*crea un array vuoto e chiedi sei volte di inserire un numero, se e' dispari inseriscilo nell'array. stampa alla fine.*/ 



//array vuoto
let number = [];

for(i= 0; i< 6; i++){

    let userNumber = prompt('inserisci un numero');
    userNumber = parseInt(userNumber);

    if(userNumber % 2 !== 0){

      userNumber.push(number);

    };
}

console.log(number.length);