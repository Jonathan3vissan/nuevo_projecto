// GestorDeDato.js

class GestorDeDatos {
    // Guarda los datos del cliente en localStorage
    guardarCliente(cliente) {
        let clientes = JSON.parse(localStorage.getItem("Registro-cliente")) || [];

        // Si el array no está vacío, agregamos el nuevo cliente
        clientes.push(cliente);

        // Guardamos el array actualizado
        localStorage.setItem("Registro-cliente", JSON.stringify(clientes));  
    }

    // Guarda los datos de la reserva en localStorage
    guardarReserva(reserva) {
        let reservas = JSON.parse(localStorage.getItem("Reservas")) || [];

        // Agregamos la nueva reserva al array de reservas
        reservas.push({
            nombre: reserva.getNombre(),
            mail: reserva.getMail(),
            telefono: reserva.getTelefono(),
            fecha: reserva.obtenerFecha(),
            hora: reserva.obtenerHora(),
            IDCliente: reserva.getIDCliente(),
        });

        // Guardamos el array de reservas actualizado en localStorage
        localStorage.setItem("Reservas", JSON.stringify(reservas));  
    }

    // Recupera los clientes desde localStorage
    obtenerClientes() {
        return JSON.parse(localStorage.getItem("Registro-cliente")) || [];
    }

    // Recupera las reservas desde localStorage
    obtenerReservas() {
        return JSON.parse(localStorage.getItem("Reservas")) || [];
    }
}

export default GestorDeDatos;
