import styles from './Login.module.css'
import { useRef, useState } from 'react'
import { usuarios } from '../../hooks/usuarios';
import { useNavigate } from 'react-router-dom';

export const Login = () => {

    const {login,registro} = usuarios();
    const navigate = useNavigate();

   const [action, setAction] = useState('');
   const [loginMessage, setLoginMessage] = useState('');
   const [registerMessage, setRegisterMessage] = useState('');
   
   const loginUsernameRef=useRef(null);
   const loginPasswordRef=useRef(null);

   const registroUsernameRef=useRef(null);
   const registroPasswordRef=useRef(null);
   const registroEmailRef=useRef(null);

   const logeo = (event) => {
        event.preventDefault();

        const username = loginUsernameRef.current.value;
        const password = loginPasswordRef.current.value;

        if(login(username, password)){
            console.log('logeo exitoso');
            loginUsernameRef.current.value='';
            loginPasswordRef.current.value='';
            window.location.href='Home.html';
           
        }
        else{
            setLoginMessage('inicio de sesion fallido')
            console.log('login fallido');
            loginUsernameRef.current.value='';
            loginPasswordRef.current.value='';
        }
   }

   const registrarse = (event) =>{
        event.preventDefault();
        const username=registroUsernameRef.current.value;
        const password=registroPasswordRef.current.value;
        const email=registroEmailRef.current.value;

        registro (username, password,email);
        console.log('usuario registrado:' , {username,password,email});
        setRegisterMessage('usuario regitrado, ahora puedes logearte')
        //lipiar los campos de registro
        registroUsernameRef.current.value='';
        registroPasswordRef.current.value='';
        registroEmailRef.current.value='';
                
        setAction('');
   }

   const registroLink = () => {
        setAction(' active');
        setLoginMessage('');
        setRegisterMessage('');
   }

   const loginLink = () => {
        setAction('');
        setLoginMessage('');
        setRegisterMessage('');
    }
    return (
    <>
        {/* login */}
        <div className={`${styles.wrapper} ${action ? styles.active : ''}`}>

            <div className={`${styles.formBox} ${styles.login}`}>
                <form onSubmit={logeo}>

                    <h1>Inicio de sesion</h1> 

                    <div className={styles.inputBox}>
                        <input type="text" placeholder='User name' required ref={loginUsernameRef}/>
                        <i className="bi bi-person-fill"></i>
                    </div>        
                    <div className={styles.inputBox}>
                        <input type="password" placeholder='Password' required ref={loginPasswordRef}/>
                        <i className="bi bi-person-fill-lock"></i>
                    </div> 

                    <div className={styles.remember}>
                        <label> <input type="checkbox" /> Remember me</label>
                        <a href="#">Forgot password?</a>
                    </div>
                    
                    <button type="submit">Iniciar sesion</button>
                    {loginMessage && <p>{loginMessage}</p>}

                    <div className={styles.registerLink}>
                        <p>
                            No tienes una cuenta? 
                            <a href="#" onClick={registroLink}>Registrame</a>
                        </p>
                    </div>
            </form>
            </div>


         {/* registro */}
      

            <div className={`${styles.formBox} ${styles.registro}`}>
                <form onSubmit={registrarse}>

                    <h1>Registro</h1> 

                    <div className={styles.inputBox}>
                        <input type="text" placeholder='User name' required ref={registroUsernameRef}/>
                        <i className="bi bi-person-fill"></i>
                    </div>        

                    <div className={styles.inputBox}>
                        <input type="email" placeholder='Email' required ref={registroEmailRef}/>
                        <i className="bi bi-envelope-at-fill"></i>
                    </div> 

                    <div className={styles.inputBox}>
                        <input type="password" placeholder='Password' required ref={registroPasswordRef}/>
                        <i className="bi bi-person-fill-lock"></i>
                    </div> 

                    <div className={styles.remember}>
                        <label> <input type="checkbox" /> Aceptas terminos y condiciones</label>
                        
                    </div>
                    
                    <button type="submit">Registrarme</button>
                    {registerMessage && <p>{registerMessage}</p>}

                    <div className={styles.registerLink}>
                        <p>
                            Ya tienes una cuenta? 
                            <a href="#" onClick={loginLink}>Iniciar </a>
                        </p>
                    </div>
                </form>
            </div>
        </div>


    </>
  )
}
