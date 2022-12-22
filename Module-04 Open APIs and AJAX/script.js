'use strict';

//async function getShowName (){
   //const stringUp = document.getElementById('input1').value;
   //console.log(stringUp)
//}


async function showInfo() {

    const show = prompt('Enter the show name')
    const url = `https://api.tvmaze.com/singlesearch/shows?q=${show}`
    const response = await fetch(url)
    const responseToJSON = await response.json()

    console.log(responseToJSON)

    //On checking the JSON format

    const name = responseToJSON['name'];
    const image = responseToJSON['image']['medium'];
    const summary = responseToJSON['summary'];
    const genres = responseToJSON['genres'];
    const link = responseToJSON['url'];

    // Adding data from response JSON format to inner html

    document.getElementById('showTitle').innerText = name;
    document.getElementById('showImg').src = image;
    document.getElementById('showSummary').innerHTML = summary;
    document.getElementById('showGenres').innerText = `${genres[0]}  ,  ${genres[1]}  ,  ${genres[2]}`;
    //for (let i = 0; i < genres.length; i++){
        //document.getElementById('showGenres').innerText = `${genres[i]}  , `;
    //}
    document.getElementById('showUrl').href = link;


}

showInfo()