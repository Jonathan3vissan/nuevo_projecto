class Usuario {
    #nombre = "def nombre";  
    #mail = "def mail";      
    #telefono = "def telefono";  
    constructor(nombre = 'def nombre Usuario', mail = 'def mail Usuario', telefono = 'def Telefono Usuario') {
        this.#nombre = nombre;
        this.#mail = mail;
        this.#telefono = telefono;
    }
    /**
     * Obtiene el nombre del usuario.
     * @returns {string} El nombre del usuario.
     */
    getNombre() {
        return this.#nombre;
    }
    /**
     * Obtiene el email del usuario.
     * @returns {string} El email del usuario.
     */
    getMail() {
        return this.#mail;
    }
    /**
     * Obtiene el teléfono del usuario.
     * @returns {string} El teléfono del usuario.
     */
    getTelefono() {
        return this.#telefono;
    }
}
export default Usuario;
