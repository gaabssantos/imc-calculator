// CSS
import { useState } from "react";
import "./Calculator.css";

const Calculator = ({calcImc}) => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const clearForm = (e) => {
    e.preventDefault();
    setHeight("");
    setWeight("");
    document.querySelector("#height").focus();
  };

  const validDigits = (txt) => {
    return txt.replace(/[^0-9,]/g, "");
  };

  const handleHeightChange = (e) => {
    const updatedValue = validDigits(e.target.value);

    setHeight(updatedValue);
  };

  const handleWeightChange = (e) => {
    const updatedValue = validDigits(e.target.value);

    setWeight(updatedValue);
  };

  return (
    <div>
      <div className="calculator-container">
        <h1>Calculadora de IMC</h1>
        <div className="form-control">
          <label>
            <span>Altura:</span>
            <input
              type="text"
              placeholder="Exemplo 1,75"
              id="height"
              onChange={(e) => handleHeightChange(e)}
              value={height}
            />
          </label>
        </div>
        <div className="form-control">
          <label>
            <span>Peso:</span>
            <input
              type="text"
              placeholder="Exemplo 70,5"
              id="weight"
              onChange={(e) => handleWeightChange(e)}
              value={weight}
            />
          </label>
        </div>
        <div className="form-actions">
          <button id="btn-calc" onClick={(e) => calcImc(e, height, weight)}>Calcular</button>
          <button id="btn-clear" onClick={clearForm}>
            Limpar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
