import React from "react";

export default function NewName({ newName, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name="nombre"
        placeholder="Nombre"
        value={newName.nombre || ""}
        onChange={handleChange}
      />
      <input
        type='text'
        name="segundoNombre"
        placeholder="Segundo Nombre"
        value={newName.segundoNombre || ""}
        onChange={handleChange}
      />
      <input
        type='text'
        name="apellidoPaterno"
        placeholder="Apellido Paterno"
        value={newName.apellidoPaterno || ""}
        onChange={handleChange}
      />
      <input
        type='text'
        name="apellidoMaterno"
        placeholder="Apellido Materno"
        value={newName.apellidoMaterno || ""}
        onChange={handleChange}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}