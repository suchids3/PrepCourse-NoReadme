function cajaFuerte(codigoSecreto, cantidadIntentos){
  /* TU CODIGO */
  if (codigoSecreto.length != 4) return "El codigo debe tener exactamente 4 digitos";
  
  for (let i = 0; i < codigoSecreto.length; i++) {
    if (isNaN(codigoSecreto[i])) return "El codigo secreto solo puede estar conformado por numeros";
  }

  if (validarNumerosRepetidos(codigoSecreto)) {
    return "el codigo secreto no puede tener numeros repetidos";
  }

  if (cantidadIntentos < 1 || cantidadIntentos > 5) {
    return "Solo se permite una cantidad de intentos mayor a 0 y menor a 6";
  }

  return codigoSecreto.toString() + cantidadIntentos.toString();
}

function validarNumerosRepetidos(codigo) {
  /* TU CODIGO */
  for (var i = 0; i < codigo.length - 1; i++) {
    for (var j = i + 1; j < codigo.length; j++) {
      if (codigo[i] == codigo[j]) return true;
    }
  }
}

// <------- Contador de intentos -----> no modificar
var contadorIntentos = 1

function desbloquearCajaFuerte(codigoSecreto, cantidadIntentos, codigoDesbloqueo){
  /* TU CODIGO */
  if (codigoDesbloqueo.length != 4) return "El codigo debe tener exactamente 4 digitos"; 

  for (let i = 0; i < codigoDesbloqueo.length; i++) {
    if (isNaN(codigoDesbloqueo[i])) 
      return "El codigo de desbloqueo solo puede estar conformado por numeros";
  }

  if (validarNumerosRepetidos(codigoDesbloqueo)) 
    return "el codigo no puede tener numeros repetidos";

  if (codigoSecreto == codigoDesbloqueo) {
    return "Acceso concedido despues de : " + contadorIntentos + " intentos";
  }

  switch (true) {
    case codigoDesbloqueo % 2 == 0:
      console.log ("el codigo es dividible x 2");
      break;
    case codigoDesbloqueo > codigoSecreto:
      console.log ("codigo incorrecto demasiado alto");
      break;
    default:
      console.log("codigo incorrecto");
      break;
  }
  contadorIntentos++;
  if (contadorIntentos > cantidadIntentos) return "Acceso denegado. Se agotaron los intentos."
}

// <------- NO TOCAR -------->
module.exports = {
  cajaFuerte,
  desbloquearCajaFuerte,
  validarNumerosRepetidos
};

