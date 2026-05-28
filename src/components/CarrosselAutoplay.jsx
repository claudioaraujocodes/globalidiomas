import { Swiper, SwiperSlide } from "swiper/react";

// Estilos do Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import "./CarrosselAutoplay.css";

// Importa as fotos/imagens locais que estão na pasta src/img
import img1 from "../img/img1.png";
import img2 from "../img/img2.png";
import img3 from "../img/img3.png";
import img4 from "../img/img4.png";
import img5 from "../img/img5.png";
import img6 from "../img/img6.png";
import img7 from "../img/img7.png";
import img8 from "../img/img8.png";
import img9 from "../img/img9.png";

// Módulos de navegação, paginação e autoplay do Swiper
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// AQUI VOCÊ EDITA OS TEXTOS E AS FOTOS DE CADA UM DOS 9 QUADROS:
const quadrosCarrossel = [
    {
        id: 1,
        titulo: "Inglês Geral",
        texto: "Aprenda a falar inglês fluentemente.",
        imagem: img1,
        icone: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
        )
    },
    {
        id: 2,
        titulo: "Espanhol Prático",
        texto: "Abra portas no mercado de trabalho.",
        imagem: img2,
        icone: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
        )
    },
    {
        id: 3,
        titulo: "Mandarim Avançado",
        texto: "Domine a língua dos negócios mundiais.",
        imagem: img3,
        icone: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
        )
    },
    {
        id: 4,
        titulo: "Preparatório",
        texto: "Exames de proficiência e certificações.",
        imagem: img4,
        icone: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
            </svg>
        )
    },
    {
        id: 5,
        titulo: "Conversação",
        texto: "Pratique conversação com nativos.",
        imagem: img5,
        icone: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 8a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v4a4 4 0 0 0 4 4h2l3 3v-3h7a4 4 0 0 0 4-4V8z" />
                <path d="M23 8a4 4 0 0 0-4-4h-2v4a6 6 0 0 1-6 6H9v2a4 4 0 0 0 4 4h7l3 3v-3h0a4 4 0 0 0 4-4V8z" />
            </svg>
        )
    },
    {
        id: 6,
        titulo: "Kids & Teens",
        texto: "Cursos dinâmicos para jovens de todas as idades.",
        imagem: img6,
        icone: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
            </svg>
        )
    },
    {
        id: 7,
        titulo: "Intercâmbios",
        texto: "Prepare-se para viver no exterior.",
        imagem: img7,
        icone: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
            </svg>
        )
    },
    {
        id: 8,
        titulo: "Corporativo",
        texto: "Treinamentos para equipes de empresas.",
        imagem: img8,
        icone: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
        )
    },
    {
        id: 9,
        titulo: "Gramática",
        texto: "Melhore sua escrita e estrutura.",
        imagem: img9,
        icone: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
            </svg>
        )
    },
];

// Componente para renderizar cada quadro individualmente
const InterSlideBox = ({ titulo, texto, imagem, icone }) => (
    <div
        className="inter-slide-box"
        style={imagem ? { backgroundImage: `url(${imagem})`, backgroundSize: "cover", backgroundPosition: "center" } : undefined}
    >
        {/* Camada escura por cima da foto para garantir a leitura do texto */}
        <div className="inter-slide-overlay">
            <div className="icon-upper-box">
                {icone}
            </div>
            <h3>{titulo}</h3>
            {texto && <p>{texto}</p>}
        </div>
    </div>
);

// Configuração responsiva do Swiper usando breakpoints nativos
const swiperConfig = {
    modules: [Navigation, Pagination, Autoplay],
    spaceBetween: 0,


    slidesPerView: 1, // Exibe 1 quadro por padrão em telas pequenas
    navigation: true,
    pagination: { clickable: true },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        // A partir de 600px de largura de tela, exibe 2 quadros lado a lado
        600: {
            slidesPerView: 2,
            spaceBetween: 10,

        },
        // A partir de 1024px de largura de tela (desktop), exibe 3 quadros lado a lado
        1024: {
            slidesPerView: 3,
            spaceBetween: 10,
        }
    }
};

const SwiperAutoplay = () => {
    return (
        <div className="autoplay-container">
            <Swiper {...swiperConfig}>
                {quadrosCarrossel.map((quadro) => (
                    <SwiperSlide key={`slide-${quadro.id}`}>
                        <div className="photo">
                            <InterSlideBox
                                titulo={quadro.titulo}
                                texto={quadro.texto}
                                imagem={quadro.imagem}
                                icone={quadro.icone}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SwiperAutoplay;
