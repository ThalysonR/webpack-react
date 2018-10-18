import React, { PureComponent, Fragment } from 'react';

const Loading = () => <div>Carregando...</div>;

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
    props.moduleProvider().then(mod => this.setState({ Component: mod.Component }));
  }

  render() {
    const { Component } = this.state;
    const { path } = this.props;

    return (
      <Fragment>
        {Component ? <Component path={path} /> : <Loading />}
      </Fragment>
    );
  }
}
