function bmi(peso, altura) {
    let imc = (peso/altura^2);
    switch(true){
    case (imc<=18.5):
        console.log("Bajo de peso");
        break;
    case (imc>=18.5 && imc<=25.9):
        
        console.log("Normal");

        break;
    case (imc>=25 && imc<=29.9):
        console.log("Sobrepeso");
        break;
    case imc>=30:
        console.log("Obeso");
        break;
    }
    return console.log("Puntaje de imc:",imc);
}console.log(bmi(50, 1.45));