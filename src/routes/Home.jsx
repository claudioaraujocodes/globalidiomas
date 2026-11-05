import CarrosselAutoplay from "../components/CarrosselAutoplay";
import { useState, useEffect, useRef, useCallback } from "react";

import { Link } from "react-router-dom";

// Importa as fotos de estúdio com fundo degradê azul para os boxes elásticos
import elasticIng1 from "../img/elastic_ing1.webp";
import elasticIng2 from "../img/elastic_ing2.webp";
import elasticIng3 from "../img/elastic_ing3.webp";
import elasticEsp1 from "../img/elastic_esp1.webp";
import elasticEsp2 from "../img/elastic_esp2.webp";
import elasticEsp3 from "../img/elastic_esp3.webp";
import elasticMan1 from "../img/elastic_man1.webp";
import elasticMan2 from "../img/elastic_man2.webp";
import elasticMan3 from "../img/elastic_man3.webp";


import "./Home.css";
import urbanMapBanner from "../img/languages_banner.webp";

// Objeto contendo os dados e imagens dos boxes interativos divididos por idioma.

const CURSOS_BOXES = {
  ingles: [
    { id: 1, label: "Corporativo", titulo: "Inglês Corporativo", texto: "Foque na comunicação profissional para reuniões e negociações.", imagem: elasticIng1 },
    { id: 2, label: "Intercâmbio", titulo: "Intercâmbio e Viagens", texto: "Prepare-se para explorar o mundo e estudar no exterior sem barreiras.", imagem: elasticIng2 },
    { id: 3, label: "Dia a Dia", titulo: "Inglês no Dia a Dia", texto: "Comunicação informal e natural para redes sociais, filmes e games.", imagem: elasticIng3 },
  ],
  espanhol: [
    { id: 1, label: "Negócios", titulo: "Espanhol para Negócios", texto: "Expanda suas conexões profissionais e comerciais com o mercado latino.", imagem: elasticEsp1 },
    { id: 2, label: "Conversação", titulo: "Espanhol Fluente", texto: "Conversação natural e pronúncia correta em qualquer situação social.", imagem: elasticEsp2 },
    { id: 3, label: "Acadêmico", titulo: "Espanhol Acadêmico", texto: "Suporte para exames de proficiência como DELE e estudos universitários.", imagem: elasticEsp3 },
  ],
  mandarim: [
    { id: 1, label: "Prático", titulo: "Mandarim Prático", texto: "Introdução e frases do cotidiano para iniciantes de todas as idades.", imagem: elasticMan1 },
    { id: 2, label: "Negócios", titulo: "Mandarim para Negócios", texto: "Comunicação estratégica para importação, exportação e comércio global.", imagem: elasticMan2 },
    { id: 3, label: "Acadêmico", titulo: "Mandarim Acadêmico", texto: "Preparação para testes HSK e intercâmbios acadêmicos na Ásia.", imagem: elasticMan3 },
  ],
};

// Define a largura máxima de tela (900 pixels) - layout "Mobile".
const MOBILE_LAYOUT_BREAKPOINT = 900;
const ELASTIC_TRANSITION_MS = 900;

// Função auxiliar que cria o estado inicial dos 3 boxes.
// No mobile, a primeira caixa (id 1) já começa expandida (isExpanded: true), enquanto no desktop começam fechadas.
const createInitialBoxes = (expandFirst = false) => [
  { id: 1, isExpanded: expandFirst },
  { id: 2, isExpanded: false },
  { id: 3, isExpanded: false }
];


