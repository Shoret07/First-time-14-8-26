// ==============================================================================
// Ejercicio 4: FizzBuzz
// Consigna: Escribir una función llamada `fizzBuzz` que reciba un número y retorne:
// - "fizz" si el número es múltiplo de 3.
// - "buzz" si el número es múltiplo de 5.
// - "fizzbuzz" si el número es múltiplo tanto de 3 como de 5.
// - Si no cumple ninguna, retornar el mismo número.
// ==============================================================================

function fizzbuzz(num){
    let three = (num % 3);
    let five = (num % 5);
    if(three === 0 && five === 0){
        return "fizzbuzz";
    }else if(three === 0){
        return "fizz";
    }else if(five === 0){
        return "buzz";
    }else{
        return num;
    }
}

// 📌 Feedback Docente (Profesor Axel):
// 1. Las funciones en estos ejercicios deben RETORNAR el resultado (`return "fizzbuzz"` en vez de hacer `console.log`). Te dejé ajustados los returns.
// 2. Excelente orden evaluando primero el caso simultáneo (múltiplo de 3 y 5). Usá siempre la comparación estricta `===`.

console.log(fizzbuzz(15));