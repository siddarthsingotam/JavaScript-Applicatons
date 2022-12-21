'use strict';

let nameArray = [];

const numberNames = parseInt(prompt('Enter number of participants'));

for(let i=0; i < numberNames; i++){
    const nameX = prompt('Enter name ' + (i+1));
    nameArray.push(nameX);
}
nameArray.sort();

for (name of nameArray){
    document.querySelector('#output2').innerHTML += `<li>${name}</li>`;
}