import Reserva from "../clases/Reserva.js"
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
     * Este objeto debe tener métodos como getNombre(), getMail(), getTelefono(), 
     * getFecha(), getHora() y getIDCliente() para acceder a sus datos.
     */
    guardarReserva(reservarecibida) {
        // Convertimos la reserva en un objeto simple con sus datos
        const reservaData = {
            nombre: reservarecibida.getNombre(),
            mail: reservarecibida.getMail(),
            telefono: reservarecibida.getTelefono(),
            fecha: reservarecibida.getFecha(),
            hora: reservarecibida.getHora(),
            IDCliente: reservarecibida.getIDCliente()
        };
    
        // Guardamos el objeto en localStorage como un array de reservas
        let reservas = JSON.parse(localStorage.getItem("Reservas")) || [];
        reservas.push(reservaData);
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
    obtenerReservas() {
        // Recuperamos el array de reservas almacenadas en el localStorage
        const reservasGuardadas = JSON.parse(localStorage.getItem("Reservas")) || [];
    
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
    
    
}

export default GestorDeDatos;
