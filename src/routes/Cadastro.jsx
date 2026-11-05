import { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom"; // Import do hook de navegação
import IntroMatric from "../components/IntroMatric";
import NivelFormStep1 from "../components/NivelFormStep1";
import NivelFormStep2 from "../components/NivelFormStep2";
import UserDataForm from "../components/UserDataForm";
import OutputForm from "../components/OutputForm";
import { DataContext } from "../context/DataContext";

import "./Cadastro.css";

// Importa as imagens para o banner responsivo de cada passo
import bannerNivel2 from "../img/banner_nivel2.png";

// Índice da etapa "Dados Pessoais" depois de dividir o Nivelamento em 2 telas
const USER_DATA_STEP_INDEX = 3;

const Cadastro = () => {
  const navigate = useNavigate(); // Instância do navegador

  const formSteps = [
    <IntroMatric />,
    <NivelFormStep1 />,
    <NivelFormStep2 />,
    <UserDataForm />,
    <OutputForm />,
  ];
  const formRef = useRef(null);
  const { dataState } = useContext(DataContext);

  const useFormSteps = (formSteps) => {
    const [currentStep, setCurrentStep] = useState(0);

    function changeStep(step, e) {
      if (e) e.preventDefault();

      if (step < 0 || step >= formSteps.length) return;
      setCurrentStep(step);
    }

    return {
      currentStep,
      currentComponent: formSteps[currentStep],
      changeStep,
      isLastStep: currentStep + 1 === formSteps.length,
      isFirstStep: currentStep === 0,
    };
  };

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } = useFormSteps(formSteps);

  const validateUserDataStep = () => {
    const form = formRef.current;
    if (!form) return false;

    const nomeInput = form.querySelector("#userdata-nome");
    const emailInput = form.querySelector("#userdata-email");

    const nome = dataState.nome?.trim() ?? "";
    const email = dataState.email?.trim() ?? "";

    if (nomeInput) {
      nomeInput.setCustomValidity(
        nome.length < 2 ? "Informe seu nome (mínimo 2 caracteres)." : ""
      );
    }

    if (emailInput) {
      emailInput.setCustomValidity(
        email.length === 0 ? "Informe seu e-mail." : ""
      );
    }

    if (!form.checkValidity()) {
      form.reportValidity();
      return false;
    }

    return true;
  };

  const handleNext = (e) => {
    e.preventDefault();

    if (currentStep === USER_DATA_STEP_INDEX && !validateUserDataStep()) {
      return;
    }

    changeStep(currentStep + 1, e);
  };

  return (
    <div className="cadastro-page-container">
      <div 
        className="cadastro-banner" 
        style={{ backgroundImage: `url(${bannerNivel2})` }}
      >
        <div className="banner-overlay"></div>
        <div className="banner-content">
          <h1>Matricule-se agora mesmo</h1>
        </div>
      </div>

      <div className="cad-container">
        <form ref={formRef}>
          <div className="formstep-container">
            {currentComponent}
          </div>
        </form>

        <div className="actions">
          {isLastStep ? (
            <button type="button" onClick={() => navigate("/")}>
              Home
            </button>
          ) : (
            <>
              {!isFirstStep && (
                <button type="button" onClick={() => changeStep(currentStep - 1)}>
                  Voltar
                </button>
              )}
              <button type="button" onClick={handleNext}>
                Próximo
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
