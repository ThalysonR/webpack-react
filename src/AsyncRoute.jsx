import React, { PureComponent, Fragment } from 'react';

const Loading = () => <div>Carregando...</div>;
const Erro = () => <div>Erro no carregamento</div>;

type Props = {
  moduleProvider: Promise,
  path: string,
}
type State = {
  Component: any
}
export default class AsyncRoute extends PureComponent<Props, State> {
  state = {
    Component: null,
  };

  constructor(props) {
    super(props);
    props.moduleProvider()
      .then(mod => this.setState({ Component: mod.Component }))
      .catch(() => this.setState({ Component: Erro }));
  }

  render() {
    const { Component } = this.state;
    const { path } = this.props;

    return (
      <Fragment key="raiz">
        {Component ? <Component path={path} teste="componente-ativo" /> : <Loading teste="componente-ativo" />}
      </Fragment>
    );
  }
}
