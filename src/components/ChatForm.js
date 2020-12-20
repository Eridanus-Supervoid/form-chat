import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import Name from "./steps/Name";
import BirthDate from "./steps/BirthDate"
import Contact from "./steps/Contact";
import Review from "./steps/Review";
import Submit from "./steps/Submit";

const defaultData = {
  nombre: "",
  segundoNombre: "",
  apellidoPaterno: "",
  apellidoMaterno: "",
  dia: "",
  mes: "",
  anio: "",
  celular: "",
  email: "",
};

const steps = [
  { id: "name" },
  { id: "birthDate" },
  { id: "contact" },
  { id: "review" },
  { id: "submit" },
];

export default function ChatForm () {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });

  const props = { formData, setForm, navigation, step };

  // eslint-disable-next-line default-case
  switch (step.id) {

    case "name":
      return (
        <div>
          <Name {...props} />
        </div> )

    case "birthDate":
      return ( 
        <div>
          <Name {...props} />
          <BirthDate {...props} />
        </div> ) 

    case "contact":
      return ( 
        <div>
          <Name {...props} />
          <BirthDate {...props} />
          <Contact {...props} />
        </div> ) 

    case "review":
      return ( 
        <div>
          <Name {...props} />
          <BirthDate {...props} />
          <Contact {...props} />
          <Review {...props} />
        </div> ) 
      
    case "submit":
      return ( 
        <div>
          <Name {...props} />
          <BirthDate {...props} />
          <Contact {...props} />
          <Review {...props} />
          <Submit {...props} />
        </div> ) 
  }

  return (
    <div>
      <h1>Multi step form</h1>
    </div>
  );
};
