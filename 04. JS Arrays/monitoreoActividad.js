// <------- Arreglo de actividades sospechozas -----> modificar el valor de ser necesario
var actividadesSospechozas = [];

function agregarActividad(descripcion, nivelRiesgo) {
    /* TU CODIGO */
    if (!descripcion || !nivelRiesgo) 
        return "Descripcion o nivel de riesgo no valido";

   if (nivelRiesgo != "bajo" && nivelRiesgo != "medio" && nivelRiesgo != "alto") {
        return "Nivel de riesgo no valido, el nivel debe ser: bajo, medio o alto";
    }

    actividadesSospechozas.push("descripcion: " + descripcion + ", Riesgo - " + nivelRiesgo);

    return (
        "Actividad: " + descripcion + " con Nivel de riesgo: " + nivelRiesgo + " fue agregada con exito"
    ); 
}

function eliminarActividad(indice){
    /* TU CODIGO */
    if (typeof indice != "number") {
        return "El indice no es valido, debe ser un numero";
    }
    if (indice < 0 || indice >= actividadesSospechozas.length) {
        return "El indice no es valido, se encuentra fuera del rango";
    }

   actividadesSospechozas.splice(indice, 1);
   return "Actividad eliminada con exito";
}    

function filtrarActividadesPorRiesgo(nivelRiesgo){
    /* TU CODIGO */
    if (!nivelRiesgo) return "Nivel de riesgo no valido";

    if (nivelRiesgo != "bajo" && nivelRiesgo != "medio" && nivelRiesgo != "alto") {
        return "Nivel de riesgo no valido, el nivel debe ser: bajo, medio o alto";
    }

    var actividadesFiltradas = actividadesSospechozas.filter(function(actividad) {
        return actividad.includes("Riesgo - " + nivelRiesgo); 
    });
    if (!actividadesFiltradas.length) {
        return "No hay actividades con este nivel de riesgo";
    }
    return actividadesFiltradas;
}    

function generarReporteDeActividades(){
    /* TU CODIGO */
    var actividadesModificadas = actividadesSospechozas.map(function (actividad, index) {
        return "Id: " + index + ", " + actividad;
    });
    if (!actividadesModificadas.length) {
        return "No hay actividades para mostrar";
    }
    return actividadesModificadas;
}  
// <------- NO TOCAR -------->
module.exports = {
  agregarActividad,
  eliminarActividad,
  filtrarActividadesPorRiesgo,
  generarReporteDeActividades
}




