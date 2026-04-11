import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <span className="logo-text">
            Kingdom Sweetz <span className="logo-accent">&</span> Treatz
          </span>
        </Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/contact">Order & Contact</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/specials">Specials</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
