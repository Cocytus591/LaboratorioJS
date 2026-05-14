const estructura = {
    bloques: [
        { id: "a", ejecutar: () => "A ejecutado" },
        null,
        { id: "c", acciones: ["imprimir"] }
    ]
};
const idx = 0;
const res0 = estructura.bloques?.[idx]?.ejecutar?.();
console.log(res0); // "A ejecutado"
const res1 = estructura.bloques?.[1]?.ejecutar?.();
console.log(res1); // undefined
const res2 = estructura.bloques?.[2]?.acciones?.[0];
console.log(res2); // "imprimir"