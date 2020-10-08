let martilloMiniatura = "";
let llaveMiniatura = "";
let brochaMiniatura = "";
let troncoMiniatura = "";

let cantidadM = 0;
let cantidadB = 0;
let cantidadL = 0;
let cantidadT = 0;

function sumar(herramienta) {
  switch (herramienta) {
    case "martillo":
      cantidadM++;

      martilloMiniatura += `<img src="./images/logo.svg" alt="martillo" />`;
      break;
    case "brocha":
      cantidadB++;
      brochaMiniatura += `<img src="./images/brocha.svg" alt="brocha" />`;
      break;
    case "llave":
      cantidadL++;
      llaveMiniatura += `<img src="./images/llave.svg" alt="llave" />`;
      break;

    case "tronco":
      cantidadT++;
      troncoMiniatura += `<img src="./images/tronco.svg" alt="tronco" />`;
      break;
  }

  document.querySelector(
    "#martillo #unidades"
  ).innerHTML = `<p>${cantidadM}</p>`;
  document.querySelector("#llave #unidades").innerHTML = `<p>${cantidadL}</p>`;
  document.querySelector("#brocha #unidades").innerHTML = `<p>${cantidadB}</p>`;
  document.querySelector("#tronco #unidades").innerHTML = `<p>${cantidadT}</p>`;

  document.querySelector("#martillo #miniatura").innerHTML = martilloMiniatura;
  document.querySelector("#llave #miniatura").innerHTML = llaveMiniatura;
  document.querySelector("#brocha #miniatura").innerHTML = brochaMiniatura;
  document.querySelector("#tronco #miniatura").innerHTML = troncoMiniatura;
}
sumar();

function restar(herramienta) {
  switch (herramienta) {
    case "martillo":
      cantidadM--;
      martilloMiniatura = document.querySelector("#miniatura img");
      for (element of martilloMiniatura) {
        console.log(element);
        element.remove();
      }

      break;

    case "brocha":
      cantidadB--;
      /*  brochaMiniatura--; */
      break;

    case "llave":
      cantidadL--;
      llaveMiniatura--;
      break;

    case "tronco":
      cantidadT--;
      /*  troncoMiniatura--; */
      break;
  }

  document.querySelector(
    "#martillo #unidades"
  ).innerHTML = `<p>${cantidadM}</p>`;
  document.querySelector("#llave #unidades").innerHTML = `<p>${cantidadL}</p>`;
  document.querySelector("#brocha #unidades").innerHTML = `<p>${cantidadB}</p>`;
  document.querySelector("#tronco #unidades").innerHTML = `<p>${cantidadT}</p>`;

  document.querySelector("#martillo #miniatura").innerHTML = martilloMiniatura;
  document.querySelector("#llave #miniatura").innerHTML = llaveMiniatura;
  document.querySelector("#brocha #miniatura").innerHTML = brochaMiniatura;
  document.querySelector("#tronco #miniatura").innerHTML = troncoMiniatura;
}
restar();
