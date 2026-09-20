function procesarCompraMovil(precioBase, descuentoPct) {

   function aplicarDescuento(precio, descuento) {
        return precio - (precio * descuento / 100);
    }

      const sumarIva = function(precio) {
        return precio * 1.21;
    };
  const redondear = (valor) => Number(valor.toFixed(2));

    
    let precioDescontado = aplicarDescuento(precioBase, descuentoPct);
    let precioConIva = sumarIva(precioDescontado);
    let precioFinal = redondear(precioConIva);

    return precioFinal;
}

console.log(procesarCompraMovil(1000, 10));

// 📌 Feedback Docente (Profesor Axel):
// ¡Excelente resolución! Demostrás dominar funciones anidadas, expresiones de función (`const sumarIva`), funciones flecha (`const redondear`) y composición de funciones. Impecable.
