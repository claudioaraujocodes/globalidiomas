import "./Contato.css";
import salvadorPostcard from "../img/salvador_postcard.png";
import saopauloPostcard from "../img/saopaulo_postcard.png";
import rioPostcard from "../img/rio_postcard.png";
import languagesBanner from "../img/languages_banner.png";

const Contato = () => {
  return (
    <div className="contato-page-container">
      <div 
        className="contato-banner" 
        style={{ backgroundImage: `url(${languagesBanner})` }}
      >
        <div className="banner-overlay"></div>
        <div className="banner-content">
          <h1>Nossas Unidades</h1>
          <p>Selecione uma de nossas unidades no país e agende sua visita.</p>
        </div>
      </div>

      <div className="contato-container">

      <div className="cities-grid">
        {/* Salvador - BA Card */}
        <div className="city-card">
          <div className="city-header">
            <div className="city-postcard">
              <img className="postcard-img" src={salvadorPostcard} alt="Farol da Barra - Salvador" />
            </div>
            <div className="city-title-wrapper">
              <h2>Salvador</h2>
              <span className="city-state">BA</span>
            </div>
          </div>
          
          <div className="units-list">
            <div className="unit-item">
              <h3>Comércio</h3>
              <p className="unit-address">Av. da França, 450 - Comércio</p>
              <div className="unit-info">
                <span className="unit-phone">(71) 3241-1000</span>
                <a href="mailto:comercio-ba@global.com" className="unit-email">comercio-ba@global.com</a>
              </div>
            </div>

            <div className="unit-item">
              <h3>Iguatemi</h3>
              <p className="unit-address">Av. ACM, 3250 - Caminho das Árvores</p>
              <div className="unit-info">
                <span className="unit-phone">(71) 3450-2000</span>
                <a href="mailto:iguatemi-ba@global.com" className="unit-email">iguatemi-ba@global.com</a>
              </div>
            </div>

            <div className="unit-item">
              <h3>Cabula</h3>
              <p className="unit-address">Rua Silveira Martins, 120 - Cabula</p>
              <div className="unit-info">
                <span className="unit-phone">(71) 3230-3000</span>
                <a href="mailto:cabula-ba@global.com" className="unit-email">cabula-ba@global.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* São Paulo - SP Card */}
        <div className="city-card">
          <div className="city-header">
            <div className="city-postcard">
              <img className="postcard-img" src={saopauloPostcard} alt="Avenida Paulista - São Paulo" />
            </div>
            <div className="city-title-wrapper">
              <h2>São Paulo</h2>
              <span className="city-state">SP</span>
            </div>
          </div>
          
          <div className="units-list">
            <div className="unit-item">
              <h3>Brás</h3>
              <p className="unit-address">Largo do Brás, 80 - Brás</p>
              <div className="unit-info">
                <span className="unit-phone">(11) 2694-4000</span>
                <a href="mailto:bras-sp@global.com" className="unit-email">bras-sp@global.com</a>
              </div>
            </div>

            <div className="unit-item">
              <h3>Pinheiros</h3>
              <p className="unit-address">Rua Pinheiros, 1020 - Pinheiros</p>
              <div className="unit-info">
                <span className="unit-phone">(11) 3031-5000</span>
                <a href="mailto:pinheiros-sp@global.com" className="unit-email">pinheiros-sp@global.com</a>
              </div>
            </div>

            <div className="unit-item">
              <h3>Jardins</h3>
              <p className="unit-address">Av. Paulista, 1800 - Cerqueira César</p>
              <div className="unit-info">
                <span className="unit-phone">(11) 3085-6000</span>
                <a href="mailto:jardins-sp@global.com" className="unit-email">jardins-sp@global.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Rio de Janeiro - RJ Card */}
        <div className="city-card">
          <div className="city-header">
            <div className="city-postcard">
              <img className="postcard-img" src={rioPostcard} alt="Cristo Redentor - Rio de Janeiro" />
            </div>
            <div className="city-title-wrapper">
              <h2>Rio de Janeiro</h2>
              <span className="city-state">RJ</span>
            </div>
          </div>
          
          <div className="units-list">
            <div className="unit-item">
              <h3>Copacabana</h3>
              <p className="unit-address">Av. Nossa Sra. de Copacabana, 500</p>
              <div className="unit-info">
                <span className="unit-phone">(21) 2548-7000</span>
                <a href="mailto:copacabana-rj@global.com" className="unit-email">copacabana-rj@global.com</a>
              </div>
            </div>

            <div className="unit-item">
              <h3>Barra da Tijuca</h3>
              <p className="unit-address">Av. das Américas, 4200 - Barra</p>
              <div className="unit-info">
                <span className="unit-phone">(21) 2493-8000</span>
                <a href="mailto:barra-rj@global.com" className="unit-email">barra-rj@global.com</a>
              </div>
            </div>

            <div className="unit-item">
              <h3>Ipanema</h3>
              <p className="unit-address">Rua Visconde de Pirajá, 350 - Ipanema</p>
              <div className="unit-info">
                <span className="unit-phone">(21) 2523-9000</span>
                <a href="mailto:ipanema-rj@global.com" className="unit-email">ipanema-rj@global.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contato;