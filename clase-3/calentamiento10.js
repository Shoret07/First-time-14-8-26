function evaluarAccesoApp(edad, tienePermisoDocente, esInvitado) {
    edad= Number(edad);
    tienePermisoDocente = Boolean(tienePermisoDocente);
    esInvitado = Boolean(esInvitado);
    if(edad>=18){
        if(esInvitado == true){
            console.log("acceso denegado, usted es invitado");
        }else{
            console.log("Acceso concedido");
        }
    }
    if(edad<18 && tienePermisoDocente == true){
        if(esInvitado == true){
            console.log("acceso denegado, usted es invitado");
        }else{
            console.log("Usted puede ingresar, cuenta con permiso docente");
        }
    }else if(edad<=18 && tienePermisoDocente == false){
        console.log("Acceso denegado, no tiene permiso");
    }
}console.log(evaluarAccesoApp(18,true,true));

