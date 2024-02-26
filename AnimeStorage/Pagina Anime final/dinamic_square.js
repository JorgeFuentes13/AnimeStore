
// Define el contenido para cada botón en una variable
var contenido1 = "<p>¡No te pierdas la edición coleccionista de la figura de Shana de Shakugan no Shana, la cazadora de cabello de fuego y ojos ardientes!</p><h3>FECHAS Y DISPONIBILIDAD</h3><p>Fecha de salida aproximada: Agosto de 2024</p><p>Fecha fin de Pre-Order: 20 de Junio de 2023</p>";
var contenido2 = "<p>Las reservas se pueden aplazar. Siempre se pedirá por adelantado 1/3 del importe. </p>";
var contenido3 = "<p>Chile Express Express. El coste de los envíos fuera de Santiago depende del peso y lugar de destino del paquete.</p>";

// Inicializa el contenido con el valor de la variable "contenido1"
document.getElementById("miContenedor").innerHTML = contenido1;

// Define la función para cambiar el contenido del contenedor según el botón que se haya hecho clic
function cambiarContenido(contenido) {
  var contenedor = document.getElementById("miContenedor");
  if (contenido === "contenido1") {
    contenedor.innerHTML = contenido1;
  } else if (contenido === "contenido2") {
    contenedor.innerHTML = contenido2;
  } else if (contenido === "contenido3") {
    contenedor.innerHTML = contenido3;
  }
}
