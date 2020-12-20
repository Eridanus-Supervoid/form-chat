import React from "react";
import ButtonNext from './ButtonNext';

export default function Contact ({ formData, setForm, step, navigation }) {
  const { celular, email } = formData;

  return (
    <div>
      <h3>Datos de contacto</h3>
      <input
        placeholder="Celular"
        name="celular"
        value={celular}
        onChange={setForm}
        autoComplete="off"
      />
      <input
        type="email"
        placeholder="E-Mail"
        name="email"
        value={email}
        onChange={setForm}
        autoComplete="off"
      />
      {step.id === "contact" &&
      <ButtonNext navigation={navigation}/>
      }
      {step.id !== "contact" && 
      <p>{`${formData.celular} ${formData.email}`}</p>
      }
    </div>
  );
};
