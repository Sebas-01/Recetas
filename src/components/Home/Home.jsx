import './home.css'

export const Home = () => {
  return (
    <>
        <nav className="navbar navbar-expand-sm navbar-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-toggler" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar-toggler">
                    <a className="navbar-brand" href="#">
                        {/* <img src="Recetas\src\imagenes\background-login.jpg" width="50" alt="logo-pagina"> */}
                    </a>
                    <ul className="navbar-nav d-flex justify-content-center aling-items-center">
                    <li className="nav-item">
                        <a className="nav-link " aria-current="page" href="#about-me">Sobre mi</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#proyectos">Proyectos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#testimonio">Testimonios</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contacto">Contactos</a>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
        
    </>


    
    
    
  )
}
