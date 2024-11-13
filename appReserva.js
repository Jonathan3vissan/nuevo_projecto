import Reserva from './clases/Reserva.js';

document.addEventListener("DOMContentLoaded", () => {
    const formularioReserva = document.getElementById("reserva-formulario");
    const resultadoDiv = document.getElementById('resultado');

    formularioReserva.addEventListener("submit", function (evento) {
        evento.preventDefault();

        // Capturamos los valores del formulario
        const nombre = document.getElementById("nombre-completo-reserva").value;
        const email = document.getElementById("email-reserva").value;
        const telefono = document.getElementById("telefono-reserva").value;
        const fecha = document.getElementById("date").value;
        const hora = document.getElementById("time").value;

        // Validamos los campos (puedes agregar más validaciones si es necesario)
        if (!nombre || !email || !telefono || !fecha || !hora) {
            resultadoDiv.textContent = "Todos los campos son obligatorios.";
            resultadoDiv.classList.add('error');
            return;
        }

        // Creamos la nueva reserva (hereda de Cliente)
        const reserva = new Reserva(nombre, email, telefono, fecha, hora);

        // Guardamos la reserva en localStorage
        Reserva.guardarReserva(reserva);

        // Mostramos un mensaje de éxito
        resultadoDiv.textContent = "Reserva realizada con éxito.";
        resultadoDiv.classList.remove('error');
        resultadoDiv.classList.add('success');
    });

    // Mostrar las reservas existentes al cargar la página
    mostrarReservas();
});

/**
 * Muestra las reservas almacenadas en localStorage en una tabla.
 */
function mostrarReservas() {
    const reservas = Reserva.obtenerReservas();
    const cuerpoTabla = document.getElementById("cuerpo-tabla");

    reservas.forEach(reserva => {
        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${reserva.getNombre()}</td>
            <td>${reserva.getEmail()}</td>
            <td>${reserva.getTelefono()}</td>
            <td>${reserva.getFecha()}</td>
            <td>${reserva.getHora()}</td>
            <td><button class="eliminar" data-email="${reserva.getEmail()}">Eliminar</button></td>
        `;

        cuerpoTabla.appendChild(fila);
    });

    // Añadir evento para eliminar reservas
    document.querySelectorAll('.eliminar').forEach(boton => {
        boton.addEventListener('click', (evento) => {
            const email = evento.target.getAttribute('data-email');
            Reserva.eliminarReserva(email);
            mostrarReservas(); // Volver a mostrar las reservas actualizadas
        });
    });
}
