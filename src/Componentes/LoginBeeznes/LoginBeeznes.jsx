import React from 'react'; //Importa react para crear el componente
import './LoginBeeznes.css'; //Importa el archivo css para los estilos del componente
import { CiLock } from "react-icons/ci"; //importa icono de candado
import { FaRegUser } from "react-icons/fa"; //importa icono usuario 

const LoginBeeznes = () => {
  return (
    <div className='wrapper'> {/*contenedor principal del formulario*/}
        <form action=""> {/*Formulario del login */}
        <h1>Login</h1> {/*Titulo del formulario*/}
        <div className="input-box"> {/*Contenedor para el campo de usuario*/}
           <input type="text" placeholder='Username' required/> {/*Campo de entrada para n_usuario */}
           <FaRegUser className='icon'/> {/*icono_usuario */}
        </div>
        
        <div className="input-box"> {/*contenedor para campo contra*/}
           <input type="password" placeholder='Password' required/> {/*campo de entrada para contra*/}
           <CiLock className='icon'/> {/*icono candado*/}
        </div>

        <div className="remember-forgot"> {/*contenedor para recordar contra y enlace de olvido*/}
            <label><input type="checkbox" /> Remember me</label> {/*opcion para recordar usuario*/}
            <a href="#">Forgot password?</a> {/*enlace para recuperar contra*/}
        </div>

        <button type="submit">Iniciar sesion</button> {/*boton para enviar formulario*/}

        <div className="register-link"> {/*enlace para registrarse*/}
            <p>Don't have an account? <a href="#">Register</a></p> 
        </div>
        </form>
    </div>
  )
}

export default LoginBeeznes; {/*exporta el componente para su uso en otrar partes*/}