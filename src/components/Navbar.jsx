import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const showList = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <span className="logo-text">Kingdom Sweetz <span className="logo-accent">&</span> Treatz</span>
        </Link>
      </div>
      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/menu" onClick={() => setMenuOpen(false)}>Menu</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Order & Contact</Link></li>
        <li><Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link></li>
        <li><Link to="/specials" onClick={() => setMenuOpen(false)}>Specials</Link></li>
      </ul>
      <button className="hamburger" aria-label="Open navigation menu" onClick={showList}>
        <i className="fa-solid fa-cake-candles"></i>
        <span>Menu</span>
      </button>
    </nav>
  )
}

export default Navbar
