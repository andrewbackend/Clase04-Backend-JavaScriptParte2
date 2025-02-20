const contenedor = document.getElementById('contenedor');

contenedor.addEventListener('click', (e) => {
    if (e.target.classList.contains('dinamico')) {
        alert(`Click en: ${e.target.textContent}`);
    }
});