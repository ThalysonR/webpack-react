import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from './counterActions';
import  Button from '@material-ui/core/Button';
import  Input from '@material-ui/core/Input';
import  FormControl from '@material-ui/core/FormControl';

type Props = {
    stepChanged: Function<void>,
    dec: Function<void>,
    inc: Function<void>,
    incAsync: Function<void>,
    counter: {step: number, number: number}
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
            </div>
        )
    }
}

export default connect(
    state => ({counter: state.counter}),
    { ...actions }
)(Counter)