import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  cita: Yup.string().required("El amor de tu vida quiere saber esto"),
  viaje: Yup.bool()
  .oneOf([true], "Decir no, no es una opción").required('Decir no, no es una opción. El amor te puede estar esperando al otro lado del charco'),
});

const FormularioCinco = ({ initialValues, onSubmit, onBack }) => {
  return (

    <main>
      <div className="card">
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form autoComplete="off">
        <h3>. . . y finalmente:</h3>
        <fieldset>
          <label htmlFor="cita">Describemos tu cita ideal:</label>
          <Field id="cita" name="cita" type="text" autoComplete="off"/>
          <ErrorMessage name="cita" component="div" />
        </fieldset>
        <fieldset>
        <label> Viajarias por el amor de tu vida?</label>
              <label htmlFor="viaje">              
                <Field id="viaje" name="viaje" type="checkbox" /> Si
              </label>
              <ErrorMessage
                name="viaje"
                component="p"
                className="error-message"
              />
            </fieldset>

        <div className="button-container">
        <button type="button" onClick={onBack}>
          Atrás
        </button>
        <button type="submit">Siguiente</button>
        </div>
      </Form>
    </Formik>
    </div>
    </main>
  );
};

export default FormularioCinco;