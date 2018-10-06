import React from 'react';
import { connect } from 'react-redux';
import * as actions from './counterActions';
import { bindActionCreators } from 'redux';

const Counter = props => (
    <div>
        <h1>{props.counter.number}</h1>
        <input type="number" onChange={props.stepChanged} value={props.counter.step}/>
        <button onClick={props.dec}>Dec</button>
        <button onClick={props.inc}>Inc</button>
        <button onClick={props.incAsync}>Inc Async</button>
    </div>
);

const mapStateToProps = state =>  ({ counter: state.counter});
const mapDispatcherToProps  = dispatch => bindActionCreators({...actions}, dispatch);

export default connect(mapStateToProps, mapDispatcherToProps)(Counter);