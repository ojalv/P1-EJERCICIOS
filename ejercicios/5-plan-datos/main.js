/*
5. Plan de datos:

Simula el consumo de datos de un plan móvil. Crea una variable
para almacenar el límite de datos y otra para el consumo actual.
Utiliza por ejemplo un ciclo while para ir incrementando el
consumo hasta alcanzar o superar el límite. Cuando se supere el
límite, muestra un mensaje indicando que se ha alcanzado el
límite de datos.
*/
function renderInfo() {
  document.getElementById("datos").textContent = `${datos} GB`;
  document.getElementById("limite").textContent = `${limite} GB`;
}

const limite = 10; //gb
let datos = 0; //gb

renderInfo();
document.getElementById("usar-datos").addEventListener("click", () => {
  let intervalID = setInterval(usarDatos, 1000);
  function usarDatos() {
    if (datos < limite) {
      datos++;
      renderInfo();
    } else {
      clearInterval(intervalID);
      alert("datos insuficientes para seguir navegando");
    }
  }
});
