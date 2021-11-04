import React from 'react';
import { useNavigate } from 'react-router-dom'
const Home = ()  => {
    const history = useNavigate()
    const handdleEntrar = () => { 
        
        history('/equipo')
    }
    return (
    <button className="animate__animated animate__backInRight btn btn-primary btnEntrar" onClick={handdleEntrar}>Entrar</button>      
    );
}

export default Home;
