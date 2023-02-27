const eventsData = data.events;
let cardsContainer = document.getElementById('card-container');
let fragment = document.createDocumentFragment();

for (let i = 0; i < eventsData.length; i++) {
    let cardDiv = document.createElement('div');
    cardDiv.classList.add('card', 'p-2');
    cardDiv.style.width = '18rem';
    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    let cardInfo = document.createElement('div');
    cardInfo.classList.add('d-flex', 'justify-content-between');

    let cardImg = data.events[i].image;
    cardDiv.innerHTML = `<img src=${cardImg} class="card-img-top img-main" alt="...">`;
    let cardTitle = data.events[i].name;
    let cardDescription = data.events[i].description;
    cardBody.innerHTML = `<h5 class="card-title">${cardTitle}</h5>`;
    cardBody.innerHTML += `<p>${cardDescription}</p>`;
    let price = data.events[i].price;
    cardInfo.innerHTML = `<p class="card-text">Price: $${price}</p>`;
    cardInfo.innerHTML += `<a href="./details.html" class="btn btn-primary card-btn-main">Go somewhere</a>`;

    cardDiv.appendChild(cardBody);
    cardBody.appendChild(cardInfo);
    fragment.appendChild(cardDiv);
}

cardsContainer.appendChild(fragment);




