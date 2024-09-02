/*
Imagina que estás programando una máquina expendedora
muy simple. Esta máquina solo vende un producto al precio de
$500. El usuario debe ingresar la cantidad de dinero que desea
introducir.
*/

class Producto {
  constructor(id, nombre, precio, imagen, cantidad) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
    this.cantidad = cantidad;
  }

  restarCantidad() {
    if (this.cantidad > 0) {
      this.cantidad -= 1;
    } else {
      // cambiar color del producto a rojo
    }
  }
}

const expendedora = {
  productos: [
    new Producto(0, "pepsi 500ml", 500, "./assets/img/pepsi.jpg", 10),
    new Producto(1, "coca-cola 500ml", 500, "./assets/img/coca.jpg", 10),
    new Producto(2, "sprite 500ml", 500, "./assets/img/sprite.jpg", 10),
    new Producto(3, "fanta 500ml", 500, "./assets/img/fanta.jpg", 10),
  ],
  saldo: 0,
  inputDinero: document.getElementById("inp-dinero"),
  botonIngresarDinero: document.getElementById("btn-ingreso-dinero"),
  botonDevolverCambio: document.getElementById("btn-dar-cambio"),
  displaySaldoDisponible: document.getElementById("saldo-disponible"),

  venderProducto(idProducto) {
    const producto = this.productos.find((p) => p.id == idProducto);
    const { precio } = producto;

    // alert(`
    //   ID: ${idProducto}
    //   PRODUCTO: ${producto}
    //   PRECIO: ${precio}
    //   SALDO: ${this.saldo}
    //   SALDO MAYOR AL PRECIO: ${this.saldo >= precio}
    //   `);

    if (this.saldo >= precio && producto.cantidad > 0) {
      producto.restarCantidad();
      const { cantidad, nombre } = producto;
      console.log(`${nombre} restantes: ${cantidad}`);
      this.saldo = Number(this.saldo) - precio;
      this.displaySaldoDisponible.textContent = `saldo: $${this.saldo}`;
    } else {
      if (!(this.saldo >= precio)) {
        alert("saldo insuficiente");
      } else if (!producto.cantidad > 0) {
        alert("producto sin stock");
      }
    }
  },
  ingresarDinero() {
    function valido(dinero) {
      return (
        dinero == 50 ||
        dinero == 100 ||
        dinero == 200 ||
        dinero == 500 ||
        dinero == 1000 ||
        dinero == 2000 ||
        dinero == 10000
      );
    }
    const dinero = this.inputDinero.value;
    if (valido(dinero)) {
      this.saldo += Number(dinero);
      this.displaySaldoDisponible.textContent = `saldo: $${this.saldo}`;
      this.inputDinero.value = "";
    } else {
      this.inputDinero.value = "";
      alert(`solo se aceptan billetes de:
        $50
        $100
        $200
        $500
        $1000
        $2000
        $10000
        `);
    }
  },
  darCambio() {
    this.saldo = 0;
    this.displaySaldoDisponible.textContent = `saldo: $${this.saldo}`;
  },
  actualizarProductos() {
    const hProductos = document.getElementById("productos");
    hProductos.innerHTML = "";
    expendedora.productos.forEach((producto) => {
      const { id, nombre, precio, imagen, cantidad } = producto;

      const hProducto = document.createElement("div");
      hProducto.classList.add("producto");
      hProducto.id = `producto-${id}`;
      hProducto.setAttribute(
        "onclick",
        `expendedora.venderProducto(${id});expendedora.actualizarProductos()`
      );
      hProducto.style.backgroundImage = `url(${imagen})`;
      hProducto.innerHTML = `
        <div class="nombre-producto">${nombre}</div>
        <div class="precio-producto">$${precio}</div>
        <div class="cantidad-producto">unidades: ${cantidad}</div>
      `;
      hProductos.appendChild(hProducto);
      //   hProductos.innerHTML += `
      // <div class="producto" id=producto-${id} onclick="expendedora.venderProducto(${id},dinero);actualizarProductos()">
      // <img src="${imagen}">
      //   <div class="nombre-producto">${nombre}</div>
      //   <div class="precio-producto">${precio}</div>
      //   <div class="cantidad-producto">${cantidad}</div>
      // </div>
      //   `;
    });
  },
};

expendedora.actualizarProductos();
