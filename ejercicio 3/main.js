/*
3. Llamadas:

Crea un programa que simule el registro de llamadas. Utiliza un
arreglo para almacenar objetos que representen cada llamada
(con propiedades como: número marcado, duración y fecha).
Luego, utilizando un ciclo y condicionales, muestra un resumen
de las llamadas, indicando las llamadas de más de 5 minutos.
*/

class Llamada {
  constructor(remitente, destinatario, duracion, fecha, hora, recibida) {
    this.remitente = remitente;
    this.destinatario = destinatario;
    this.duracion = duracion; // segundos
    this.fecha = fecha; // aa/mm/dd
    this.hora = hora; // 00:00
    this.recibida = recibida;
  }
}

const llamadas = [
  new Llamada(
    "+543515555555",
    "+543513333333",
    185,
    "2024/01/01",
    "15:25",
    true
  ),
  new Llamada(
    "+543515555555",
    "+543513333333",
    2500,
    "2024/01/02",
    "14:10",
    true
  ),
  new Llamada(
    "+543513333333",
    "+543515555555",
    265,
    "2024/02/07",
    "16:48",
    false
  ),
  new Llamada(
    "+543513333333",
    "+543515555555",
    1600,
    "2024/03/04",
    "12:59",
    false
  ),
  new Llamada(
    "+543513333222",
    "+543515555555",
    160,
    "2024/04/04",
    "12:32",
    false
  ),
  new Llamada(
    "+543513333222",
    "+543515555555",
    4000,
    "2024/05/04",
    "15:08",
    false
  ),
  new Llamada(
    "+543513333222",
    "+543515555555",
    500,
    "2024/05/05",
    "07:21",
    false
  ),
  new Llamada(
    "+543513333222",
    "+543515555555",
    1600,
    "2024/05/06",
    "20:52",
    false
  ),
  new Llamada(
    "+543515555555",
    "+543513333333",
    2500,
    "2024/08/07",
    "14:10",
    true
  ),
  new Llamada(
    "+543515555555",
    "+543513333311",
    480,
    "2024/08/09",
    "18:10",
    true
  ),
  new Llamada(
    "+543515555555",
    "+543513333311",
    300,
    "2024/08/15",
    "14:10",
    true
  ),
  new Llamada(
    "+543515555555",
    "+543513333311",
    2000,
    "2024/08/16",
    "19:30",
    true
  ),
  new Llamada(
    "+543515555555",
    "+543513333311",
    2001,
    "2024/08/17",
    "15:16",
    true
  ),
];

let llamadasFiltradas = [];

function renderLlamadas(llamadas) {
  let container = document.createElement("div");
  let titulo = document.createElement("h2");
  titulo.textContent = "Llamadas";
  container.class = "container";
  document.body.appendChild(container);
  container.appendChild(titulo);
  llamadas.forEach((llamada) => {
    //creacion de elementos html
    let hLlamada = document.createElement("div");
    let hRemitente = document.createElement("div");
    let hDestinatario = document.createElement("div");
    let hDuracion = document.createElement("div");
    let hFecha = document.createElement("div");
    let hHora = document.createElement("div");
    let hRecibida = document.createElement("div");

    //inyeccion de datos
    hRemitente.textContent = `remitente:${llamada.remitente}`;
    hDestinatario.textContent = `destinatario:${llamada.destinatario}`;
    hDuracion.textContent = `duracion:${llamada.duracion}`;
    hFecha.textContent = `fecha:${llamada.fecha}`;
    hHora.textContent = `hora:${llamada.hora}`;
    hRecibida.textContent = `${
      llamada.recibida ? "llamada realizada" : "llamada recibida"
    }`;
    //agregar clases
    hRemitente.classList.add("remitente");
    hDestinatario.classList.add("destinatario");
    hDuracion.classList.add("duracion");
    hFecha.classList.add("fecha");
    hHora.classList.add("hora");
    hRecibida.classList.add("tipo");
    hLlamada.classList.add("llamada");
    hLlamada.classList.add(llamada.recibida ? "realizada" : "recibida");
    //incluir "informacion de la llamada" dentro de la "llamada"
    hLlamada.appendChild(hRemitente);
    hLlamada.appendChild(hDestinatario);
    hLlamada.appendChild(hDuracion);
    hLlamada.appendChild(hFecha);
    hLlamada.appendChild(hHora);
    hLlamada.appendChild(hRecibida);
    //incluir "llamada" dentro del contenedor de "llamadas"
    container.appendChild(hLlamada);
  });
}

function renderLlamadasFiltradas(llamadas) {
  let container = document.createElement("div");
  let titulo = document.createElement("h2");
  titulo.textContent = "Llamadas (5 minutos o menos)";
  container.class = "container";
  document.body.appendChild(container);
  container.appendChild(titulo);
  llamadas.forEach((llamada) => {
    if (llamada.duracion <= 300) {
      //creacion de elementos html
      let hLlamada = document.createElement("div");
      let hRemitente = document.createElement("div");
      let hDestinatario = document.createElement("div");
      let hDuracion = document.createElement("div");
      let hFecha = document.createElement("div");
      let hHora = document.createElement("div");
      let hRecibida = document.createElement("div");
      //inyeccion de datos
      hRemitente.textContent = `remitente: ${llamada.remitente}`;
      hDestinatario.textContent = `destinatario: ${llamada.destinatario}`;
      hDuracion.textContent = `duracion: ${llamada.duracion}`;
      hFecha.textContent = `fecha: ${llamada.fecha}`;
      hHora.textContent = `hora: ${llamada.hora}`;
      hRecibida.textContent = `${
        llamada.recibida ? "llamada realizada" : "llamada recibida"
      }`;
      //agregar clases
      hRemitente.classList.add("remitente");
      hDestinatario.classList.add("destinatario");
      hDuracion.classList.add("duracion");
      hFecha.classList.add("fecha");
      hHora.classList.add("hora");
      hRecibida.classList.add("tipo");
      hLlamada.classList.add("llamada");
      hLlamada.classList.add(llamada.recibida ? "realizada" : "recibida");
      //incluir "informacion de la llamada" dentro de la "llamada"
      hLlamada.appendChild(hRemitente);
      hLlamada.appendChild(hDestinatario);
      hLlamada.appendChild(hDuracion);
      hLlamada.appendChild(hFecha);
      hLlamada.appendChild(hHora);
      hLlamada.appendChild(hRecibida);
      //incluir "llamada" dentro del contenedor de "llamadas"
      container.appendChild(hLlamada);
    }
  });
}

renderLlamadas(llamadas);
renderLlamadasFiltradas(llamadas);
