// 6.Calcular el IVA de un producto. Solicita al usuario el precio de un producto en dolares y su precio final a pesos (1dolar = $1130), además tenemos que sumarle el IVA (21%). Muestra el precio total en un alert.

const iva = 1.21
const dolar = 1130

let precioDolar = +prompt("Ingrese el precio en dólares.")

let precioPesos = precioDolar * dolar * iva
let ivaDelProducto = ((precioDolar * dolar) * 21) / 100


alert(`El precio ingresado en dólares es ${precioDolar}USD. El precio en pesos con el IVA incluido es $${precioPesos}. El iva es $${ivaDelProducto}.`)