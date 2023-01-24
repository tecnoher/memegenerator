import { useState } from "react";
import "./App.css";
import html2canvas from "html2canvas";

const memes = ['decision', 'fuego', 'viejo'];

const App = () => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [img, setImg] = useState("");

  const exportImage = () => 
  {
    html2canvas(document.querySelector('#meme')).then(canvas => {
      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = canvas.toDataURL("image/png");
      link.click();
    })
  }

  return (
    <div className="App">
      <label for="pet-select">Seleccione meme:</label>

      <div>
        <select name="images" id="image-select" onChange={(e) => setImg(e.target.value)}>
          <option value="">--Seleccione una opción--</option>
          {memes.length && memes.map((el) => (
            <option value={el}>{el}</option>
          ))}
        </select>
      </div>
      <div>
        <input
          type="text"
          value={text1}
          onChange={(e) => setText1(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          value={text2}
          onChange={(e) => setText2(e.target.value)}
        />
      </div>
      {img !== '' &&
      <div id="meme" class="image">
         <img src={`./img/${img}.jpg`} />
        <span class="txt-one">{text1}</span> <br />
        <span class="txt-two">{text2}</span> <br />        
      </div>
      }
      <button onClick={exportImage}>Exportar</button>
    </div>
  );
};

export default App;
