# Proyecto: Reserva de Turnos

## Descripción

Este proyecto tiene como objetivo facilitar la **reserva de turnos** en cualquier tipo de negocio, mejorando la organización y gestión de citas. La aplicación permite a los usuarios reservar turnos de manera sencilla y eficiente, manteniendo un registro claro de las citas programadas.

## Características

- Facilita la **reserva de turnos** para negocios de cualquier rubro.
- **Almacenamiento persistente** de datos mediante el uso de `localStorage`.
- **Generación de hashes seguros** de los datos utilizando la **Web Crypto API** para garantizar la privacidad de los mismos.
- **Interfaz fácil de usar** para gestionar reservas de manera intuitiva.

## Instalación



1. **Clona el repositorio** desde GitHub:

    ```bash
    git clone https://github.com/usuario/reserva-turnos.git
    ```

2. **Abre el proyecto en Visual Studio Code** (o tu editor de código preferido).

3. **Abre el archivo `index.html`** en tu navegador web moderno (no se requieren bibliotecas o dependencias adicionales).

**Nota:** Este proyecto no necesita servidores ni instalaciones adicionales. Solo necesitas un navegador para verlo en funcionamiento.

---

## Uso

Una vez que el proyecto esté abierto en tu navegador, podrás interactuar con la aplicación:

- **Interacción en el navegador:** Los usuarios podrán realizar **reservas de turnos** a través de una interfaz de usuario sencilla.
- **Almacenamiento persistente:** Los datos de las reservas se guardan automáticamente en el `localStorage` del navegador, lo que permite que la información persista entre sesiones.
- **Generación de hashes:** Los datos sensibles (como las reservas) son procesados mediante un **hash seguro** con el algoritmo **SHA-256**, lo que garantiza que los datos no puedan ser revertidos a su valor original.

---

## Tecnologías Utilizadas

Este proyecto fue desarrollado utilizando las siguientes tecnologías:

- **JavaScript**: Lenguaje principal utilizado para la lógica de la aplicación y la interacción con el DOM.
- **Web Crypto API**: Usada para generar hashes seguros (`SHA-256`) de los datos sensibles en el navegador.
- **localStorage API**: Utilizada para almacenar datos de manera persistente en el navegador, permitiendo que la información se mantenga entre sesiones.
- **GitHub**: Plataforma de gestión de repositorios para el código fuente y control de versiones.

---

## Encriptación en el Navegador

Este proyecto utiliza la **Web Crypto API** del navegador para generar **hashes** de los datos de manera segura. En particular, usamos el algoritmo **SHA-256** para transformar los datos en un valor de longitud fija que no puede ser revertido a su valor original (esto es un proceso de **hashing**, no encriptación).

Esta técnica se usa para **proteger la privacidad de los datos** almacenados, asegurando que la información sensible (como las reservas) esté protegida mientras se guarda en el navegador.

---

## Contribución

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. **Haz un fork** del repositorio.
2. **Crea una rama nueva** para tu característica o corrección de errores.
3. **Abre un pull request** con una descripción clara de tus cambios.

Si encuentras algún problema o tienes sugerencias, no dudes en abrir un **issue**.

---

## Licencia

Este proyecto está bajo la **Licencia MIT**. Puedes consultar el archivo `LICENSE` para más detalles.

