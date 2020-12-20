import React from "react";
import ButtonNext from './ButtonNext';

export default function BirthDate ({ formData, setForm, step, navigation }) {
  const { dia, mes, anio } = formData;
  return (
    <div maxWidth="xs">
      <h3>¿Cuál es tu fecha de nacimiento?</h3>
      <input
        type="number"
        placeholder="Día"
        name="dia"
        value={dia}
        onChange={setForm}
        autoComplete="off"
      />
      <input
        type="number"
        placeholder="Mes"
        name="mes"
        value={mes}
        onChange={setForm}
        autoComplete="off"
      />
      <input
        type="number"
        placeholder="Año"
        name="anio"
        value={anio}
        onChange={setForm}
        autoComplete="off"
      />
      {step.id === "birthDate" &&
      <ButtonNext navigation={navigation}/>
      }
      {step.id !== "birthDate" && 
      <p>{`${formData.dia} ${formData.mes} ${formData.anio}`}</p>
      }
    </div>
  );
};
