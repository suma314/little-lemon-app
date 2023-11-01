import 'App.css';
import logo from 'Logo-Little-Lemon.svg';
import {Link} from 'react-router-dom';

function Navbar() {
    return(
        <header>
            <div className='logo-name'>
                <img src={logo} alt="little-lemon logo" />
            </div>
            <nav className='nav'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/reservation">Reservations</Link></li>
                    <li><Link to="/order">Order Online</Link></li>
                    <li> <Link to="/login">Login</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;