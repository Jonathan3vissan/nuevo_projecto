import GestorDeDatos from "./clases/GestorDeDato.js";

document.addEventListener('DOMContentLoaded', function () {
    const gestorDeDatos = new GestorDeDatos();
    const cuerpoTabla = document.getElementById("cuerpo-tabla");

    function mostrarReservas() {
        cuerpoTabla.innerHTML = ''; // Limpiar la tabla

        // Obtener las reservas
        const reservas = gestorDeDatos.obtenerReserva();

        // Verificar si reservas es un array válido
        if (!Array.isArray(reservas)) {
            console.error("Las reservas no son un array válido.");
            cuerpoTabla.innerHTML = '<tr><td colspan="6">No hay reservas disponibles.</td></tr>';
            return;
        }

        if (reservas.length === 0) {
            cuerpoTabla.innerHTML = '<tr><td colspan="6">No hay reservas disponibles.</td></tr>';
            return;
        }

        reservas.forEach((reserva, index) => {
            const fila = document.createElement("tr");

            const nombreTd = document.createElement("td");
            nombreTd.textContent = reserva.nombre;
            fila.appendChild(nombreTd);

            const emailTd = document.createElement("td");
            emailTd.textContent = reserva.email;
            fila.appendChild(emailTd);

            const telefonoTd = document.createElement("td");
            telefonoTd.textContent = reserva.telefono;
            fila.appendChild(telefonoTd);

            const fechaTd = document.createElement("td");
            fechaTd.textContent = reserva.fecha;
            fila.appendChild(fechaTd);

            const horaTd = document.createElement("td");
            horaTd.textContent = reserva.hora;
            fila.appendChild(horaTd);

            const accionesTd = document.createElement("td");

            const eliminarBtn = document.createElement("button");
            eliminarBtn.textContent = "Eliminar";
            eliminarBtn.classList.add("boton");
            eliminarBtn.onclick = function () {
                eliminarReserva(index);
            };
            accionesTd.appendChild(eliminarBtn);

            const modificarBtn = document.createElement("button");
            modificarBtn.textContent = "Modificar";
            modificarBtn.classList.add("boton");
            modificarBtn.onclick = function () {
                modificarReserva(index);
            };
            accionesTd.appendChild(modificarBtn);

            fila.appendChild(accionesTd);
            cuerpoTabla.appendChild(fila);
        });
    }

    mostrarReservas();
});
