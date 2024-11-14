import Cliente from "./Cliente.js";
import GestorDeDatos from "./GestorDeDato.js";
class Reserva extends Cliente {
    #fecha;
    #hora;
    #gestorDeDatos;
    /**
     * incializa las propiedades 
     * @param {String} nombre del usuario
     * @param {String} mail del usuario
     * @param {String} telefono del usuario
     * @param {String} fecha del usuario
     * @param {String} hora del usuario
     */
    constructor(nombre, mail, telefono, fecha = '', hora = '') {
        super(nombre, mail, telefono);
        this.#fecha = fecha;
        this.#hora = hora;
        this.#gestorDeDatos = new GestorDeDatos();
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
        this.establecerFecha(fechaInput);
        this.establecerHora(horaInput);
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
     * @param {Function} mostrarReservas - Función para actualizar la vista
     */
    eliminarReserva(index, mostrarReservas) {
        let reservas = this.#gestorDeDatos.obtenerReserva();
        if (index < 0 || index >= reservas.length) {
            console.error("Índice de reserva no válido.");
            return;
        }
        reservas.splice(index, 1);
        this.#gestorDeDatos.guardarReservaDespuesDeElimanar(reservas);
        mostrarReservas();
    }
    /**
     * Modifica la fecha y/o hora de la reserva
     * @param {number} index - Índice de la reserva a modificar
     */
    static editarReserva(index) {
        const reservas = GestorDeDatos.obtenerReserva();
        if (index < 0 || index >= reservas.length) {
            console.error("Índice de reserva no válido.");
            return;
        }
        const reserva = reservas[index];
        const nuevaFecha = prompt("Ingrese nueva fecha (YYYY-MM-DD):", reserva.getFecha());
        const nuevaHora = prompt("Ingrese nueva hora (HH:MM):", reserva.getHora());
        if (nuevaFecha && nuevaHora) {
            reserva.establecerFecha(nuevaFecha);
            reserva.establecerHora(nuevaHora);
            reservas[index] = reserva;
            gestorDeDatos.guardarReservaDespuesDeElimanar(reservas);
            mostrarReservas();
        }
    }
    /**
     * Convierte la instancia de la reserva en un objeto plano
     * @returns {Object} Un objeto con las propiedades necesarias de la reserva
     */
    toPlainObject() {
        return {
            nombre: this.getNombre(),
            mail: this.getMail(),
            telefono: this.getTelefono(),
            fecha: this.#fecha,
            hora: this.#hora,
        };
    }
}
export default Reserva;
