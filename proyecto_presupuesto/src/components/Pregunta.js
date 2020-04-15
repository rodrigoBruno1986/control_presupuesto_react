import React, { Fragment, useState } from "react";

const Pregunta = () => {
  //definimos el state de la cantidad

  const [cantidad, guardadCantidad] = useState(0);
  // le ponemos 0 por que es una cantidad que se va a ingresar

  //definimos la funcion definirPresupuesto

  const definirPresupuesto = (e) => {
    guardadCantidad(parseInt(e.target.value, 10));
  };

  const agregarPresupueto = (e) => {
    e.preventDefault();
  };

  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>
      <form onSubmit={agregarPresupueto}>
        <input
          type="numbre"
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
