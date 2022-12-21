'use strict';

let numberArray = [];
const i = 0;

for (i; i < 1;){
    const ask = parseInt(prompt('Enter number. press 0 to exit'));
    numberArray.push(ask);
    if (ask === 0){
        break;
    }
}

numberArray.sort();
numberArray.reverse();

for (let y = 0; y < numberArray.length; y++) {
    console.log(numberArray[y]);
}