import React from "react";

export default function Review ({step, navigation }) {
  const { go } = navigation;

  return (
    <div className="chat">
    <img className="image" src="https://image.freepik.com/free-photo/attractive-female-wearing-face-mask-indoor_181624-24246.jpg" alt="woman"/>
    <div>
      <div className="review">
        <p>Si tus datos son correctos por favor continuemos</p>
      </div>
      {step.id === "review" &&
        <button
        style={{marginLeft:"10px", marginTop:"20px", backgroundColor:"#F15383", border:"none"}}
        className="btn btn-primary"
        onClick={() => go('submit')}
        >
          Iniciar
        </button>
      }
    </div>
    </div>
  );
};
