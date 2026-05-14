# Evaluación Práctica: JavaScript Moderno

**ID:** JS‑AUTO‑20‑AV‑P  
**Tiempo estimado:** 2 horas  
**Modalidad:** Parejas  

[Laboratorio de Interfaces Web](JsModernoPreguntas.md)

### Conceptos de JS moderno (ES6+)
Se refiere a las características actuales de JavaScript que facilitan un código más limpio, eficiente y mantenible. En esta materia:

-  Variables con let y const (ámbito de bloque).

-  Funciones flecha (=>) y su contexto de this.

-  Desestructuración de objetos y arreglos.

-  Spread operator (...) y rest parameters.

-  Template literals (cadenas con ${}).

- Promesas y async/await para manejo asíncrono (clave para consumir APIs).

-  Módulos (import / export) para organizar el código.

----

## Objetivo
Completar los 20 ejercicios de código JavaScript (ES6+) rellenando los huecos (`________`) para que cada archivo se ejecute sin errores y produzca la salida esperada.

## Requisitos
- Node.js v18 o superior instalado en su computadora.
- Cuenta personal en GitHub.
- Editor de código (VS Code recomendado).

## Instrucciones de trabajo y entrega

### 1. Fork del repositorio
- Un integrante de la pareja debe hacer clic en el botón **Fork** (esquina superior derecha de esta página).
- Esto creará una copia exacta del repositorio en su cuenta de GitHub.

### 2. Agregar al compañero 
- En el fork recién creado, vayan a **Settings > Collaborators**.
- Agreguen el nombre de usuario de GitHub del otro integrante.
- Ambos podrán trabajar directamente sobre ese fork.

### 3. Clonar el repositorio localmente
- Copien la URL de su fork (botón verde **Code**).
- Abran una terminal y ejecuten:

```bash
git clone https://github.com/suUsuario/evaluacion-js-moderno.git
cd evaluacion-js-moderno
```

### 4. Completar los ejercicios
- Abran el proyecto en su editor de código.
- Cada archivo `ej01.js`, `ej02.js` … `ej20.js` contiene un fragmento de código con uno o varios `________`.
- **Solo deben rellenar los huecos**, sin modificar el resto del código.

### 5. Probar cada solución
- En la terminal, ejecuten cada archivo con Node.js:

```bash
node ej01.js
node ej02.js
...
node ej20.js
```

- La salida en consola debe coincidir exactamente con la que aparece en el comentario del código. Si no es así, revisen los huecos completados.

### 6. Guardar los cambios (commits)
- A medida que terminen, añadan los archivos y creen commits con mensajes claros:

```bash
git add ej01.js ej02.js   # o git add .
git commit -m "Completados ejercicios 1 al 20"
```

### 7. Subir los cambios al fork
```bash
git push origin main
```
(Si su rama por defecto se llama `master`, usen `master` en lugar de `main`).

### 8. Entregar mediante Pull Request
- Regresen a la página de su fork en GitHub.
- Verán un banner que indica que su rama tiene cambios nuevos y un botón **Contribute** o **Pull request**.
- Hagan clic en **Open pull request**.
- Escriban un título como **“Entrega Evaluación – Nombre1 y Nombre2”**.
- Revisen que los cambios correspondan a los archivos modificados y envíen el Pull Request.

## Criterios de evaluación
- Todos los huecos deben estar correctamente completados.
- El código debe ejecutarse sin errores y producir la salida esperada.
- No se permite el uso de `var`, bucles `for` tradicionales, `reduce` ni `flatMap`.
- Los commits deben reflejar el trabajo colaborativo de la pareja.



