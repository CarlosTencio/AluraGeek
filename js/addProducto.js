import { conectionAPI } from './ConectionAPI.js';

const formu = document.querySelector("[data-form]");
const btnClean = document.getElementById("btn-clean");
async function addProducto(event) {
    
    event.preventDefault();
    const name = document.querySelector("[data-name]").value;
    const price = document.querySelector("[data-price]").value;
    const url = document.querySelector("[data-url]").value;

    if (name === "" || price === "" || url === "") {
        alert("Por favor llene todos los campos");
        return;
    }else{
            try {
        await conectionAPI.addProduct(name, price, url);
        window.location.href = "index.html";
    } catch (error) {
        alert(error);
    }
    }


}

function cleanBtn(event) {
    event.preventDefault()
    document.querySelector("[data-name]").value = "";
    document.querySelector("[data-price]").value = "";
    document.querySelector("[data-url]").value = "";
}
btnClean.addEventListener("click", cleanBtn);
formu.addEventListener("submit", event => addProducto(event));    