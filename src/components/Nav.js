import 'App.css';
import logo from 'logo.svg';

function Navbar() {
    return(
        <nav>
        <img  src={logo} className="App-logo" alt="little-lemon logo"/>
        <ul>
           <li><a href="/#">Home</a></li>
           <li><a href="/#">About</a></li>
           <li><a href="/#">Menu</a></li>
           <li><a href="/#">Reservations</a></li>
           <li><a href="/#">Order Online</a></li>
           <li> <a href="/#">Login</a></li>
           </ul>
        </nav>
    );
}

export default Navbar;