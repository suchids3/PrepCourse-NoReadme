function cajaFuerte(codigoSecreto, cantidadIntentos){
  /* TU CODIGO */
  if (codigoSecreto.legth != 4) return "El codigo debe tener exactamente 4 digitos";
  
  for (let i = 0; i < codigoSecreto.legth; i++) {
    if (isNaN(codigoSecreto[i])) return "El codigo secreto solo puede estar conformado por numeros"
  }
}

function validarNumerosRepetidos(codigo){
  /* TU CODIGO */
  
}

// <------- Contador de intentos -----> no modificar
var contadorIntentos = 1

function desbloquearCajaFuerte(codigoSecreto, cantidadIntentos, codigoDesbloqueo){
  /* TU CODIGO */
  
}

// <------- NO TOCAR -------->
module.exports = {
  cajaFuerte,
  desbloquearCajaFuerte,
  validarNumerosRepetidos
}