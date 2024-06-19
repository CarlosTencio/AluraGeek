async function addProduct(name,price,url){
  const conectionApi=await fetch("http://localhost:4000/products",{ 
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

  const convertedConection =await conectionApi.json();

  if(!conectionApi.ok){
  throw new Error("Error al crear video");
}

return convertedConection;
}

export const conectionAPI={
    addProduct
}