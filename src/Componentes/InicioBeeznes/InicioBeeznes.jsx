import React from 'react';
import './InicioBeeznes.css';
import { CiMenuBurger } from "react-icons/ci";


const InicioBeeznes = () => {
  return (
    <header className=''>
       <CiMenuBurger className='icon'/>
            <h1>Inicio</h1>
            <div className="input-box">
              <input type="text" placeholder='Buscar' required/>
            </div>
    </header>
  )
}

export default InicioBeeznes