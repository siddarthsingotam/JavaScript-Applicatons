'use strict';

let numbers = []

for (let i = 0; i < 5; i++){
  const numberX = parseInt(prompt('Enter number ' + (i+1)))
  numbers.push(numberX)
}

for (let i = numbers.length; i >= 0; i--){
  console.log(numbers[i])
}