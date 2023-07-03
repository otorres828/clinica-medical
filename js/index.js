
hamburger = document.querySelector(".hamburger");
nav = document.querySelector("nav");
hamburger.onclick = function() {
    nav.classList.toggle("active");
}

// Obtener el formulario por su ID
const form = document.getElementById("login");

// Manejar el evento submit del formulario
form.addEventListener("submit", function(event) {
  // Prevenir el comportamiento por defecto del formulario
  event.preventDefault();

  // Obtener los valores de usuario y clave
  const usuario = document.getElementById("usuario").value;
  const clave = document.getElementById("clave").value;

  // Verificar el usuario y la clave
  if (usuario === "mirtita" && clave === "123") {
    // Redirigir a la página de pacientes con el nombre de usuario como parámetro
    Swal.fire({
        title: 'Bienvenido de vuelta Legrand Mirtha',
        icon: 'success',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK',
        allowOutsideClick: false,
        willClose: () => {
          window.location.href = "paciente.html?usuario=" + usuario;
        }
      });
  } else if (usuario === "house" && clave === "123") {
    // Redirigir a la página de doctores con el nombre de usuario como parámetro
    Swal.fire({
        title: 'Bienvenido de vuelta Doctor ' + usuario,
        icon: 'success',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK',
        allowOutsideClick: false,
        willClose: () => {
          window.location.href = "doctor.html?usuario=" + usuario;
        }
      });
  } else {
    // Mostrar un mensaje de error
    Swal.fire('Usuario o Clave Incorrecta')
  }
});