import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (targetPath, e) => {
    const current = location.pathname.replace(/\/+$/, "") || "/";
    const target = targetPath.replace(/\/+$/, "") || "/";

    if (current === target) {
      if (e) e.preventDefault();
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      document.documentElement.scrollTo?.({ top: 0, left: 0, behavior: "smooth" });
    } else {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="nav-container">
        <div className="navbar">
          <div className="nav-items">
            <div className="logo">
              <Link to={"/"} onClick={(e) => handleNavClick("/", e)}>
                GLOBAL
              </Link>
            </div>

            <ul className="menu-links">
              <li>
                <Link to={"/"} onClick={(e) => handleNavClick("/", e)}>
                  Cursos
                </Link>
              </li>
              <li>
                <Link to={"/cadastro"} onClick={(e) => handleNavClick("/cadastro", e)}>
                  Matriculas
                </Link>
              </li>
              <li>
                <Link to={"/contato"} onClick={(e) => handleNavClick("/contato", e)}>
                  Contato
                </Link>
              </li>
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
          <li>
            <Link to={"/"} onClick={(e) => handleNavClick("/", e)}>
              Cursos
            </Link>
          </li>
          <li>
            <Link to={"/cadastro"} onClick={(e) => handleNavClick("/cadastro", e)}>
              Matriculas
            </Link>
          </li>
          <li>
            <Link to={"/contato"} onClick={(e) => handleNavClick("/contato", e)}>
              Contato
            </Link>
          </li>
        </ul>
      </div>

      {menuOpen && (
        <div className="menu-backdrop" onClick={() => setMenuOpen(false)}></div>
      )}
    </>
  );
};

export default Navbar;
