document.getElementById('hoverButton').addEventListener('mouseover', () => {
    console.log('Mouse sobre el botón');
});

document.getElementById('teclaInput').addEventListener('keydown', (e) => {
    console.log(`Tecla presionada: ${e.key}`);
});