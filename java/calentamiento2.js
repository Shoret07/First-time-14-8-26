// ==============================================================================
// Ejercicio 2: Calcular Impuestos
// Consigna: Escribir una función llamada `calcularImpuestos` que reciba dos
// argumentos numéricos: `edad` e `ingresos`. Si la `edad` es igual o mayor a 18
// y los `ingresos` son iguales o mayores a 1000 debe retornar el valor de los
// `ingresos * 0.4` (el 40%). De lo contrario debe retornar `0`.
// ==============================================================================

function calcularImpuestos(edad, ingresos) {
    let gabi=0;    
    if(edad >= 18 && ingresos >= 1000){
        gabi = (ingresos * 0.40); 
    }
    return gabi;
}

// 📌 Feedback Docente (Profesor Axel):
// 1. Ojo con los parámetros en la llamada: en JS no se usa sintaxis `edad=18` al invocar, se pasan los valores posicionales `calcularImpuestos(18, 1000)`.
// 2. Usá nombres de variables expresivos en camelCase (`const impuestos = ...`) en lugar de `gabi`.

console.log(calcularImpuestos(18, 1000));