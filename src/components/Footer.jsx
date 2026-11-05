import { Link, useLocation } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
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
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-column">
          <h3>Navegação</h3>
          <ul className="footer-links">
            <li><Link to="/" onClick={(e) => handleNavClick("/", e)}>Cursos</Link></li>
            <li><Link to="/cadastro" onClick={(e) => handleNavClick("/cadastro", e)}>Matrículas</Link></li>
            <li><Link to="/contato" onClick={(e) => handleNavClick("/contato", e)}>Contato</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Unidades</h3>
          <ul className="footer-links">
            <li><Link to="/contato" onClick={(e) => handleNavClick("/contato", e)}>Salvador</Link></li>
            <li><Link to="/contato" onClick={(e) => handleNavClick("/contato", e)}>São Paulo</Link></li>
            <li><Link to="/contato" onClick={(e) => handleNavClick("/contato", e)}>Rio de Janeiro</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Créditos</h3>
          <p className="footer-text">Desenvolvido por Cláudio Araujo</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
