// Concepto: Transforma, filtra y busca elementos sin bucles.
const empleados = [
    { id: 1, nombre: "Ana", area: "TI", activo: true },
    { id: 2, nombre: "Luis", area: "Ventas", activo: false },
    { id: 3, nombre: "Mía", area: "TI", activo: true }
];

// Obtén un array con los nombres de los empleados activos del área "TI"
const activosTI = empleados
    .filter(e => e.activo && e.area === "TI") // Filtra los objetos que cumplen la condición
    .map(e => e.nombre);                     // Transforma el objeto para quedarse solo con el nombre

console.log(activosTI); // ["Ana", "Mía"]

// Encuentra el primer empleado inactivo
const inactivo = empleados.find(e => !e.activo); // Busca el primer elemento que coincida

console.log(inactivo); // { id: 2, nombre: "Luis", area: "Ventas", activo: false }