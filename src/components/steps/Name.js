import React from "react";

export default function Name ({ formData, setForm, step, navigation }) {
  const { nombre, apellidoPaterno, apellidoMaterno } = formData;

  return (
    <div className="chat">
    <img className="image" src="https://image.freepik.com/free-photo/attractive-female-wearing-face-mask-indoor_181624-24246.jpg" alt="woman"/>
    <div>
    <div className="form-container">
      <h5>¿Cuál es tu nombre?</h5>
      <input
        placeholder="Nombre"
        name="nombre"
        value={nombre}
        onChange={setForm}
        autoComplete="off"
      />
      <input
        placeholder="Apellido Paterno"
        name="apellidoPaterno"
        value={apellidoPaterno}
        onChange={setForm}
        autoComplete="off"
      />
      <input
        placeholder="Apellido Materno"
        name="apellidoMaterno"
        value={apellidoMaterno}
        onChange={setForm}
        autoComplete="off"
      />
      {step.id === "name" && 
        <button
        style={{backgroundColor:"#F15383", border:"none"}}
        className="btn btn-primary"
        onClick={() => navigation.next()}>
        Next
        </button>
      }
      </div>
      {step.id !== "name" && 
      <div className="user-output">
      <p>{`${formData.nombre} ${formData.apellidoPaterno} ${formData.apellidoMaterno}`}</p>
      </div>
      }
    </div>
    </div>
  );
};
