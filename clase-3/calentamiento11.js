function simularReportePing(intentosMaximos) {
    intentosMaximos = Number(intentosMaximos);
    for(i=1; i <= intentosMaximos; i++){
        
        if(i%5===0){
            console.log("Error crítico en intento " + i);
             break;
        }else if(i%2===0){
            console.log("intento " +i+ " exitoso");
        }else{
            console.log("intento " +i+ " fallido");
        }
    }
    
}console.log(simularReportePing(5));

// 📌 Feedback Docente (Profesor Axel):
// Bien pensado el uso del operador módulo (`%`) para detectar múltiplos de 5 y de 2. Ojo con declarar la variable del bucle `i`: siempre usá `let i = 1` para evitar declarar variables globales accidentales.
