import { conectionAPI } from './ConectionAPI.js';



async function createCard() {
    const container = document.querySelector("[data-list]");
    const cards = await conectionAPI.getCards();
    if (cards.length === 0) {
        container.innerHTML = '<h1>No hay productos</h1>';
        return;
    }else{
    cards.forEach((card, index) => {
        const cardElement = document.createElement("div");
        cardElement.innerHTML = `
            <div class="card" id="card-${index}">
                <img src="${card.url}" alt="${card.name}">
                <h1>${card.name}</h1>
                <div class="btn-price">
                    <p class="price">$${card.price}</p>
                    <button class="delete-btn" data-id="${card.id}">
                        <img src="./img/delete_4219.png" alt="Borrar">
                    </button>
                </div>
            </div>`;
        
        // Añadir evento al botón de eliminar
        const deleteButton = cardElement.querySelector('.delete-btn');
        deleteButton.addEventListener('click', async () => {
            try {
                await conectionAPI.deleteCard(card.id); // Llamar a deleteCard con el ID correspondiente
                cardElement.remove(); // Eliminar la tarjeta del DOM si se elimina correctamente
            } catch (error) {
                console.error('Error al eliminar la tarjeta:', error.message);
            }
        });

        container.appendChild(cardElement);
    });
}
}

createCard();