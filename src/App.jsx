// CSS
import { useState } from "react";
import "./App.css";

// Components
import Calculator from "./components/Calculator";
import Results from "./components/Results";

// Others
import { data } from "./data/data";

function App() {
  const [imc, setImc] = useState();
  const [info, setInfo] = useState();
  const [infoClass, setInfoClass] = useState();

  const calcImc = (e, height, weight) => {
    e.preventDefault();

    if (!height && !weight) return;

    const heightFloat = +height.replace(",", ".");
    const weightFloat = +weight.replace(",", ".");

    const imcCalc = (weightFloat / (heightFloat * heightFloat)).toFixed(1);
    setImc(imcCalc);

    data.forEach((item) => {
      if (imcCalc >= item.min && imcCalc <= item.max) {
        setInfo(item.info);
        setInfoClass(item.infoClass);
      }
    });
  };

  const handleBack = () => {
    setImc("");
  };

  return (
    <div className="container">
      {!imc ? (
        <Calculator calcImc={calcImc} />
      ) : (
        <Results
          imc={imc}
          info={info}
          infoClass={infoClass}
          handleBack={handleBack}
        />
      )}
    </div>
  );
}

export default App;
