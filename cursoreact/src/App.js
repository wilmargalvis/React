import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';

function App() {

  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [imagen, setImagen]= useState('');

  const onChangelinea1 = function linea1(evento) {
    setLinea1(evento.target.value);
  }

  const onChangelinea2 = function linea2(evento) {
    setLinea2(evento.target.value);
  }

  const onChangeimagen =function imagen(evento) {
    setImagen(evento.target.value);
  }

  const onClickexportar = function exportar(valor) {
    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img    = canvas.toDataURL("image/png");
      
      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
  });
  };

  return (
    <div className="App">

      {/* Select picker de memes,
      input text 1mer linea,
      input text 2da linea,
      Botón exportar,
      libreria: https://html2canvas.hertzen.com/*/}

      <select onChange={onChangeimagen}>
        <option value="llamas">casa en llamas</option>
        <option value="fire">History</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Pholosoraptor</option>
        <option value="smart">Smart</option>
        <option value="futurama">Futurama</option>
      </select><br/>  

      <input onChange={onChangelinea1} type="text" placeholder="linea1"/><br/>
      <input onChange={onChangelinea2} type="text" placeholder="linea2"/><br/>

      <button onClick={onClickexportar}>Exportar</button>

      <div className="meme" id="meme">
        <span>{linea1}</span> <br/>
        <span>{linea2}</span>
        <img src={"img/"+ imagen + ".jpg"} /> 
      </div>

    </div>
  );
}

export default App;
