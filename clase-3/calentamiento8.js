function duplicar(arreglo){
    for(let i = 0; i < arreglo.length; i++){
       return arreglo.map(num=>num *2);
    }
}

console.log(duplicar([1,2,3,8,10]));

// 📌 Feedback Docente (Profesor Axel):
// Atención: al usar `arreglo.map()` no hace falta envolverlo en un bucle `for`. El método `.map()` ya recorre todo el arreglo por sí solo. Además, al tener un `return` dentro del `for`, el bucle solo se ejecuta 1 vez. Podés hacer directamente `return arreglo.map(num => num * 2);`.