import Reserva from "../clases/Reserva.js";

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
        const reservaData = {
            nombre: reservarecibida.getNombre(),
            mail: reservarecibida.getMail(),
            telefono: reservarecibida.getTelefono(),
            fecha: reservarecibida.getFecha(),
            hora: reservarecibida.getHora(),
        };
        console.log("salida del resetvadataa ", reservaData);

        // Recuperamos las reservas existentes, si las hay
        let reservas = JSON.parse(localStorage.getItem("Reservas")) || [];

        // Añadimos la nueva reserva
        reservas.push(reservaData);

        // Guardamos el array actualizado de reservas en localStorage
        localStorage.setItem("Reservas", JSON.stringify(reservas));
    }

    /**
     * Recupera los clientes almacenados en el localStorage.
     * Si no existen clientes almacenados, retorna un array vacío.
     * @returns {Array} Array de objetos cliente.
     */
    obtenerClientes() {
        return JSON.parse(localStorage.getItem("Registro-cliente")) || [];
    }

    /**
     * Recupera las reservas almacenadas en el localStorage.
     * Si no existen reservas almacenadas, retorna un array vacío.
     * @returns {Array} Array de objetos reserva.
     */
    obtenerReserva() {
        // Recuperamos el array de reservas almacenadas en el localStorage
        const reservasGuardadas = JSON.parse(localStorage.getItem("Reservas"));

        // Verificamos si reservasGuardadas es un array, si no es un array, lo convertimos a uno vacío
        if (!Array.isArray(reservasGuardadas)) {
            console.error("Las reservas no son un array válido.");
            return [];
        }

        // Convertimos cada objeto JSON en una instancia de la clase Reserva
        return reservasGuardadas.map(reservaData => {
            const reserva = new Reserva(
                reservaData.nombre,
                reservaData.mail,
                reservaData.telefono,
                reservaData.fecha,
                reservaData.hora
            );
            // Aquí se podría añadir más lógica si es necesario, como validaciones o manipulación adicional
            return reserva;
        });
    }

    /**
     * Elimina una reserva del localStorage.
     * @param {number} indice - El índice de la reserva a eliminar.
     */
    eliminarReserva(indice) {
        let reservas = JSON.parse(localStorage.getItem("Reservas")) || [];

     /*    // Verificamos si el índice es válido
        if (indice < 0 || indice >= reservas.length) {
            console.error("Índice de reserva no válido.");
            return;
        } */

        // Eliminamos la reserva del array
        reservas.splice(indice, 1);

        // Guardamos el array actualizado de reservas en localStorage
        localStorage.setItem("Reservas", JSON.stringify(reservas));
    }

    /**
     * Modifica una reserva en el localStorage.
     * @param {number} index - El índice de la reserva a modificar.
     * @param {Object} nuevaReserva - El objeto de reserva con los nuevos datos.
     */
    modificarReserva(index, nuevaReserva) {
        let reservas = JSON.parse(localStorage.getItem("Reservas")) || [];

        // Verificamos si el índice es válido
        if (index < 0 || index >= reservas.length) {
            console.error("Índice de reserva no válido.");
            return;
        }

        // Modificamos la reserva en el array
        reservas[index] = nuevaReserva;

        // Guardamos el array actualizado de reservas en localStorage
        localStorage.setItem("Reservas", JSON.stringify(reservas));
    }
}

export default GestorDeDatos;
