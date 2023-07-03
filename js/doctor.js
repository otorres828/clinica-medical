
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

//filtrar por dia
function filtrar_por_turno() {
    let id = document.getElementById('select_dia').value;

    //OCULTAR LOS CARD
    $('.turno_select').each(function() {
      let turno = $(this).data('dia');
      if (turno == id || id == '0') {
        $(this).removeClass('hidden').addClass('block');
      } else {
        $(this).removeClass('block').addClass('hidden');
      }
      let dia = document.querySelector('#select_dia option:checked').textContent;
      document.getElementById('dia-semana').textContent = dia;
    });

    //OCULTAR LOS TITULOS DE LOS DIAS
    $('.dia_nombre').each( function(){
        let turno = $(this).data('dia');
        if (turno == id || id == '0') {
            $(this).removeClass('hidden').addClass('block');
          } else {
            $(this).removeClass('block').addClass('hidden');
        }
        let dia = document.querySelector('#select_dia option:checked').textContent;
        document.getElementById('dia-semana').textContent = dia;
    });
}