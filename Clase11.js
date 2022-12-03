var sacha = { 
    nombre: 'sacha',
    apellido: "smith",
    edad: 17,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: true

}

const MAYORIA_DE_EDAD = 17;
const esMayordeEdad = persona => persona.edad > MAYORIA_DE_EDAD;
function imprimirSiesMayordeEdad(persona) {
    if (esMayordeEdad(persona)){
    console.log(`${persona.nombre} es mayor de edad`);
} 
    else {
        console.log(`${persona.nombre} es menor de edad`);
    }
}

function permitiracceso(persona){
    if (!esMayordeEdad(persona)) {
        console.log(`Acceso Denegado`);

        }
    }

const esMayorDeEdad = persona => persona.edad > MAYORIA_DE_EDAD;