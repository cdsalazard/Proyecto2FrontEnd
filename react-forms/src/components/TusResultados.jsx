
import { Formik, Form, Field, ErrorMessage } from "formik";


const TusResultados = ({ initialValues, onSubmit, onBack }) => {
  return (
<main>
    <div className="card">
        <h3>Este paso es muy importante. Revisa que tu información sea correcta:</h3>
    
    <h2>Información personal:</h2>
    <h3> Nombres: {initialValues.nombres} </h3>
    <h3> Apellidos: {initialValues.apellidos} </h3>
    <h3> Edad: {initialValues.edad} </h3>

    <h2>Información de contacto:</h2>
    <h3> Email: {initialValues.email} </h3>
    <h3> Telefono: {initialValues.telefono} </h3>
    <h3> Ciudad: {initialValues.ciudad} </h3>

    <h2>Tus intereses</h2>
    <h3> Libros: {initialValues.libros} </h3>
    <h3> Peliculas: {initialValues.peliculas} </h3>
    <h3> Hobbies: {initialValues.hobbies} </h3>

    <h2>Fortalezas, debilidades y animales:</h2>
    <h3> Fortalezas: {initialValues.fortalezas} </h3>
    <h3> Debilidades: {initialValues.debilidades} </h3>
    <h3> Animales: {initialValues.animales} </h3>

    <h2>Cita ideal y viaje por el mundo para encontrar al amor de tu vida:</h2>

    <h3>Cita: {initialValues.cita}</h3>
    <h3>Viaje: Obviamente </h3>
    
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
        >
        
        <Form>
        <div className="button-container">
        <button type="button" onClick={onBack}>
          Atrás
        </button>
        <button type="submit" >Enviar</button>
        </div>
        </Form>
    </Formik>
    </div>
</main>
  );
};

export default TusResultados;
