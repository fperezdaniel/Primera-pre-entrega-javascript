/* Primera pre-entrega */

function productoTienda(totalProducto, costo, cantidad) {
    return totalProducto + costo * cantidad;
}
let total = 0;
let guantes = 1;
let juegoDeLlaves = 2;
let juegoDemechas = 3;
let juegoTubos = 4;
let juegoDestornilladores = 5;
let opcion;
let comenzar;
do {
    opcion = parseInt(prompt("Por favor ingrese la opcion para el producto que desea adquirir : 1.Guantes 2.Juego de llaves combinadas 3.Juego de mechas 4.juego de tubos 5.Juego de destornilladores"));
    switch (opcion) {
        case guantes:
            cantidadProducto = parseInt(prompt("El costo del par de guantes es de $300, por favor ingrese la cantidad que desea comprar."));
            total = productoTienda(total, 300, cantidadProducto);
            alert(total);
            break;
        case juegoDeLlaves:
            cantidadProducto = parseInt(prompt("El costo del juego de llaves combinadas es de $500, por favor ingre la cantidad que desea comprar."));
            total = productoTienda(total, 500, cantidadProducto);
            alert(total);
            break;
        case juegoDemechas:
            cantidadProducto = parseInt(prompt("El costo del juego de mechas es de $1000, por favor ingrese la cantidad que desea comprar."));
            total = productoTienda(total, 1000, cantidadProducto);
            alert(total);
            break;
        case juegoTubos:
            cantidadProducto = parseInt(prompt("El costo del set de tubos  es de $1000, por favor ingrese la cantidad que desea comprar."));
            total = productoTienda(total, 2000, cantidadProducto);
            alert(total);
            break;
        case juegoDestornilladores:
            cantidadProducto = parseInt(prompt("El costo del set de tubos  es de $1200, por favor ingrese la cantidad que desea comprar."));
            total = productoTienda(total, 1200, cantidadProducto);
            alert(total);
            break;
        default:
            alert("Ingrese una opcion valida, por favor")

        //total = total+precio*cantidad
    }
    comenzar = prompt("desea continuar? si/no")

} while (comenzar !== "no")

alert("El total de su compra es de " + total+ ". Muchas gracias por su compra");


























