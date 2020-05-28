class usuario {
  obtenerDatos(correoValido, contraValida) {
    var correoValido = "andrea";
    var contraValida = "1238";

    var correoIngresado = document.getElementById("correoTxt").value;
    var contraIngresado = document.getElementById("contraTxt").value;

    this.validar(correoIngresado, contraIngresado, correoValido, contraValida);
  }

  validar = function(correo, contra, correoV, contraV) {
    function validacion() {
      if (correo == correoV && contra == contraV) {
        alert("Bienvenido nuevamente" + correo);
      } else {
        if (correo.length != 0 && contra.length != 0) {
          alert("Usuario o contraseña invalida");
        }
      }

      if (correo.length == 0 || contra.length == 0) {
        var correoTxt = document.getElementById("correoTxt");
        var contraTxt = document.getElementById("contraTxt");

        alert("Debe llenar todos los espacios");

        if (correo.length == 0) {
          correoTxt.style.backgroundColor = "#F7A1A1";
        }
        if (contra.length == 0) {
          contraTxt.style.backgroundColor = "#F7A1A1";
        }
      }
    }
    validacion();
  };
}

const u1 = new usuario();
