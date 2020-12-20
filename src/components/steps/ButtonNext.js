import React from 'react'

export default function BottonNext({ navigation }) {
  return (
    <div>
      <div>
            <button
              onClick={() => navigation.previous()}
            >
              Back
            </button>
            <button
              onClick={() => navigation.next()}>
              Next
            </button>
          </div>
    </div>
  )
}