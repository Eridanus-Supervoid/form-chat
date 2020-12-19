import React, { useState } from 'react';
import NewName from './NewName'
import FullName from './FullName'

export default function Name() {

  const [newName, setNewName] = useState({});

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewName((prev) => ({ ...prev, id: Date.now(), [name]: value }));
  };

  const [fullName, setFullName] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newName.nombre) return;
    setFullName(() => [newName]);
    console.log(newName)
    setNewName({});
  };


  return (
    <div>
      <h2>¿Cuál es tu nombre?</h2>
      <NewName
        newName={newName}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <FullName fullName={fullName}/>
      {!fullName.length === 0 && <h2>Algo</h2> }
    </div>
  )
}
