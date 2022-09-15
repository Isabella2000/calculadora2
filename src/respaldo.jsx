import'./App.css';
import React from 'react'
import {useState} from 'react';

const App = () => {
  const [calc, setCalc]=useState("");
  const [result, setresult]=useState("");

  const ops=['/','*','+','-','.'];

  const updateCalc=value=>{
    if (
      ops.includes(value)&& calc===''||
      ops.includes(value)&& ops.includes(calc.slice(-1))

    ) {
      return;
    }
    setCalc(calc+value);
    if (!ops.includes(value)){
      setresult(eval(calc+value).toString());
    }
  }

  const createDigits=()=>{
    const digits=[];

    for (let i = 1; i < 10; i++){
      digits.push(
        <button onClick={()=>updateCalc(i.toString())}
        key={i}></button>
      )}
      return digits;
  }

  const deleteLast=()=>{
    if (calc=='') {
      return;
    }
    const value=calc.slice(0,-1);
    setCalc(value); 
  }


  return (
    <div className="app">
      <h1>hiiiii</h1>
      <div className="calculator">
        <div className="display">
          {result ? <span>({result})</span>:''}&nbsp;
          {calc||"0"}
        </div>
        <div className="operators">
          <button onClick={()=>updateCalc('/')}>/</button>
          <button onClick={()=>updateCalc('*')}>*</button>
          <button onClick={()=>updateCalc('+')}>+</button>
          <button onClick={()=>updateCalc('-')}>-</button>
          <button onClick={deleteLast}>C</button>
        </div>
        <div className="digits">
          {createDigits()}
          <button onClick={()=>updateCalc('0')}>0</button>
          <button onClick={()=>updateCalc('.')}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  )
}





// import Boton from './components/Boton';
// import Pantalla from './components/Pantalla';
// import BotonClear from './components/BotonClear';
// // hooks
// import {useState} from 'react';

// const App = () => {
//     const [input, setInput] = useState('');

//   const agregarInput = val => {
//     setInput(input + val);
//   };

//   const calcularResultado = () => {
//     if(input){
//       setInput(eval(input));
//     }else{
//       alert("Por favor ingrese valores para realizar los calculos");
//     }
//   };


//   return (
//     <div className="App">

//       <Logo></Logo>
//         <div className='contenedor-calculadora'>
//           <Pantalla input={input}/>

//           <div className='fila'>
//             <Boton manejarClic={agregarInput}>1</Boton>
//             <Boton manejarClic={agregarInput}>2</Boton>
//             <Boton manejarClic={agregarInput}>3</Boton>
//             <Boton manejarClic={agregarInput}>+</Boton>

//           </div>
//           <div className='fila'>
//             <Boton manejarClic={agregarInput}>4</Boton>
//             <Boton manejarClic={agregarInput}>5</Boton>
//             <Boton manejarClic={agregarInput}>6</Boton>
//             <Boton manejarClic={agregarInput}>-</Boton>

//           </div>
//           <div className='fila'>
//             <Boton manejarClic={agregarInput}>7</Boton>
//             <Boton manejarClic={agregarInput}>8</Boton>
//             <Boton manejarClic={agregarInput}>9</Boton>
//             <Boton manejarClic={agregarInput}>*</Boton>

//           </div>
//           <div className='fila'>
//             <Boton manejarClic={calcularResultado}>=</Boton>
//             <Boton manejarClic={agregarInput}>0</Boton>
//             <Boton manejarClic={agregarInput}>.</Boton>
//             <Boton manejarClic={agregarInput}>/</Boton>

//           </div>
//           <div className='fila'>
//             <BotonClear manejarClear={() => setInput('')}>Clear</BotonClear>

//           </div>

//         </div>

//     </div>
//   );

// }

 export default App
