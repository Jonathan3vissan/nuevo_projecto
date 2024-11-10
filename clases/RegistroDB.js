import Cliente from './Cliente.js';
class RegistroDB {
    constructor() {
        this.formulario = document.getElementById('formulario-registro');
        this.nombreInput = document.getElementById('nombre-completo-registro');
        this.emailInput = document.getElementById('email-registro');
        this.telefonoInput = document.getElementById('telefono-registro');
        this.iniciar();
    }
    /**
     * Inicializa los eventos de la clase.
     * Añade un listener para el evento de envío del formulario.
     */
    iniciar() {
        this.formulario.addEventListener('submit', (evento) => {
            this.manejarEnvio(evento);
        });
    }

    /**
     * Maneja el evento de envío del formulario.
     * Previene el comportamiento predeterminado del formulario y procesa los datos.
     * @param {Event} evento - El evento que se dispara cuando el formulario es enviado.
     */
    manejarEnvio(evento) {
        evento.preventDefault();
        const nombre = this.nombreInput.value;
        const email = this.emailInput.value;
        const telefono = this.telefonoInput.value;
        const cliente = new Cliente(nombre, email, telefono);
        cliente.enviarDatos().then(clienteEnviado => {
            console.log(clienteEnviado);
        }).catch(error => {
            console.error('Error al generar los datos del cliente:', error);
        });
    }
}

export default RegistroDB;