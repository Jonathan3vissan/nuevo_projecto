import GestorDeDatos from "./clases/GestorDeDato.js";
import Reserva from "./clases/Reserva.js";
document.addEventListener('DOMContentLoaded', function () {
    const gestorDeDatos = new GestorDeDatos();
    const cuerpoTabla = document.getElementById("cuerpo-tabla");
    /**
     * Muestra las reservas almacenadas en la tabla del DOM.
     */
    function mostrarReservas() {
        cuerpoTabla.innerHTML = '';
        const reservas = gestorDeDatos.obtenerReserva();
        if (reservas.length === 0) {
            cuerpoTabla.innerHTML = '<tr><td colspan="6">No hay reservas.</td></tr>';
            return;
        }
        reservas.forEach((reserva, index) => {
            const fila = document.createElement("tr");
            const nombreTd = document.createElement("td");
            nombreTd.textContent = reserva.getNombre();
            fila.appendChild(nombreTd);
            const emailTd = document.createElement("td");
            emailTd.textContent = reserva.getMail();
            fila.appendChild(emailTd);
            const telefonoTd = document.createElement("td");
            telefonoTd.textContent = reserva.getTelefono();
            fila.appendChild(telefonoTd);
            const fechaTd = document.createElement("td");
            fechaTd.textContent = reserva.getFecha();
            fila.appendChild(fechaTd);
            const horaTd = document.createElement("td");
            horaTd.textContent = reserva.getHora();
            fila.appendChild(horaTd);
            const accionesTd = document.createElement("td");
            const eliminarBtn = document.createElement("button");
            eliminarBtn.textContent = "Eliminar";
            eliminarBtn.classList.add("boton");
            eliminarBtn.onclick = function () {
                reserva.eliminarReserva(index, mostrarReservas);
            };
            accionesTd.appendChild(eliminarBtn);
            const modificarBtn = document.createElement("button");
            modificarBtn.textContent = "Modificar";
            modificarBtn.classList.add("boton");
            modificarBtn.onclick = function () {
                Reserva.editarReserva(index);
            };
            accionesTd.appendChild(modificarBtn);
            fila.appendChild(accionesTd);
            cuerpoTabla.appendChild(fila);
        });
    }
    mostrarReservas();
});
