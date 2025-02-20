const formulario = document.getElementById('miFormulario');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Formulario enviado correctamente');
});