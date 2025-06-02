// <----- NO TOCAR ------->
const { perfiles } = require("../build/js/perfiles.js")

var asistente = {
    verPerfiles: function(opcion){
        /* TU CODIGO */
      switch (opcion) {
        case "todo":
           return perfiles;
        case "nombre":
           return perfiles.map(function (perfil) {
            return perfil.usuario;
           });
        case "codigo":
           return perfiles.map(function (perfil) {
            return perfil.codigo;
           });
        case "nivel":
           return perfiles.map(function (perfil) {
            return perfil.nivel_de_autorizacion;
           });
        case "antiguedad":
           return perfiles.map(function (perfil) {
            return perfil.antiguedad;
           });
        }
      
    },
    
    verPerfilesPorAntiguedad: function(){
        /* TU CODIGO */
        const copiaPerfiles = perfiles.map (function (perfil) {
            return perfil;
        });

        return copiaPerfiles.sort(function (a, b) {
            return b.antiguedad - a.antiguedad;
        });
    },

    verAdministradores: function(){
        /* TU CODIGO */
        return perfiles.filter(function (perfil) {
            return perfil.nivel_de_autorizacion == "admin";
        });

    },

    modificarAcceso: function(usuario, codigo){
        /* TU CODIGO */
        if (
            !perfiles.some(function (perfil) {
            return perfil.usuario == usuario;
        })) {
            return "usuario no encontrado"
        }
        if (codigo.length != 4) {
                return "codigo de acceso invalido, debe contener solo 4 numeros";
        }
        const perfilEncontrado = perfiles.find (function (perfil) {
            return perfil.usuario == usuario;
        });

        perfilEncontrado.codigo = codigo;
        return "codigo de acceso modificado";

        
    }
}

// <----- NO TOCAR ------->
module.exports = {
    asistente
}

