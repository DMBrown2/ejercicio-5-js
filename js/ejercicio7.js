// 7.
// Define un objeto auto donde se especifiquen al menos 6 propiedades que lo conformen, si se les ocurren más propiedades del número solicitado colocarlas. Mostrar el resultado en un console log.
// Hacer un document.write para mostrar un mensaje dinámico en base a 2 propiedades que hayan elegido, ejemplo:
// document.write(`El auto objeto.propiedad1 es uno de los autos más potentes en el mercado alcanzando una velocidad de object.propiedad2 por hora!`)

const auto = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2017,
    caja: "automática",
    color: "rojo",
    km_por_hora: "160 km/hr",
    km_por_litros: "20 km/l",
}

console.log(auto)

document.write(`El auto ${auto.marca} ${auto.modelo} del año ${auto.año} es uno de los autos más potentes en el mercado alcandando una velocidad de ${auto.km_por_hora}.`)