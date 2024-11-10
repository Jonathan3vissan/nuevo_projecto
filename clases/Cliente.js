import Usuario from "./Usuario.js";
class Cliente extends Usuario {
    #IDCliente = "def ID";  
    #tamanioID = 10;        
    constructor(nombre, mail, telefono) {
        super(nombre, mail, telefono);  
    }
    /**
     * Obtiene el ID del cliente.
     * @returns {string} El ID único del cliente.
     */
    obtenerIDCliente() {
        return this.#IDCliente;
    }
    /**
     * Actualiza el ID del cliente.
     * @param {string} IDGenerado - El nuevo ID que se asignará al cliente.
     */
    actualizarIDClienteCon(IDGenerado) {
        this.#IDCliente = IDGenerado;
    }
    /**
     * Envía los datos completos del cliente.
     * Esta función genera un nuevo ID para el cliente antes de enviarlo.
     * @returns {object} Objeto con los datos completos del cliente (nombre, email, teléfono, IDCliente).
     */
    async enviarDatos() {
        await this.#generarIDCliente();  
        return {
            nombre: this.getNombre(),
            mail: this.getMail(),
            telefono: this.getTelefono(),
            IDCliente: this.obtenerIDCliente(),
        };
    }
    /**
     * Genera un nuevo ID único para el cliente y lo guarda en la propiedad #IDCliente.
     * Utiliza la función `generarHash` para crear el ID.
     * @private
     */
    async #generarIDCliente() {
        const inputAleatorio = Math.random().toString();  
        const hashHex = await this.generarHash(inputAleatorio);  
        this.#IDCliente = hashHex.substring(0, this.#tamanioID);  
    }
    /**
     * Método para generar un hash utilizando la API Web Crypto.
     * Esta función toma un valor de entrada y devuelve un hash en formato hexadecimal.
     * @param {string} datos - Datos a ser hasheados.
     * @returns {string} - Hash generado en formato hexadecimal.
     */
    async generarHash(datos) {
        const codificador = new TextEncoder();
        const bufferDatos = codificador.encode(datos);  
        const hashBuffer = await crypto.subtle.digest('SHA-256', bufferDatos);  
        const hashArray = Array.from(new Uint8Array(hashBuffer));  
        const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');  
        return hashHex;  
    }
}
export default Cliente;
