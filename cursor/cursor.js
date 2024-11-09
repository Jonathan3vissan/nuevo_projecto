class Cursor {
    constructor(cursorElement) {
        this.cursorElement = cursorElement;

        // Configurar eventos
        this.initEvents();
    }

    initEvents() {
        document.addEventListener('mousemove', (event) => this.moveCursor(event));
        document.addEventListener('mousedown', () => this.setVerticalCursor());
        document.addEventListener('mouseup', () => this.setHorizontalCursor());
        document.addEventListener('mouseleave', () => this.hideCursor());
        document.addEventListener('mouseenter', () => this.showCursor());

        const tarjeta = document.querySelector('.tarjeta');
        if (tarjeta) {
            tarjeta.addEventListener('mouseenter', () => {
                this.hideCursor(); // Oculta el cursor al entrar en la tarjeta
                document.body.style.cursor = 'none'; // También oculta el cursor del sistema
            });
            tarjeta.addEventListener('mouseleave', () => {
                this.showCursor(); // Muestra el cursor al salir de la tarjeta
                document.body.style.cursor = ''; // Restaura el cursor del sistema
            });
        }
    }

    moveCursor(event) {
        this.cursorElement.style.left = `${event.clientX - 16}px`;
        this.cursorElement.style.top = `${event.clientY - 16}px`;
        this.cursorElement.style.display = 'block'; // Asegura que se muestre
    }

    setVerticalCursor() {
        this.cursorElement.style.backgroundImage = "url('../imagenes/cursor/cursor-vertical-final.cur')";
    }

    setHorizontalCursor() {
        this.cursorElement.style.backgroundImage = "url('../imagenes/cursor/maquia-cursor.cur')";
    }

    hideCursor() {
        this.cursorElement.style.display = 'none'; // Oculta el cursor
    }

    showCursor() {
        this.cursorElement.style.display = 'block'; // Muestra el cursor
    }
}

// Inicializa el cursor personalizado
const moverCursor = document.getElementById("cursor-cambia");
const customCursor = new Cursor(moverCursor);
