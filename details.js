let eventsData = data.events;
console.log(eventsData);
const id = new URLSearchParams(location.search).get("id");
console.log(id);
const card = eventsData.find(elem => elem.id == id);
console.table(card);
function showCards(idContainer) {
    const container = document.getElementById(idContainer);
    let cardAssis = card.assistance ? card.assistance : card.estimate;
    container.innerHTML = 
    `<div class="d-flex w-50 contenedor-details p-3">
        <div class="d-flex w-50 contenedor-img">
            <img src=${card.image} class="img-details" alt="Costume Party">
        </div>
        <div class="d-flex flex-column align-items-center justify-content-center contenedor-desc w-50 p-3">
            <h1>${card.name}</h1>
            <p>Date: ${card.date}</p>
            <p>Description: ${card.description}.</p>
            <p>Category: ${card.category}</p>
            <p>Place: ${card.place}.</p>
            <p>Capacity: ${card.capacity}.</p>
            <p>Assistance : ${cardAssis}.</p>
            <p>Price: $${card.price}.</p>
        </div>
    </div>`
}

showCards('main-container');