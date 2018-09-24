import React from 'react';
import './index.scss';

type Prop = {
    nome: string;
    idade?: string;
}

export default class Component extends React.Component<Prop> {
    render() {
        return(
            <h1 styleName="teste">Nome: {this.props.nome}</h1>
        )
    }
}