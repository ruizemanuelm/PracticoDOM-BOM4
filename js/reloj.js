let seccion = document.getElementById("secc");

function rojo() {
  seccion.innerHTML =
    '<main class="container text-center my-5"><section id="secc" class="textoRojo"><h2 class="display-1" id="hora"></h2><h2 id="fecha"></h2></section>';
}
function verde() {
  seccion.innerHTML =
    '<main class="container text-center my-5"><section id="secc" class="textoVerde"><h2 class="display-1" id="hora"></h2><h2 id="fecha"></h2></section>';
}
function amarillo() {
  seccion.innerHTML =
    '<main class="container text-center my-5"><section id="secc" class="textoAmarillo"><h2 class="display-1" id="hora"></h2><h2 id="fecha"></h2></section>';
}
function obtenerHora() {
  //obtener la fecha actual
  let fechaActual = new Date();
  const dia = fechaActual.getDate(); //1-31
  const diaSemana = fechaActual.getDay(); //0-6
  const mes = fechaActual.getMonth(); //0-11
  const año = fechaActual.getFullYear(); //2023
  let pFecha = document.getElementById("fecha");
  let pHora = document.getElementById("hora");
  let tipoHorario = "AM";
  const dias = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  pFecha.innerHTML = `${dias[diaSemana]} ${dia} de ${meses[mes]} del ${año}`;
  pHora.innerHTML = `${hora()}:${minutos()}:${segundos()} ${tipoHorario}`;

  function hora() {
    let horaActual = fechaActual.getHours();
    let horaPm;
    if (horaActual === 12) {
      tipoHorario = "PM";
      return horaActual;
    } else if (horaActual > 12) {
      horaPm = "0" + (horaActual - 12);
      tipoHorario = "PM";
      return horaPm;
    } else {
      return horaActual;
    }
  }
  function minutos() {
    let minutosActual = fechaActual.getMinutes();
    let primerosMinutos;
    if (minutosActual < 10) {
      primerosMinutos = "0" + minutosActual;
      return primerosMinutos;
    } else {
      return minutosActual;
    }
  }
  function segundos() {
    let segundosActual = fechaActual.getSeconds();
    let primerosSegundos;
    if (segundosActual < 10) {
      primerosSegundos = "0" + segundosActual;
      return primerosSegundos;
    } else {
      return segundosActual;
    }
  }
}

setInterval(obtenerHora, 1000);
