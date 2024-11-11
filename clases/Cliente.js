// Cliente.js

import Usuario from "./Usuario.js";

class Cliente extends Usuario {
    #IDCliente = "def ID";
    #tamanioID = 10;

    constructor(nombre, mail, telefono) {
        super(nombre, mail, telefono);
    }

    getIDCliente() {
        return this.#IDCliente
    }

    async enviarDatos() {
        await this.#generarIDCliente();
        return {
            nombre: this.getNombre(),
            mail: this.getMail(),
            telefono: this.getTelefono(),
            IDCliente: this.getIDCliente(),
        };
    }

    async #generarIDCliente() {
        const inputAleatorio = Math.random().toString();
        const hashHex = await this.generarHash(inputAleatorio);
        this.#IDCliente = hashHex.substring(0, this.#tamanioID);
    }

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
