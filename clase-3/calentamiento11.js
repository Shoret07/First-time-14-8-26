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

