import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from '../features/auth/authSlice';
import { MdLogout } from 'react-icons/md'
// CSS
import './css/navbar.css'
// Images
import logo from './images/logo.png'

export const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user } = useSelector(state => state.auth);

    const onLogout = () => {
        dispatch(logout());
        dispatch(reset());
        navigate('/')
    }

    return(
        <nav className="nav">
            <div className="logo">
                <Link to='/' id="nav-link">
                    <img src={logo} alt="Support desk logo" />
                    <h2>Support Desk</h2>
                </Link>
            </div>
            <ul>
                {user ? (
                    <button className="btn" onClick={onLogout}><MdLogout /> Logout</button>
                ):
                (
                <>
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
                </>
                )}

            </ul>
        </nav>
    )
}