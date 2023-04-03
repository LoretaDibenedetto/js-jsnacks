//jsnack 4

/*gli array sono contenuti i nomi degli invitati, chiedi all'utente il suo nome e comunicagli se puo' partecipare o no alla festa */ 



let invited = ['Paolo', 'Peppino', 'Giovanni', 'Giacomino', 'Lucia', 'Alessia', 'Alfredo', 'Piersilvio' ];

let userName = prompt('inserisci il tuo nome:');





let invitedList = invited.length;

if(invited.includes(userName)){

        console.log("lei  puo' passare");
    }else {
        console.log("lei non puo' entrare!");
    };

