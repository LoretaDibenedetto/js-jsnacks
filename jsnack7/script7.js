//jsnack 7
let userNumber = parseInt(prompt('inserisci un numero'));


if(userNumber < 2){
    alert('metti un numero da almeno 2 in poi');
};
/*scrivi un programma che stampa la tabellina del 2 fino al numero 1000 modificate poi il programma in modo che venga chiesto all utente il numero massimo consentito e stamparla fino al numero consentito */

/*for(i= 2; i< 1000; i++){

if(i % 2 == 0){

    console.log( i);
}



};*/

for(i = 2; i <= userNumber;i++){

    
    if(i % 2 == 0){

        console.log(i);
    }
    

};