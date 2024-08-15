/*
4. Aplicaciones:

Crea un objeto literal que represente una aplicación de tu
teléfono. Este objeto debe tener propiedades como: nombre,
categoría, tamaño y calificación. Puedes utilizar un switch case
para mostrar un mensaje diferente según la categoría de la
aplicación (por ejemplo, "Juego", "Redes sociales", "Utilidad").
*/

const app = {
  nombre: "zombies 1",
  categoria: "juego",
  tamaño: 250000, //KB
  calificacion: 4.2, // calificacion maxima 5,
  logo: "./assets/svg/zombie.svg",
};

function getCategoria(app) {
  switch (app.categoria) {
    case "juego":
      alert("Juego");
      break;
    case "red_social":
      alert("red social");

      break;

    case "utilidad":
      alert("utilidad");

      break;
    case "sistema":
      alert("sistema");

      break;

    default:
      break;
  }
}

const hApp = document.createElement("div");

hApp.style.width = "50px";
hApp.style.height = "50px";
hApp.style.backgroundImage = `url(${app.logo})`;
hApp.style.backgroundSize = "cover";
hApp.style.backgroundPosition = "center";
hApp.style.border = " 1px solid black";
hApp.style.borderRadius = "20px";
hApp.style.float = "left";
hApp.style.marginLeft = "10px";

hApp.addEventListener("click", () => {
  getCategoria(app);
});
document.getElementById("apps").appendChild(hApp);
