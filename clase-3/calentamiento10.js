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

// 📌 Feedback Docente (Profesor Axel):
// Buena lógica condicional anidada. Como consejo de limpieza: en JS no hace falta comparar `=== true` (ej. `if (esInvitado)` alcanza), y ojo con la condición `edad <= 18` en el `else if` final, ya que si `edad === 18` puede entrar en más de un bloque si no se encadenan bien con `if / else if / else`.
