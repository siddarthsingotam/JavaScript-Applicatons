'use strict';

const listItems = document.getElementById('target');

const item1 = document.createElement('li');
const item2 = document.createElement('li');
const item3 = document.createElement('li');

item1.innerText = 'First Item';
item2.innerText = 'Second Item';
item3.innerText = 'Third Item';

listItems.appendChild(item1);
listItems.appendChild(item2);
listItems.appendChild(item3);
