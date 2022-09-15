
// import React, {useState} from 'react'
// import'./calculadora.css'

// // function App() {
// //   const [count, setCount] = useState(0);
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
//     switch (operacion) {
//         case '+':
//             calculo=v1+v2;
//             break;
//         case '-':
//             calculo=v1-v2;
//             break;
//         case 'x':
//             calculo=v1*v2;
//             break;
//         case '/':
//             calculo=v1/v2;
//             break;
//         default:
//             return;
//     }   
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
//       <div class="calculadora">
//         <input type="text"id="input"/> 
//        <div className="buttons">
//            <div className="operadores">
//                <button name="operador" id="suma">+</button>             
//                <button name="operador" id="resta">-</button>         
//                <button name="operador" id="por">x</button>    
//                <button name="operador" id="division">/</button>   
//            </div>
//            <div className="leftPanel">
//                <div className="numeros">
//                    <button name="numero">7</button>         
//                    <button name="numero">8</button>    
//                    <button name="numero">9</button> 
//                </div>

//                <div className="numeros">
//                    <button name="numero">4</button>         
//                    <button name="numero">5</button>    
//                    <button name="numero">6</button> 
//                </div>

//                <div className="numeros">
//                    <button name="numero">1</button>         
//                    <button name="numero">2</button>    
//                    <button name="numero">3</button> 
//                </div>

//                <div className="numeros">
//                    <button name="numero">0</button>         
//                    <button name="numero">.</button>    
//                    <button name="limpia">C</button> 
//                </div>  
//            </div>
//            <div  id="resultados" class="igual">=nosirve</div>
//            <button name="igual">=</button>
        
//        </div>
//    </div>
//     </body>
//   )
// export default calculadora