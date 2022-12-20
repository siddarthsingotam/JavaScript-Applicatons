'use strict';

const year = parseInt(prompt('Enter year: '));

if (year % 100 === 0){
    if(year % 400 === 0){
        document.querySelector('#output5').innerHTML = `${year} Is a leap year.`;
    }
}

else if (year % 4 === 0){
    document.querySelector('#output5').innerHTML = `${year} Is a leap year.`;
}

else{
    document.querySelector('#output5').innerHTML = `${year} Is not a leap year.`;
}