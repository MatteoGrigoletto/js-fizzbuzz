"use strict"
//creo ciclo for che stampi numeri compresi tra 1 a 100
let calcolate;

for(let i = 1; i <=100; i++){
//creo condizione che imponga ai numeri multipli di 15 ( % 15 === 0 ) di stampare FizzBuzz    
    if( i % 15 == 0){
        calcolate = `FrizzBuzz`;
        document.querySelector('.ciao').innerHTML += calcolate; 
    }
//creo condizione che imponga ai numeri multipli di 5 ( % 5 === 0 ) di stampare Buzz
    else if( i % 5 == 0){
        calcolate = `Buzz`
        document.querySelector('.ciao').innerHTML += calcolate;    
    }
//creo condizione che imponga ai numeri multipli di 3( % 3 === 0 ) di stampare Fizz
    else if(i % 3 == 0){
        calcolate = `Frizz`
        document.querySelector('.ciao').innerHTML += calcolate;      
    }
    else{
        calcolate = i;
        document.querySelector('.ciao').innerHTML += calcolate; 
    }
//console.log per vedere il flusso dei numeri
    console.log(calcolate)
}

//BONUS

//