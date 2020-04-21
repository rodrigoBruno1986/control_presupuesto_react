import React, { useState } from "react";

const Formulario = () => {
  return (
    <form>
      <h2>Agregar tu gastos aqui</h2>

      <div className="campo">
        <label>Nombre Gastos</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej-Transporte"
        />
      </div>
      <div className="campo">
        <label>Cantidad Gastos</label>
        <input type="number" className="u-full-width" placeholder="Ej. 300" />
      </div>

      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar Gasto"
      />
    </form>
  );
};

export default Formulario;
