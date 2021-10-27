// Generamos un array de objetos a partir de los prestamos generados anteriormente 
// 

class Prestamo {
    constructor (documento,nombre,apellido,monto,tasa,plazo) {
        this.documento = documento;
        this.nombre = nombre;
        this.apellido = apellido;
        this.monto = parseFloat (monto);
        this.tasa = parseFloat (tasa);
        this.plazo = parseFloat (plazo);
        this.montoTotal = parseFloat (0);
        this.cuota = parseFloat (0);
    }
    obtenerMontoFinal(){
        this.montoTotal = parseFloat(this.monto + (this.monto*this.tasa*this.plazo)/100);
    }
    calcularCuota () {
        this.cuota = this.montoTotal / this.plazo;
    }
}

function altaPrestamo () {
    var opcion = true;
    const cartera = [];
    do {
        let doc = prompt("Ingrese el numero de documento: ");
        let nom = prompt("Ingrese el nombre: ");
        let ape = prompt("Ingrese el apellido: ");
        let mon = prompt("Ingrese el monto: ");
        let tas = prompt("Ingrese la tasa: ");
        let pla = prompt("Ingrese el plazo: ");
        const auxPrestamo = new Prestamo (doc,nom,ape,mon,tas,pla);
        auxPrestamo.obtenerMontoFinal();
        auxPrestamo.calcularCuota();
        cartera.push (auxPrestamo);
        opcion = confirm("Quiere cargar otros Prestamo?");
    } while (opcion);

    let titulo = document.getElementById("titulo");
    let parrafo = document.getElementById("texto");
    titulo.parentNode.removeChild(titulo);
    parrafo.parentNode.removeChild(parrafo)
    let nuevoTitulo = document.createElement("t");
    nuevoTitulo.innerHTML = "<H1>Listado de Prestamos</H1>";
    document.body.appendChild(nuevoTitulo);
    for (const auxCartera of cartera) {
        let contenedor = document.createElement("div"); 
        contenedor.innerHTML = `<H2>El prestamo a nombre de ${auxCartera.nombre} ${auxCartera.apellido} </H2>
                                <h3>Es por un monto de ${auxCartera.monto}, a devolver en un plazo de ${auxCartera.plazo}</h3>
                                <h3>El monto total es: ${auxCartera.montoTotal.toFixed(2)} el valor de cada cuota es: ${auxCartera.cuota.toFixed(2)}</h3>`;
        document.body.appendChild(contenedor);
    }
}

altaPrestamo();