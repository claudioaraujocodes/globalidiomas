import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import "./OutputForm.css";

const OutputForm = () => {

  const { dataState } = useContext(DataContext);

  return (
    <div className="outputform-card">
      <aside className="outputform-brand" aria-hidden="true">

        <h2>Parabéns!</h2>
        <p>Sua matrícula foi registrada com sucesso.</p>

      </aside>

      <section className="outputform-content">
        <h2 className="outputform-title">Bem-vindo ao curso!</h2>
        <p className="outputform-message">
          Bem vindo ao curso, <strong>{dataState.nome}</strong>!
        </p>

        <p className="outputform-message">
          Em instantes entraremos em contato através do e-mail{" "}
          <strong>{dataState.email}</strong>.
        </p>

      </section>

    </div>

  )

}



export default OutputForm

