// const dataContainer=document.getElementById("bbcardsContainer");

let cardsToShow=12;
let cardsDisplayed=0;
let jsonData;

function createCard(cardData){
    let card=document.createElement('div');
    card.classList.add('bb-card');

    let imgContainer=document.createElement('div');
    imgContainer.classList.add("bb-img-contain");

    let img=document.createElement('img');
    img.src=cardData.img;
    img.alt='logo';
    img.classList.add('bb-img');

    let username=document.createElement('span');
    username.classList.add('bb-username');
    username.textContent=cardData.username;

    let date=document.createElement('span');
    date.classList.add('bb-date');
    date.textContent=cardData.date;

    imgContainer.appendChild(img);
    imgContainer.appendChild(username);
    imgContainer.appendChild(date);

    let cardDownward=document.createElement('div');
    cardDownward.classList.add('bb-card-downward');

    let title=document.createElement('h3');
    title.classList.add('bb-tittle');
    title.textContent=cardData.title;

    let description=document.createElement('p');
    description.classList.add('bb-bisc');
    description.textContent=cardData.description;

    let button=document.createElement('button');
    button.classList.add('bb-btn-config');
    button.textContent='Explore';

    cardDownward.appendChild(title);
    cardDownward.appendChild(description);
    cardDownward.appendChild(button);

    card.appendChild(imgContainer);
    card.appendChild(cardDownward);

    return card;
}
function showMore(){
    let cardContainer=document.getElementById('bbcardsContainer');
    end=Math.min(cardsDisplayed+cardsToShow, jsonData.length);
    for(let i=cardsDisplayed; i<end; i++){
        let cardData=jsonData[i];
        let card=createCard(cardData);
        cardContainer.appendChild(card);

    }
    cardsDisplayed+=(end - cardsDisplayed);
    if(cardsDisplayed>=jsonData.length){
        document.getElementById("showMoreBtn").style.display='none';
    }
}


window.onload=function(){
    fetch('./bloghtml.json')
    .then(response=> response.json())
    .then(data=>{
        jsonData=data;
        showMore();
    })
    .catch(error=>{
        console.error("Error loading JSON file:", error)
    });
};

document.getElementById("showMoreBtn").addEventListener('click', showMore);