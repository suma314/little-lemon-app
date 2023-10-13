import logo from 'Logo-Little-Lemon.svg';
import "App.css";

function Footer() {
    return (
        <footer>
            <div className='logo-name'>
                <h3>
                <img src={logo} alt="little-lemon logo" />
                </h3>
            </div>
            <div className='footer-card'>
                <h3>Navigation</h3>
                <span><a href="/#">Home</a></span>
                <span><a href="/#">About</a></span>
                <span><a href="/#">Menu</a></span>
                <span><a href="/#">Reservations</a></span>
                <span><a href="/#">Order Online</a></span>
                <span><a href="/#">Login</a></span>
            </div>
            <div className='footer-card'>
                <h3>Contact</h3>
                <span><a href="/#">Phone Number</a></span>
                <span><a href="/#">Email</a></span>
                <span><a href="/#">Address</a></span>
            </div>
            <div className='footer-card'>
                <h3>Social Media</h3>
                <span><a href="/#">Instagram</a></span>
                <span><a href="/#">LinkedIn</a></span>
                <span><a href="/#">Pinterest</a></span>
            </div>

        </footer>
    )
}

export default Footer;