'use strict';

let dogNames = [];
let i = 0;

while (i < 6) {
    const name = prompt('Enter name of dog' + (i+1));
    dogNames.push(name);
    i++;
}

dogNames.sort();
dogNames.reverse();

for (i of dogNames) {
    document.querySelector('#list3').innerHTML += `<li>${i}</li>`;
}
