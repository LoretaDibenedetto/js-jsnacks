//jsnack5

/*crea un array vuoto e chiedi sei volte di inserire un numero, se e' dispari inseriscilo nell'array. stampa alla fine.*/ 



//array vuoto
let numberdis = [];

//ciclo for
for(i= 0; i< 6; i++){


  //inserisco un prompt
  let userNumber =  prompt('inserisci numero');

  //trasformo i numeri stringa in numeri
  userNumber = parseInt(userNumber);
  
  //se i numeri inseriti divisi per 2 danno un resto diverso da 0 allora sono dispari
   if (userNumber % 2 !== 0){
     

    //aggiungo i dispari nell' array vuoto
    numberdis.push(userNumber);
   };
  




    };
   
  
console.log(numberdis);