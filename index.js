const total_html = document.getElementById("total");
const cotizacion_html = document.getElementById("cotizacion");
let dolar_usdc_venta;
// Hacer una solicitud GET a una API utilizando la función fetch
fetch("https://criptoya.com/api/lemoncash/USDC/ARS")
  .then(response => {
    if (!response.ok) {
      throw new Error('La solicitud no fue exitosa');
    }
    return response.json(); // Parsear la respuesta JSON
  })
  .then(data => {
    dolar_usdc_venta=data['bid']; // Hacer algo con los datos recibidos
  })
  .catch(error => {
    console.error('Hubo un error:', error);
  });

let dolar_usdc_compra;
  // Hacer una solicitud GET a una API utilizando la función fetch
  fetch("https://criptoya.com/api/lemoncash/USDC/ARS")
    .then(response => {
      if (!response.ok) {
        throw new Error('La solicitud no fue exitosa');
      }
      return response.json(); // Parsear la respuesta JSON
    })
    .then(data => {
      dolar_usdc_compra=data['ask']; // Hacer algo con los datos recibidos
    })
    .catch(error => {
      console.error('Hubo un error:', error);
    });

let dolar_blue;
fetch("https://criptoya.com/api/dolar")
  .then(response => {
    if (!response.ok) {
      throw new Error('La solicitud no fue exitosa');
    }
    return response.json(); // Parsear la respuesta JSON
  })
  .then(data => {
    dolar_blue = data['blue']; // Hacer algo con los datos recibidos
  })
  .catch(error => {
    console.error('Hubo un error:', error);
  });

function convertir(){
    const tipo_dolar = document.getElementById("tipo-dolar").value;
    let dolar;
    let dolar_elegido;
    switch(tipo_dolar){
        case '1':
            dolar = dolar_blue;
            dolar_elegido = "dolar Blue";
        break;
        case '2':
            dolar = dolar_usdc_venta
            dolar_elegido = "USDC venta"
        break;
        case '3':
            dolar = dolar_usdc_compra
            dolar_elegido = "USDC compra"
        break;
        default:
            total_html.innerHTML = "ERROR CON LA COTIZACION";
    }
    
    pesos = document.getElementById("pesos").value;
    total = pesos / dolar;
    total = total.toFixed(3).replace('.',',');
    total_html.innerHTML = `$${pesos} son: ${total} al ${dolar_elegido}`;
    cotizacion_html.innerHTML= `Cotizacion $${dolar} por ${dolar_elegido}`;
}



