//

/*
### Conceptos básicos a utilizar:

- **Variables y constantes:** Para almacenar datos como el nombre del silo, su capacidad y el stock actual. Ámbitos, ¡CUIDADO!
- **Objetos literales:** Para representar los silos y sus propiedades.
- **Estructuras condicionales:** `if` y `switch` para tomar decisiones basadas en los datos ingresados.
- **Funciones:** Para modularizar el código y realizar tareas específicas.
- **Entrada y salida de datos:** `prompt` para solicitar información al usuario y `alert` para mostrar mensajes.
*/

/*
1. Crear un desarrollo en JavaScript que simule el funcionamiento de esta planta.
2. Definir dos silos: uno para soja y otro para maíz. Cada silo tendrá una capacidad máxima y un stock actual de cereal.
3. Implementar una función que permita ingresar un camión. Esta función debe:
    - Solicitar al usuario el tipo de cereal (soja o maíz) y el peso de la carga.
    - Validar los datos ingresados (por ejemplo, que el peso sea un número positivo).
    - Determinar el silo correspondiente al tipo de cereal.
    - Verificar si hay suficiente espacio en el silo para almacenar la carga.
    - Si hay espacio, actualizar el stock del silo y mostrar un mensaje informando sobre el ingreso del camión.
    - Si no hay espacio, mostrar un mensaje indicando que el silo está lleno.
*/

//entrada
//	seleccion usuario (tipo de cereal)
//		soja
//		maiz
//	input usuario
//		peso de la carga
//	validar datos ingresados
//		peso positivo

//proceso
//	silo soja {max-storage,storage}
//	silo maiz {max-storage,storage}
//	determinar ek silo correspondiente al tipo de cereal
//	verificar si hay espacio suficiente en el silo seleccionado

// salida
//	- Si hay espacio, actualizar el stock del silo y mostrar un mensaje informando sobre el ingreso del camión.
//	- Si no hay espacio, mostrar un mensaje indicando que el silo está lleno.

class Silo {
  constructor(id, type, capacity = 50, currentLoad = 0) {
    this.id = id;
    this.capacity = capacity; //Capacidad maxima del silo en toneladas
    this.currentLoad = currentLoad; //Cantidad de grano almacenado actualmente en el silo en toneladas
    this.type = type; // Maiz / Soja
  }

  fill(amount) {
    amount = parseInt(amount);
    const silo = this;

    function biggerThanZero(amount) {
      return amount > 0;
    }
    function notOverflow(amount) {
      return amount + silo.currentLoad <= silo.capacity;
    }
    function validAmount(amount) {
      return biggerThanZero(amount) && notOverflow(amount);
    }
    if (validAmount(amount)) {
      silo.currentLoad += amount;
      console.log(`carga exitosa => ${silo.info()}`);
      // alert(`carga exitosa => ${silo.info()}`);
    } else {
      console.error(`la cantidad ingresada no es valida`);
      alert(
        `la cantidad ingresada no es valida\ncantidad maxima permitida: ${
          silo.capacity - silo.currentLoad
        } Toneladas`
      );
      console.error(
        `cantidad maxima permitida: ${
          silo.capacity - silo.currentLoad
        } Toneladas`
      );
    }
  }
  unload(amount) {
    const silo = this;
    function biggerThanZero(amount) {
      return amount > 0;
    }

    function notNegativeOverflow(amount) {
      return silo.currentLoad - amount >= 0;
    }
    function validAmount(amount) {
      return biggerThanZero(amount) && notNegativeOverflow(amount);
    }
    if (validAmount(amount)) {
      silo.currentLoad -= amount;
      console.log(`descarga exitosa => ${silo.info()}`);
    } else {
      console.error(`la cantidad ingresada no es valida`);
      console.error(`descarga maxima permitida: ${silo.currentLoad} Toneladas`);
    }
  }
  getCapacity() {
    return this.capacity;
  }
  getCurrentLoad() {
    return this.currentLoad;
  }
  info() {
    return `silo_${this.id}_${
      this.type
    }: ${this.getCurrentLoad()}/${this.getCapacity()} Toneladas`;
  }
}

function mostrarInfo(silo) {
  const { id, capacity, currentLoad, type } = silo;
  document.querySelector(`#silo-${id} .type `).textContent = type;
  document.querySelector(
    `#silo-${id} .capacity`
  ).textContent = `Capacidad Maxima: ${capacity} Toneladas`;
  document.querySelector(
    `#silo-${id} .currentLoad`
  ).textContent = `Carga actual:${currentLoad} Toneladas (${
    (currentLoad * 100) / capacity
  }%)`;
  document.querySelector(
    `#silo-${id} .capacityBar .progressBar `
  ).style.width = `${(currentLoad * 100) / capacity}%`;
}
let silos = [new Silo(0, "soja"), new Silo(1, "maiz")];
const hAccion = document.getElementById("Accion");
const hSelect = document.getElementById("TipoGrano");
const hInput = document.getElementById("TotalCarga");
const hBoton = document.getElementById("BtnCargar");

let tipoSilo, carga, accion;
hBoton.addEventListener("click", () => {
  accion = hAccion.value;
  tipoSilo = hSelect.value;
  carga = hInput.value;
  switch (accion) {
    case "carga":
      switch (tipoSilo) {
        case "Soja":
          silos[0].fill(carga);
          mostrarInfo(silos[0]);

          break;
        case "Maiz":
          silos[1].fill(carga);
          mostrarInfo(silos[1]);

          break;
      }
      break;
    case "descarga":
      switch (tipoSilo) {
        case "Soja":
          silos[0].unload(carga);
          mostrarInfo(silos[0]);

          break;
        case "Maiz":
          silos[1].unload(carga);
          mostrarInfo(silos[1]);

          break;
      }
      break;

    default:
      break;
  }
});

silos.forEach((silo) => {
  mostrarInfo(silo);
});
