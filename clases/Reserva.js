import Cliente from './Cliente.js';

class Reserva extends Cliente {
    #fecha;
    #hora;

    constructor(nombre, email, telefono, fecha, hora) {
        super(nombre, email, telefono);  
        this.#fecha = fecha;
        this.#hora = hora;
    }

    // obtener los valores fecha
    getFecha() {
        return this.#fecha;
    }

    getHora() {
        return this.#hora;
    }

    // Método estático para guardar una reserva en localStorage
    static guardarReserva(reserva) {
        let reservas = JSON.parse(localStorage.getItem("reservas")) || [];
        reservas.push(reserva);
        localStorage.setItem("reservas", JSON.stringify(reservas));
    }

    // Método estático para obtener todas las reservas
    static obtenerReservas() {
        return JSON.parse(localStorage.getItem("reservas")) || [];
    }

    // Método estático para eliminar una reserva por email
    static eliminarReserva(email) {
        let reservas = JSON.parse(localStorage.getItem("reservas")) || [];
        const nuevasReservas = reservas.filter(reserva => reserva.getEmail() !== email);
        localStorage.setItem("reservas", JSON.stringify(nuevasReservas));
        return nuevasReservas;
    }
}

export default Reserva;
