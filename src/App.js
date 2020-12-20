import './App.css';
import ChatForm from './components/ChatForm'

function App() {
  return (
    <div className="App">
      <div className="title-form">
        <h1>Título de formulario</h1>
        <img style={{height:"100px"}} src="https://image.flaticon.com/icons/png/512/114/114903.png" alt="list"/>
      </div>
      <ChatForm />
    </div>
  );
}

export default App;
