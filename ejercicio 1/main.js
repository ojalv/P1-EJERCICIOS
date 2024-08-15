/*
1. Contactos:

Crea un objeto literal que represente a un contacto de tu
teléfono. Este objeto debe tener las propiedades: nombre,
apellido, número de teléfono y correo electrónico. Luego,
muestra toda la información del contacto en un formato legible.
*/

const contacto = {
  nombre: "pepe",
  apellido: `juarez`,
  telefono: "+54 123-1234567",
  email: "pepewarrior@gmail.com",
};

document.getElementById("nombre").textContent = contacto.nombre;
document.getElementById("apellido").textContent = contacto.apellido;
document.getElementById("telefono").textContent = contacto.telefono;
document.getElementById("email").textContent = contacto.email;
