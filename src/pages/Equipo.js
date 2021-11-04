import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const arrays = [ 
  {
    id: 1,
    name: 'Equipo1',
    zona: 'Zona1'
  },
  {
    id: 2,
    name: 'Equipo2',
    zona: 'Zona2'
  },
  {
    id: 3,
    name: 'Equipo3',
    zona: 'Zona3'
  },
  {
    id: 4,
    name: 'Equipo4',
    zona: 'Zona4'
  },
  {
    id: 5,
    name: 'Equipo5',
    zona: 'Zona5'
  }
]


const Equipo = ()  => {

    const history = useNavigate()

  const [agregar, setAgregar] = useState(false)
  const [editar, setEditar] = useState(false)
  const [eliminar, setEliminar] = useState(false)


  const handdleAdd = () => {
    history('/agregarEquipo')
  }
  
  const handdleEdit = () => {
    setEditar(true)
  }
  
  const handdleRemove = () => {
    console.log('Se elimina un equipo')
  }
  
  const handdlePlantel = () => {
    console.log('Se ve el plantel')
  }

  const handdleAtras = () => {
    setAgregar(false)
    setEditar(false)
    setEliminar(false)
  }
  return (
      <div className="body">

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
                arrays.map(array => (

                    <tr id={array.id}>
                    <th scope="row">{array.id}</th>
                    <td>{array.name}</td>
                    <td>{array.zona}</td>
                    <td className="text-center"> 
                        <button type="button" className="btn btn-primary" onClick={handdleAdd}>Agregar</button>
                        <button type="button" className="btn btn-primary" onClick={handdleEdit} >Editar</button>
                        <button type="button" className="btn btn-danger" onClick={handdleRemove}>Eliminar</button>
                        <button type="button" className="btn btn-primary" onClick={handdlePlantel}>Plantel</button>

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
