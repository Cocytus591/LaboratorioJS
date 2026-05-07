##  Evaluación Práctica: JavaScript Moderno  
**ID:** JS‑AUTO‑20 | **Tiempo estimado:** 2 horas  
**Instrucciones:**  
- Completa los huecos `________` en cada fragmento de código.  
- Guarda cada bloque en un archivo independiente: `ej01.js`, `ej02.js`, …, `ej20.js`.  
- Ejecuta con Node.js o en la consola del navegador y verifica que la salida sea la indicada.  
- Entrega los 20 archivos.

---

### Ejercicio 1 – Template literals
```javascript
// Concepto: Las plantillas literales permiten incrustar expresiones dentro de cadenas usando ${}.
const nombre = "Carlos";
const edad = 28;
console.log(`Me llamo ________ y tengo ________ años`);
// Salida: Me llamo Carlos y tengo 28 años
```

### Ejercicio 2 – Arrow function con retorno implícito
```javascript
// Concepto: Una función flecha sin llaves devuelve el resultado de la expresión automáticamente.
const multiplicar = (a, b) => ________;
console.log(multiplicar(4, 5)); // 20
```

### Ejercicio 3 – Destructuring de objeto
```javascript
// Concepto: La destructuración extrae propiedades de un objeto en variables con el mismo nombre.
const usuario = { id: 1, nombre: "Ana", email: "ana@mail.com" };
const { nombre, ________ } = usuario;
console.log(email); // ana@mail.com
```

### Ejercicio 4 – Spread operator con arrays
```javascript
// Concepto: El operador spread (...) expande los elementos de un arreglo.
const partes1 = ["cabeza", "hombros"];
const partes2 = ["rodillas", "pies"];
const cuerpo = [...________, ...________];
console.log(cuerpo.join(", ")); // cabeza, hombros, rodillas, pies
```

### Ejercicio 5 – Rest operator en parámetros
```javascript
// Concepto: El operador rest (...) agrupa los argumentos restantes en un arreglo.
function sumar(...________) {
    return numeros.reduce((acc, n) => acc + n, 0);
}
console.log(sumar(1, 2, 3, 4)); // 10
```

### Ejercicio 6 – Optional chaining en invocación de método
```javascript
// Concepto: ?. permite llamar a un método solo si existe, evitando errores.
const persona = {
    nombre: "Luis",
    saludar() { return "Hola"; }
};
const saludo = persona.saludar?.________;
console.log(saludo); // "Hola"
const despedida = persona.despedir?.________;
console.log(despedida); // undefined
```

### Ejercicio 7 – .map y .find
```javascript
// Concepto: .map() transforma cada elemento; .find() devuelve el primer elemento que cumple la condición.
const productos = [
    { id: 1, nombre: "Laptop", precio: 1000 },
    { id: 2, nombre: "Mouse", precio: 20 }
];
const nombres = productos.____(p => p.nombre);
const encontrado = productos.____(p => p.id === 2);
console.log(nombres);      // ["Laptop", "Mouse"]
console.log(encontrado);   // { id: 2, nombre: "Mouse", precio: 20 }
```

### Ejercicio 8 – Spread y Rest en una misma función
```javascript
// Concepto: Spread expande, Rest agrupa. Aquí se usan para fusionar objetos y capturar parámetros extra.
const infoBasica = { nombre: "Ana", edad: 30 };
const infoExtra = { ciudad: "Lima", profesion: "Ingeniera" };
const perfilCompleto = { ...________, ...________ };

function sumarTodo(primerNumero, ...________) {
    return primerNumero + resto.reduce((a, b) => a + b, 0);
}
console.log(perfilCompleto.ciudad);  // "Lima"
console.log(sumarTodo(1, 2, 3));     // 6
```

### Ejercicio 9 – Optional chaining encadenado
```javascript
// Concepto: El operador ?. puede encadenarse para acceder a propiedades profundas sin riesgo de error.
const empresa = {
    nombre: "TechCo",
    departamento: {
        jefe: {
            nombre: "María",
            contacto: { email: "maria@techco.com" }
        }
    }
};
const emailJefe = empresa?.departamento?.________?.contacto?.________;
console.log(emailJefe);  // "maria@techco.com"
const telefono = empresa?.departamento?.________?.________;
console.log(telefono);   // undefined
```

