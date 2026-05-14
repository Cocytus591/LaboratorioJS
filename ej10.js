const ajustes = { compresion: false, nivel: 0 };
ajustes.compresion ??= true; 

// El operador ||= asigna el valor si el operando izquierdo es "falsy" (0, "", false, null, undefined)
ajustes.nivel ||= 5;    

console.log(ajustes); // Salida: { compresion: false, nivel: 5 }