'use strict';

let numberArrayX = [];

while (true) {
    let number = parseInt(prompt('Enter number. Use any previous entered number to exit.'));
    if (numberArrayX.includes(number)){
        alert('Number '+ number + ' already entered');
        break;
    }
    else{
        numberArrayX.push(number);
    }
}

numberArrayX.sort();

for (let y = 0; y < numberArrayX.length; y++) {
    console.log(numberArrayX[y]);
}