import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3 className="footer-logo">
            Kingdom Sweetz <span className="footer-logo-accent">&</span> Treatz
          </h3>
          <p className="footer-tagline">
            Where faith inspires every recipe and love is baked into every bite.
          </p>
        </div>

        <div className="footer-links">
          <h4 className="footer-heading">Quick Links</h4>
          <ul>
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
        </div>

        <div className="footer-social">
          <h4 className="footer-heading">Follow Us</h4>
          <div className="footer-social-links">
            <a
              href="https://www.instagram.com/kingdom_sweetz_n_treatz"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
          <p className="footer-scripture">
            "Taste and see that the Lord is good." — Psalm 34:8
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Kingdom Sweetz & Treatz LLC. All
          rights reserved.
        </p>
        <p className="footer-credit">Designed & Developed by Tahjstudio</p>
      </div>
    </footer>
  );
}

export default Footer;
