class usuario {
  obtenerDatos(correoValido, contraValida) {
    var correoValido = "andrea";
    var contraValida = "1238";

    var correoIngresado = document.getElementById("correo").value;
    var contraIngresado = document.getElementById("contra").value;

    this.validar(correoIngresado, contraIngresado, correoValido, contraValida);
  }

  validar = function(correo, contra, correoV, contraV) {
    function validacion() {
      if (correo == correoV && contra == contraV) {
        alert("Bienvenido nuevamente" + correo);
      } else {
        alert("Usuario o contraseña invalida");
      }
    }
    validacion();
  };
}

const u1 = new usuario();
