import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from './counterActions';
import {withRouter} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';

type Props = {
    stepChanged: Function,
    dec: Function,
    inc: Function,
    incAsync: Function,
    counter: { step: number, number: number }
}
class Counter extends Component<Props> {
    render() {
        return (
            <div>
                <h1>{this.props.counter.number}</h1>
                <FormControl>
                    <Input type="number" onChange={this.props.stepChanged} value={this.props.counter.step}/>
                </FormControl>
                <Button variant={'outlined'} color="primary" onClick={this.props.dec}>Dec</Button>
                <Button variant={'outlined'} color="primary" onClick={this.props.inc}>Inc</Button>
                <Button variant={'outlined'} color="primary" onClick={this.props.incAsync}>Inc Async</Button>
                <div>
                    <Button onClick={() => this.props.history.push('/form')} variant={'outlined'} color={'secondary'}>
                        Form
                    </Button>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({counter: state.counter}),
    {...actions}
)(withRouter(Counter))