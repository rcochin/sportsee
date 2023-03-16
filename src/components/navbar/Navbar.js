import { Link, Outlet } from "react-router-dom"
import Logo from '../../assets/logo.png'
import './Navbar.css'

/**
 * React component for the application's navigation bar.
 *
 * @return {JSX.Element} React component for the navigation bar.
*/
const Navbar = () =>{
    return (
        <>
        <nav>
            <ul>
                <li><Link to="/"><img src={Logo} alt="Logo SportSee" className="logo"/></Link></li>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/profil">Profil</Link></li>
                <li><Link to="/reglages">Réglage</Link></li>
                <li><Link to="/communaute">Communauté</Link></li>
            </ul>
        </nav>
        <div>
            <Outlet />
        </div>
        </>
    )
}

export default Navbar