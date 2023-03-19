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
                <li><Link to="/profil/12">Profil</Link></li>
                <li><Link to="/#">Réglage</Link></li>
                <li><Link to="/#">Communauté</Link></li>
            </ul>
        </nav>
        <div>
            <Outlet />
        </div>
        </>
    )
}

export default Navbar