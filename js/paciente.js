
hamburger = document.querySelector(".hamburger");
nav = document.querySelector("nav");
hamburger.onclick = function() {
    nav.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function() {
    // Obtener el valor del parámetro "usuario" de la URL
    const params = new URLSearchParams(window.location.search);
    const usuario = params.get('usuario');
  
    // Mostrar el valor del parámetro en el elemento "p" con el ID "usuario"
    const usuarioElement = document.getElementById('usuario');
    usuarioElement.textContent = usuario;
});

//FORMULARIO 
const formulario = document.getElementById('formulario-turnos');
const tabla = document.getElementById('tabla-turnos');
const mensaje = document.getElementById('mensaje');

formulario.addEventListener('submit', function(event) {
  event.preventDefault();
  if (formulario.checkValidity()) {
    // El formulario es válido, agregar datos a la tabla
    const especialidad = document.getElementById('especialidad').value;
    const medico = document.getElementById('medico').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;
    const observaciones = document.getElementById('observaciones').value;
    
    const fila = tabla.insertRow();
    fila.insertCell().textContent = fecha;
    fila.insertCell().textContent = hora;
    fila.insertCell().textContent = especialidad;
    fila.insertCell().textContent = medico;
    fila.insertCell().textContent = observaciones;
    var random=  Math.floor(Math.random() * 100) + 1;
    const idFila = 'fila-' + random// Generar un ID aleatorio

    const botonCancelar = document.createElement('button');
    const celdaCancelar = fila.insertCell();
    botonCancelar.classList.add('btn-red');
    botonCancelar.textContent = 'Cancelar';
    botonCancelar.setAttribute('onclick', 'cancelar(\'' + random + '\')');
    celdaCancelar.appendChild(botonCancelar);
    fila.setAttribute('id', idFila); // Establecer el ID de la fila
    
    Swal.fire('Turno reservado con exito')

    // Limpiar formulario
    formulario.reset();
  } else {
    // El formulario es inválido, mostrar mensaje de error
    Swal.fire('Faltan campos por llenar')

  }
});

//CANCELAR TURNO
function cancelar(id) {
  const fila = document.getElementById('fila-' + id);
  fila.style.display = 'none';
  Swal.fire('Turno cancelado con exito')

}
