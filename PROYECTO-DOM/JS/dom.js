export const titulo = document.getElementById("titulo");
export const btnCambiarTexto = document.getElementById("btnCambiarTexto");

export function cambiarTexto () {
    titulo.textContent = "Texto cambiado con Mudalación del DOM :D";
}