import React from 'react';
// import './index.scss';

type Prop = {
    nome: string;
    idade?: string;
}

export default class ComponentDois extends React.Component<Prop> {
    render() {
        return(
            <h1 className={'teste'}>Nome: {this.props.nome}</h1>
        )
    }
}