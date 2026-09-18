function calcularEstadisticasDescarga(cantArchivos, tamanoPromedioMB) {
    cantArchivos = Number(cantArchivos);
    tamanoPromedioMB = Number(tamanoPromedioMB);
    let peso = cantArchivos * tamanoPromedioMB;
    let kb = peso *1024;
    return `Se descargarán ${cantArchivos} archivos, los cuales pesan en conjunto ${kb} kb`;

}
console.log(calcularEstadisticasDescarga("18","19"));