import React from 'react'

export default function BottonNext({ navigation }) {
  return (
    <div>
      <div>
            <button
              className="btn btn-danger"
              onClick={() => navigation.previous()}
              >
              Atrás
            </button>
            <button
              style={{marginLeft:"10px", backgroundColor:"#F15383", border:"none"}}
              className="btn btn-primary"
              onClick={() => navigation.next()}>
              Siguiente
            </button>
          </div>
    </div>
  )
}