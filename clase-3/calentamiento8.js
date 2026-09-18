function duplicar(arreglo){
    for(let i = 0; i < arreglo.length; i++){
       return arreglo.map(num=>num *2);
    }
}

console.log(duplicar([1,2,3,8,10]));