import { useContext } from "react";

import { DataContext } from "../context/DataContext";

import "./NivelForm.css";



const NivelForm = () => {

  const { dataState, setDataState, handleInputChange } = useContext(DataContext);

  return (
    <div className="nivel-form-card">
      <aside className="nivel-form-brand" aria-hidden="true">

        <h2>Nivelamento</h2>
        <p>Escolha o curso e as opções de acordo com o seu perfil.</p>

      </aside>

      <section className="nivel-form-content">

        <h2 className="nivel-form-title">Nivelamento</h2>

        <p className="nivel-form-subtitle">
          Nesta etapa, selecione o curso e escolha as opções de acordo com o mesmo.
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

          <div className="opt-sect">

            <h3>Qual o seu nível de conhecimento neste idioma?</h3>

            <div className="opt-change-sect">
              <div className="opt-box">
                <input
                  type="radio"
                  id="iniciante"
                  name="nivel"
                  value="Iniciante/Básico"

                  checked={dataState.nivel === "Iniciante/Básico"}
                  onChange={handleInputChange}
                />

                <label htmlFor="iniciante">Iniciante / Básico</label>

              </div>

              <div className="opt-box">
                <input
                  type="radio"
                  id="intermed"
                  name="nivel"
                  value="Intermediário"

                  checked={dataState.nivel === "Intermediário"}
                  onChange={handleInputChange}
                />

                <label htmlFor="intermed">Intermediário</label>

              </div>


              <div className="opt-box">
                <input
                  type="radio"
                  id="avan"
                  name="nivel"
                  value="Avançado"

                  checked={dataState.nivel === "Avançado"}
                  onChange={handleInputChange}

                />

                <label htmlFor="avan">Avançado / Estou buscando aperfeiçoamento</label>

              </div>
            </div>
          </div>

          <div className="opt-sect">

            <h3>Qual o seu objetivo?</h3>

            <div className="opt-change-sect">
              <div className="opt-box">
                <input
                  type="checkbox"
                  id="edu"
                  name="objetivo"
                  value="Educacional"

                  checked={dataState.objetivo.includes("Educacional")}
                  onChange={handleInputChange}
                />

                <label htmlFor="edu">Educacional</label>

              </div>

              <div className="opt-box">
                <input
                  type="checkbox"
                  id="conv"
                  name="objetivo"
                  value="Conversação"

                  checked={dataState.objetivo.includes("Conversação")}
                  onChange={handleInputChange}
                />

                <label htmlFor="conv">Conversação</label>

              </div>

              <div className="opt-box">
                <input
                  type="checkbox"
                  id="pro"
                  name="objetivo"
                  value="Profissional"

                  checked={dataState.objetivo.includes("Profissional")}
                  onChange={handleInputChange}
                />

                <label htmlFor="pro">Profissional</label>

              </div>


            </div>
          </div>
        </div>
      </section>
    </div>

  )

}



export default NivelForm

