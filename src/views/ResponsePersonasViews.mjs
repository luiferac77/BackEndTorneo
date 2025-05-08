export const renderizarPersonas = (persona) => {
    return{
        nombre:persona.nombre,
        apellido:persona.apellido, 
        dni:persona.dni, 
        fecha_nacimiento:persona.fecha_nacimiento, 
        telefono:persona.telefono, 
        direccion:persona.direccion, 
        genero:persona.genero, 
        foto_url:persona.foto_url
    }
}

export const renderizarTodasLasPersonas = (personas) => {
    return personas.map(persona => renderizarPersonas(persona));
}