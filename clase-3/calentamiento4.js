// ==============================================================================
// Ejercicio 4: FizzBuzz
// Consigna: Escribir una función llamada `fizzBuzz` que reciba un número y retorne:
// - "fizz" si el número es múltiplo de 3.
// - "buzz" si el número es múltiplo de 5.
// - "fizzbuzz" si el número es múltiplo tanto de 3 como de 5.
// - Si no cumple ninguna, retornar el mismo número.
// ==============================================================================

function fizzbuzz(num) {
    let three = (num % 3);
    let five = (num % 5);
    if (three == 0 && five == 0) {
        console.log("fizzbuzz");
    } else if (three == 0) {
        console.log("fizz");
    } else if (five == 0) {
        console.log("buzz");
    } else {
        console.log(num)
    }

}
console.log(fizzbuzz(15));

// 📌 Feedback Docente (Profesor Axel):
// Muy bien evaluadas las condiciones. Ojo que la función debe RETORNAR el valor en lugar de hacer solo console.log.
// Te dejo la solución con variable auxiliar y retorno único al final:

function fizzBuzz(num) {
    let resultado = num; // Valor por defecto si no cumple ninguna condición

    if (num % 3 === 0 && num % 5 === 0) {
        resultado = "fizzbuzz";
    } else if (num % 3 === 0) {
        resultado = "fizz";
    } else if (num % 5 === 0) {
        resultado = "buzz";
    }

    return resultado;
}

console.log(fizzBuzz(6));
console.log(fizzBuzz(20));
console.log(fizzBuzz(30));
console.log(fizzBuzz(8));