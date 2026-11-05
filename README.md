# Global Idiomas - Website Institucional & Matrícula Online

> Website institucional moderno desenvolvido com **React 19** e **Vite** para a rede de cursos **Global Idiomas**, presente em três capitais brasileiras (**Salvador**, **São Paulo** e **Rio de Janeiro**). Desenvolvido para apresentar a grade de cursos (**Inglês**, **Espanhol** e **Mandarim**), a rede de unidades físicas e oferecer um funil interativo de nivelamento e matrícula online em múltiplas etapas (*Multi-Step Wizard*), aliando navegação fluida via **React Router v7** e gerenciamento de estado unificado com **Context API**.

---

## 🎯 Engenharia & Decisões Arquiteturais

Este projeto foi desenvolvido aplicando padrões sólidos de desenvolvimento front-end com foco em manutenibilidade, usabilidade e performance:

- **React 19 & Vite 7 (High-Performance SPA):**
  - Aplicação construída sobre o ecossistema React 19 com empacotamento ultrarrápido impulsionado pelo **Vite**.
  - Arquitetura baseada em componentes funcionais desacoplados, promovendo alta reutilização e separação clara de responsabilidades.
- **Roteamento Declarativo com React Router v7:**
  - Configuração moderna utilizando `createBrowserRouter` e `RouterProvider`.
  - Padrão de layout compartilhado via `<Outlet />` no componente principal (`App.jsx`), mantendo persistentes a `Navbar` e o `Footer` enquanto as rotas (`/`, `/cadastro`, `/contato`) são alternadas instantaneamente no client-side sem recarregamento de página.
- **Gerenciamento de Estado Centralizado (Context API):**
  - Implementação de `DataContextProvider` para centralizar todo o estado das respostas de nivelamento e dos dados cadastrais do aluno (`dataState`).
  - Função genérica `handleInputChange` capaz de lidar de forma reativa com diferentes tipos de entradas: campos de texto, rádio e arrays dinâmicos para seleção múltipla de checkboxes (`objetivo`).
  - Eliminação completa de *prop drilling* entre as diferentes telas do fluxo de matrícula.
- **Microinterações & Painéis Elásticos (Interactive Accordion):**
  - Sistema de caixas expansíveis (*elastic boxes*) na vitrine de cursos que expandem dinamicamente via Flexbox (`flex-grow`), ativadas por hover no desktop e clique/toque no mobile.
  - Sincronização avançada de layout com `window.matchMedia`, `ResizeObserver` e ciclos de animação via `requestAnimationFrame` para calcular e transicionar a altura do contêiner com precisão em dispositivos móveis, eliminando quebras ou *layout shifts*.
- **Funil de Conversão Assistido (Multi-Step Form Wizard):**
  - Segmentação do formulário de matrícula em 5 passos lógicos, reduzindo a sobrecarga cognitiva e aumentando o engajamento do usuário.
  - Sistema de navegação sequencial com validação nativa e asserções customizadas (`setCustomValidity` e `reportValidity`), garantindo integridade dos dados antes do avanço para a etapa final.
- **Carrossel Interativo com Swiper.js:**
  - Integração do Swiper v12 com módulos de *Autoplay*, paginação por pontos (*bullets*) e navegação assistida.
  - Configuração responsiva por meio de breakpoints dinâmicos (1 slide no mobile, 2 no tablet e 3 no desktop).
- **Design Responsivo & Mobile Experience:**
  - Menu de navegação lateral com animação *slide-out*, fechamento intuitivo via backdrop blur/overlay e controle de estados por toque.
  - Tipografia harmonizada via fontes do Google Fonts (*Staatliches* para títulos de impacto e *Roboto Condensed* para alta legibilidade).
- **Otimização de SEO, Metadados & Identidade Visual:**
  - Estruturação semântica do documento base com `lang="pt-BR"` e título otimizado para rankeamento em motores de busca (Google, Bing).
  - Metadados completos com descrição detalhada (`meta description`), palavras-chave de cauda longa (`meta keywords`), diretivas para robôs (`robots: index, follow`) e indicação de autoria.
  - Integração dos protocolos **Open Graph** (`og:title`, `og:description`, `og:site_name`, `og:locale`) e **Twitter Cards** para visualizações ricas (*rich snippets*) no compartilhamento em redes sociais e mensageiros (WhatsApp, LinkedIn, Telegram).
  - Favicon vetorial customizado (`favicon.svg`) representando um globo minimalista de alto contraste, alinhado à paleta da marca e compatível com temas claro e escuro, além de meta tag `theme-color` (`#07437c`) para navegadores móveis.

---

## 🚀 Funcionalidades da Aplicação

- **🎓 Catálogo Especializado de Idiomas:**
  - Navegação dinâmica entre os idiomas oferecidos: **Inglês**, **Espanhol** e **Mandarim**.
  - Trilhas específicas para cada perfil de aluno:
    - **Inglês:** Corporativo (foco em reuniões e negócios), Intercâmbio e Viagens, e Dia a Dia (comunicação informal, filmes e games).
    - **Espanhol:** Negócios e comércio latino, Fluência/Conversação social, e Preparação Acadêmica (exame DELE).
    - **Mandarim:** Mandarim Prático para o cotidiano, Negócios/Comércio Global, e Preparatório Acadêmico (exames HSK).
  - Cards interativos com *call-to-action* direto para a rota de inscrição.
