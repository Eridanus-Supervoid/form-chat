import React from "react";
import ButtonNext from './ButtonNext';

export default function BirthDate ({ formData, setForm, step, navigation }) {
  const { dia, mes, anio } = formData;
  return (
    <div className="chat">
    <img className="image" src="https://image.freepik.com/free-photo/attractive-female-wearing-face-mask-indoor_181624-24246.jpg" alt="woman"/>
    <div>
      <div className="form-container">
        <h5>¿Cuál es tu fecha de nacimiento?</h5>
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
      </div>
        {step.id !== "birthDate" && 
          <div className="user-output">
            <p>{`${formData.dia}/${formData.mes}/${formData.anio}`}</p>
          </div>
        }
    </div>
    </div>
  );
};
