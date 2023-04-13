// setTimeot -> ejecutar una funcion pasado x tiempo en ms;
let contador = 1;
function mensaje(){
    document.write(`<h2>Hola mundo, N=${contador}</h2>`);
    if(contador === 5){
        clearInterval(id);
    }
    contador++;

}

// window.setTimeout(mensaje, 3000);
// setTimeout(mensaje, 4000);

// setTimeout(()=>{
//     document.write(`<p>Esta es otra funcion</p>`);
// }, 5000);

// setInterval -> ejecuta una funcion cada cierto tiempo en ms;

const id=  setInterval(mensaje, 2000);
