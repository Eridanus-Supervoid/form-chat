import React from "react";
import ButtonNext from './ButtonNext';

export default function Contact ({ formData, setForm, step, navigation }) {
  const { celular, email } = formData;

  return (
    <div className="chat">
    <img className="image" src="https://image.freepik.com/free-photo/attractive-female-wearing-face-mask-indoor_181624-24246.jpg" alt="woman"/>
    <div>
    <div className="form-container">
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
    </div>
      {step.id !== "contact" && 
        <div className="user-output">
          <p>{`${formData.celular} ${formData.email}`}</p>
        </div>
      }
    </div>
    </div>
  );
};
