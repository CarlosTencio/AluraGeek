async function addProduct(name, price, url) {
  const conectionApi = await fetch("http://localhost:4000/products", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      price: `${price} colones`,
      url: url
    })
  });

  const convertedConection = await conectionApi.json();

  if (!conectionApi.ok) {
    throw new Error("Error al crear video");
  }

  return convertedConection;
}


async function getCards() {
  const conectionApi = await fetch("http://localhost:4000/products", {
    method: 'GET',
    headers: {
      "Content-Type": "application/json"
    }
  });

  const convertedConection = await conectionApi.json();

  if (!conectionApi.ok) {
    throw new Error("Error al obtener los videos");
  }
  return convertedConection;
}

async function deleteCard(id) {
    console.log("Card deleted");
  const conectionApi= await fetch(`http://localhost:4000/products/${id}`, {
      method: 'DELETE',
      headers: {
          "Content-Type": "application/json"
      }
  });

  if (!conectionApi.ok) {
      throw new Error("Error al eliminar la carta");
  }

}

export const conectionAPI = {
  deleteCard,addProduct, getCards
}