//3.Solicita al usuario dos números y una operación (+, -, *, /) usando prompt. Muestra el resultado de la operación en un alert.

let numero1 = parseFloat(prompt("Ingrese un número"))
let operacion = prompt("Ingrese una operación (+, -, *, /)")
let numero2 = parseFloat(prompt("Ingrese otro número"))

let resultado

if(operacion === "+") {
    resultado = numero1 + numero2
} else if (operacion === "-") {
    resultado = numero1 - numero2
} else if(operacion === "*") {
    resultado = numero1 * numero2
} else if(operacion === "/") {
    numero1 / numero2
} else {
    resultado = ("Error de operación")
}

alert(`El resultado es: ${resultado}`)

