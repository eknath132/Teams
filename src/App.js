import { useState } from 'react';
import './App.css';
import imagen1 from './imagen1.jpg'

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


export const App = ()  => {

  const [agregar, setAgregar] = useState(false)
  const [editar, setEditar] = useState(false)
  const [eliminar, setEliminar] = useState(false)


  const handdleAdd = () => {
    setAgregar(true)
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
    <div id="body">
      <img id="imagen1" src={imagen1} alt="hola" width="100%" height="120%"/>
      <div className="App">
        {
          !agregar & !editar && 
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
        }
        {
          agregar &&  
          <form className="table1">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" />
            </div>
            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1" />
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            <button  class="btn btn-primary" onclick={handdleAtras}>Atras</button>

          </form>
        }
        {
          editar && 
          <form className="table1">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">EDITANDOOOO</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" />
            </div>
            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1" />
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            <button  class="btn btn-primary" onclick={handdleAtras}>Atras</button>

          </form>
        }
      </div>
    </div>
  );
}

export default App;
