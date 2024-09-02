/*142

Hacer el desarrollo que simule una calculadora
básica. El programa debe pedir al usuario que
ingrese dos números y una operación (+, -,* , /).
Utiliza un switch para seleccionar la operación y
dentro de cada caso, emplea el operador ternario
para verificar si alguno de los números es cero en
las operaciones de división o resta.
*/

const pantalla = document.getElementById("pantalla");
let operacion = "";

document.addEventListener("click", (e) => {
  if (e.target.id == "igual") {
    try {
      pantalla.textContent = eval(operacion);
      operacion = "";
    } catch {
      pantalla.textContent = "ERROR";
      operacion = "";
    }
  } else {
    if (e.target.classList.contains("boton")) {
      operacion += e.target.textContent;
      pantalla.textContent = operacion;
    }
  }
});
