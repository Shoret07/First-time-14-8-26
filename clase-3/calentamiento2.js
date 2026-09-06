// ==============================================================================
// Ejercicio 2: Calcular Impuestos
// Consigna: Escribir una función llamada `calcularImpuestos` que reciba dos
// argumentos numéricos: `edad` e `ingresos`. Si la `edad` es igual o mayor a 18
// y los `ingresos` son iguales o mayores a 1000 debe retornar el valor de los
// `ingresos * 0.4` (el 40%). De lo contrario debe retornar `0`.
// ==============================================================================

function calcularImpuestos(edad, ingresos) {
    let gabi = 0;
    if (edad >= 18 && ingresos >= 1000) {
        gabi = (ingresos * 0.40);
    }
    return gabi;
}
console.log(calcularImpuestos(edad=18, ingresos=1000));

// 📌 Feedback Docente (Profesor Axel):
// Muy bien resuelto. Ojo con la llamada de la función: en JS pasamos directamente los valores posicionales `calcularImpuestos(18, 1000)` en lugar de `edad=18`.
// Te dejo la solución con nombres de variables expresivos:

function calcularImpuestos(edad, ingresos) {
    let impuesto = 0; // Valor por defecto

    if (edad >= 18 && ingresos >= 1000) {
        impuesto = ingresos * 0.4;
    }

    return impuesto;
}

console.log(calcularImpuestos(18, 1000));  
console.log(calcularImpuestos(40, 10000)); 
console.log(calcularImpuestos(17, 5000));  
console.log(calcularImpuestos(30, 500));