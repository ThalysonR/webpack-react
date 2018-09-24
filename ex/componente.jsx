import React from 'react';
import Button from '@material-ui/core/Button';
// import './index.scss';

type Prop = {
    nome: string;
    idade?: string;
}

export default class Component extends React.Component<Prop> {
    render() {
        return(
            <div>
                <h1>Nome: {this.props.nome}</h1>
                <Button variant="contained" color="primary" >Teste</Button>
            </div>
        )
    }
}