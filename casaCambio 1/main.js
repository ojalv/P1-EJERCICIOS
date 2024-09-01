/*
Hacer el desarrollo que simule una casa de cambio. El programa debe solicitar al
usuario:
El tipo de dólar que desea operar (oficial, MEP o turista).
La cantidad de dólares a comprar o vender.
Si desea comprar o vender.
Utilizando el operador ternario y estructuras if...else, calcular el monto a pagar o
recibir, considerando los siguientes tipos de cambio (ejemplo):

Dólar Oficial: compra a $958.50, venta a $958.50.
Dólar Blue compra a $1340, venta a $1360.
Dólar MEP: compra a $1270.51, venta a $1270.28.
*/

class CotizacionesDolar {
  static OFICIAL = {
    id: "usd_oficial",
    compra: 958.5,
    venta: 958.5,
  };
  static BLUE = {
    id: "usd_blue",
    compra: 1340,
    venta: 1360,
  };
  static MEP = {
    id: "usd_mep",
    compra: 1270.51,
    venta: 1270.28,
  };

  constructor() {
    this.oficial = CotizacionesDolar.OFICIAL;
    this.blue = CotizacionesDolar.BLUE;
    this.mep = CotizacionesDolar.MEP;
  }
}
const cotizacion = new CotizacionesDolar();

function calcularCompra(CotizacionesDolar, montoUSD, idUSD) {
  //pesos necesarios = dolares a comprar x tipo de cambio de venta
  const { oficial, blue, mep } = CotizacionesDolar;
  let totalARS;
  switch (idUSD) {
    case oficial.id:
      totalARS = (montoUSD * oficial.compra).toFixed(2);
      totalARS = `Total a pagar: ARS$${totalARS}`;

      break;

    case blue.id:
      totalARS = (montoUSD * blue.compra).toFixed(2);
      totalARS = `Total a pagar: ARS$${totalARS}`;

      break;

    case mep.id:
      totalARS = (montoUSD * mep.compra).toFixed(2);
      totalARS = `Total a pagar: ARS$${totalARS}`;

      break;

    default:
      break;
  }
  return totalARS;
}

function calcularVenta(CotizacionesDolar, montoUSD, idUSD) {
  const { oficial, blue, mep } = CotizacionesDolar;
  let totalARS;
  switch (idUSD) {
    case oficial.id:
      totalARS = (montoUSD * oficial.venta).toFixed(2);
      totalARS = `ARS$${totalARS}`;

      break;

    case blue.id:
      totalARS = montoUSD * blue.venta;

      totalARS = `ARS$${totalARS}`;

      break;

    case mep.id:
      totalARS = montoUSD * mep.venta;

      totalARS = `ARS$${totalARS}`;

      break;

    default:
      break;
  }
  return `Total a recibir: ${totalARS}`;
}

function formularioInteractivo() {
  switch (operacion.value) {
    case "compra":
      document.querySelector(`label[for="monto"]`).textContent = "Comprar: ";
      document.getElementById("operacion-resultado").textContent =
        calcularCompra(cotizacion, monto.value, id_usd.value);
      break;
    case "venta":
      document.querySelector(`label[for="monto"]`).textContent = "Vender: ";
      document.getElementById("operacion-resultado").textContent =
        calcularVenta(cotizacion, monto.value, id_usd.value);
      break;
    default:
      break;
  }
}

// console.log(calcularCompra(cotizacion, 95850, "usd_oficial"));
// console.log(calcularVenta(cotizacion, 100, "usd_mep"));

const form = document.getElementById("form");
const { id_usd, operacion, monto } = form;
monto.addEventListener("keyup", formularioInteractivo);
operacion.addEventListener("click", formularioInteractivo);
id_usd.addEventListener("click", formularioInteractivo);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (monto.value>0) {
    alert("Transaccion realizada con exito! Gracias por operar en nuestra web!")
  }
});
