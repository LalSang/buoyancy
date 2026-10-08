import { Link } from "react-router-dom";

function Navbar() {
    return(
        <nav>

            <Link to="/">
                <strong>Buoyancy</strong>
            </Link>

            <div>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                <Link to="/dashboard">Dashboard</Link>
            </div>
        </nav>
    );
}

export default Navbar;