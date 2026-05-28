import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-column">
          <h3>Navegação</h3>
          <ul className="footer-links">
            <li><Link to="/">Cursos</Link></li>
            <li><Link to="/cadastro">Matrículas</Link></li>
            <li><Link to="/contato">Contato</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Unidades</h3>
          <ul className="footer-links">
            <li><Link to="/contato">Salvador</Link></li>
            <li><Link to="/contato">São Paulo</Link></li>
            <li><Link to="/contato">Rio de Janeiro</Link></li>
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