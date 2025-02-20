import { btnCambiarTexto, cambiarTexto } from "./dom.js";  

export function asignarEventos () {
    btnCambiarTexto.addEventListener("click", cambiarTexto);
}
