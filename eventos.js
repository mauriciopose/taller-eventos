function saludo() {
    alert('Hola!');
    event.stopImmediatePropagation();
}



document.addEventListener("DOMContentLoaded", function(){
    let divBoton = document.getElementById('boton');
    divBoton.addEventListener('click', function() {
        alert("Hola! Soy el div");
    });
})
