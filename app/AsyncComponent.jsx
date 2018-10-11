import React, { PureComponent } from 'react';

const Loading = () => <div>Carregando...</div>;

type Props = {
  moduleProvider: Promise
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
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillMount() {
    if (!this.state.Component) {
      this.props.moduleProvider().then(mod => this.setState({ Component: mod.Component }));
    }
  }

  render() {
    const { Component } = this.state;

    return (
      <div>
        {Component ? <Component/> : <Loading/>}
      </div>
    );
  }
}
