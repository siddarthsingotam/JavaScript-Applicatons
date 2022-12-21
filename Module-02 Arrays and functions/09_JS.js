'use strict';

let exampleArray = [2, 7, 4, 6];
let finalArray = [];

function checkEven (arrayX){
    for (let i = 0; i < arrayX.length; i++){
        if (arrayX[i] % 2 === 0){
            finalArray.push(arrayX[i]);
            //console.log(arrayX[i]);
        }
    }
}

checkEven(exampleArray)

console.log(exampleArray)
console.log(finalArray)