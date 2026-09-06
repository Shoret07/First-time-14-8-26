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
    let imc = (peso / altura ^ 2);
    switch (true) {
        case (imc <= 18.5):
            console.log("Bajo de peso");
            break;
        case (imc >= 18.5 && imc <= 25.9):

            console.log("Normal");

            break;
        case (imc >= 25 && imc <= 29.9):
            console.log("Sobrepeso");
            break;
        case imc >= 30:
            console.log("Obeso");
            break;
    }
    return console.log("Puntaje de imc:", imc);
} console.log(bmi(50, 1.45));

// 📌 Feedback Docente (Profesor Axel):
// 1. Ojo: En JavaScript el operador ^ NO es potencia, es Bitwise XOR. Usar (altura ** 2) o Math.pow(altura, 2).
// 2. Ojo: 'console.log()' retorna undefined, por lo que 'return console.log()' retornará undefined. Debe retornar el String.
// Te dejo la solución completa con variable auxiliar y retorno único al final:

function bmi(peso, altura) {
    const indice = peso / (altura ** 2);
    let diagnostico = "Obeso"; // Valor por defecto

    if (indice < 18.5) {
        diagnostico = "Bajo de peso";
    } else if (indice < 25) {
        diagnostico = "Normal";
    } else if (indice < 30) {
        diagnostico = "Sobrepeso";
    }

    return diagnostico;
}

console.log(bmi(65, 1.8));
console.log(bmi(72, 1.6));
console.log(bmi(52, 1.75));
console.log(bmi(135, 1.7));