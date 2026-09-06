// ==============================================================================
// Ejercicio 3: IMC (Índice de Masa Corporal)
// Consigna: El índice de masa corporal (IMC o BMI) se calcula con la fórmula:
// peso / altura^2. Escribí una función llamada `bmi` que reciba `peso` y `altura`,
// y retorne un string de acuerdo a las siguientes posibilidades:
// - "Bajo de peso" si BMI < 18.5
// - "Normal" si está entre 18.5 y 24.9
// - "Sobrepeso" si está entre 25 y 29.9
// - "Obeso" si es igual o mayor a 30
// ==============================================================================

function bmi(peso, altura) {
    // ⚠️ ATENCIÓN IMPORTANTE: En JavaScript el operador ^ NO es potencia, es XOR a nivel de bits (Bitwise XOR).
    // Para elevar al cuadrado se usa el operador de potencia ** (peso / (altura ** 2)) o Math.pow(altura, 2).
    let imc = peso / (altura ** 2);
    
    let resultado = "";
    switch(true){
    case (imc < 18.5):
        resultado = "Bajo de peso";
        break;
    case (imc >= 18.5 && imc <= 24.9):
        resultado = "Normal";
        break;
    case (imc >= 25 && imc <= 29.9):
        resultado = "Sobrepeso";
        break;
    case imc >= 30:
        resultado = "Obeso";
        break;
    }
    
    // 📌 Ojo: console.log() retorna undefined, por lo que 'return console.log()' retornará undefined.
    // Lo correcto es retornar la categoría (String):
    return resultado;
}

// 📌 Feedback Docente (Profesor Axel):
// Te dejé corregido el cálculo de potencia (altura ** 2) y el retorno de la función. El uso de switch(true) es válido para rangos.

console.log("Categoría IMC:", bmi(50, 1.45));