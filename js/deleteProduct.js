import { conectionAPI } from "./ConectionAPI";

// Controlador de eventos de clic para los botones de eliminar
document.body.addEventListener('click', async function(event) {
    if (event.target.matches('.delete-btn')) {
        const id = event.target.dataset.id;
        await conectionAPI.deleteCard(id);
        // Refresh the cards after deletion
        createCard();
    }
});