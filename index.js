let inputNameEvent = '';
let categoriesSelected = [];
let idContainer = 'card-container';

async function getDataIndex() {
    let eventsData;
    eventsData = await getData();
    cardsData = eventsData.events;
    showCards(cardsData, idContainer);

    // ****EVENTS****
    //Checkbox event
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            categoriesSelected = getCheckboxesSelected();
            let cardsToShow = checkSearchFiltered(cardsData);
            showCards(cardsToShow, idContainer);
        })
    })

    //Search event
    inputForm.addEventListener('keyup', (e) => {
        inputNameEvent = inputForm.value;
        let cardsToShow = checkSearchFiltered(cardsData);
        showCards(cardsToShow, idContainer);
    })
}

function showCards(array, idContainer) {
    const cardsContainer = document.getElementById(idContainer);
    cardsContainer.innerHTML = "";
    if (array.length == 0) {
        cardsContainer.innerHTML = `<h1>No Search Results</h1>`
    }
    else {
        let fragment = document.createDocumentFragment();
        for (let i = 0; i < array.length; i++) {
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
            let cardId = array[i]._id;
            cardInfo.innerHTML += `<a href="./details.html?id=${cardId}" class="btn btn-primary card-btn-main">Go somewhere</a>`;

            cardDiv.appendChild(cardBody);
            cardBody.appendChild(cardInfo);
            fragment.appendChild(cardDiv);
        }
        cardsContainer.appendChild(fragment);
    }
}

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
    return cardsSearchFilter(inputNameEvent, cardsCheckFiltered);
}


getDataIndex();