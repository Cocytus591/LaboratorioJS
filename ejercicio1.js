let x = 10;
if (true) {
    let x = 20;          // declara una nueva variable en este bloque
    console.log(x);        // 20
}
console.log(x);            // 10

const obj = { valor: 5 };
obj.valor = 8;             // mutación permitida
// obj = {};               // Error si la palabra clave es correcta
console.log(obj.valor);    // 8