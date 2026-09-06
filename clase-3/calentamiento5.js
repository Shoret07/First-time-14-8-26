// ==============================================================================
// Ejercicio 5: Sumar Rango de Números
// Consigna: Escribir una función llamada `sumarRango` que reciba dos argumentos:
// `numeroInicial` y `numeroFinal`. La función debe retornar la suma de todos los
// números enteros dentro de ese rango (incluyendo los extremos).
// ==============================================================================

function sumarRango(numeroInicial, numeroFinal) {
    let num = numeroInicial;
    while (num < numeroFinal) {
        console.log(numeroInicial);
        console.log(num = num + 1);
    }

}
console.log(sumarRango(20, 30));

// 📌 Feedback Docente (Profesor Axel):
// En tu intento con `while` estabas imprimiendo el contador pero no sumando los valores acumulados.
// Te dejo la solución de referencia con bucle `for` y variable acumuladora con retorno único:

function sumarRango(numeroInicial, numeroFinal) {
    let suma = 0;

    for (let i = numeroInicial; i <= numeroFinal; i++) {
        suma = suma + i;
    }

    return suma;
}

console.log(sumarRango(0, 10));
console.log(sumarRango(12, 14));
console.log(sumarRango(5, 5));