import Cliente from "../clases/Cliente.js";
import RegistroDB from "../clases/RegistroDB.js";
const registro = new RegistroDB();
document.getElementById("formulario-registro").addEventListener("submit", async function (evento) {
    evento.preventDefault();  
    const nombreRecibido = document.getElementById("nombre-completo-registro").value;
    const mailRecibido = document.getElementById("email-registro").value;
    const telefonoRecibido = document.getElementById("telefono-registro").value;

    const datosCliente = {
        nombre: nombreRecibido,
        email: mailRecibido,
        telefono: telefonoRecibido
    };

    let clientes = JSON.parse(localStorage.getItem("Registro-cliente")) || [];
    clientes.push(datosCliente);

    localStorage.setItem("Registro-cliente", JSON.stringify(clientes));

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.classList.remove('success', 'error', 'show');
    resultadoDiv.innerText = "Procesando registro...";
    resultadoDiv.classList.add('show');
    try {
        const cliente = new Cliente(nombreRecibido, mailRecibido, telefonoRecibido);
        resultadoDiv.innerText = "Registro realizado con éxito.";
        resultadoDiv.classList.add('success');
        const contenidoArchivo = `Cliente Registrado:\nNombre: ${cliente.getNombre()}\nEmail: ${cliente.getMail()}\nTeléfono: ${cliente.getTelefono()}`;
        descargarArchivo(contenidoArchivo);
    } catch (error) {
        console.error("Error al registrar cliente:", error);
        resultadoDiv.innerText = "Ocurrió un error al procesar el registro.";
        resultadoDiv.classList.add('error');
    }
});

function descargarArchivo(contenido) {
    try {
        const blob = new Blob([contenido], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const enlaceDescarga = document.createElement("a");
        enlaceDescarga.href = url;
        enlaceDescarga.download = "reserva_cliente.txt";  
        enlaceDescarga.click();
        URL.revokeObjectURL(url);
    } catch (error) {
        console.error("Error al generar el archivo de descarga:", error);
    }
}