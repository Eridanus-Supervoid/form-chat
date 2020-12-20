import React from "react";

export default function Name ({ formData, setForm, step, navigation }) {
  const { nombre, apellidoPaterno, apellidoMaterno } = formData;

  return (
    <div>
      <h3>¿Cuál es tu nombre?</h3>
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
        style={{ marginRight: "1rem" }}
        onClick={() => navigation.next()}>
        Next
        </button>
      }
      {step.id !== "name" && 
      <p>{`${formData.nombre} ${formData.apellidoPaterno} ${formData.apellidoMaterno}`}</p>
      }
    </div>
  );
};
