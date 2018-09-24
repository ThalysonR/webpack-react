import React from 'react';
import ReactDOM from 'react-dom';
// import './index.scss'
import Componente from './componente';
import ComponenteDois from './componentedois';

ReactDOM.render(
    <div>
        <Componente nome={'teste'}/><ComponenteDois nome={"componente dois"}/>
    </div>
    ,document.getElementById('app'));