// 1111111---------------intento logica base---------------------------------------------------------------    
    // const[botonNumero, botonNumeros] = useState("");
    // const[botonOpera, botonOperaci] = useState("");
    // const[result, setResult] = useState("");

    // const handleClick=()=>{

    // }

    // const botonNumero=()=>{


    //     (e.target.name(numero))
    // botonNumero.forEach((botonNumeros)=>{


    //     botonNumeros.addEventListener('click',()=>{
    //         agregarNumero(botonNumeros.innerText);
    // // alert(boton.innerText);
    // }) })        
    // }

    // const botonOpera=()=>{
    //     (e.target.name(operador))
    //     botonOpera.forEach((botonOperaci)=>{
    //         botonOperaci.addEventListener('click',()=>{
    //             selectOperacion(botonOperaci.innerText);
    // // alert(boton.innerText);
    // }) })        
    // }

    // const limpia=()=>{
    //     (e.target.name(limpia))[0];
    //     limpia.addEventListener('click',()=>{
    //         clear();
    //         actualizarInput();
    //         c();
    //     });
    // }

    // const igual=()=>{
    // (e.target.name(igual))[0];
    // igual.addEventListener('click', ()=>{
    //     calcular();
    //     actualizarInput();
    // });
    // }

    // function selectOperacion(op) {
    //     if (OpeActual==='')return;
    //     if (OpeAnterior!==''){
    //         calcular();
    //     }
    //     operacion=op.toString();
    //     OpeAnterior=OpeActual;    
    //     OpeActual='';    
    // }


    // function calcular() {
    //     var calculo;
    //     const v1=parseFloat(OpeAnterior)
    //     const v2=parseFloat(OpeActual)
    //     if(isNaN(v1)||isNaN(v2))return;
    //     if (operacion=='+') {
    //         calculo=v1+v2;
    //     }
    //     if (operacion=='-') {
    //         calculo=v1-v2;
    //     }
    //     if (operacion=='x') {
    //         calculo=v1*v2;
    //     }
    //     if (operacion=='/') {
    //         calculo=v1/v2;
    //     }
    //     // -------con switch--------
    //     // switch (operacion) {
    //     //     case '+':
    //     //         calculo=v1+v2;
    //     //         break;
    //     //     case '-':
    //     //         calculo=v1-v2;
    //     //         break;
    //     //     case 'x':
    //     //         calculo=v1*v2;
    //     //         break;
    //     //     case '/':
    //     //         calculo=v1/v2;
    //     //         break;
    //     //     default:
    //     //         return;
    //     // }   
    //     OpeActual=calculo;
    //     operacion=undefined;
    //     OpeAnterior='';
    // }
    // function agregarNumero(num) {
    //     OpeActual=OpeActual.toString() + num.toString();
    //     actualizarInput();    
    // }
    // // ----------------limpiar de dos formas--------------------
    // function clear() {
    //     OpeActual='';
    //     OpeAnterior='';
    //     operacion=undefined;
    // }
    // function c() {
    //     window.location.reload();  
    // }
    // // ----------yujuuuuuuuuuuuuuuuuu ya puedo hacer popooooo---
    // function actualizarInput() {
    //     resultado.value=OpeActual;
     
    // }


// 111111111-----intento logica base---------------------------------------------
// 2222222-----base calculadora---------------------------------------------
// const botonNumero=document.getElementsByName('numero');
// const botonOpera=document.getElementsByName("operador");
// // const suma=document.getElementById("suma");
// // const resta=document.getElementById("resta");
// // const por=document.getElementById("por");
// // const division=document.getElementById("division");
// const limpia=document.getElementsByName("limpia")[0];
// const igual=document.getElementsByName("igual")[0];
// var resultado=document.getElementById("input");
// var OpeActual='';
// var OpeAnterior='';
// var operacion=undefined;


// botonNumero.forEach((boton)=>{
// boton.addEventListener('click',()=>{
//     agregarNumero(boton.innerText);
//     // alert(boton.innerText);
// }) })

// botonOpera.forEach((boton)=>{
// boton.addEventListener('click',()=>{
//     selectOperacion(boton.innerText);
//     // alert(boton.innerText);
// }) })

// igual.addEventListener('click', ()=>{
//     calcular();
//     actualizarInput();
// });

// limpia.addEventListener('click',()=>{
//     clear();
//     actualizarInput();
//     c();
// });

// function selectOperacion(op) {
//     if (OpeActual==='')return;
//     if (OpeAnterior!==''){
//         calcular();
//     }
//     operacion=op.toString();
//     OpeAnterior=OpeActual;    
//     OpeActual='';    
// }
 
// function calcular() {
//     var calculo;
//     const v1=parseFloat(OpeAnterior)
//     const v2=parseFloat(OpeActual)
//     if(isNaN(v1)||isNaN(v2))return;
//     if (operacion=='+') {
//         calculo=v1+v2;
//     }
//     if (operacion=='-') {
//         calculo=v1-v2;
//     }
//     if (operacion=='x') {
//         calculo=v1*v2;
//     }
//     if (operacion=='/') {
//         calculo=v1/v2;
//     }
//     // -------con switch--------
//     // switch (operacion) {
//     //     case '+':
//     //         calculo=v1+v2;
//     //         break;
//     //     case '-':
//     //         calculo=v1-v2;
//     //         break;
//     //     case 'x':
//     //         calculo=v1*v2;
//     //         break;
//     //     case '/':
//     //         calculo=v1/v2;
//     //         break;
//     //     default:
//     //         return;
//     // }   
//     OpeActual=calculo;
//     operacion=undefined;
//     OpeAnterior='';

