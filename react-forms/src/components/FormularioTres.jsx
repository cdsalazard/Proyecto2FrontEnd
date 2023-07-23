import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  libros: Yup.string().required("Este campo es requerido"),
  peliculas: Yup.string().required("Este campo es requerido"),
  hobbies: Yup.string().required("Este campo es requerido"),
});

const FormularioTres = ({ initialValues, onSubmit, onBack }) => {
  return (
    <main>
      <div className="card">
      <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form  autoComplete="off">
      <h3>Cuéntanos sobre tus gustos </h3>
        <fieldset>
          <label htmlFor="libros">Libros y autores favoritos:</label>
          <Field id="libros" name="libros" type="text" />
          <ErrorMessage name="libros" component="div" />
        </fieldset>
        <fieldset>
          <label htmlFor="peliculas">Peliculas o directores favoritos:</label>
          <Field id="peliculas" name="peliculas" type="text" />
          <ErrorMessage name="peliculas" component="div" />
        </fieldset>
        <fieldset>
          <label htmlFor="hobbies">Hobbies y aficiones:</label>
          <Field id="hobbies" name="hobbies" type="text" />
          <ErrorMessage name="hobbies" component="div" />
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

export default FormularioTres;