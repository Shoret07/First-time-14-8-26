function numeroDeCaracteres(str, caracter) {
    let contador = 0;

    for (let n = 0; n < str.length; n++) {
        if (str[n] === caracter) {
            contador++;
        }
    }

    return contador;
}
console.log(numeroDeCaracteres("horoscopo", "o"));

// Feedback Docente (Profesor Axel):
// ¡Excelente lógica! Recorriste el string correctamente como un arreglo de caracteres con str.length e incrementaste el contador.

