import { Link } from "react-router-dom"
// CSS
import './css/navbar.css'
// Images
import logo from './images/logo.png'

export const Navbar = () => {
    return(
        <nav className="nav">
            <div className="logo">
                <Link to='/' id="nav-link">
                    <img src={logo} alt="Support desk logo" />
                    <h2>Support Desk</h2>
                </Link>
            </div>
            <ul>
                <li>
                    <Link to='/login' id="link">
                        Login
                    </Link>
                </li>
                <li>
                    <Link to='/register' id="link">
                        Register
                    </Link>
                </li>
            </ul>
        </nav>
    )
}