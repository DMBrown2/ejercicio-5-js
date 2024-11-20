//5.Pide al usuario un número de minutos. Convierte ese valor a segundos y también a horas. Muestra el resultado en un alert.

let minutos = parseFloat(prompt("Ingrese los minutos"))

let segundos = minutos * 60

let horas = minutos / 60 

alert(`Ingreso ${minutos} minutos, que son ${segundos} segundos y ${horas} hora/s.`)