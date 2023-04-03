let word1 = prompt('inserisci la prima parola:');
let word2 = prompt('inserisci la seconda parola:');




if(word1.length < word2.length){
    console.log("la parola piu' lunga" + ' ' + word2);
    console.log("la parola piu' corta" + ' ' + word1);
    
}else if(word1.length > word2.length){

    console.log("la parola piu' lunga" + ' ' + word1);
    console.log("la parola piu' corta" + ' ' + word2);

}else if(word1.length == word2.length){
    
    console.log('hanno la stessa lunghezza');
};