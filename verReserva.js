import GestorDeDatos from "./clases/GestorDeDato.js";
document.addEventListener('DOMContentLoaded', function () {
    // Crear una instancia del GestorDeDatos para obtener las reservas desde localStorage
    const gestorDeDatos = new GestorDeDatos();

    // Obtener el elemento de la tabla donde se mostrarán las reservas
    const cuerpoTabla = document.getElementById("cuerpo-tabla");

    // Función para mostrar las reservas en la tabla
    function mostrarReservas() {
        // Limpiar la tabla antes de volver a llenarla
        cuerpoTabla.innerHTML = '';

        // Obtener las reservas desde el GestorDeDatos
        const reservas = gestorDeDatos.obtenerReservas();

        // Si no hay reservas, mostrar un mensaje en la tabla
        if (reservas.length === 0) {
            cuerpoTabla.innerHTML = '<tr><td colspan="6">No hay reservas disponibles.</td></tr>';
            return;  // Salir de la función si no hay reservas
        }

        // Iterar sobre cada reserva y crear una fila para la tabla
        reservas.forEach((reserva, index) => {
            const fila = document.createElement("tr");

            // Crear celdas para cada dato de la reserva
            const nombreTd = document.createElement("td");
            nombreTd.textContent = reserva.nombre;  // Acceder a la propiedad directamente
            fila.appendChild(nombreTd);

            const emailTd = document.createElement("td");
            emailTd.textContent = reserva.email;  // Acceder a la propiedad directamente
            fila.appendChild(emailTd);

            const telefonoTd = document.createElement("td");
            telefonoTd.textContent = reserva.telefono;  // Acceder a la propiedad directamente
            fila.appendChild(telefonoTd);

            const fechaTd = document.createElement("td");
            fechaTd.textContent = reserva.fecha;  // Acceder a la propiedad directamente
            fila.appendChild(fechaTd);

            const horaTd = document.createElement("td");
            horaTd.textContent = reserva.hora;  // Acceder a la propiedad directamente
            fila.appendChild(horaTd);

            // Crear columna de acciones para editar o eliminar
            const accionesTd = document.createElement("td");

            // Crear botón de eliminar
            const eliminarBtn = document.createElement("button");
            eliminarBtn.textContent = "Eliminar";
            eliminarBtn.classList.add("boton");
            eliminarBtn.onclick = function () {
                eliminarReserva(index); // Llamar a la función de eliminar al hacer clic
            };
            accionesTd.appendChild(eliminarBtn);

            // Crear botón de modificar
            const modificarBtn = document.createElement("button");
            modificarBtn.textContent = "Modificar";
            modificarBtn.classList.add("boton");
            modificarBtn.onclick = function () {
                modificarReserva(index); // Llamar a la función de modificar al hacer clic
            };
            accionesTd.appendChild(modificarBtn);

            // Agregar la columna de acciones a la fila
            fila.appendChild(accionesTd);

            // Agregar la fila a la tabla
            cuerpoTabla.appendChild(fila);
        });
    }

    // Función para eliminar una reserva
    function eliminarReserva(index) {
        // Confirmar con el usuario si realmente desea eliminar la reserva
        const confirmacion = confirm("¿Estás seguro de que deseas eliminar esta reserva?");
        if (confirmacion) {
            // Obtener las reservas actuales desde el GestorDeDatos
            let reservas = gestorDeDatos.obtenerReservas();

            // Eliminar la reserva del array utilizando el índice
            reservas.splice(index, 1);

            // Guardar las reservas actualizadas en localStorage
            gestorDeDatos.guardarReserva(reservas);


            // Volver a mostrar las reservas actualizadas en la tabla
            mostrarReservas();
        }
    }

    // Función para modificar una reserva
    function modificarReserva(index) {
        // Obtener las reservas actuales desde el GestorDeDatos
        let reservas = gestorDeDatos.obtenerReservas();

        // Obtener la reserva a modificar utilizando el índice
        const reserva = reservas[index];

        // Solicitar al usuario nuevos datos para la reserva mediante prompts
        const nuevoNombre = prompt("Nuevo nombre:", reserva.nombre);
        if (nuevoNombre !== null) {
            reserva.nombre = nuevoNombre; // Actualizar el nombre
        }

        const nuevoEmail = prompt("Nuevo email:", reserva.email);
        if (nuevoEmail !== null) {
            reserva.email = nuevoEmail; // Actualizar el email
        }

        const nuevoTelefono = prompt("Nuevo teléfono:", reserva.telefono);
        if (nuevoTelefono !== null) {
            reserva.telefono = nuevoTelefono; // Actualizar el teléfono
        }

        const nuevaFecha = prompt("Nueva fecha:", reserva.fecha);
        if (nuevaFecha !== null) {
            reserva.fecha = nuevaFecha; // Actualizar la fecha
        }

        const nuevaHora = prompt("Nueva hora:", reserva.hora);
        if (nuevaHora !== null) {
            reserva.hora = nuevaHora; // Actualizar la hora
        }

        // Guardar las reservas actualizadas en localStorage
        gestorDeDatos.guardarReservas(reservas);

        // Volver a mostrar las reservas actualizadas en la tabla
        mostrarReservas();
    }

    // Mostrar las reservas al cargar la página
    mostrarReservas();
});
