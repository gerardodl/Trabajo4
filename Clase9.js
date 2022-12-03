var sacha = {
    nombre: 'sacha',
    apellido: "smith",
    edad: 18,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: true

}

function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es: `);
    if (persona.ingeniero === true) {
        console.log('Ingeniero')
    }
}

imprimirProfesiones(sacha);