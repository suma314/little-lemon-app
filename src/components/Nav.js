import 'App.css';
import logo from 'Logo-Little-Lemon.svg';

function Navbar() {
    return(
        <header>
            <div className='logo-name'>
                <img src={logo} alt="little-lemon logo" />
            </div>
        <nav className='nav'>
            <ul>
                <li><a href="/#">Home</a></li>
                <li><a href="/#">About</a></li>
                <li><a href="/#">Menu</a></li>
                <li><a href="/#">Reservations</a></li>
                <li><a href="/#">Order Online</a></li>
                <li> <a href="/#">Login</a></li>
            </ul>
        </nav>
        </header>
    );
}

export default Navbar;