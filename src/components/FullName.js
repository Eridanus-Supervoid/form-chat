import React from "react";

export default function FullName({ fullName }) {
  return (
    <>
      {fullName.map(({ nombre, segundoNombre, apellidoPaterno, apellidoMaterno, id }) => (
          <div key={id}>
            <h2>{`${nombre} ${segundoNombre} ${apellidoPaterno} ${apellidoMaterno}`}</h2>
          </div>
      ))}
    </>
  );
}