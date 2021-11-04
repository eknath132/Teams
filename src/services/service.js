export const Equipo = async() => {
    const url = `http://localhost:8080/equipo`
    const resp = await fetch(url);
    const {data} = await resp.json();

    const equipo =  data.map( dato => {
        return {
            id: dato.id,
            equipo: dato.equipo,
            zona: dato.zona
        }
    })
    return equipo
}

export const EquipoId = async(id) => {
    const url = `http://localhost:8080/equipo/${id}`
    const resp = await fetch(url);
    const {data} = await resp.json();

    const equipo =  data.map( dato => {
        return {
            id: dato.id,
            equipo: dato.equipo,
            zona: dato.zona
        }
    })
    return equipo
}

export const Jugadores = async() => {
    const url = `http://localhost:8080/jugador`
    const resp = await fetch(url);
    const {data} = await resp.json();

    const jugador =  data.map( dato => {
        return {
            id: dato.id,
            nombreApellido: dato.nombreApellido,
            codEquipo: dato.codEquipo
        }
    })
    return jugador
}

export const JugadoresId = async(id) => {
    const url = `http://localhost:8080/jugador/${id}`
    const resp = await fetch(url);
    const {data} = await resp.json();

    const jugador =  data.map( dato => {
        return {
            id: dato.id,
            nombreApellido: dato.nombreApellido,
            codEquipo: dato.codEquipo
        }
    })
    return jugador
}