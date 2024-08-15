/*
2. Mensajes de texto:

Simula una conversación de mensajes de texto. Crea un arreglo
que contenga objetos, donde cada objeto represente un
mensaje (con propiedades como: remitente, destinatario y
contenido). Utiliza un “iterador” para recorrer el arreglo y
mostrar cada mensaje en pantalla.
*/

class Mensaje {
  constructor(remitente, destinatario, contenido) {
    this.remitente = remitente;
    this.destinatario = destinatario;
    this.contenido = contenido;
  }
}

const mensajes = [
  new Mensaje("cristian", "alvaro", "Hola"),
  new Mensaje("alvaro", "cristian", "Hola como andas?"),
  new Mensaje("cristian", "alvaro", "Todo bien y vos?"),
  new Mensaje("alvaro", "cristian", "Bien"),
];

let div = document.createElement("div");
div.id = "mensajes"
document.getElementById("container").appendChild(div);
mensajes.forEach((mensaje) => {
  let msj = document.createElement("pre");
  msj.textContent = `Remitente:${mensaje.remitente}\nDestinatario:${mensaje.destinatario}\nMensaje:${mensaje.contenido}`;
  div.appendChild(msj);
});
