import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


const validationSchema = Yup.object().shape({
  nombres: Yup.string().required("Este campo es requerido"),
  apellidos: Yup.string().required("Este campo es requerido"),
  edad: Yup.number()
    .min(5, "Debes ser mayor de 18 años").max(100, "Cuál es el secreto de tu logevidad?")
    .required("Este campo es requerido"),
});

const FormularioUno = ({ initialValues, onSubmit }) => {
  return (
    <main>
      <div className="card">
    <h2>Bienvenido a: Amor para geeks</h2>
    


    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit = {onSubmit}
    >
      <Form autoComplete="off">
      <h3>Para iniciar tu proceso de registro, permitenos conocerte mejor!</h3>
        <fieldset>
          <label htmlFor="nombres">Nombres:</label>
          <Field id="nombres" name="nombres" type="text" />
          <ErrorMessage name="nombres" component="div" className="error-message"/>
        </fieldset>
        <fieldset>
          <label htmlFor="apellidos">Apellidos:</label>
          <Field id="apellidos" name="apellidos" type="text" />
          <ErrorMessage name="apellidos" component="div"  className="error-message"/>
        </fieldset>
        <fieldset>
          <label htmlFor="edad">Edad:</label>
          <Field id="edad" name="edad" type="number" />
          <ErrorMessage name="edad" component="div"  className="error-message"/>
        </fieldset>
        <div className="button-container">
        <button type="submit">Siguiente</button>
        </div>
      </Form>
    </Formik>
    </div>
    </main>
  );
};

export default FormularioUno;