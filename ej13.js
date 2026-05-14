// Concepto: .some() comprueba si al menos uno cumple; .every() si todos cumplen.
const calificaciones = [85, 92, 78, 95];

// .every() devuelve true solo si TODOS los elementos son mayores o iguales a 70
const todosAprobados = calificaciones.every(n => n >= 70);  // true

// .some() devuelve true si AL MENOS UNO es mayor o igual a 90
const algunSobresaliente = calificaciones.some(n => n >= 90); // true

console.log(todosAprobados, algunSobresaliente); // true true