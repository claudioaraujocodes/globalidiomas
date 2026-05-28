import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import "./NivelForm.css";

const NivelFormStep1 = () => {
  const { dataState, handleInputChange } = useContext(DataContext);

  return (
    <div className="nivel-form-card">
      <aside className="nivel-form-brand" aria-hidden="true">
        <h2>Nivelamento</h2>
        <p>Escolha o curso e as opções de acordo com o seu perfil.</p>
      </aside>

      <section className="nivel-form-content">
        <h2 className="nivel-form-title">Nivelamento</h2>

        <p className="nivel-form-subtitle">
          Nesta etapa, selecione o curso e escolha as opções de acordo com o
          mesmo.
        </p>

        <div className="input-area">
          <div className="opt-sect">
            <h3>Curso:</h3>
            <div className="opt-change-sect">
              <div className="opt-box">
                <input
                  type="radio"
                  id="ingles"
                  name="curso"
                  value="Inglês"
                  checked={dataState.curso === "Inglês"}
                  onChange={handleInputChange}
                />
                <label htmlFor="ingles">Inglês</label>
              </div>

              <div className="opt-box">
                <input
                  type="radio"
                  id="espanhol"
                  name="curso"
                  value="Espanhol"
                  checked={dataState.curso === "Espanhol"}
                  onChange={handleInputChange}
                />
                <label htmlFor="espanhol">Espanhol</label>
              </div>

              <div className="opt-box">
                <input
                  type="radio"
                  id="mandarim"
                  name="curso"
                  value="Mandarim"
                  checked={dataState.curso === "Mandarim"}
                  onChange={handleInputChange}
                />
                <label htmlFor="mandarim">Mandarim</label>
              </div>
            </div>
          </div>

          <div className="opt-sect">
            <h3>Já teve algum contato com o curso escolhido?</h3>
            <div className="opt-change-sect">
              <div className="opt-box">
                <input
                  type="radio"
                  id="sim"
                  name="conhece"
                  value="Sim"
                  checked={dataState.conhece === "Sim"}
                  onChange={handleInputChange}
                />
                <label htmlFor="sim">Sim</label>
              </div>

              <div className="opt-box">
                <input
                  type="radio"
                  id="nao"
                  name="conhece"
                  value="Não"
                  checked={dataState.conhece === "Não"}
                  onChange={handleInputChange}
                />
                <label htmlFor="nao">Não</label>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NivelFormStep1;

