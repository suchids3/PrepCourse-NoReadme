function checkLongitud(longitud) {
  /* TU CODIGO */
  if (!longitud) return "debe ingresar la longitud";
  
  if (typeof longitud != "string") {
    return "la longitud recibida no es válida";
  }
  if (longitud < 3 ) {
    return "la longitud debe ser mayor o igual a 3";
  }
  if (longitud > 10 ) {
    return "la longitud debe ser menor o igual a 10";
  }
  return longitud;
}



function generarContrasena(longitud, incluirEspeciales, incluirNumeros, incluirMayusculas ) {
  /* TU CODIGO */
  var letras = "abcdefghijklmnopqrstuvwxyz";

  var numeros = "0123456789";

  var especiales = "!$%&/()=?¿|@#~€¬[]{}*^Ç";

  var letrasMayusculas = letras.toUpperCase();

  var caracteresDisponibles = letras;

  if (incluirEspeciales) {
      caracteresDisponibles += especiales;
  }

  if (incluirNumeros) {
      caracteresDisponibles += numeros;
  }

  if (incluirMayusculas) {
     caracteresDisponibles += letrasMayusculas; 

  }

  var contrasena = "";

  if (longitud >= 3) {
    var valorAleatorio = Math.random() * caracteresDisponibles.length;
    var valorEntero = Math.floor(valorAleatorio);
    var caracter = caracteresDisponibles.charAt(valorEntero);
  }

  return "Contraseña generada: " + contrasena;
}

// <------- NO TOCAR -------->
module.exports = {
  checkLongitud,
  generarContrasena,
};
