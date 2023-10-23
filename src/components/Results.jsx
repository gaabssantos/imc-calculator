// CSS
import "./Results.css";

// Components
import TableIMC from "./TableIMC";

// Others
import { data } from "../data/data.js";

const Results = ({ imc, info, infoClass, handleBack }) => {

  return (
    <div>
      <div className="results-container">
        <h1>
          Seu IMC:{" "}
          <span className={infoClass} id="imc-number">
            {imc}
          </span>
        </h1>
        <p>
          Situação atual:{" "}
          <span className={infoClass} id="situation">
            {info}
          </span>
        </p>
        <p>
          <strong>Confira as classificações</strong>
        </p>
        <TableIMC data={data} />
        <button id="btn-back" onClick={handleBack}>
          Voltar
        </button>
      </div>
    </div>
  );
};

export default Results;
