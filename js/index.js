function validateForm() {
    const user = document.forms["loginForm"]["inputUser"].value;
    const pass = document.forms["loginForm"]["inputPassword"].value;
    if (user && pass) {
      //validar con back
      //según la respuesta: true || false
      return true;
    }
    return false;
  }