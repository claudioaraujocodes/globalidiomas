// Importa o componente do carrossel que passa imagens automaticamente
import CarrosselAutoplay from "../components/CarrosselAutoplay";

// Importa os hooks essenciais do React:
// - useState: para criar variáveis de estado que atualizam a tela quando mudam.
// - useEffect: para executar ações secundárias (como ouvir o tamanho da tela).
// - useRef: para criar referências diretas a elementos do HTML.
// - useCallback: para guardar uma função na memória e evitar que ela seja recriada à toa.
import { useState, useEffect, useRef, useCallback } from "react";

// Importa o componente Link do react-router-dom para navegação entre rotas sem recarregar a página.
import { Link } from "react-router-dom";

// Importa as fotos de estúdio com fundo degradê azul para os boxes elásticos
import elasticIng1 from "../img/elastic_ing1.png";
import elasticIng2 from "../img/elastic_ing2.png";
import elasticIng3 from "../img/elastic_ing3.png";
import elasticEsp1 from "../img/elastic_esp1.png";
import elasticEsp2 from "../img/elastic_esp2.png";
import elasticEsp3 from "../img/elastic_esp3.png";
import elasticMan1 from "../img/elastic_man1.png";
import elasticMan2 from "../img/elastic_man2.png";
import elasticMan3 from "../img/elastic_man3.png";

// Importa o arquivo de estilos CSS contendo a parte visual específica desta página Home.
import "./Home.css";

// Importa a imagem do banner de idiomas
import urbanMapBanner from "../img/languages_banner.png";

// Objeto contendo os dados textuais e imagens dos boxes interativos divididos por idioma.
// Esses dados são lidos no JSX e geram as caixas (boxes) que o usuário vê.
const CURSOS_BOXES = {
  ingles: [
    { id: 1, label: "Inglês Corporativo", titulo: "Inglês Corporativo", texto: "Foque na comunicação profissional para reuniões e negociações.", imagem: elasticIng1 },
    { id: 2, label: "Intercâmbio", titulo: "Intercâmbio e Viagens", texto: "Prepare-se para explorar o mundo e estudar no exterior sem barreiras.", imagem: elasticIng2 },
    { id: 3, label: "Dia a Dia", titulo: "Inglês no Dia a Dia", texto: "Comunicação informal e natural para redes sociais, filmes e games.", imagem: elasticIng3 },
  ],
  espanhol: [
    { id: 1, label: "Negócios", titulo: "Espanhol para Negócios", texto: "Expanda suas conexões profissionais e comerciais com o mercado latino.", imagem: elasticEsp1 },
    { id: 2, label: "Conversação", titulo: "Espanhol Fluente", texto: "Conversação natural e pronúncia correta em qualquer situação social.", imagem: elasticEsp2 },
    { id: 3, label: "Acadêmico", titulo: "Espanhol Acadêmico", texto: "Suporte para exames de proficiência como DELE e estudos universitários.", imagem: elasticEsp3 },
  ],
  mandarim: [
    { id: 1, label: "Mandarim Prático", titulo: "Mandarim Prático", texto: "Introdução e frases do cotidiano para iniciantes de todas as idades.", imagem: elasticMan1 },
    { id: 2, label: "Mandarim de Negócios", titulo: "Mandarim de Negócios", texto: "Comunicação estratégica para importação, exportação e comércio global.", imagem: elasticMan2 },
    { id: 3, label: "Acadêmico", titulo: "Mandarim Acadêmico", texto: "Preparação para testes HSK e intercâmbios acadêmicos na Ásia.", imagem: elasticMan3 },
  ],
};

// Define a largura máxima de tela (900 pixels) para considerar o layout como "Mobile".
const MOBILE_LAYOUT_BREAKPOINT = 900;

// Tempo em milissegundos (900ms) que coincide com a duração da animação no CSS para recalcular a altura.
const ELASTIC_TRANSITION_MS = 900;

