class Dispositivo {
    #encendido = false;
    constructor(marca) { 
        this.marca = marca; 
    }
    
    encender() { 
        this.#encendido = true; 
        return `${this.marca} encendido`; 
    }
    
    get estado() { 
        return this.#encendido; 
    }
}

// Usamos 'extends' para heredar de Dispositivo
class Telefono extends Dispositivo {
    #garantia; // Campo privado para meses de garantía
    
    constructor(marca, modelo, garantia) {
        super(marca); // Llama al constructor de la clase padre (Dispositivo)
        this.modelo = modelo;
        this.#garantia = garantia; // Asignamos el parámetro al campo privado
    }

    infoCompleta() {
        // Usamos this.estado (el getter heredado) para verificar el booleano privado del padre
        return `${this.marca} ${this.modelo} - Garantía: ${this.#garantia} meses - Estado: ${this.estado ? "activo" : "apagado"}`;
    }
}

const t = new Telefono("Xiaomi", "13T", 24);
console.log(t.encender());     // "Xiaomi encendido"
console.log(t.infoCompleta()); // "Xiaomi 13T - Garantía: 24 meses - Estado: activo"