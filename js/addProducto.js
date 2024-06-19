import { conectionAPI } from './ConectionAPI.js';

const formu = document.querySelector("[data-form]");

async function addVideo(event) {
    event.preventDefault();
    const name = document.querySelector("[data-name]").value;
    const price = document.querySelector("[data-price]").value;
    const url = document.querySelector("[data-url]").value;

    try {
        await conectionAPI.addProduct(name, price, url);
        window.location.href = "index.html";
    } catch (error) {
        alert(error);
    }

}

formu.addEventListener("submit", event => addVideo(event));    