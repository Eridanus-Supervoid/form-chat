import React from 'react'

export default function Submit({formData}) {

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
    <div className="chat">
    <div style={{marginLeft:"87px"}} className="user-output">
      <p>{nombre} {segundoNombre} {apellidoPaterno} {apellidoMaterno}</p>
      <p>{dia} {mes} {anio}</p>
      <p>{celular} {email}</p>
    </div>
    </div>
  )
}
