import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Ingrese un email válido").required("Este campo es requerido"),
  telefono: Yup.string().required("Si no lo ingresas..cómo te contactamos?").test('solo-numeros', 'Please, tu numero de verdad', (value) => {
    return /^[0-9]+$/.test(value);}),
  ciudad:Yup.string().required("Este campo es requerido"),
});

const FormularioDos = ({ initialValues, onSubmit, onBack }) => {
  return (
    <main>
      <div className="card">
      <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form  autoComplete="off">
      <h3>Dejanos saber dónde encontrarte</h3>
        <fieldset>
          <label htmlFor="email">Email:</label>
          <Field id="email" name="email" type="email" />
          <ErrorMessage name="email" component="div" />
        </fieldset>
        <fieldset>
          <label htmlFor="telefono">Teléfono:</label>
          <Field id="telefono" name="telefono" type="text" />
          <ErrorMessage name="telefono" component="div" />
        </fieldset>
        <fieldset>
          <label htmlFor="ciudad">Ciudad:</label>
          <Field id="ciudad" name="ciudad" type="text" />
          <ErrorMessage name="ciudad" component="div" />
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

export default FormularioDos;