// }

// function agregarNumero(num) {
//     OpeActual=OpeActual.toString() + num.toString();
//     actualizarInput();    
// }

// // ----------------limpiar de dos formas-------------------------------------

// function clear() {
//     OpeActual='';
//     OpeAnterior='';
//     operacion=undefined;
// }

// function c() {
//     window.location.reload();  
// }


// // ----------yujuuuuuuuuuuuuuuuuu ya puedo hacer popooooo-------------------------------------------
// function actualizarInput() {
//     resultado.value=OpeActual;
    
// }


//   return (
//     <body>
// <div className="calculadora">
//          <input type="text"id="input"/> 
//     <div className="buttons">
//             <div className="operadores">
//                 <button onClick={operador} name="operador" id="suma">+</button>             
//                 <button onClick={operador} name="operador" id="resta">-</button>         
//                 <button onClick={operador} name="operador" id="por">x</button>    
//                 <button onClick={operador} name="operador" id="division">/</button>   
//             </div>
//             <div className="leftPanel">
//                 <div className="numeros">
//                     <button onClick={handleClick} name="numero">7</button>         
//                     <button onClick={handleClick} name="numero">8</button>    
//                     <button onClick={handleClick} name="numero">9</button> 
                    
//                 </div>
 
//                 <div className="numeros">
//                     <button onClick={handleClick} name="numero">4</button>         
//                     <button onClick={handleClick} name="numero">5</button>    
//                     <button onClick={handleClick} name="numero">6</button> 
//                 </div>
 
//                 <div className="numeros">
//                     <button onClick={handleClick} name="numero">1</button>         
//                     <button onClick={handleClick} name="numero">2</button>    
//                     <button onClick={handleClick} name="numero">3</button> 
//                 </div>
 
//                 <div className="numeros">
//                     <button onClick={handleClick} name="numero">0</button>         
//                     <button onClick={handleClick} name="numero">.</button>    
//                     <button onClick={limpia} name="limpia">C</button> 
//                 </div>  
//             </div>
//             <div  id="resultados" className="igual">=azul</div>
//             <button onClick={igual} name="igual">=</button>
         
//         </div>
//     </div>
//     </body>
//   )

// 22222222222222222222222------------------------------------------------------------------------------------------

 
 // ---------shadiacum------------------------------------------------------------------------------------------------------
 

// const App = () => {
//   const[result, setResult] = useState("")

//   const handleClick =(e) => {
//     setResult( result.concat(e.target.name));
//   }

//   const clear = () => {
//     setResult("");
//   }

//   const backspace = () =>{
//     setResult(result.slice(0,- 1))
//   }

//   const calculate = () =>{
//     try{
//       setResult(eval(result).toString());
//     } catch(err){
//       setResult("Error")
//     }
    
//   }
//   return (
//     <> 
//        <div className="container">
//         <form>
//           <input type="text" value={result}/>
//         </form>

//          <div className="keypad">
//           <button className="highlight" onClick={clear} id="clear">Clear</button>
//           <button className="highlight" onClick={backspace} id="borrar">C</button>
//           <button className="highlight" name="/" onClick={handleClick}>&divide;</button>
//           <button name="7" onClick={handleClick}>7</button>
//           <button name="8" onClick={handleClick}>8</button>
//           <button name="9" onClick={handleClick}>9</button>
//           <button className="highlight" name="*" onClick={handleClick}>&times;</button>
//           <button name="4" onClick={handleClick}>4</button>
//           <button name="5" onClick={handleClick}>5</button>
//           <button name="6" onClick={handleClick}>6</button>
//           <button className="highlight" name="-" onClick={handleClick}>&ndash;</button>
//           <button name="1" onClick={handleClick}>1</button>
//           <button name="2" onClick={handleClick}>2</button>
//           <button name="3" onClick={handleClick}>3</button>
//           <button className="highlight" name="+" onClick={handleClick}>+</button>
//           <button name="0" onClick={handleClick}>0</button>
//           <button name="." onClick={handleClick}>.</button>
//           <button className="highlight" onClick={calculate} id="result">=</button>
          

//          </div>

//        </div>
       
//     </>
//   )
// }

// export default App
