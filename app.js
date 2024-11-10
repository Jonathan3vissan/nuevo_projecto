document.addEventListener("DOMContentLoaded", () => {
    // Verifica si el formulario de reserva está presente
    const formularioReserva = document.getElementById("reserva-formulario");
    const formularioRegistro = document.getElementById("formulario-registro");

    if (formularioReserva) {
        // Si el formulario de reserva está presente, ejecutamos la lógica para reserva
        formularioReserva.addEventListener("submit", function (evento) {
            evento.preventDefault();

            const nombreRecibido = document.getElementById("nombre-completo-reserva").value;
            const mailRecibido = document.getElementById("email-reserva").value;
            const telefonoRecibido = document.getElementById("telefono-reserva").value;
            const fechaRecibida = document.getElementById("date").value;
            const horaRecibida = document.getElementById("time").value;

            const datosReserva = {
                nombre: nombreRecibido,
                email: mailRecibido,
                telefono: telefonoRecibido,
                fecha: fechaRecibida,
                hora: horaRecibida
            };

            let reservas = JSON.parse(localStorage.getItem("Reservas")) || [];
            reservas.push(datosReserva);
            localStorage.setItem("Reservas", JSON.stringify(reservas));

            const resultadoDiv = document.getElementById('resultado');
            resultadoDiv.classList.remove('success', 'error', 'show');
            resultadoDiv.innerText = "Procesando reserva...";
            resultadoDiv.classList.add('show');

            try {
                resultadoDiv.innerText = "Reserva realizada con éxito.";
                resultadoDiv.classList.add('success');
            } catch (error) {
                console.error("Error al procesar la reserva:", error);
                resultadoDiv.innerText = "Ocurrió un error al procesar la reserva.";
                resultadoDiv.classList.add('error');
            }
        });
    }

    if (formularioRegistro) {
        // Si el formulario de registro está presente, ejecutamos la lógica para registro
        formularioRegistro.addEventListener("submit", function (evento) {
            evento.preventDefault();

            const nombreRecibido = document.getElementById("nombre-completo-registro").value;
            const mailRecibido = document.getElementById("email-registro").value;
            const telefonoRecibido = document.getElementById("telefono-registro").value;

            const datosCliente = {
                nombre: nombreRecibido,
                email: mailRecibido,
                telefono: telefonoRecibido
            };

            let clientes = JSON.parse(localStorage.getItem("Registro-cliente")) || [];
            clientes.push(datosCliente);
            localStorage.setItem("Registro-cliente", JSON.stringify(clientes));

            const resultadoDiv = document.getElementById('resultado');
            resultadoDiv.classList.remove('success', 'error', 'show');
            resultadoDiv.innerText = "Procesando registro...";
            resultadoDiv.classList.add('show');

            try {
                resultadoDiv.innerText = "Registro realizado con éxito.";
                resultadoDiv.classList.add('success');
            } catch (error) {
                console.error("Error al registrar cliente:", error);
                resultadoDiv.innerText = "Ocurrió un error al procesar el registro.";
                resultadoDiv.classList.add('error');
            }
        });
    }
});
