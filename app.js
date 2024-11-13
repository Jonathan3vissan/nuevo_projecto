// app.js

import Reserva from "./clases/Reserva.js";
import Cliente from "./clases/Cliente.js";
import GestorDeDatos from "./clases/GestorDeDato.js";

const gestor = new GestorDeDatos();

document.addEventListener("DOMContentLoaded", () => {
    const formularioReserva = document.getElementById("reserva-formulario");
    const formularioRegistro = document.getElementById("formulario-registro");

    // Lógica para manejar el formulario de reserva
    if (formularioReserva) {
        formularioReserva.addEventListener("submit", function (evento) {
            evento.preventDefault();

            const nombreRecibido = document.getElementById("nombre-completo-reserva").value;
            const mailRecibido = document.getElementById("email-reserva").value;
            const telefonoRecibido = document.getElementById("telefono-reserva").value;
            const fechaRecibida = document.getElementById("fecha-reserva").value;
            const horaRecibida = document.getElementById("hora-reserva").value;

            // Crear la instancia de Reserva con los datos recibidos
            const reserva = new Reserva(nombreRecibido, mailRecibido, telefonoRecibido, fechaRecibida, horaRecibida);
            console.log("envinado de Reservaa gestor datos esta reserva que es ", typeof reserva);
            console.log("vero si nombreme muestra en Reserca con get ", reserva.getNombre);



            gestor.guardarReserva(reserva)
            // Llamamos al método para guardar la reserva en localStorage
            // reserva.tomarDatosDelDOM();  // Esto asegura que los datos se guardan en localStorage

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

    // Lógica para manejar el formulario de registro
    if (formularioRegistro) {
        formularioRegistro.addEventListener("submit", function (evento) {
            evento.preventDefault();

            const nombreRecibido = document.getElementById("nombre-completo-registro").value;
            const mailRecibido = document.getElementById("email-registro").value;
            const telefonoRecibido = document.getElementById("telefono-registro").value;

            const cliente = new Cliente(nombreRecibido, mailRecibido, telefonoRecibido);

            cliente.enviarDatos().then((datosCliente) => {
                const gestorDeDatos = new GestorDeDatos();
                gestorDeDatos.guardarCliente(datosCliente);  // Guardamos el cliente

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
            }).catch(error => {
                console.error("Error al generar el ID del cliente:", error);
            });
        });
    }
});
