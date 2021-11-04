import React from 'react';
import { useNavigate } from 'react-router-dom'


const EquipoAgregar = ()  => {
    const history = useNavigate()

    const handdleAtras = () => {
        history('/equipo')
    }
  return (
          <form className="table1">
            <div className="mb-3" style={{display: 'flex'}}>
                <div className="col-3 textCenter" >
                    <label className="form-label textLabel">EQUIPO</label>
                </div>
              <div className="col-7">
                <input className="form-control"/>
              </div>
            </div>
            <div className="mb-3" style={{display: 'flex'}}>
                <div className="col-3 textCenter">
                        <label className="form-label textLabel">ZONA</label>
                    </div>
                    <div className="col-7">
                    <input className="form-control"/>
                </div>
                </div>
                <div className="boxButtons">
                    <button className="btn btn-danger" onClick={handdleAtras}>Atras</button>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
          </form>
  )
}

export default EquipoAgregar;
