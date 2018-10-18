import React, { PureComponent } from 'react';

const Loading = () => <div>Carregando...</div>;

type Props = {
  moduleProvider: Promise,
  match?: any,
}
type State = {
  Component: any
}


export default class AsyncComponent extends PureComponent<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      Component: null,
    };
    props.moduleProvider().then(mod => this.setState({ Component: mod.Component }));
  }

  render() {
    const { Component } = this.state;
    const { match } = this.props;

    return (
      <div>
        {Component ? <Component match={match} /> : <Loading />}
      </div>
    );
  }
}

AsyncComponent.defaultProps = {
  match: null,
};
