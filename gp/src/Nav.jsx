import './Nav.css';
export default function Nav() {
    return (
        <nav className="nav">
            <ul className="navlist">
                <li><a className="navlink" href="/Home">Home</a></li>
                <li><a className="navlink" href="/Register">Register</a></li>
                <li><a className="navlink" href="/Login">Login</a></li>
                <li><a className="navlink" href="/Help">Help</a></li>
            </ul>
        </nav>
    );
}