let martilloMiniatura;
let ud = 0;

/* function sumaUnidadBrocha() {
  ud = ud + 1;

  console.log(ud);
  document.querySelector("#brocha #unidades").textContent = `${ud}`;
  return ud;
}
sumaUnidadBrocha(); */

/* function sumaUnidad() {
  ud = ud + 1;

  console.log(ud);
  document.getElementById("unidades").textContent = `${ud}`;
  return ud;
}
sumaUnidad(); */

/* Comprar: hasta 10 artículos por producto */

let cantidad = 0;
function sumar() {
  if (cantidad < 10) {
    cantidad++;
    document.querySelector("#martillo #unidades").textContent = cantidad;
  } else {
    alert("El límite es hasta 10 artículos por producto");
  }
}
sumar();



function addImages(cantidad) {
  for (let i = 0; (i = cantidad); i++) {
    let miniatura = ` <img src="./images/martillo.svg" alt="martillo" />`;
    total += miniatura[i];
    document.getElementById("miniatura").innerHTML = total;
  }
}
addImages();

/* function sumaMiniatura() {
  for (let i = 0; i > 4; i++) {
    let miniatura = ` <img src="./images/martillo.svg" alt="martillo" />`;
    totalMiniaturas += miniatura[i];
    document.getElementById("miniatura").appendChild = totalMiniaturas;
  }
}

sumaMiniatura(); */

/* function sumaUnidadLlave() {
  ud = ud + 1;

  console.log(ud);
  document.querySelector("#llave #unidades").textContent = `${ud}`;
  return ud;
}
sumaUnidadLlave();

function sumaUnidadMartillo() {
  ud = ud + 1;

  console.log(ud);
  document.querySelector("#martillo #unidades").textContent = `${ud}`;
  return ud;
}
sumaUnidadMartillo();

function sumaUnidadTronco() {
  ud = ud + 1;

  console.log(ud);
  document.querySelector("#tronco #unidades").textContent = `${ud}`;
  return ud;
}
sumaUnidadTronco();
 */
