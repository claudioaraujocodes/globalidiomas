import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import "./UserDataForm.css";

const UserDataForm = () => {

  const { dataState, handleInputChange } = useContext(DataContext)

  return (
    <div className="userdataform-card">
      <aside className="userdataform-brand" aria-hidden="true">
        <h2>Complete seu cadastro</h2>
        <p>Informe seus dados para finalizarmos a matrícula no curso de idiomas.</p>
      </aside>

      <section className="userdataform-content">
        <h2 className="userdataform-title">Dados Pessoais</h2>

        <div className="input-area">
          <label htmlFor="userdata-nome">
            Nome
            <input
              id="userdata-nome"
              type="text"
              name="nome"
              placeholder="Seu nome completo"
              value={dataState.nome || ""}
              onChange={handleInputChange}
              required
              minLength={2}
              autoComplete="name"
            />
          </label>
        </div>

        <div className="input-area">
          <label htmlFor="userdata-email">
            Email
            <input
              id="userdata-email"
              type="email"
              name="email"
              placeholder="seu@email.com"
              value={dataState.email || ""}
              onChange={handleInputChange}
              required
              autoComplete="email"
            />
          </label>
        </div>

        <div className="input-area">
          <label htmlFor="userdata-tel">
            Telefone
            <input
              id="userdata-tel"
              type="tel"
              name="tel"
              placeholder="(00) 00000-0000"
              value={dataState.tel || ""}
              onChange={handleInputChange}
              autoComplete="tel"
            />
          </label>
        </div>

        <div className="input-area">
          <label htmlFor="comentario">
            Comentário:
            <textarea
              id="comentario"
              name="comentario"
              placeholder="Observações ou dúvidas (opcional)"
              value={dataState.comentario || ""}
              onChange={handleInputChange}
              rows="4"
            ></textarea>
          </label>
        </div>
      </section>
    </div>
  )
}

export default UserDataForm
