import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  fortalezas: Yup.string().required("Este campo es requerido"),
  debilidades: Yup.string().required("Este campo es requerido"),
  animales: Yup.string()
  .oneOf(["Perros", "Gatos", "No me gustan los animales", "Los mapaches claramente", "Oviparos", "Lagartos", "Animales marinos", "Dinosaurios", "Adoptaria un extraterrestre", "Todas las anteriores al mismo tiempo", "Alf", "Yo soy la mascota"], "Selecciona tu opción favorita o la más cercana")
  .required("De seguro te identificas con alguna opción"),
});

const FormularioCuatro = ({ initialValues, onSubmit, onBack }) => {
  return (
    <main>
      <div className="card">
      <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form  autoComplete="off">
      <h3>Ya casi . . . sincérate :</h3>
        <fieldset>
          <label htmlFor="fortalezas">Cuáles son tus fortalezas:</label>
          <Field id="fortalezas" name="fortalezas" type="text" />
          <ErrorMessage name="fortalezas" component="div" />
        </fieldset>
        <fieldset>
          <label htmlFor="debilidades">Y tus debilidades:</label>
          <Field id="debilidades" name="debilidades" type="text" />
          <ErrorMessage name="debilidades" component="div" />
        </fieldset>

        <fieldset>
              <label htmlFor="animales">Muy importante ! ¿Qué mascotas te gustan?:</label>
              <Field id="animales" name="animales" as="select" > 
                <option value="">. . .</option>
                <option value="Perros">Perros</option>
                <option value="Gatos">Gatos</option>
                <option value="No me gustan los animales">No me gustan los animales</option>
                <option value="Los mapaches claramente">Los mapaches claramente</option>
                <option value="Oviparos">Oviparos</option>
                <option value="Lagartos">Lagartos</option>
                <option value="Animales marinos">Animales marinos</option>
                <option value="Dinosaurios">Dinosaurios</option>
                <option value="Adoptaria un extraterrestre">Adoptaria un extraterrestre</option>
                <option value="Todas las anteriores al mismo tiempo">Todas las anteriores al mismo tiempo</option>
                <option value="Alf">Alf</option>
                <option value="Yo soy la mascota">Yo soy la mascota</option>
              </Field>
              <ErrorMessage
                name="animales"
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

export default FormularioCuatro;