import { useState } from 'react'
import './App.css'

function App() {

  const [hi, sethi] = useState();
  const [mi, setmi] = useState();
  const [hf, sethf] = useState();
  const [mf, setmf] = useState();
  const [resultado, setresultado] = useState("resultado");

  const soma = () =>{
    let somahora = Number(hi.value) + Number(hf.value);
    let somamin = Number(mi.value) + Number(mf.value);
    let dia = 0;

    while (somamin > 59){
        somamin -=60;
        somahora ++;
    }
    while(somahora > 23){
        somahora -= 23;
        dia ++;
    }

    setresultado("dias: "+ dia + " horas: " + somahora + ":" + somamin);
  }

  const sub = () =>{
    let momentoinicial = hi.value*60 + Number(mi.value);
    let momentofinal = hf.value*60 + Number(mf.value);
    let resultadohora = 0;
    let resultadomin = momentoinicial - momentofinal;

    if(resultadomin < 0 ){
        resultadomin*= -1;
    }

    while(resultadomin > 59){
        resultadomin -=60;
        resultadohora ++;
    }

    setresultado(resultadohora + ":" + resultadomin);
  }

  return (
    <>
    <h1>calculadora de horas</h1>
    <div className="samba">
        <h3>digite os horarios que deseja calcular</h3>
        <input type="number"
        value={hi}
        onChange={(e) => sethi(e.target.value)}
        placeholder='hora inicial'/> &nbsp; : &nbsp;
        <input
         type="number"
         value={hf}
         onChange={(e) => sethf(e.target.value)}
         placeholder='hora final'/><br/>
        <input type="number" 
        value={mi}
        onChange={(e) => setmi(e.target.value)}
        placeholder='minuto inicial'/> &nbsp; : &nbsp;
        <input type="number"
        value={mf}
        onChange={(e) => setmf(e.target.value)}
        placeholder='minuto final'/><br/>
        <button onClick={soma}>soma</button>
        <button onClick={sub}>diferença</button>
        <h3 id="resultado">{resultado}</h3>
    </div>
    </>
  )
}

export default App