- **📝 Funil Interativo de Matrícula & Nivelamento:**
  - Fluxo estruturado em 5 etapas progressivas:
    1. **Apresentação:** Boas-vindas e introdução ao processo.
    2. **Etapa de Idioma:** Escolha do curso e diagnóstico de contato prévio com a língua.
    3. **Diagnóstico de Nível & Objetivos:** Avaliação da proficiência atual (Iniciante, Intermediário, Avançado) e seleção de metas (Educacional, Conversação, Profissional).
    4. **Dados Cadastrais:** Coleta segura do nome, e-mail, telefone e observações com validação em tempo real.
    5. **Confirmação Personalizada:** Tela de conclusão que recupera dinamicamente os dados do estudante via contexto e confirma o registro.
- **📍 Rede de Unidades em 3 Capitais do Brasil:**
  - Página institucional de unidades com cartões visuais (*postcards*) das capitais atendidas:
    - **Salvador (BA):** Unidades *Comércio*, *Iguatemi* e *Cabula*.
    - **São Paulo (SP):** Unidades *Brás*, *Pinheiros* e *Jardins* (Av. Paulista).
    - **Rio de Janeiro (RJ):** Unidades *Copacabana*, *Barra da Tijuca* e *Ipanema*.
  - Endereços completos, telefones de atendimento e canais diretos de e-mail por unidade.
- **🧭 Experiência de Navegação Completa:**
  - Header fixo com menu hambúrguer interativo para telas compactas.
  - Rodapé corporativo com links rápidos para cursos, matrículas, unidades e créditos de desenvolvimento.

---

## 🛠️ Stack Tecnológica

| Camada | Tecnologias Utilizadas |
| :--- | :--- |
| **Framework & Core** | React 19, React DOM 19 |
| **Build Tool & Bundler** | Vite 7 |
| **Roteamento SPA** | React Router DOM v7 (`createBrowserRouter`, `RouterProvider`, `Outlet`) |
| **Gerenciamento de Estado** | React Context API (`createContext`, `useContext`, Provider Pattern) |
| **Componentes & Carrossel** | Swiper 12 (Modules: Autoplay, Navigation, Pagination) |
| **Estilização & Design** | CSS3 Moderno (Flexbox, CSS Grid, Transitions, Keyframes, Media Queries) |
| **SEO & Metadados** | Meta Tags HTML5, Open Graph Protocol, Twitter Cards, SVG Favicon dinâmico |
| **Tipografia & Fontes** | Google Fonts (*Staatliches*, *Roboto Condensed*) |
| **Qualidade de Código** | ESLint 9 |

---

## 📂 Estrutura do Projeto

```text
├── public/                     # Assets estáticos e favicon vetorial em globo (favicon.svg)
├── src/
│   ├── components/             # Componentes modulares e reutilizáveis da interface
│   │   ├── CarrosselAutoplay.jsx / .css  # Slider responsivo com autoplay via Swiper.js
│   │   ├── Footer.jsx / .css             # Rodapé com links e dados institucionais
│   │   ├── IntroMatric.jsx / .css        # Tela inicial de abertura da matrícula
│   │   ├── Navbar.jsx / .css             # Cabeçalho com menu mobile drawer e overlay
│   │   ├── NivelFormStep1.jsx            # Etapa 1: Seleção de idioma e contato prévio
│   │   ├── NivelFormStep2.jsx            # Etapa 2: Nível de proficiência e objetivos
│   │   ├── NivelForm.css                 # Folha de estilos dos passos de nivelamento
│   │   ├── OutputForm.jsx / .css         # Tela de confirmação e boas-vindas ao aluno
│   │   └── UserDataForm.jsx / .css       # Formulário com validação de dados pessoais
│   ├── context/                # Estado global da aplicação
│   │   ├── DataContext.jsx               # Instância do contexto global
│   │   └── DataContextProvider.jsx       # Provedor e manipuladores de estado reativos
│   ├── img/                    # Acervo de imagens (banners, postais e cursos)
│   ├── routes/                 # Telas e páginas roteadas
│   │   ├── Cadastro.jsx / .css           # Fluxo assistido (Wizard) de matrícula
│   │   ├── Contato.jsx / .css            # Guia de unidades nas 3 capitais (BA, SP, RJ)
│   │   └── Home.jsx / .css               # Landing page principal com painéis elásticos
│   ├── App.jsx / .css          # Layout base (Navbar + Outlet + Footer)
│   ├── index.css               # Estilos globais e reset de CSS
│   └── main.jsx                # Ponto de entrada e configuração do React Router v7
├── index.html                  # Template HTML5 com pré-carregamento de fontes
├── package.json                # Gerenciador de dependências e scripts do projeto
├── vite.config.js              # Configuração do compilador Vite
└── README.md                   # Documentação do projeto
```

---

## ⚡ Como Executar Localmente

### Pré-requisitos
- **Node.js** (versão 18+ ou superior recomendada)
- Gerenciador de pacotes **npm** (ou yarn / pnpm)

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/global-idiomas.git
   cd global-idiomas
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Acesse no navegador:**
   Abra [http://localhost:5173](http://localhost:5173) para visualizar a aplicação em execução.

5. **(Opcional) Build para produção:**
   ```bash
   npm run build
   ```
   *Para testar a versão compilada, execute `npm run preview`.*

---

## 📄 Licença

Este projeto foi desenvolvido para fins de demonstração técnica e portfólio.

Desenvolvido por **Cláudio Araujo**.
