// ==============================================================================
// Ejercicio 5: Sumar Rango de Números
// Consigna: Escribir una función llamada `sumarRango` que reciba dos argumentos:
// `numeroInicial` y `numeroFinal`. La función debe retornar la suma de todos los
// números enteros dentro de ese rango (incluyendo los extremos).
// ==============================================================================

function sumarRango(numeroInicial, numeroFinal) {
    let suma = 0;
    for(let i = numeroInicial; i <= numeroFinal; i++){
        suma += i;
    }
    return suma;
}

// 📌 Feedback Docente (Profesor Axel):
// Ojo: Tu solución original con `while` imprimía números pero no retornaba la suma acumulada total del rango.
// Te dejé corregida la lógica con un bucle `for` y un acumulador `suma += i`.

console.log(sumarRango(20, 30));