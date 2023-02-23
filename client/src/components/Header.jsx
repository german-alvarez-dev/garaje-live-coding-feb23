import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../contexts/auth.context"

const Header = () => {

    const { user, logoutUser } = useContext(AuthContext)

    return (
        <header>
            <h1>Stateless auth</h1>
            <nav>
                <Link to="/">Inicio</Link>
                <Link to="/galeria">Galeria</Link>
                <Link to="/acceso">Acceso</Link>
                {user && <span onClick={logoutUser}>Cerrar sesión</span>}
                {user && <span>¡Hola, {user.username}!</span>}
            </nav>
        </header>
    )
}

export default Header