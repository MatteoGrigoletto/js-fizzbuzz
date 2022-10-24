"use strict"
//creo ciclo for che stampi numeri compresi tra 1 a 100
const tableContainer = document.querySelector('.container');
let calcolate;

for(let i = 1; i <=100; i++){
//creo condizione che imponga ai numeri multipli di 15 ( % 15 === 0 ) di stampare FizzBuzz    
    if( i % 15 == 0){
        calcolate = `FrizzBuzz`;
    }
//creo condizione che imponga ai numeri multipli di 5 ( % 5 === 0 ) di stampare Buzz
    else if( i % 5 == 0){
        calcolate = `Buzz` 
    }
//creo condizione che imponga ai numeri multipli di 3( % 3 === 0 ) di stampare Fizz
    else if(i % 3 == 0){
        calcolate = `Frizz`       
    }
    else{
        calcolate = i;  
    }
//console.log per vedere il flusso dei numeri
    console.log(calcolate);
//BONUS

    const numberTable = document.createElement('div');
    numberTable.classList.add('number-table');
    numberTable.innerHTML = calcolate;
    tableContainer.append(numberTable);

    if(calcolate === `FrizzBuzz`){
        numberTable.classList.add('bg-green');
    }
    else if(calcolate === `Buzz`){
        numberTable.classList.add('bg-light-b');
    }
    else if(calcolate === `Frizz`){
        numberTable.classList.add('bg-yellow');
    }
    
}