### Ejercicio 10 – Nullish coalescing (??)
```javascript
// Concepto: ?? devuelve el valor de la derecha solo si el izquierdo es null o undefined (respeta 0 y "").
const config = { volumen: 0, titulo: "", notificaciones: false };
const volumenFinal = config.volumen ________ 50;
const tituloFinal = config.titulo ________ "Sin título";
const notificaciones = config.notificaciones ?? true;
console.log(volumenFinal);    // 0
console.log(tituloFinal);     // ""
console.log(notificaciones);  // false
```

### Ejercicio 11 – Clases, herencia y super
```javascript
// Concepto: extends define la herencia y super() invoca al constructor de la clase padre.
class Empleado {
    constructor(nombre, salario) {
        this.nombre = nombre;
        this.salario = salario;
    }
}
class Gerente ________ Empleado {
    constructor(nombre, salario, departamento) {
        ________(nombre, salario);
        this.departamento = departamento;
    }
    informacion() {
        return `${this.nombre} lidera ${this.departamento} con salario ${this.salario}`;
    }
}
const gerente = new Gerente("Lucía", 5000, "Ventas");
console.log(gerente.informacion()); // "Lucía lidera Ventas con salario 5000"
```

### Ejercicio 12 – Promesas y async/await
```javascript
// Concepto: async convierte una función en asíncrona y await espera la resolución de una promesa.
function simularCarga() {
    return new Promise(resolve => setTimeout(() => resolve("Datos listos"), 500));
}
async function obtenerDatos() {
    const resultado = ________ simularCarga();
    console.log(resultado);  // "Datos listos"
    return resultado;
}
obtenerDatos().________(msg => console.log(`Recibido: ${msg}`));
```

### Ejercicio 13 – Módulos ES (import)
```javascript
// Concepto: import trae funciones/variables exportadas de otro archivo. (Nota: se requiere entorno de módulos)
// ── calculos.js ──
export const PI = 3.1416;
export function areaCirculo(r) { return PI * r * r; }
// ── main.js ──
import ________ from "./calculos.js";
console.log(areaCirculo(5)); // 78.54
```

### Ejercicio 14 – Parámetros por defecto
```javascript
// Concepto: Si no se pasa un argumento, el parámetro toma el valor por defecto.
function saludar(nombre = "Invitado") {
    console.log(`Hola, ${nombre}`);
}
________;  // Debe mostrar "Hola, Invitado"
```

### Ejercicio 15 – Shorthand de propiedades
```javascript
// Concepto: Cuando el nombre de la variable y la propiedad coinciden, se puede usar la forma corta { x, y }.
const x = 10, y = 20;
const punto = { ________ };
console.log(punto); // { x: 10, y: 20 }
```

### Ejercicio 16 – Array.includes()
```javascript
// Concepto: .includes() verifica si un elemento existe en el arreglo, devolviendo true o false.
const colores = ["rojo", "verde", "azul"];
console.log(colores.________("verde")); // true
```

### Ejercicio 17 – Set para valores únicos
```javascript
// Concepto: Un Set almacena valores sin duplicados; el spread lo convierte de nuevo a arreglo.
const nums = [1, 2, 2, 3, 3, 3];
const unicos = [...new ________(nums)];
console.log(unicos); // [1, 2, 3]
```

### Ejercicio 18 – Optional chaining con propiedades
```javascript
// Concepto: ?. también se puede usar para leer propiedades que podrían no existir.
const libro = { autor: { nombre: "Gabo" } };
console.log(libro.autor?.________); // "Gabo"
console.log(libro.editorial?.________); // undefined
```

### Ejercicio 19 – Operador ternario en template literal
```javascript
// Concepto: El operador ternario (condición ? valorSi : valorNo) es útil dentro de plantillas.
const hora = 14;
const saludo = `Buenos ${hora < 12 ? ________ : ________}`;
console.log(saludo); // Buenas tardes
```

### Ejercicio 20 – Desestructuración con alias y valor por defecto
```javascript
// Concepto: Se puede renombrar una propiedad (a: uno) y asignar un valor por defecto (= 2) si no existe.
const obj = { a: 1 };
const { a: uno, b: dos = ________ } = obj;
console.log(uno, dos); // 1 2
```

