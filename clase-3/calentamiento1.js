// ==============================================================================
// Ejercicio 1: Contraseña Válida
// Consigna: Escribir una función llamada `contrasenaValida` que reciba un string
// y retorne `true` si el string es igual a "2Fj(jjbFsuj" o "eoZiugBf&g9".
// De lo contrario debe retornar `false`.
// ==============================================================================

function contrasenaValida(str) {
  let JUAN = false;
  if (str === "2Fj(jjbFsuj" || str === "eoZiugBf&g9") {
    JUAN = true;
  }
  return JUAN;
}
console.log(contrasenaValida("2Fj(jjbFsuj"));

// 📌 Feedback Docente (Profesor Axel):
// Muy bien resuelto. Ojo con el nombre de variables: usaste 'JUAN' en mayúsculas (por convención las mayúsculas en JS se reservan para constantes globales como MATH_PI).
// Te dejo la estructura refactorizada usando 'esValida':

function contrasenaValida(str) {
    let esValida = false;

    if (str === "2Fj(jjbFsuj" || str === "eoZiugBf&g9") {
        esValida = true;
    }

    return esValida;
}

console.log(contrasenaValida("2Fj(jjbFsuj"));
console.log(contrasenaValida("eoZiugBf&g9"));
console.log(contrasenaValida("hola"));