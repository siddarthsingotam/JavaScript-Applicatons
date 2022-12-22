'use strict';

let p = document.getElementById('trigger');
let img = document.getElementById('target');

function hover(){
    img.src = 'img/picB.jpg'
}

p.addEventListener('mouseover', hover);