import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Equipo } from '../services/service'

// const arrays = [ 
//   {
//     id: 1,
//     name: 'Equipo1',
//     zona: 'Zona1'
//   },
//   {
//     id: 2,
//     name: 'Equipo2',
//     zona: 'Zona2'
//   },
//   {
//     id: 3,
//     name: 'Equipo3',
//     zona: 'Zona3'
//   },
//   {
//     id: 4,
//     name: 'Equipo4',
//     zona: 'Zona4'
//   },
//   {
//     id: 5,
//     name: 'Equipo5',
//     zona: 'Zona5'
//   }
// ]


const Equipo = ()  => {

  const history = useNavigate()
  const equipo = Equipo()
  const [agregar, setAgregar] = useState(false)
  const [editar, setEditar] = useState(false)
  const [eliminar, setEliminar] = useState(false)


  const handdleAdd = () => {
    history('/nuevoEquipo')
  }
  
  const handdleEdit = (id) => {
    console.log('id', id)
    history(`/equipo/${id}`)
  }
  
  const handdleRemove = () => {
    console.log('Se elimina un equipo')
  }
  
  const handdlePlantel = () => {
    console.log('Se ve el plantel')
    history('/jugadores');
  }

  const handdleAtras = () => {
    setAgregar(false)
    setEditar(false)
    setEliminar(false)
  }
  return (
      <div className="body">
        <div className="contAgregar">
          <button type="button" className="btn btnAgregar" onClick={handdleAdd}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-file-earmark-plus" viewBox="0 0 16 16">
              <path d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z"/>
              <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
            </svg>
            <span className="textAgregar"> Agregar </span>
          </button>
        </div> 

        <table className="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">NOMBRE DE EQUIPO</th>
                <th scope="col">ZONA</th>
                <th className="text-center" scope="col">ACCIONES</th>

                </tr>
            </thead>
            <tbody>
                {
                equipo.map(array => (

                    <tr id={array.id}>
                    <th scope="row">{array.id}</th>
                    <td>{array.name}</td>
                    <td>{array.zona}</td>
                    <td className="text-center"> 
                        <button type="button" className="btn" data-bs-toggle="tooltip" data-bs-placement="top" title="Editar" onClick={e => handdleEdit(array.id)} > 
                          <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="20" 
                          height="20" 
                          fill="currentColor" 
                          class="bi bi-pen" 
                          viewBox="0 0 16 16">
                            <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
                          </svg>
                        </button>
                        <button type="button" className="btn" data-bs-toggle="tooltip" data-bs-placement="top" title="Eliminar" onClick={handdleRemove}>
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="20" 
                            height="20" 
                            fill="currentColor" 
                            class="bi bi-trash" 
                            viewBox="0 0 16 16">
                              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                              <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                          </svg>
                        </button>
                        <button type="button" className="btn" data-bs-toggle="tooltip" data-bs-placement="top" title="Ver plantel" onClick={handdlePlantel}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                          <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                          <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                        </svg>
                        </button>

                    </td>
                </tr> 
                ))
                }
            </tbody>
        </table>
    </div>
  );
}

export default Equipo;
