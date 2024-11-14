import Reserva from "./Reserva.js";
class GestorDeDatos {
    /**
     * Guarda los datos del cliente en el localStorage.
     * Si ya existen registros de clientes, se agregará el nuevo cliente al final.
     * Si no existen clientes, se crea un nuevo array con el cliente recibido.
     * 
     * @param {Object} cliente - El objeto cliente a guardar. 
     */
    guardarCliente(cliente) {
        let clientes = JSON.parse(localStorage.getItem("Registro-cliente")) || [];
        clientes.push(cliente);
        localStorage.setItem("Registro-cliente", JSON.stringify(clientes));
    }
    /**
     * Guarda los datos de una reserva en el localStorage.
     * Si ya existen reservas guardadas, se agregará la nueva reserva al final.
     * Si no existen reservas, se crea un nuevo array con la reserva recibida.
     * 
     * @param {Object} reservarecibida - El objeto reserva que se va a guardar.
     */
    guardarReserva(reservarecibida) {
        const reservaData = reservarecibida.toPlainObject();
        let reservas = JSON.parse(localStorage.getItem("Reservas")) || [];
        reservas.push(reservaData);
        localStorage.setItem("Reservas", JSON.stringify(reservas));
    }
    /**
     * Guarda el array de reservas actualizado después de eliminar una reserva
     * @param {Array} reservarecibida - El array actualizado de reservas
     */
    guardarReservaDespuesDeElimanar(reservarecibida) {
        try {
            if (Array.isArray(reservarecibida)) {
                const reservas = reservarecibida.map(reservaData => {
                    return reservaData.toPlainObject();
                });
                localStorage.setItem("Reservas", JSON.stringify(reservas));
                console.log("Las reservas se guardaron correctamente.");
            } else {
                console.error("No es un array válido para guardar.");
            }
        } catch (error) {
            console.error("Error al guardar en localStorage:", error);
        }
    }
    /**
     * Recupera las reservas almacenadas en el localStorage.
     * Si no existen reservas almacenadas, retorna un array vacío.
     * @returns {Array} Array de objetos reserva.
     */
    obtenerReserva() {
        const reservasGuardadas = JSON.parse(localStorage.getItem("Reservas"));
        if (!Array.isArray(reservasGuardadas)) {
            console.error("Las reservas no son un array válido.");
            return [];
        }
        return reservasGuardadas.map(reservaData => {
            const reserva = new Reserva(
                reservaData.nombre,
                reservaData.mail,
                reservaData.telefono,
                reservaData.fecha,
                reservaData.hora
            );
            return reserva;
        });
    }
    /**
     * Elimina una reserva del localStorage.
     * @param {number} indice - El índice de la reserva que se desea eliminar.
     */
    eliminarReserva(indice) {
        let reservas = JSON.parse(localStorage.getItem("Reservas"));
        if (reservas && reservas.length > 0 && indice >= 0 && indice < reservas.length) {
            reservas.splice(indice, 1);
            localStorage.setItem("Reservas", JSON.stringify(reservas));
            console.log(`Reserva en el índice ${indice} eliminada correctamente.`);
        } else {
            console.error("Índice no válido para eliminar la reserva.");
        }
    }
}
export default GestorDeDatos;
