const eventsData = data.events;
let idContainer = 'card-container';
let fragment = document.createDocumentFragment();
let actualDate = new Date(data.currentDate);
let inputNameEvent = '';
let categoriesSelected = [];

function showCards(array, idContainer) {
    const cardsContainer = document.getElementById(idContainer);
    cardsContainer.innerHTML = "";
    for (let i = 0; i < array.length; i++) {
        let eventDate = new Date(array[i].date);
        if (eventDate > actualDate) {
            let cardDiv = document.createElement('div');
            cardDiv.classList.add('card', 'p-2');
            cardDiv.style.width = '18rem';
            let cardBody = document.createElement('div');
            cardBody.classList.add('card-body');
            let cardInfo = document.createElement('div');
            cardInfo.classList.add('d-flex', 'justify-content-between');

            let cardImg = array[i].image;
            cardDiv.innerHTML = `<img src=${cardImg} class="card-img-top img-main" alt="...">`;
            let cardTitle = array[i].name;
            let cardDescription = array[i].description;
            cardBody.innerHTML = `<h5 class="card-title">${cardTitle}</h5>`;
            cardBody.innerHTML += `<p>${cardDescription}</p>`;
            let price = array[i].price;
            cardInfo.innerHTML = `<p class="card-text">Price: $${price}</p>`;
            let cardId = array[i].id;
            cardInfo.innerHTML += `<a href="./details.html?id=${cardId}" class="btn btn-primary card-btn-main">Go somewhere</a>`;

            cardDiv.appendChild(cardBody);
            cardBody.appendChild(cardInfo);
            fragment.appendChild(cardDiv);
        }
    }
    cardsContainer.appendChild(fragment);
}
showCards(eventsData, idContainer);

// ****CHECKBOX FILTER*****
const checkboxes = document.querySelectorAll('input[type=checkbox]');

function getCheckboxesSelected() {
    return arrayCategories = Array.from(checkboxes).filter(checkbox => checkbox.checked).map(elem => elem.id);
}

function cardsCheckFilter(arrayChecks, arrayCards) {
    let newArrayCards = [];
    console.log(arrayChecks.length);
    if (arrayChecks.length === 0) {
        return arrayCards;
    }
    return newArrayCards = arrayCards.filter(card => arrayChecks.includes(card.category.toLowerCase().trim().replace(" ", "-")));
}

// ****SEARCH FILTER****
let inputForm = document.getElementById('search-form');

function cardsSearchFilter(inputNameEvent, cardsArray) {
    if (inputNameEvent == '') {
        return cardsArray;
    }
    return cardsArray.filter(card => card.name.toLocaleLowerCase().trim().includes(inputNameEvent.toLowerCase().trim()));
}

//Checkbox + Search filters
function checkSearchFiltered(cardsArray) {
    let cardsCheckFiltered = cardsCheckFilter(categoriesSelected, cardsArray);
    let newArray = cardsSearchFilter(inputNameEvent, cardsCheckFiltered);
    return newArray;
}

// ****EVENTS****
//Checkbox event
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        categoriesSelected = getCheckboxesSelected();
        let cardsToShow = checkSearchFiltered(eventsData);
        showCards(cardsToShow, idContainer);
    })
})

//Search event
inputForm.addEventListener('keyup', (e) => {
    inputNameEvent = inputForm.value;
    let cardsToShow = checkSearchFiltered(eventsData);
    showCards(cardsToShow, idContainer);
})





