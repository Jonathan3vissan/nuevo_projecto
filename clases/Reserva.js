// Reserva.js

import Cliente from "./Cliente.js";
import GestorDeDatos from "./GestorDeDato.js";

class Reserva extends Cliente {
    #fecha;
    #hora;
    #gestorDeDatos;

    constructor(nombre, mail, telefono, fecha = '', hora = '') {
        super(nombre, mail, telefono);  
        this.#fecha = fecha;
        this.#hora = hora;
        this.#gestorDeDatos = new GestorDeDatos();  
    }

    obtenerFecha() {
        return this.#fecha;
    }

    obtenerHora() {
        return this.#hora;
    }

    establecerFecha(fecha) {
        this.#fecha = fecha;
    }

    establecerHora(hora) {
        this.#hora = hora;
    }

    // Método para capturar los datos del DOM
    tomarDatosDelDOM() {
        const fechaInput = document.getElementById("fecha-reserva").value;
        const horaInput = document.getElementById("hora-reserva").value;

        if (!fechaInput || !horaInput) {
            alert("Debe seleccionar una fecha y hora.");
            return;
        }

        // Establece la fecha y la hora si los valores no están vacíos
        this.establecerFecha(fechaInput);
        this.establecerHora(horaInput);

        // Almacena los datos en localStorage usando el GestorDeDatos
        this.#gestorDeDatos.guardarReserva(this);  // Guarda la reserva en localStorage
    }

    async enviarDatosReserva() {
        const datosCliente = await this.enviarDatos();
        return {
            ...datosCliente,
            fecha: this.obtenerFecha(),
            hora: this.obtenerHora(),
        };
    }
}

export default Reserva;
