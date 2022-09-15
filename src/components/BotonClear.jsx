import React from "react";
// import '../Style/BotonClear.css'
import '.src/Style/BotonClear.css'

const BotonClear = (props) => (
    <div className='boton-clear' onClick={props.manejarClear}>
        {props.children}
    </div>
);
export default BotonClear;