const Home = () => {

  const [courseImgKey, setCouseImgKey] = useState("ingles");
  const [isMobileLayout, setIsMobileLayout] = useState(
    () => typeof window !== "undefined" && window.matchMedia(`(max-width: ${MOBILE_LAYOUT_BREAKPOINT}px)`).matches
  );


  useEffect(() => {
    // Cria um ouvinte para monitorar se a largura da janela atravessa o limite de 900px.
    const mediaQuery = window.matchMedia(`(max-width: ${MOBILE_LAYOUT_BREAKPOINT}px)`);

    // Função disparada sempre que o tamanho da tela mudar de desktop para mobile ou vice-versa.
    const handleLayoutChange = (event) => {
      // Atualiza o estado isMobileLayout com true ou false.
      setIsMobileLayout(event.matches);
      // Reinicia o estado de abertura das boxes (abre a primeira se for mobile, ou fecha todas se for desktop).
      setBoxes(createInitialBoxes(event.matches));
    };

    // Registra a função handleLayoutChange para escutar as mudanças da query de mídia.
    mediaQuery.addEventListener("change", handleLayoutChange);


    return () => mediaQuery.removeEventListener("change", handleLayoutChange);
  }, []);

  // Função chamada ao clicar em um dos botões de curso (Inglês, Espanhol ou Mandarim).
  const handleCourse = (course) => {
    // Altera a chave do curso ativo (ingles, espanhol ou mandarim).
    setCouseImgKey(course);
    // Reinicia o estado das caixas abrindo a primeira se for mobile, ou fechando todas se for desktop.
    setBoxes(createInitialBoxes(isMobileLayout));
  };

  // Estado que armazena um array com a situação (isExpanded: true/false) de cada um dos 3 boxes.
  const [boxes, setBoxes] = useState(() =>
    createInitialBoxes(
      typeof window !== "undefined" &&
      window.matchMedia(`(max-width: ${MOBILE_LAYOUT_BREAKPOINT}px)`).matches
    )
  );

  const boxImgRef = useRef(null);

  // Estado que guarda a altura calculada (em pixels) do painel elástico no modo mobile.
  const [elasticPanelHeight, setElasticPanelHeight] = useState(null);

  // Função memorizada que calcula a altura da div de imagens para animar a expansão suave no mobile.
  const measureElasticPanel = useCallback(() => {
    const boxImg = boxImgRef.current;

    if (!boxImg || !isMobileLayout) {
      setElasticPanelHeight(null);
      return;
    }


    const panel = boxImg.parentElement;
    if (!panel) return;

    const prevHeight = panel.style.height;
    panel.style.height = "auto";
    const styles = getComputedStyle(panel);
    const paddingY = parseFloat(styles.paddingTop) + parseFloat(styles.paddingBottom);
    const total = boxImg.offsetHeight + paddingY;

    panel.style.height = prevHeight;

    setElasticPanelHeight(total);
  }, [isMobileLayout]);

  // Efeito disparado sempre que as caixas mudam, o curso muda ou o layout muda.
  useEffect(() => {
    // Se for desktop, limpa o cálculo de altura e sai do hook.
    if (!isMobileLayout) {
      setElasticPanelHeight(null);
      return;
    }

    measureElasticPanel();


    const rafId = requestAnimationFrame(() => {
      requestAnimationFrame(measureElasticPanel);
    });

    const timeoutId = setTimeout(measureElasticPanel, ELASTIC_TRANSITION_MS);

    // Função de limpeza para evitar vazamento de memória cancelando o frame e o temporizador se o efeito rodar novamente.
    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timeoutId);
    };
  }, [boxes, courseImgKey, isMobileLayout, measureElasticPanel]);

  useEffect(() => {
    const boxImg = boxImgRef.current;
    if (!boxImg || !isMobileLayout) return;

    let rafId = 0;

    // Cria um observador de redimensionamento para recalcular a altura sempre que a div mudar de tamanho.
    const observer = new ResizeObserver(() => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(measureElasticPanel);
    });

    observer.observe(boxImg);

    // Limpeza ao desmontar o efeito.
    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, [isMobileLayout, measureElasticPanel, courseImgKey]);

  // Função chamada no desktop quando o cursor do mouse entra em cima de uma caixa.
  const handleMouseEnter = (boxId) => {

    if (isMobileLayout) return;

    setBoxes(boxes.map(box =>
      box.id === boxId
        ? { ...box, isExpanded: true }
        : { ...box, isExpanded: false }
    ));
  };

  // Função chamada no desktop quando o cursor do mouse sai de cima de uma caixa.
  const handleMouseLeave = (boxId) => {

    if (isMobileLayout) return;
    // Percorre as caixas e define isExpanded: false apenas para a caixa de onde o mouse saiu.
    setBoxes(boxes.map(box =>
      box.id === boxId
        ? { ...box, isExpanded: false }
        : box
    ));
  };

  // Função chamada ao clicar (ou tocar) em uma caixa.
  const handleClick = (boxId, event) => {

    if (event.target.closest(".content-box")) {
      return;
    }

    // Comportamento no mobile:
    if (isMobileLayout) {

      setBoxes(boxes.map(box =>
        box.id === boxId
          ? { ...box, isExpanded: true }
          : { ...box, isExpanded: false }
      ));
      return;
    }

    // Comportamento no desktop:
    setBoxes(boxes.map(box =>
      box.id === boxId
        ? { ...box, isExpanded: !box.isExpanded } // Inverte o estado
        : { ...box, isExpanded: false }
    ));
  };

  // Impede que eventos de clique em elementos de texto ou links propaguem para a div pai (evitando acionar o accordion).
  const stopBoxToggle = (event) => {
    event.stopPropagation();
  };

  // Renderiza a parte do HTML contendo o título, descrição e link de matrícula de cada caixa individual.
  // Essa div recebe a classe '.content-box' que fica visível ou invisível dependendo da classe '.flex2' ou '.flex1'.
  const renderBoxContentFor = (boxData) => (
    <div className="content-box" onClick={stopBoxToggle}>
      <h3>{boxData.titulo}</h3>
      <p>{boxData.texto}</p>
      <Link to="/cadastro" className="btn-cur-box" onClick={stopBoxToggle}>
        Matricule-se
      </Link>
    </div>
  );

  // Retorna um objeto com os manipuladores de evento de mouse e clique associados a cada caixa.
  const getBoxInteractionProps = (boxId) => ({
    onMouseEnter: () => handleMouseEnter(boxId),
    onMouseLeave: () => handleMouseLeave(boxId),
    onClick: (e) => handleClick(boxId, e)
  });


  const renderCursoBoxes = (cursoKey, wrapperClass) => {
    const isActiveCourse = courseImgKey === cursoKey;

    // Se for mobile, define a altura no estilo inline usando a medição em pixels para animar.
    const panelStyle =
      isMobileLayout && isActiveCourse && elasticPanelHeight != null
        ? { height: `${elasticPanelHeight}px` }
        : undefined;

    return (

      <div className={`${wrapperClass} curso-elastic-panel`} style={panelStyle}>
        <div className="box-img" ref={isActiveCourse ? boxImgRef : null}>
          {CURSOS_BOXES[cursoKey].map((boxData, index) => (
            <div
              key={`${cursoKey}-box-${boxData.id}`}
              // Se a caixa estiver expandida, recebe a classe '.flex2' (ganha flex grow no CSS e expande).
              // Se não estiver expandida, recebe a classe '.flex1' (permanece recolhida).
              className={`box box${boxData.id} ${boxes[index].isExpanded ? "flex2" : "flex1"}`}
              style={boxData.imagem ? {
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 40%, rgba(0, 0, 0, 0.85) 100%), url(${boxData.imagem})`,
                backgroundSize: "cover",
                backgroundPosition: "center 10%"


              } : undefined}
              // Passa os manipuladores de evento criados acima.
              {...getBoxInteractionProps(boxData.id)}
            >

              <span className="box-label">{boxData.label}</span>
              {renderBoxContentFor(boxData)}
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Retorno do JSX principal que renderiza toda a estrutura da página Home.
  return (
    // Div contêiner principal da página. Se estiver em modo mobile, ganha também a classe 'home-container--mobile'.
    <div className={`home-container ${isMobileLayout ? "home-container--mobile" : ""}`}>
      {/* Seção do banner no topo */}
      <div
        className="home-banner"
        style={{ backgroundImage: `url(${urbanMapBanner})` }}
      >
        <div className="banner-overlay"></div>
        <div className="banner-content">
          <h1>Aprenda um novo idoma e mude o seu futuro.</h1>
        </div>
      </div>

      {/* Seção com abas/botões para selecionar o curso ativo */}
      <div className="cursos">
        <h3>CONHEÇA OS NOSSOS CURSOS</h3>
        <div className="btns-cursos">
          {/* Botão de Inglês: ganha a classe '.active' se o curso ativo for 'ingles' */}
          <div
            className={`bt ing ${courseImgKey === "ingles" ? "active" : ""}`}
            onClick={() => handleCourse("ingles")}
          >
            Inglês
          </div>
          {/* Botão de Espanhol: ganha a classe '.active' se o curso ativo for 'espanhol' */}
          <div
            className={`bt esp ${courseImgKey === "espanhol" ? "active" : ""}`}
            onClick={() => handleCourse("espanhol")}
          >
            Espanhol
          </div>
          {/* Botão de Mandarim: ganha a classe '.active' se o curso ativo for 'mandarim' */}
          <div
            className={`bt man ${courseImgKey === "mandarim" ? "active" : ""}`}
            onClick={() => handleCourse("mandarim")}
          >
            Mandarim
          </div>
        </div>
      </div>

      {/* Seção das caixas de imagens interativas correspondentes ao curso escolhido */}
      <section>
        <div className="cursos-img">
          {/* Renderiza apenas o bloco do curso correspondente ao valor de courseImgKey */}
          {courseImgKey === "ingles" && renderCursoBoxes("ingles", "ingles")}
          {courseImgKey === "espanhol" && renderCursoBoxes("espanhol", "espanhol")}
          {courseImgKey === "mandarim" && renderCursoBoxes("mandarim", "mandarim")}
        </div>
      </section>

      {/* Seção Secundária (sect2) contendo o carrossel de fotos depoimentos/destaques */}
      <section className="sect2-container">
        <div className="sect2">
          <div className="sect2-title">
            <h2>As Melhores opções para alcançar os seus objetivos</h2>
          </div>
          {/* Container do carrossel */}
          <div className="carroussel-container">
            {/* Componente importado do carrossel com autoplay */}
            <CarrosselAutoplay />
          </div>

          <Link to="/cadastro" className="bt-slide">Matricule-se já</Link>
        </div>
      </section>
    </div>
  );
};


export default Home;