// Função auxiliar que cria o estado inicial dos 3 boxes.
// No mobile, a primeira caixa (id 1) já começa expandida (isExpanded: true), enquanto no desktop começam fechadas.
const createInitialBoxes = (expandFirst = false) => [
  { id: 1, isExpanded: expandFirst }, // Primeira caixa (id: 1) recebe o valor booleano recebido por parâmetro
  { id: 2, isExpanded: false },        // Segunda caixa (id: 2) começa sempre recolhida
  { id: 3, isExpanded: false }         // Terceira caixa (id: 3) começa sempre recolhida
];

// Declaração do componente funcional principal da página Home.
const Home = () => {
  // Estado para armazenar qual curso está selecionado no momento. Começa com "ingles".
  // Afeta o JSX exibindo apenas as caixas do curso ativo.
  const [courseImgKey, setCouseImgKey] = useState("ingles");

  // Estado booleano para identificar se a tela está em formato mobile (abaixo de 900px).
  // Inicializado lendo diretamente se a largura da janela é menor ou igual ao breakpoint de mobile.
  const [isMobileLayout, setIsMobileLayout] = useState(
    () => typeof window !== "undefined" && window.matchMedia(`(max-width: ${MOBILE_LAYOUT_BREAKPOINT}px)`).matches
  );

  // Efeito (useEffect) executado uma única vez ao montar o componente na tela.
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

    // Função de limpeza (cleanup) que remove o ouvinte se o componente for desmontado da tela.
    return () => mediaQuery.removeEventListener("change", handleLayoutChange);
  }, []); // Array de dependências vazio garante que o useEffect rode apenas na montagem.

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

  // Referência mutable para obter acesso direto ao elemento DOM da div '.box-img'.
  const boxImgRef = useRef(null);

  // Estado que guarda a altura calculada (em pixels) do painel elástico no modo mobile.
  const [elasticPanelHeight, setElasticPanelHeight] = useState(null);

  // Função memorizada que calcula a altura da div de imagens para animar a expansão suave no mobile.
  const measureElasticPanel = useCallback(() => {
    // Obtém o elemento HTML real da div '.box-img' correspondente.
    const boxImg = boxImgRef.current;

    // Se o elemento não existir ou não estiver em modo mobile, limpa o estado de altura e encerra a função.
    if (!boxImg || !isMobileLayout) {
      setElasticPanelHeight(null);
      return;
    }

    // Obtém o elemento pai (o painel elástico que encapsula as caixas).
    const panel = boxImg.parentElement;
    if (!panel) return;

    // Salva temporariamente a altura atual aplicada no elemento.
    const prevHeight = panel.style.height;

    // Define a altura temporariamente para auto para que o navegador calcule a altura real baseada no conteúdo atualizado.
    panel.style.height = "auto";

    // Obtém os estilos computados da div pai.
    const styles = getComputedStyle(panel);

    // Soma o padding superior e inferior definidos no CSS do painel.
    const paddingY = parseFloat(styles.paddingTop) + parseFloat(styles.paddingBottom);

    // A altura total necessária é a altura interna da div de caixas mais os paddings.
    const total = boxImg.offsetHeight + paddingY;

    // Restaura a altura antiga para que a transição de CSS ocorra suavemente a partir dela.
    panel.style.height = prevHeight;

    // Atualiza a altura do painel com o novo valor total calculado.
    setElasticPanelHeight(total);
  }, [isMobileLayout]); // Recria a função somente se a variável isMobileLayout mudar.

  // Efeito disparado sempre que as caixas mudam, o curso muda ou o layout muda.
  useEffect(() => {
    // Se for desktop, limpa o cálculo de altura e sai do hook.
    if (!isMobileLayout) {
      setElasticPanelHeight(null);
      return;
    }

    // Mede imediatamente a altura do painel elástico.
    measureElasticPanel();

    // Executa medições extras usando requestAnimationFrame para garantir precisão após o início da animação do React.
    const rafId = requestAnimationFrame(() => {
      requestAnimationFrame(measureElasticPanel);
    });

    // Cria um temporizador para executar uma medição final após o término da transição de 950ms.
    const timeoutId = setTimeout(measureElasticPanel, ELASTIC_TRANSITION_MS);

    // Função de limpeza para evitar vazamento de memória cancelando o frame e o temporizador se o efeito rodar novamente.
    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timeoutId);
    };
  }, [boxes, courseImgKey, isMobileLayout, measureElasticPanel]);

  // Efeito para recalcular a altura caso o tamanho interno da div '.box-img' mude (ResizeObserver).
  useEffect(() => {
    const boxImg = boxImgRef.current;
    if (!boxImg || !isMobileLayout) return;

    let rafId = 0;

    // Cria um observador de redimensionamento para recalcular a altura sempre que a div mudar de tamanho.
    const observer = new ResizeObserver(() => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(measureElasticPanel);
    });

    // Inicia a observação no elemento HTML.
    observer.observe(boxImg);

    // Limpeza ao desmontar o efeito.
    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, [isMobileLayout, measureElasticPanel, courseImgKey]);

  // Função chamada no desktop quando o cursor do mouse entra em cima de uma caixa.
  const handleMouseEnter = (boxId) => {
    // No mobile, ignora essa ação de hover.
    if (isMobileLayout) return;
    // Percorre as caixas e define isExpanded: true para a caixa sobre a qual o mouse está posicionando, e false para as demais.
    setBoxes(boxes.map(box =>
      box.id === boxId
        ? { ...box, isExpanded: true }
        : { ...box, isExpanded: false }
    ));
  };

  // Função chamada no desktop quando o cursor do mouse sai de cima de uma caixa.
  const handleMouseLeave = (boxId) => {
    // No mobile, ignora essa ação de hover.
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
    // Se o clique foi disparado dentro do painel de conteúdo (.content-box), ignora para evitar que a caixa se feche.
    if (event.target.closest(".content-box")) {
      return;
    }

    // Comportamento no mobile:
    if (isMobileLayout) {
      // Abre a caixa clicada e fecha as outras. Não permite fechar a ativa clicando nela novamente.
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
        : { ...box, isExpanded: false } // Garante que as outras se retraiam
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
      <h3>{boxData.titulo}</h3> {/* Renderiza o título definido no objeto CURSOS_BOXES */}
      <p>{boxData.texto}</p>    {/* Renderiza o texto descritivo do objeto CURSOS_BOXES */}
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

  // Renderiza a estrutura completa das 3 caixas de um determinado idioma.
  const renderCursoBoxes = (cursoKey, wrapperClass) => {
    const isActiveCourse = courseImgKey === cursoKey;

    // Se for mobile, define a altura no estilo inline usando a medição em pixels para animar.
    const panelStyle =
      isMobileLayout && isActiveCourse && elasticPanelHeight != null
        ? { height: `${elasticPanelHeight}px` }
        : undefined;

    return (
      // A div pai recebe a classe correspondente ao idioma e a classe genérica '.curso-elastic-panel' que possui a transição de altura.
      <div className={`${wrapperClass} curso-elastic-panel`} style={panelStyle}>
        {/* Atribui a referência boxImgRef alinhando com a div de caixas se for o curso selecionado para podermos medir sua altura DOM. */}
        <div className="box-img" ref={isActiveCourse ? boxImgRef : null}>
          {/* Mapeia o array correspondente de CURSOS_BOXES e renderiza cada uma das 3 caixas. */}
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
              {/* Exibe o rótulo/label da caixa (como 'img1', 'img 2', etc.) */}
              <span className="box-label">{boxData.label}</span>
              {/* Insere o conteúdo com título, descrição e link chamando a função renderizadora. */}
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
          {/* Botão extra para redirecionamento */}
          <Link to="/cadastro" className="bt-slide">Matricule-se já</Link>
        </div>
      </section>
    </div>
  );
};

// Exporta o componente Home para ser importado e renderizado nas rotas principais do app.
export default Home;