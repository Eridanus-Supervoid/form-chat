import React from "react";

export default function Review ({ formData, step, navigation }) {
  const { go } = navigation;
  const {
    nombre,
    segundoNombre,
    apellidoPaterno,
    apellidoMaterno,
    dia,
    mes,
    anio,
    celular,
    email,
  } = formData;

  return (
    <div>
      <h3>¿Tus datos son correctos?</h3>
      <p>{nombre} {segundoNombre} {apellidoPaterno} {apellidoMaterno}</p>
      <p>{dia} {mes} {anio}</p>
      <p>{celular} {email}</p>
      {step.id === "review" &&
      <button
        onClick={() => go('submit')}
      >
        Iniciar
      </button>
      }

    </div>
  );
};
