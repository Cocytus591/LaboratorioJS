function generarInforme(categoria, ...items) {
    return `Informe de ${categoria}: ${items.join(" – ")}`;
}
console.log(generarInforme("Ventas", "Enero", "Febrero", "Marzo"));
// "Informe de Ventas: Enero – Febrero – Marzo"