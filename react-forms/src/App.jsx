import React, { useState } from "react";
import FormularioUno from "./components/FormularioUno";
import FormularioDos from "./components/FormularioDos";
import FormularioTres from "./components/FormularioTres";
import FormularioCuatro from "./components/FormularioCuatro";
import FormularioCinco from "./components/FormularioCinco";
import initialValues from "./components/initialValues";
import BarraProgreso from "./components/BarraProgreso";
import TusResultados from "./components/TusResultados";
import Gracias from "./components/Gracias";

const App = () => {
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState(initialValues);

  const handleFormSubmit = (values) => {
    setFormValues({ ...formValues, ...values });
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };


  return (

    <div>
      {step <= 6 && (
        <BarraProgreso
        progress={step}/>
      )}

      {step === 1 && (
        <FormularioUno initialValues={formValues} onSubmit={handleFormSubmit} />
      )}
      {step === 2 && (
        <FormularioDos
          initialValues={formValues}
          onSubmit={handleFormSubmit}
          onBack={handleBack}
        />
      )}
      {step === 3 && (
        <FormularioTres
          initialValues={formValues}
          onSubmit={handleFormSubmit}
          onBack={handleBack}
        />
      )}
      {step === 4 && (
        <FormularioCuatro
          initialValues={formValues}
          onSubmit={handleFormSubmit}
          onBack={handleBack}
        />
      )}
      {step === 5 && (
        <FormularioCinco
          initialValues={formValues}
          onSubmit={handleFormSubmit}
          onBack={handleBack}
        />
      )}
      {step === 6 && (
        <TusResultados
        initialValues={formValues}
        onSubmit={handleFormSubmit}
        onBack={handleBack}/>
      )}

      {step === 7 && (
        <Gracias/>
      )}

    </div>
  );
};

export default App;