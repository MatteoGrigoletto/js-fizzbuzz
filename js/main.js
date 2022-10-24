"use strict"
//creo ciclo for che stampi numeri compresi tra 1 a 100
const tableContainer = document.querySelector('.container');
let calcolate;

for(let i = 1; i <=100; i++){
    const numberTable = document.createElement('div');
    numberTable.classList.add('number-table');
//creo condizione che imponga ai numeri multipli di 15 ( % 15 === 0 ) di stampare FizzBuzz    
    if( i % 15 == 0){
        calcolate = `FrizzBuzz`;
        numberTable.classList.add('bg-green');
    }
//creo condizione che imponga ai numeri multipli di 5 ( % 5 === 0 ) di stampare Buzz
    else if( i % 5 == 0){
        calcolate = `Buzz`;
        numberTable.classList.add('bg-light-b');
    }
//creo condizione che imponga ai numeri multipli di 3( % 3 === 0 ) di stampare Fizz
    else if(i % 3 == 0){
        calcolate = `Frizz`;
        numberTable.classList.add('bg-yellow');      
    }
    else{
        calcolate = i;  
    }
//console.log per vedere il flusso dei numeri
    console.log(calcolate);

    numberTable.innerHTML = calcolate;
    tableContainer.append(numberTable);
}
