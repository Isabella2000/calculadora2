import React, { useState, useEffect } from 'react'
import './Calculator.css'
import './titulo.js';

// import Container from "@mui/material/Container";
// import {Box} from "@mui/sysem";

export default function Calculator() {
  const [num, setNum] = useState("");
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultado, setResultado]  = useState("")
  const [operator, setOpertor] = useState("");

  useEffect(() => {
    setNum1(num)
  }, [resultado])

  function inputNum(e) {
    let input = e.target.value
    setNum(`${num + input}`)

    if (operator == "")setNum1(`${num + input}`)
    else if (operator != "")setNum2(`${num + input}`)
  }


function clear (){
    // input.slice(0,-1);
    setNum(num.slice(0, -1)); 
  }
  
  function clearAll(e) {
    setNum("")
    setOpertor("")
  }

  

  // function porcetange() {
  //   setNum(num/100);
  // }

  // function changeSign() {
  //   if (num>0) {
  //     setNum(-num);
  //   }else{
  //     setNum(Math.abs(num));
  //   }
  // }

  function operatorHandler(e) {
    var operatorInput = e.target.value;
    setOpertor(operatorInput)
    setNum("");
  }

  function calculate() {
    if (operator === '/') setNum(parseFloat(num1) / parseFloat(num2));
    else if (operator === 'x') setNum(parseFloat(num1) * parseFloat(num2));
    else if (operator === '-') setNum(parseFloat(num1) - parseFloat(num2));
    else if (operator === '+') setNum(parseFloat(num1) + parseFloat(num2));
    setNum1("")
    setNum2("")
    setResultado(num)
  }





  return (
    <div className='primerContenedor'>
    <div className="blur">
      <div class="calculadora">
        <div class="contenedor">

          <div class='console-container'>
            <p className="line-1 anim-typewriter">Calculadora Isa</p>
          </div>

          <h1 className="result" >{num}</h1>
          {/* <input type="text"id="input" className="result" placeholder='0' value={num}/>  */}
          <div class="botones">
            <div class="operadores">
              <button class="operador" onClick={operatorHandler} value={"+"}>+</button>
              <button class="operador" onClick={operatorHandler} value={"-"}>-</button>
              <button class="operador" onClick={operatorHandler} value={"x"}>x</button>
              <button class="operador" onClick={operatorHandler} value={"/"}>/</button>

            </div>
            <div class="leftPanel">
              <div class="numeros">
                <button class="numero" id="teclas" onClick={inputNum} value={7}>7</button>
                <button class="numero" id="teclas" onClick={inputNum} value={8}>8</button>
                <button class="numero" id="teclas" onClick={inputNum} value={9}>9</button>
              </div>

              <div class="numeros">
                <button class="numero" id="teclas" onClick={inputNum} value={4}>4</button>
                <button class="numero" id="teclas" onClick={inputNum} value={5}>5</button>
                <button class="numero" id="teclas" onClick={inputNum} value={6}>6</button>
              </div>

              <div class="numeros">
                <button class="numero" id="teclas" onClick={inputNum} value={1}>1</button>
                <button class="numero" id="teclas" onClick={inputNum} value={2}>2</button>
                <button class="numero" id="teclas" onClick={inputNum} value={3}>3</button>
              </div>

              <div class="numeros">
                <button class="numero" id="teclas" onClick={inputNum} value={0}>0</button>
                <button class="numero" id="teclas" onClick={inputNum} value={'.'}>.</button>
                <button class="limpia" onClick={clearAll}>AC</button>
              </div>
            </div>
            
              <div class="signos">
            <button class="igual" onClick={calculate}>=</button>
            <button class="ac" onClick={clear}>C</button>
            </div>

          </div>
        </div>
        </div>
      </div>


      {/* <div className='wrapper'>
       
        <h1 className="result">{num}</h1>

        <button onClick={clear}>AC</button>
        <button onClick={changeSign}>+/-</button>
        <button onClick={porcetange}>%</button>
        <button classNameName='orange'onClick={operatorHandler}value={"/"}>/</button>
        <button classNameName='gray' onClick={inputNum} value={7}>7</button>
        <button className='gray' onClick={inputNum} value={8}>8</button>
        <button className='gray' onClick={inputNum} value={9}>9</button>
        <button onClick={operatorHandler} value={"x"} className='orange'>x</button>
        <button className='gray' onClick={inputNum} value={4}>4</button>
        <button className='gray' onClick={inputNum} value={5}>5</button>
        <button className='gray' onClick={inputNum} value={6}>6</button>
        <button onClick={operatorHandler} value={"-"} className='orange'>-</button>
        <button className='gray' onClick={inputNum} value={1}>1</button>
        <button className='gray' onClick={inputNum} value={2}>2</button>
        <button className='gray' onClick={inputNum} value={3}>3</button>
        <button onClick={operatorHandler} value={"+"} className='orange'>+</button>
        <button className='gray' onClick={inputNum} value={0}>0</button>
        <button className='gray' onClick={inputNum} value={'.'}>,</button>
        <button className='gray'  style={{visibility:"hidden"}}>,</button>

        <button className='orange' onClick={calculate} >=</button>
        </div> */}

    </div>
  )
}
