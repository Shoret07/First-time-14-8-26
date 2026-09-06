// ==============================================================================
// Ejercicio 1: Contraseña Válida
// Consigna: Escribir una función llamada `contrasenaValida` que reciba un string
// y retorne `true` si el string es igual a "2Fj(jjbFsuj" o "eoZiugBf&g9".
// De lo contrario debe retornar `false`.
// ==============================================================================

function contrasenaValida(str) {
    let JUAN=false;
    if(str === "2Fj(jjbFsuj" || str === "eoZiugBf&g9"){
      JUAN=true;
    }
    return JUAN;
}

// 📌 Feedback Docente (Profesor Axel):
// 1. Ojo con el nombre de variables: Usaste 'JUAN' en mayúsculas. En JS por convención las mayúsculas se reservan para constantes globales (ej. MATH_PI). Usá 'const esValida' o 'let esValida' en camelCase.
// 2. Podés simplificar retornando directamente la expresión booleana:
// return str === "2Fj(jjbFsuj" || str === "eoZiugBf&g9";

console.log(contrasenaValida("2Fj(jjbFsuj"));