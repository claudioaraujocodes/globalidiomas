import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="nav-container">
        <div className="navbar">
          <div className="nav-items">
            <div className="logo">
              <Link to={"/"}>GLOBAL</Link>
            </div>

            <ul className="menu-links">
              <li><Link to={"/"}>Cursos</Link></li>
              <li><Link to={"/cadastro"}>Matriculas</Link></li>
              <li><Link to={"/contato"}>Contato</Link></li>
            </ul>

            <button 
              className={`menu-toggle ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
          </div>
        </div>
      </nav>

      <div className={`slide-menu ${menuOpen ? "open" : ""}`}>
        <button 
          className="menu-close-btn" 
          onClick={() => setMenuOpen(false)}
          aria-label="Fechar Menu"
        >
          &times;
        </button>
        <ul className="slide-menu-links">
          <li><Link to={"/"} onClick={() => setMenuOpen(false)}>Cursos</Link></li>
          <li><Link to={"/cadastro"} onClick={() => setMenuOpen(false)}>Matriculas</Link></li>
          <li><Link to={"/contato"} onClick={() => setMenuOpen(false)}>Contato</Link></li>
        </ul>
      </div>

      {menuOpen && (
        <div className="menu-backdrop" onClick={() => setMenuOpen(false)}></div>
      )}
    </>
  );
};

export default Navbar;