function calcularImpuestos(edad, ingresos) {
    let gabi=0;    
    if(edad >= 18 && ingresos >= 1000){
            gabi = (ingresos * 0.40); 
     }
     return gabi;
}console.log(calcularImpuestos(edad=18, ingresos=1000));