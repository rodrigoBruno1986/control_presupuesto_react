import React, { Fragment, useState } from "react";
import Error from "./Error";

const Pregunta = () => {
  //definimos el state de la cantidad

  const [cantidad, guardadCantidad] = useState(0);
  // le ponemos 0 por que es una cantidad que se va a ingresar

  const [error, guardarError] = useState(false);

  //definimos la funcion definirPresupuesto
  const definirPresupuesto = (e) => {
    guardadCantidad(parseInt(e.target.value, 10));
  };

  const agregarPresupueto = (e) => {
    e.preventDefault();

    //validar
    // hacemos un if por que el valor inicial de cantidad es 0

    if (cantidad < 1 || isNaN(cantidad)) {
      guardarError(true);
      return;
    }
    // si se pasa la validacion
    guardarError(false);
  };

  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>

      {error === true ? <Error mensaje="El presupuesto es Incorrecto" /> : null}

      <form onSubmit={agregarPresupueto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={definirPresupuesto}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir presupuesto"
        />
      </form>
    </Fragment>
  );
};

export default Pregunta;
