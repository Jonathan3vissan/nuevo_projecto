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
        this.#gestorDeDatos = new GestorDeDatos(); // Gestor de datos para la persistencia
    }

    /**
     * @returns la fecha de la reserva
     */
    getFecha() {
        return this.#fecha;
    }

    /**
     * @returns la hora de la reserva
     */
    getHora() {
        return this.#hora;
    }

    /**
     * Establece una nueva fecha para la reserva
     * @param {string} fecha - Nueva fecha de la reserva
     */
    establecerFecha(fecha) {
        this.#fecha = fecha;
    }

    /**
     * Establece una nueva hora para la reserva
     * @param {string} hora - Nueva hora de la reserva
     */
    establecerHora(hora) {
        this.#hora = hora;
    }

    /**
     * Toma los datos de fecha y hora del DOM y los establece en la instancia
     */
    tomarDatosDelDOM() {
        const fechaInput = document.getElementById("fecha-reserva").value;
        const horaInput = document.getElementById("hora-reserva").value;

        if (!fechaInput || !horaInput) {
            alert("Debe seleccionar una fecha y hora.");
            return;
        }

        // Establece la fecha y la hora en la instancia
        this.establecerFecha(fechaInput);
        this.establecerHora(horaInput);

        // Guarda la reserva en localStorage
        this.#gestorDeDatos.guardarReserva(this);
    }

    /**
     * Método para enviar los datos de la reserva (incluyendo los datos del cliente)
     * @returns {Object} Datos completos del cliente y reserva
     */
    async enviarDatosReserva() {
        const datosCliente = await this.enviarDatos();
        return {
            ...datosCliente,
            fecha: this.getFecha(),
            hora: this.getHora(),
        };
    }

    /**
     * Elimina la reserva actual de la lista de reservas
     * @param {number} index - Índice de la reserva a eliminar
     */
     eliminarReserva(index) {
        // Obtiene las reservas almacenadas
        let reservas = GestorDeDatos.obtenerReservas();
        
        // Elimina la reserva en la posición indicada
        reservas.splice(index, 1);
        
        // Vuelve a guardar las reservas actualizadas
        GestorDeDatos.guardarReservas(reservas);
    }

    /**
     * Modifica la fecha y/o hora de la reserva
     * @param {number} index - Índice de la reserva a modificar
     */
    static editarReserva(index) {
        // Obtiene las reservas almacenadas
        let reservas = GestorDeDatos.obtenerReservas();
        
        // Obtiene la reserva a modificar
        const reserva = reservas[index];

        // Solicitar nueva fecha y hora para la reserva
        const nuevaFecha = prompt("Ingrese nueva fecha (YYYY-MM-DD):", reserva.getFecha());
        const nuevaHora = prompt("Ingrese nueva hora (HH:MM):", reserva.getHora());

        if (nuevaFecha && nuevaHora) {
            // Actualiza los datos de la reserva
            reserva.establecerFecha(nuevaFecha);
            reserva.establecerHora(nuevaHora);

            // Actualiza la reserva en el array
            reservas[index] = reserva;

            // Guarda las reservas actualizadas
            GestorDeDatos.guardarReservas(reservas);
        }
    }
}

export default Reserva;
